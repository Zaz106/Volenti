import React from "react";
import styles from "./PackagesHero.module.css";

const PackagesHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <img
        src="/Packages-section-bg.png"
        alt="Monthly Packages"
        className={styles.image}
      />
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>MONTHLY PACKAGES</h1>
    </section>
  );
};

export default PackagesHero;
