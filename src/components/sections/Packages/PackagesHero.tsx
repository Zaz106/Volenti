import React from "react";
import Image from "next/image";
import styles from "./PackagesHero.module.css";

const PackagesHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/Packages-section-bg.webp"
        alt="Volenti personalised monthly training packages"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className={styles.image}
      />
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>MONTHLY PACKAGES</h1>
    </section>
  );
};

export default PackagesHero;
