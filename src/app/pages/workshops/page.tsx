import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Wellness Workshops",
  description:
    "Volenti's corporate wellness workshops improve employee wellbeing, reduce sick days, and boost workplace performance through guided education and practical application.",
  openGraph: {
    title: "Wellness Workshops | Volenti",
    description:
      "Corporate wellness workshops that improve employee wellbeing, reduce absenteeism, and create sustainable personal health systems.",
    url: "https://www.volenti.co.za/pages/workshops",
    images: [{ url: "/og-workshops.png", width: 1200, height: 630, alt: "Volenti Wellness Workshops" }],
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

export default function WorkshopsPage() {
  return (
    <main>
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
