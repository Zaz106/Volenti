import React from "react";
import Image from "next/image";
import styles from "./WorkshopsHero.module.css";

const WorkshopsHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/Wellness-section-bg.png"
        alt="Group participating in a Volenti wellness workshop"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className={styles.image}
      />
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>WELLNESS WORKSHOPS</h1>
    </section>
  );
};

export default WorkshopsHero;
