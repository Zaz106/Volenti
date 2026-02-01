import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import WorkshopsHero from '../../../components/sections/WorkshopsHero';
import WorkshopsIntro from '../../../components/sections/WorkshopsIntro';
import WorkshopsStats from '../../../components/sections/WorkshopsStats';
import Footer from '../../../components/layout/Footer';

export default function WorkshopsPage() {
  return (
    <main>
      <Navbar />
      <WorkshopsHero />
      <WorkshopsIntro />
      <WorkshopsStats />
      <Footer />
    </main>
  );
}
