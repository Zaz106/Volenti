import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Wellness Workshops",
  description:
    "Volenti's corporate wellness workshops improve employee wellbeing, reduce absenteeism, and boost workplace performance in South Africa.",
  openGraph: {
    title: "Wellness Workshops | Volenti",
    description:
      "Corporate wellness workshops that improve employee wellbeing, reduce absenteeism, and create sustainable personal health systems.",
    url: "https://www.volenti.co.za/pages/workshops",
    images: [{ url: "/og-workshops.png", width: 1200, height: 630, alt: "Volenti Wellness Workshops" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Workshops | Volenti",
    description:
      "Corporate wellness workshops that improve employee wellbeing, reduce absenteeism, and create sustainable personal health systems.",
    images: ["/og-workshops.png"],
  },
  alternates: {
    canonical: "https://www.volenti.co.za/pages/workshops",
  },
};
import Navbar from "../../../components/layout/Navbar";
import WorkshopsHero from "../../../components/sections/Work Shop/WorkshopsHero";
import WorkshopsIntro from "../../../components/sections/Work Shop/WorkshopsIntro";
import WorkshopsStats from "../../../components/sections/Work Shop/WorkshopsStats";
import WorkshopsROI from "../../../components/sections/Work Shop/WorkshopsROI";
import WorkshopPricing from "../../../components/sections/Work Shop/WorkshopPricing";
import NewsletterSection from "../../../components/layout/NewsletterSection";
import Footer from "../../../components/layout/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.volenti.co.za/pages/workshops#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.volenti.co.za/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Wellness Workshops",
          "item": "https://www.volenti.co.za/pages/workshops",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.volenti.co.za/pages/workshops#webpage",
      "url": "https://www.volenti.co.za/pages/workshops",
      "name": "Wellness Workshops | Volenti",
      "description":
        "Corporate wellness workshops that improve employee wellbeing, reduce absenteeism, and create sustainable personal health systems.",
      "isPartOf": { "@id": "https://www.volenti.co.za/#website" },
      "breadcrumb": { "@id": "https://www.volenti.co.za/pages/workshops#breadcrumb" },
      "dateModified": "2026-04-26",
    },
  ],
};

export default function WorkshopsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <WorkshopsHero />
      <WorkshopsIntro />
      <WorkshopsStats />
      <WorkshopsROI />
      <WorkshopPricing />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
