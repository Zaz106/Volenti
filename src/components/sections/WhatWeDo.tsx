import React from 'react';
import styles from './WhatWeDo.module.css';

const WhatWeDo: React.FC = () => {
  const items = [
    { id: 1, image: "/What We Do - 1.png", title: "Filler Text", text: "I've always been fascinated by how small, consistent habits can unlock extraordinary potential."  },
    { id: 2, image: "/What We Do - 2.png", title: "Filler Text", text: "I've always been fascinated by how small, consistent habits can unlock extraordinary potential." },
    { id: 3, image: "/What We Do - 3.png", title: "Filler Text", text: "I've always been fascinated by how small, consistent habits can unlock extraordinary potential." },
  ];

  return (
    <section id="what-we-do" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What We Do</h2>
        
        <p className={styles.text}>
          Volenti comes from the Latin for "to be willing," and it reflects the mindset I ask of myself,
          my staff and my clients. It's about being willing to learn, to change, to take ownership of
          your well-being, and to pursue excellence before shortcuts.
        </p>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonGroup}>
          <a href="#view-more" className={styles.button}>
              View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;