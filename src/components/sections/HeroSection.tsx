import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Image overlaid via CSS or absolute img */}
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          WELLNESS. FITNESS. LIFESTYLE. HEALTH
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;