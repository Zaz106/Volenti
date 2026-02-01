import React from 'react';
import styles from './MottoSection.module.css';

const MottoSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>THE WILLING WILL THRIVE</h2>
        
        <p className={styles.text}>
          Volenti comes from the Latin for "to be willing," and it reflects the mindset I ask of myself,
          my staff and my clients. It's about being willing to learn, to change, to take ownership of
          your well-being, and to pursue excellence before shortcuts. Volenti is more than a
          business – it's a mission to guide people toward sustainable health and resilience. Every
          programme, workshop and coaching conversation is built to empower individuals to
          become the best, most balanced version of themselves.
        </p>

        <a href="#weight-loss-challenge" className={styles.button}>
          Weight Loss Challenge
        </a>
      </div>
    </section>
  );
};

export default MottoSection;
