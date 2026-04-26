import React from "react";
import styles from "./LetsGrowSection.module.css";

const LetsGrowSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Let's Grow <span className={styles.highlight}>Together</span>
        </h2>

        <p className={styles.text}>
          Every meaningful result starts with a decision to begin. Whether you&apos;re pursuing
          personal fitness, competitive performance, or team-wide wellbeing — the right support
          makes all the difference. Reach out and let&apos;s build something that lasts.
        </p>

        <a href="#contact-us" className={styles.button}>
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default LetsGrowSection;
