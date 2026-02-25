import React from "react";
import styles from "./WhatWeDo.module.css";

const WhatWeDo: React.FC = () => {
  const items = [
    {
      id: 1,
      image: "/What We Do - 1.png",
      title: "General Fitness Programs",
      text: "General Fitness Programs are designed to build a strong, balanced foundation — improving strength, endurance, mobility, and overall wellbeing.",
    },
    {
      id: 2,
      image: "/What We Do - 2.png",
      title: "Sports Conditioning",
      text: "Sports Conditioning programs are built to help you perform at your optimal level — developing strength, speed, agility, and endurance specific to your sport.",
    },
    {
      id: 3,
      image: "/What We Do - 3.png",
      title: "Occupational Conditioning",
      text: "Occupational Conditioning programs are designed to enhance performance in the workplace — building the strength, stamina, and resilience your role demands.",
    },
  ];

  return (
    <section id="what-we-do" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What We Do</h2>

        <p className={styles.text}>
          Volenti comes from the Latin for "to be willing," and it reflects the
          mindset I ask of myself, my staff and my clients. It's about being
          willing to learn, to change, to take ownership of your well-being, and
          to pursue excellence before shortcuts.
        </p>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonGroup}>
          <a href="#view-more" className={styles.button}>
            View Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
