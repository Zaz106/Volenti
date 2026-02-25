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

export default function Home() {
  return (
    <main>
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
