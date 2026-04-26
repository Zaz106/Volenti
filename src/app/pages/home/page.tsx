import React from "react";
import Navbar from "../../../components/layout/Navbar";
import HeroSection from "../../../components/sections/Home Page/HeroSection";
import MottoSection from "../../../components/sections/Home Page/MottoSection";
import MessageSection from "../../../components/sections/Home Page/MessageSection";
import PrioritySection from "../../../components/sections/Home Page/PrioritySection";
import WhatWeDo from "../../../components/sections/Home Page/WhatWeDo";
import LetsGrowSection from "../../../components/sections/Home Page/LetsGrowSection";
import NewsletterSection from "../../../components/layout/NewsletterSection";
import Footer from "../../../components/layout/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.volenti.co.za/#business",
      "name": "Volenti",
      "url": "https://www.volenti.co.za",
      "logo": "https://www.volenti.co.za/Volenti%20logo.svg",
      "email": "Leo@volenti.co.za",
      "telephone": "+27693134060",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ZA",
      },
      "sameAs": ["https://www.instagram.com/volenti_fitness"],
      "description":
        "Science-backed personal training, sports conditioning, and corporate wellness workshops in South Africa.",
      "priceRange": "R1900–R4000/month",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.volenti.co.za/#website",
      "url": "https://www.volenti.co.za",
      "name": "Volenti",
      "publisher": { "@id": "https://www.volenti.co.za/#business" },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.volenti.co.za/#webpage",
      "url": "https://www.volenti.co.za/",
      "name": "Volenti | Wellness, Fitness & Lifestyle Coaching",
      "description":
        "Science-backed personal training, sports conditioning, and corporate wellness workshops in South Africa. Start your journey to sustainable health.",
      "isPartOf": { "@id": "https://www.volenti.co.za/#website" },
      "dateModified": "2026-04-26",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <HeroSection />
      <MottoSection />
      <MessageSection />
      <PrioritySection />
      <WhatWeDo />
      <LetsGrowSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
