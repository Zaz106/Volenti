import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Training Packages",
  description:
    "Explore Volenti's personalised training packages — General Fitness, Sports Conditioning, and Occupational Conditioning programs tailored to your goals.",
  openGraph: {
    title: "Training Packages | Volenti",
    description:
      "Personalised General Fitness, Sports Conditioning, and Occupational Conditioning packages for individuals and professionals.",
    url: "https://www.volenti.co.za/pages/packages",
    images: [{ url: "/og-packages.png", width: 1200, height: 630, alt: "Volenti Training Packages" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Packages | Volenti",
    description:
      "Personalised General Fitness, Sports Conditioning, and Occupational Conditioning packages for individuals and professionals.",
    images: ["/og-packages.png"],
  },
  alternates: {
    canonical: "https://www.volenti.co.za/pages/packages",
  },
};
import Navbar from "../../../components/layout/Navbar";
import PackagesHero from "../../../components/sections/Packages/PackagesHero";
import PackageTierSection from "../../../components/sections/Packages/PackageTierSection";
import NewsletterSection from "../../../components/layout/NewsletterSection";
import Footer from "../../../components/layout/Footer";

const directPersonalTrainingCards = [
  {
    tier: "Direct 1",
    price: "£40 per session\n£40 per week\n£160 per month",
    priceAlt: "",
    points: [
      "One on One",
      "1 x 45 minute session a week / 4 a month",
    ],
  },
  {
    tier: "Direct 2",
    price: "£35 per session\n£70 per week\n£280 per month",
    priceAlt: "",
    points: [
      "One on One",
      "2 x 45 minute session a week / 8 a month",
    ],
  },
  {
    tier: "Direct 3",
    price: "£30 per session\n£90 per week\n£360 per month",
    priceAlt: "",
    points: [
      "One on One",
      "3 x 45 minute session a week / 12 a month",
    ],
  },
];

const generalFitnessCards = [
  {
    tier: "Foundation",
    price: "£99 Per Month",
    priceAlt: "",
    points: [
      "Personalised monthly programme",
      "Movement analysis",
      "Progress tracker",
      "Calorie/protein targets within scope",
      "24h response window.",
    ],
    bestFor:
      "Someone who needs structure, a plan, and basic accountability.",
  },
  {
    tier: "Progress",
    price: "£149 Per Month",
    priceAlt: "",
    includes: "Everything in foundation, plus:",
    points: [
      "Bi-weekly check-in",
      "Video form reviews",
      "Progress-based adjustments",
      "8h response window.",
    ],
    bestFor:
      "Someone serious about body composition, consistency, and form correction.",
  },
  {
    tier: "Complete",
    price: "£219 Per Month",
    priceAlt: "",
    includes: "Everything in progress, plus:",
    points: [
      "Weekly check-in,",
      "Sleep/stress/recovery systems",
      "Dining-out/travel protocols",
      "Habit framework",
      "Priority response.",
    ],
    bestFor:
      "Someone who wants weekly accountability and lifestyle structure.",
  },
];

const sportsConditioningCards = [
  {
    tier: "Athlete Foundation",
    price: "£169 Per Month",
    priceAlt: "",
    points: [
      "Movement analysis",
      "Pre/post-match protocols",
      "Strategy meeting",
      "Load awareness framework",
      "8h response window.",
    ],
    bestFor:
      "Youth, amateur, or developing athletes needing structure and load awareness.",
  },
  {
    tier: "Competitive Athlete",
    price: "£249 Per Month",
    priceAlt: "",
    points: [
      "Bi-monthly strategy reviews",
      "Micro-cycle adjustments",
      "In-season load redistribution",
      "Priority adjustment support.",
    ],
    bestFor:
      "Athletes in-season or preparing for trials, tournaments, or selection.",
  },
  {
    tier: "High Performance",
    price: "£329 Per Month",
    priceAlt: "",
    points: [
      "Weekly conditioning strategy review,",
      "Competition-readiness planning",
      "Warm-up/recovery protocols",
      "Game-week load adjustment",
      "Priority response.",
    ],
    bestFor:
      "Athletes needing weekly oversight, competition protocols, and rapid programming changes.",
  },
];

const occupationalConditioningCards = [
  {
    tier: "Operational Foundation",
    price: "£179 Per Month",
    priceAlt: "",
    points: [
      "Role-specific movement/load assessment",
      "Monthly programme",
      "Posture and injury-risk reduction protocols",
      "CNS fatigue guide",
      "Monthly readiness call.",
    ],
    bestFor:
      "Professionals with physically demanding work who need durability and structure.",
  },
  {
    tier: "Operational Performance",
    price: "£259 Per Month",
    priceAlt: "",
    points: [
      "Bi-weekly operational review",
      "Shift-pattern fatigue management",
      "Load-carriage conditioning",
      "Grip/rotation strength,",
      "Conditioning under elevated heart rate.",
    ],
    bestFor:
      "Shift workers, responders, security, trades, and high-output professionals.",
  },
  {
    tier: "Operational Elite",
    price: "£349 Per Month",
    priceAlt: "",
    points: [
      "Weekly operational performance review",
      "Fatigue management,",
      "Nervous-system recovery strategies",
      "Work-demand conditioning, and priority response.",
    ],
    bestFor:
      "High-demand professionals needing physical resilience, fatigue management, and readiness tracking.",
  },
];

export default function PackagesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.volenti.co.za/pages/packages#breadcrumb",
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
            "name": "Training Packages",
            "item": "https://www.volenti.co.za/pages/packages",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.volenti.co.za/pages/packages#webpage",
        "url": "https://www.volenti.co.za/pages/packages",
        "name": "Training Packages | Volenti",
        "description":
          "Personalised General Fitness, Sports Conditioning, and Occupational Conditioning packages for individuals and professionals.",
        "isPartOf": { "@id": "https://www.volenti.co.za/#website" },
        "breadcrumb": { "@id": "https://www.volenti.co.za/pages/packages#breadcrumb" },
        "dateModified": "2026-04-26",
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <PackagesHero />

      <PackageTierSection
        heading="Direct Personal Training Sessions"
        description="Designed clients an easy entry point to sessions before they compare the online coaching packages."
        cards={directPersonalTrainingCards}
        variant="accent"
      />

      <PackageTierSection
        heading="General Fitness Programs"
        description="General Fitness Programs are designed to build a strong, balanced foundation — improving strength, endurance, mobility, and overall wellbeing."
        cards={generalFitnessCards}
        variant="light"
      />

      <PackageTierSection
        heading="Sports Conditioning"
        description="Our Sports Conditioning programs are designed to keep you competitive and push your limits. Through one-on-one training, we focus on strength, speed, agility, and endurance to help you reach peak performance in your sport."
        cards={sportsConditioningCards}
        variant="dark"
      />

      <PackageTierSection
        heading="Occupational Conditioning"
        description="Our Occupational Conditioning programs are tailored for professionals whose careers require focus or physical endurance."
        descriptionSecondary="If your work demands strength, stamina, and resilience, these packages are designed to help you perform at your best every day."
        cards={occupationalConditioningCards}
        variant="light"
      />

      <NewsletterSection />
      <Footer />
    </main>
  );
}
