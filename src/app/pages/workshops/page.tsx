import React from "react";
import Navbar from "../../../components/layout/Navbar";
import WorkshopsHero from "../../../components/sections/Work Shop/WorkshopsHero";
import WorkshopsIntro from "../../../components/sections/Work Shop/WorkshopsIntro";
import WorkshopsStats from "../../../components/sections/Work Shop/WorkshopsStats";
import Footer from "../../../components/layout/Footer";

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
