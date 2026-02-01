import React from 'react';
import styles from './NewsletterSection.module.css';

const NewsletterSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          ARE YOU READY TO<br/>
          THRIVE?
        </h2>
        
        <form className={styles.form}>
          <input 
            type="email" 
            placeholder="Drop Us Your Email" 
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>

        <p className={styles.subtext}>
          We'll reach out as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
