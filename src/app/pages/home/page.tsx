import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import HeroSection from '../../../components/sections/HeroSection';
import MottoSection from '../../../components/sections/MottoSection';
import MessageSection from '../../../components/sections/MessageSection';
import PrioritySection from '../../../components/sections/PrioritySection';
import WhatWeDo from '../../../components/sections/WhatWeDo';
import LetsGrowSection from '../../../components/sections/LetsGrowSection';
import NewsletterSection from '../../../components/sections/NewsletterSection';
import Footer from '../../../components/layout/Footer';

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


