import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Rate Limiter ─────────────────────────────────────────────────────────────
// Max 3 submissions per IP per 10 minutes
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

const ipHitMap = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    // Start a fresh window
    ipHitMap.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

// Occasionally clean up stale entries to prevent memory leaks
function pruneRateLimitMap() {
  const now = Date.now();
  for (const [ip, entry] of ipHitMap.entries()) {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
      ipHitMap.delete(ip);
    }
  }
}

// ─── Sanitization ─────────────────────────────────────────────────────────────
const FIELD_MAX_LENGTHS: Record<string, number> = {
  firstName: 30,
  lastName: 30,
  province: 80,
  phone: 30,
  email: 254, // RFC 5321 max
  enquiryType: 20,
  message: 2000,
};

const ALLOWED_ENQUIRY_TYPES = new Set(["General", "Quote", "Hosting", "Other"]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strip HTML/script tags and trim
function sanitizeString(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .trim()
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/[<>]/g, "");   // strip any stray angle brackets
}

function validateName(name: string): string | null {
  // Must contain letters
  if (!/[a-zA-Z]/.test(name)) return "Name must contain letters.";
  // No numbers
  if (/\d/.test(name)) return "Name cannot contain numbers.";
  // Must contain vowels
  if (!/[aeiouyAEIOUY]/.test(name)) return "Name must contain at least one vowel (a, e, i, o, u, y).";
  // No more than 3 consecutive uppercase letters
  if (/[A-Z]{4,}/.test(name)) return "Name contains too many consecutive uppercase letters.";
  
  return null;
}

function sanitizeFields(raw: Record<string, unknown>): {
  data: Record<string, string> | null;
  error: string | null;
} {
  // Honeypot check
  if (raw.hp_field) {
    return { data: null, error: "Bot detected (honeypot)." };
  }

  const fields = ["firstName", "lastName", "province", "phone", "email", "enquiryType", "message"];
  const sanitized: Record<string, string> = {};

  for (const field of fields) {
    const cleaned = sanitizeString(raw[field]);

    // Required fields
    if (!cleaned && ["firstName", "email", "message", "enquiryType"].includes(field)) {
      return { data: null, error: `Missing required field: ${field}` };
    }

    // Name validation
    if (["firstName", "lastName"].includes(field) && cleaned) {
      const nameError = validateName(cleaned);
      if (nameError) return { data: null, error: nameError };
    }

    // Length cap
    const maxLen = FIELD_MAX_LENGTHS[field];
    if (cleaned.length > maxLen) {
      return { data: null, error: `Field "${field}" exceeds maximum length of ${maxLen} characters.` };
    }

    sanitized[field] = cleaned;
  }

  // Email format validation
  if (!EMAIL_REGEX.test(sanitized.email)) {
    return { data: null, error: "Invalid email address format." };
  }

  // Enquiry type allow-list (only if provided)
  if (sanitized.enquiryType && !ALLOWED_ENQUIRY_TYPES.has(sanitized.enquiryType)) {
    return { data: null, error: "Invalid enquiry type." };
  }

  return { data: sanitized, error: null };
}

// ─── Template helpers ─────────────────────────────────────────────────────────
const templatesDir = path.join(process.cwd(), "emails");

function loadTemplate(filename: string): string {
  return fs.readFileSync(path.join(templatesDir, filename), "utf8");
}

function injectValues(template: string, values: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] ?? "");
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

  let raw: Record<string, unknown>;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // ── Time-based detection ──
  const { loadTimestamp } = raw as { loadTimestamp?: number };
  if (!loadTimestamp || Date.now() - loadTimestamp < 3000) {
    return NextResponse.json({ error: "Submission too fast. Please wait a few seconds." }, { status: 400 });
  }

  const { data, error } = sanitizeFields(raw);
  if (error || !data) {
    return NextResponse.json({ error }, { status: 400 });
  }

  // ── Send emails ──
  try {
    const from = process.env.FROM_EMAIL ?? "Six Foot Design Co <onboarding@resend.dev>";
    const businessEmail = process.env.BUSINESS_EMAIL ?? "joshua.huisman06@gmail.com";

    const submissionHtml = injectValues(loadTemplate("email-submission.html"), data);
    const enquiryHtml = loadTemplate("email-enquiry-with-cta.html");

    const [submissionResult, enquiryResult] = await Promise.all([
      resend.emails.send({
        from,
        to: [businessEmail],
        subject: `New Enquiry from ${data.firstName} ${data.lastName}`,
        html: submissionHtml,
      }),
      resend.emails.send({
        from,
        to: [data.email],
        subject: "Thank You for Your Enquiry | Six Foot Design Co",
        html: enquiryHtml,
      }),
    ]);

    if (submissionResult.error || enquiryResult.error) {
      console.error("Resend error:", submissionResult.error ?? enquiryResult.error);
      return NextResponse.json(
        { error: "Failed to send one or more emails. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Send enquiry error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
