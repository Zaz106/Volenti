"use client";

import React from 'react';
import styles from './WorkshopsIntro.module.css';

const WorkshopsIntro: React.FC = () => {
  const scrollToPackages = () => {
    // Scroll to packages section if it exists, or contact form for now
    const element = document.getElementById('contact-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>ABOUT OUR WELLNESS WORKSHOPS</h2>
      <p className={styles.text}>
        Our workshops are designed to improve employee wellbeing, reduce sick days, enhance
        workplace performance, and create sustainable personal health systems. Through guided
        education and practical application, participants will leave with actionable strategies they
        can implement immediately.
      </p>
      
      <div className={styles.buttonContainer}>
        <button onClick={scrollToPackages} className={styles.button}>
          VIEW PACKAGES
        </button>
      </div>
    </section>
  );
};

export default WorkshopsIntro;
