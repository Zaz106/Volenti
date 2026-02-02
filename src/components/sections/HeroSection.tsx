import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className={styles.backgroundVideo}
      >
        <source src="/Greyscale_Gym_Walkthrough_Video_Generated.mp4" type="video/mp4" />
      </video>
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