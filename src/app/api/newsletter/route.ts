import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Rate Limiter ─────────────────────────────────────────────────────────────
// Max 3 submissions per IP per 10 minutes
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const ipHitMap = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    ipHitMap.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  return false;
}

function pruneRateLimitMap() {
  const now = Date.now();
  for (const [ip, entry] of ipHitMap.entries()) {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
      ipHitMap.delete(ip);
    }
  }
}

// ─── Email validation ─────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeEmail(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().replace(/<[^>]*>/g, "").replace(/[<>]/g, "");
}

// ─── Template helpers ─────────────────────────────────────────────────────────
const templatesDir = path.join(process.cwd(), "src", "emails");

function loadTemplate(filename: string): string {
  return fs.readFileSync(path.join(templatesDir, filename), "utf8");
}

// Supports both {{ key }} and {{key}} syntax
function injectValues(template: string, values: Record<string, string>): string {
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => values[key] ?? "");
}

// ─── Route Handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // ── Rate limiting ──
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  pruneRateLimitMap();

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes before trying again." },
      { status: 429 }
    );
  }

  // ── Origin check ──
  const origin = req.headers.get("origin") || req.headers.get("referer");
  const host = req.headers.get("host");

  if (!origin || (host && !origin.includes(host))) {
    return NextResponse.json({ error: "Unauthorized origin." }, { status: 403 });
  }

  // ── Parse body ──
  let raw: Record<string, unknown>;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // ── Honeypot ──
  if (raw.hp_field) {
    return NextResponse.json({ error: "Bot detected." }, { status: 400 });
  }

  // ── Time-based bot detection ──
  const { loadTimestamp } = raw as { loadTimestamp?: number };
  if (!loadTimestamp || Date.now() - loadTimestamp < 3000) {
    return NextResponse.json(
      { error: "Submission too fast. Please wait a few seconds." },
      { status: 400 }
    );
  }

  // ── Email validation ──
  const email = sanitizeEmail(raw.email);

  if (!email) {
    return NextResponse.json({ error: "Email address is required." }, { status: 400 });
  }
  if (email.length > 254) {
    return NextResponse.json({ error: "Email address is too long." }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // ── Build template values ──
  const now = new Date();

  const submissionDate = now.toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Africa/Johannesburg",
  });

  const submissionTime = now.toLocaleTimeString("en-ZA", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Johannesburg",
    timeZoneName: "short",
  });

  const values: Record<string, string> = {
    subscriber_email: email,
    submission_date: submissionDate,
    submission_time: submissionTime,
  };

  // ── Send emails ──
  try {
    const from = process.env.FROM_EMAIL ?? "Volenti <onboarding@resend.dev>";
    const businessEmail = process.env.BUSINESS_EMAIL ?? "";

    const subscriberHtml = injectValues(
      loadTemplate("newsletter-subscription.html"),
      values
    );
    const adminHtml = injectValues(
      loadTemplate("newsletter-admin-notification.html"),
      values
    );

    const [subscriberResult, adminResult] = await Promise.all([
      resend.emails.send({
        from,
        to: [email],
        subject: "Welcome to Volenti – You're In!",
        html: subscriberHtml,
      }),
      resend.emails.send({
        from,
        to: [businessEmail],
        subject: `New Newsletter Subscriber – ${email}`,
        html: adminHtml,
      }),
    ]);

    if (subscriberResult.error || adminResult.error) {
      console.error(
        "Resend newsletter error:",
        subscriberResult.error ?? adminResult.error
      );
      return NextResponse.json(
        { error: "Failed to send confirmation. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Newsletter route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
