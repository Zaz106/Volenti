import React from 'react';
import styles from './Footer.module.css';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Logo & Nav */}
          <div className={styles.column}>
            <div className={styles.logoWrapper}>
              <Logo color="#a3cf83" /> {/* Light Green Logo as per image usually, or green */}
            </div>
            <nav className={styles.navLinks}>
              <a href="/">Home</a>
              <a href="#about">About Us</a>
              <a href="#what-we-do">What We Do</a>
              <a href="/pages/workshops">Workshops</a>
              <a href="#pricing">Pricing</a>
            </nav>
          </div>

          {/* Column 2: Contact */}
          <div className={styles.column}>
            <p className={styles.contactIntro}>Have any questions or feedback? Reach out below</p>
            <a href="mailto:Leo@volenti.co.za" className={styles.emailLink}>Leo@volenti.co.za</a>
            
            <div className={styles.phoneGroup}>
              <p className={styles.label}>Give us a call</p>
              <a href="tel:+27671096025" className={styles.phoneLink}>+27 67 109 6025</a>
            </div>
          </div>

          {/* Column 3: Resources */}
          <div className={styles.column}>
            <h3 className={styles.heading}>Resources</h3>
            <ul className={styles.list}>
              <li><a href="#">Wellness Tips</a></li>
              <li><a href="#">What We Offer</a></li>
              <li><a href="#">Weight Loss Challenge</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className={styles.column}>
            <h3 className={styles.heading}>Support</h3>
            <ul className={styles.list}>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>Copyright 2026. All Rights Reserved</p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;