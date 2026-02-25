import React from 'react';
import styles from './MessageSection.module.css';

const MessageSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        A Word From Your Coach
      </h2>
      
      <p className={styles.text}>
        "I've always been fascinated by how small, consistent habits can unlock extraordinary
        potential. As a former athlete turned coach & trainer, I saw firsthand how nutrition,
        movement, sleep and stress management are the levers of performance – whether
        you're an elite competitor or someone simply trying to feel better in daily life. That
        passion led me to create Volenti: a coaching ecosystem rooted in science and driven by
        empathy."
      </p>

      <div className={styles.buttonGroup}>
        <a href="#what-we-do" className={`${styles.button} ${styles.primaryButton}`}>
          What We Do
        </a>
      </div>
    </section>
  );
};

export default MessageSection;
