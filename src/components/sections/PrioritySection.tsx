import React from 'react';
import styles from './PrioritySection.module.css';

const PrioritySection: React.FC = () => {
  const cards = [
    { title: "Filler Text", text: "I've always been fascinated by how small, consistent habits can unlock extraordinary potential." },
    { title: "Filler Text", text: "I've always been fascinated by how small, consistent habits can unlock extraordinary potential." },
    { title: "Filler Text", text: "I've always been fascinated by how small, consistent habits can unlock extraordinary potential." },
    { title: "Filler Text", text: "I've always been fascinated by how small, consistent habits can unlock extraordinary potential." },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Your Wellness is<br/>
            Our <span className={styles.highlight}>Priority</span>
          </h2>
          <p className={styles.intro}>
            I've always been fascinated by how small, consistent habits can unlock extraordinary potential.
            As a former athlete turned coach & trainer, I saw firsthand how nutrition, movement.
          </p>
        </div>
        
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}></div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrioritySection;