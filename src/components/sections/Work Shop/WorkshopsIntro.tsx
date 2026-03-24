import React from 'react';
import styles from './WorkshopsIntro.module.css';

const WorkshopsIntro: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        About Our Wellness<br />Workshops
      </h2>
      
      <p className={styles.text}>
        Our workshops are designed to improve employee wellbeing, reduce sick days, enhance
        workplace performance, and create sustainable personal health systems. Through guided
        education and practical application, participants will leave with actionable strategies they
        can implement immediately.
      </p>

      <div className={styles.buttonGroup}>
        <a href="#pricing" className={styles.button}>
          View Pricing
        </a>
      </div>
    </section>
  );
};

export default WorkshopsIntro;
