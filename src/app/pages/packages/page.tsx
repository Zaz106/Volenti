import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Training Packages",
  description:
    "Explore Volenti's personalised training packages — General Fitness, Sports Conditioning, and Occupational Conditioning programs tailored to your goals and lifestyle.",
  openGraph: {
    title: "Training Packages | Volenti",
    description:
      "Personalised General Fitness, Sports Conditioning, and Occupational Conditioning packages for individuals and professionals.",
    url: "https://www.volenti.co.za/pages/packages",
    images: [{ url: "/og-packages.png", width: 1200, height: 630, alt: "Volenti Training Packages" }],
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

const generalFitnessCards = [
  {
    tier: "Tier 1",
    price: "$120 / R 1900 p/m",
    priceAlt: "",
    points: [
      "Personalised monthly training program with progression",
      "Movement pattern & imbalance analysis",
      "Pre- & post-health preparation protocols",
      "1 program adjustment per month",
      "Training log & progress tracker",
      "Basic nutrition structure (calorie & protein targets)",
      "24h response window",
    ],
    bestFor:
      "People who want clear direction and accountability without high-touch coaching.",
  },
  {
    tier: "Tier 2",
    price: "$180 / R 2900 p/m",
    priceAlt: "",
    includes: "Everything in Tier 1, plus:",
    points: [
      "Bi-weekly check-in",
      "Form reviews via video submissions",
      "Monthly program adjustments based on progress",
      "Basic conditioning protocols (fat loss / muscle gain specific)",
      "8h response window",
    ],
    bestFor:
      "Clients who are serious about visible body composition change.",
  },
  {
    tier: "Tier 3",
    price: "$250 / R 4000 p/m",
    priceAlt: "",
    includes: "Everything in Tier 1 & 2, plus:",
    points: [
      "Weekly check-in & accountability call",
      "Full lifestyle adherence (sleep, stress, recovery systems)",
      "Injury rehab integration",
      "Dining out & travel protocols",
      "Behavioural framework for habit change",
      "3h priority response window",
    ],
    bestFor:
      "Clients who want structural change beyond just a training plan.",
  },
];

const sportsConditioningCards = [
  {
    tier: "Tier 1",
    price: "$200 / R 3200 p/m",
    priceAlt: "",
    points: [
      "Individualised monthly program with progression",
      "Movement pattern & imbalance analysis",
      "Pre- & post-match preparation protocols",
      "GPS & IMU load management framework",
      "1 Monthly conditioning strategy meeting",
      "8h response window",
    ],
    bestFor:
      "Athletes who want structure, oversight, and performance direction.",
  },
  {
    tier: "Tier 2",
    price: "$300 / R 4800 p/m",
    priceAlt: "",
    includes: "Everything in Tier 1, plus:",
    points: [
      "Bi-monthly conditioning strategy meetings",
      "Advanced micro-cycle adjustments",
      "In-season load redistribution",
      "8h response window",
    ],
    bestFor:
      "Competitive athletes with ongoing nutrition to tournament cycles.",
  },
  {
    tier: "Tier 3",
    price: "$400 / R 6400 p/m",
    priceAlt: "",
    includes: "Everything in Tier 1 & 2, plus:",
    points: [
      "Weekly conditioning strategy meetings",
      "Real-time performance adjustments",
      "Game-priority response window",
      "1 Monthly session with performance psychologist",
      "Periodisation frameworks + competition protocols",
    ],
    bestFor:
      "High performance athletes preparing for competition or selection.",
  },
];

const occupationalConditioningCards = [
  {
    tier: "Tier 1",
    price: "$220 / R 3500 p/m",
    priceAlt: "",
    points: [
      "Role-specific movement & load assessment",
      "Monthly strength & conditioning program",
      "Postural alignment & injury prevention protocols",
      "Endurance recovery strategies",
      "CNS fatigue awareness guide",
      "Monthly operational readiness call",
      "12h response window",
    ],
    bestFor:
      "Professionals who need consistent physical strength while working.",
  },
  {
    tier: "Tier 3",
    price: "$250 / R 4000 p/m",
    priceAlt: "",
    includes: "Everything in Tier 1 & 2, plus:",
    points: [
      "Weekly operational performance meeting",
      "Stress inoculation conditioning protocols",
      "Advanced recovery & nervous system regulation",
      "Cognitive performance under fatigue protocols",
      "1 monthly consult with performance psychologist",
      "Priority 1-2h response window (business hours)",
    ],
    bestFor:
      "Professionals that can't afford distraction under high fatigue decision making.",
  },
    {
    tier: "Tier 2",
    price: "$320 / R 5100 p/m",
    priceAlt: "",
    includes: "Everything in Tier 1, plus:",
    points: [
      "Bi-weekly operational review",
      "Fatigue management integrated with shift patterns",
      "Load carriage & equipment-specific conditioning",
      "Grip strength & rotational force development",
      "Conditioning under elevated heart rate",
      "8h response window",
    ],
    bestFor:
      "Professionals that have high physical demands in their careers.",
  }
];

export default function PackagesPage() {
  return (
    <main>
      <Navbar />
      <PackagesHero />

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
