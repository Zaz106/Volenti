import React from "react";
import styles from "./WorkshopPricing.module.css";

interface WorkshopOption {
  name: string;
  duration: string;
  pricePerPerson: string;
  priceGroup: string;
  deposit: string;
  parts: { name: string; duration: string }[];
}

const WorkshopPricing: React.FC = () => {
  const options: WorkshopOption[] = [
    {
      name: "OPTION A",
      duration: "2.5 HOURS",
      pricePerPerson: "R 399.00 PER PERSON",
      priceGroup: "R 11970.00 FOR 30 PEOPLE",
      deposit: "R 4189.00",
      parts: [
        { name: "Part 1: Intro & Theory", duration: "45 minutes" },
        { name: "Part 2: Hands on workshop", duration: "75 minutes" },
        { name: "Part 3: Team facilitation/Support", duration: "30 minutes" },
      ],
    },
    {
      name: "OPTION B",
      duration: "3.5 HOURS",
      pricePerPerson: "R 499.00 PER PERSON",
      priceGroup: "R 14970.00 FOR 30 PEOPLE",
      deposit: "R 5235.50",
      parts: [
        { name: "Part 1: Intro & Theory", duration: "60 minutes" },
        { name: "Part 2: Hands on workshop", duration: "100 minutes" },
        { name: "Part 3: Team facilitation/Support", duration: "50 minutes" },
      ],
    },
  ];

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Workshop Pricing</h2>
        <p className={styles.description}>
          With our workshops, we offer two solutions that follow a similar format, with variable
          time structures.
        </p>
        <p className={styles.subDescription}>
          Feel free to click the links below to download the full workshop outlines.
        </p>

        <div className={styles.optionsGrid}>
          {options.map((option, index) => (
            <div key={index} className={styles.optionCard}>
              <h3 className={styles.optionName}>{option.name}</h3>

              <div className={styles.detail}>
                <span className={styles.label}>DURATION</span>
                <span className={styles.value}>{option.duration}</span>
              </div>

              <div className={styles.detail}>
                <span className={styles.label}>PRICE</span>
                <span className={styles.value}>{option.pricePerPerson}</span>
                <span className={styles.value}>{option.priceGroup}</span>
              </div>

              <div className={styles.detail}>
                <span className={styles.label}>DEPOSIT</span>
                <span className={styles.value}>{option.deposit}</span>
              </div>

              <div className={styles.detail}>
                <span className={styles.label}>DURATION BREAK DOWN</span>
                {option.parts.map((part, i) => (
                  <span key={i} className={styles.partValue}>
                    {part.name} ({part.duration})
                  </span>
                ))}
              </div>

              <a
                href="/assests/Wellness Packages.pdf"
                download="Volenti Workshop Info Sheet.pdf"
                className={styles.downloadButton}
              >
                Download Info Sheet
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkshopPricing;
