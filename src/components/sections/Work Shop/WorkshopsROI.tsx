"use client";

import React from "react";
import styles from "./WorkshopsROI.module.css";
import CountUp from "../../ui/CountUp";

const WorkshopsROI: React.FC = () => {
  const cards = [
    {
      value: 25,
      delay: 0,
      subtitle: "Healthcare ROI",
      text: "The amount effective healthcare programmes have been known to cut absenteeism by",
    },
    {
      value: 72,
      delay: 0.35,
      subtitle: "Reduced Healthcare Costs",
      text: "Companies reported lower healthcare costs when investing in employee health",
    },
    {
      value: 69,
      delay: 0.7,
      subtitle: "Improved employee retention",
      text: "HR managers report improved employee retention with healthcare initiatives",
    },
    {
      value: 87,
      delay: 0.95,
      subtitle: "Of employees",
      text: "Value healthcare initiatives offered by a company when selecting an employer",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Your return on
            <br />
            investment is our <span className={styles.highlight}>focus</span>
          </h2>
          <p className={styles.intro}>
            Your return on investment is a cornerstone of what we do. We&apos;ve
            taken the time to invest in understanding what really matters and our
            goal is to ensure that your company can access the greatest value
            from that commitment.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>
                <span className={styles.percentage}>
                  <CountUp from={0} to={card.value} duration={1.5} delay={card.delay} />
                  <span>%</span>
                </span>
              </div>
              <h3 className={styles.cardTitle}>{card.subtitle}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsROI;
