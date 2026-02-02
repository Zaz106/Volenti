"use client";

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Change state when scrolled more than 50px
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/Show Logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
         // Scrolling Down -> Hide
         setIsVisible(false);
      } else {
         // Scrolling Up -> Show
         setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update theme-color for iOS status bar
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      // If scrolled or menu is open -> Green (primary), else -> Black (transparent over video)
      if (isScrolled || isOpen) {
        metaThemeColor.setAttribute('content', '#00352B');
      } else {
        metaThemeColor.setAttribute('content', '#000000'); 
      }
    }
  }, [isScrolled, isOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "What We Do", href: "/#what-we-do" },
    { label: "Workshops", href: "/pages/workshops" },
    { label: "Pricing", href: "#pricing" },
    { label: "Weight Loss Challenge", href: "/#weight-loss-challenge" },
    { label: "Contact us", href: "#contact-us" }
  ];

  return (
    <nav 
      className={`${styles.navbar} ${(isScrolled || isOpen) ? styles.scrolled : styles.transparent} ${!isVisible && !isOpen ? styles.hidden : ''}`}
    >
      <a href="/" className={styles.logoLink}>
        <Logo 
          color={isScrolled || isOpen ? 'var(--color-secondary)' : 'white'} 
          className={styles.logo} 
        />
      </a>
      
      {/* Desktop Menu */}
      <div className={styles.desktopMenu}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className={styles.navLink}>
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button - Ensure z-index high */}
      <div className={styles.mobileButtonWrapper}>
        <button 
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)} 
          className={styles.mobileButton}
          aria-label="Toggle menu"
        >
          <svg 
            className={styles.mobileIcon} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Slide-in from Right */}
      <div 
        ref={dropdownRef}
        className={`${styles.mobileDropdown} ${isOpen ? styles.open : ''}`}
      >
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href}
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};


export default Navbar;