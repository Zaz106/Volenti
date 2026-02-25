import React from 'react';
import styles from './WorkshopsStats.module.css';

interface StatCardProps {
  title: string;
  points: string[];
  roiText: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, points, roiText }) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <img src="/Valenti-logo - Small.png" alt="" className={styles.logo} />
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
    <ul className={styles.cardList}>
      {points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
    <div className={styles.roiSection}>
      <h4 className={styles.roiTitle}>RETURN ON INVESTMENT</h4>
      <p className={styles.roiText}>{roiText}</p>
    </div>
  </div>
);

const WorkshopsStats: React.FC = () => {
  const cardsData = [
    {
      title: "ABSENTEEISM & LESS SICK DAYS",
      points: [
            "Effective health programmes cut absenteeism by 25%.",
            "Wellness programmes can reduce absenteeism by up to 16%.",
            "Companies with wellness initiatives report 28% fewer sick days.",
            "Programmes offering mindfulness training see 25% less stress-related absenteeism.",
            "Absenteeism costs rise $2.73 for every $1 spent on wellness." // Image says "costs fall" but logic says "return is"? Image says "Absenteeism costs fall $2.73 for every $1 spent on wellness."
      ],
      roiText: "Fewer absences mean less disruption, lower temporary-staff costs and more consistent output."
    },
    {
      title: "HEALTH CARE COST REDUCTION",
      points: [
          "72% of companies experienced lower healthcare costs.",
          "Medical costs drop $3.27 for every $1 invested in wellness.",
          "Preventable conditions, often targeted by wellness initiatives, account for 75% of medical costs."
      ],
      roiText: "Reduced claims and premiums generate hard savings and free funds for growth."
    },
    {
      title: "RETURN ON INVESTMENT STATS",
      points: [
          "Effective wellness programmes achieve an average ROI of 6:1",
          "Companies with comprehensive wellness strategies realize a 2.5x return through productivity gains and lower absenteeism.",
          "Mental health initiatives deliver 5x returns on investment."
      ],
      roiText: "Wellness spending pays for itself many times over through lower costs and higher output."
    }
  ];

  // Correcting the last point of first card based on image text "Absenteeism costs fall $2.73..."
  // Update: I will correct the text in the array below directly.

  const finalCardsData = [
    {
        title: "ABSENTEEISM & LESS SICK DAYS",
        points: [
              "Effective health programmes cut absenteeism by 25%.",
              "Wellness programmes can reduce absenteeism by up to 16%.",
              "Companies with wellness initiatives report 28% fewer sick days.",
              "Programmes offering mindfulness training see 25% less stress-related absenteeism.",
              "Absenteeism costs fall $2.73 for every $1 spent on wellness."
        ],
        roiText: "Fewer absences mean less disruption, lower temporary-staff costs and more consistent output."
      },
      {
        title: "HEALTH CARE COST REDUCTION",
        points: [
            "72% of companies experienced lower healthcare costs.",
            "Medical costs drop $3.27 for every $1 invested in wellness.",
            "Preventable conditions, often targeted by wellness initiatives, account for 75% of medical costs."
        ],
        roiText: "Reduced claims and premiums generate hard savings and free funds for growth."
      },
      {
        title: "RETURN ON INVESTMENT STATS",
        points: [
            "Effective wellness programmes achieve an average ROI of 6:1",
            "Companies with comprehensive wellness strategies realize a 2.5x return through productivity gains and lower absenteeism.",
            "Mental health initiatives deliver 5x returns on investment."
        ],
        roiText: "Wellness spending pays for itself many times over through lower costs and higher output."
      }
  ];

  // Replicating to confirm with the visual 6-card grid (duplicates)
  const gridData = [...finalCardsData, ...finalCardsData];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>STATISTICAL BENEFITS OF WELLNESS WORKSHOPS</h2>
        <p className={styles.description}>
          Corporate wellness workshops offer many benefits from healthcare cost reduction,
          improving of corporate culture, less sick days and so forth, see below a the statistical
          benefits.
        </p>

        <div className={styles.grid}>
          {gridData.map((card, index) => (
            <StatCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsStats;
