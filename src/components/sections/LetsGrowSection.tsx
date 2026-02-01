import React from 'react';
import styles from './LetsGrowSection.module.css';

const LetsGrowSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundText}>Volenti</div>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Let's Grow <span className={styles.highlight}>Together</span>
        </h2>
        
        <p className={styles.text}>
          Volenti comes from the Latin for "to be willing," and it reflects the mindset I ask of myself,
          my staff and my clients. It's about being willing to learn, to change, to take ownership of
          your well-being, and to pursue excellence before shortcuts.
        </p>

        <a href="#contact-us" className={styles.button}>
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default LetsGrowSection;
