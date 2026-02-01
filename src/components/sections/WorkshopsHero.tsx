import React from 'react';
import styles from './WorkshopsHero.module.css';

const WorkshopsHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <img 
        src="/Workshops - bg.png" 
        alt="Wellness Workshops Group" 
        className={styles.image}
      />
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>WELLNESS WORKSHOPS</h1>
    </section>
  );
};

export default WorkshopsHero;
