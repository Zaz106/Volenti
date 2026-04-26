import type { Metadata } from "next";
export { default } from "./pages/home/page";

export const metadata: Metadata = {
  title: "Volenti | Wellness, Fitness & Lifestyle Coaching",
  description:
    "Science-backed personal training, sports conditioning, and corporate wellness workshops in South Africa. Start your journey to sustainable health.",
  verification: {
    google: "mGYcvskSSzV4snr4CGR7Mt_QjxB3yX2sPedW57QTDdI",
  },
  openGraph: {
    title: "Volenti | Wellness, Fitness & Lifestyle Coaching",
    description:
      "Science-backed personal training, sports conditioning, and workplace wellness workshops in South Africa.",
    url: "https://www.volenti.co.za/",
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "Volenti – Wellness, Fitness & Lifestyle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volenti | Wellness, Fitness & Lifestyle Coaching",
    description:
      "Science-backed personal training, sports conditioning, and workplace wellness workshops in South Africa.",
    images: ["/og-home.png"],
  },
  alternates: {
    canonical: "https://www.volenti.co.za/",
  },
};
