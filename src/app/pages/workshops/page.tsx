import React from "react";
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
