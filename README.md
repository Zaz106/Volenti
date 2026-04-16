# Volenti — Website

Marketing and information website for **Volenti**, a wellness, fitness, and lifestyle coaching brand based in South Africa.
![alt text](image.png)

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS custom properties
- **Fonts:** Montserrat & Open Sans via `next/font/google` (self-hosted, no render-blocking requests)
- **Email:** Resend API
- **Deployment:** Vercel

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, motto, coach message, what we do, CTA, newsletter |
| `/pages/workshops` | Wellness workshops — overview, stats, ROI, pricing & PDF download |
| `/pages/packages` | Monthly training packages — General Fitness, Sports Conditioning, Occupational Conditioning |
| `/pages/legal` | Privacy Policy & Terms and Conditions |

## Key Features

- Responsive across all breakpoints (360px → 1600px+)
- Newsletter signup — sends confirmation email to subscriber and notification to admin via Resend
- Rate limiting, honeypot, and bot detection on all API routes
- Security headers (CSP, HSTS, X-Frame-Options, COOP) in `next.config.ts`
- Full SEO setup — per-page metadata, Open Graph, canonical URLs, sitemap, robots.txt
- Workshop pricing PDF available for direct download from `/public/assests/`

## Environment Variables

Create a `.env.local` file with:

```
RESEND_API_KEY=
BUSINESS_EMAIL=
FROM_EMAIL=
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
