"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./PackageTierSection.module.css";

interface TierCard {
  tier: string;
  price: string;
  priceAlt: string;
  includes?: string;
  points: string[];
  bestFor?: string;
}

interface PackageTierSectionProps {
  heading: string;
  description: string;
  descriptionSecondary?: string;
  cards: TierCard[];
  variant?: "light" | "dark" | "accent";
}

const PackageTierSection: React.FC<PackageTierSectionProps> = ({
  heading,
  description,
  descriptionSecondary,
  cards,
  variant = "light",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardEls = Array.from(container.children) as HTMLElement[];
    const lastIdx = cardEls.length - 1;
    const visible = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = cardEls.indexOf(entry.target as HTMLElement);
          if (idx === -1) return;
          if (entry.isIntersecting) {
            visible.add(idx);
          } else {
            visible.delete(idx);
          }
        });
        if (visible.size === 0) return;
        if (visible.has(lastIdx)) {
          setActiveIndex(lastIdx);
        } else {
          setActiveIndex(Math.min(...visible));
        }
      },
      { root: container, threshold: 0.5 }
    );

    cardEls.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [cards.length]);

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  const sectionClass =
    variant === "dark"
      ? `${styles.section} ${styles.dark}`
      : variant === "accent"
      ? `${styles.section} ${styles.accent}`
      : styles.section;

  return (
    <section className={sectionClass}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
        {descriptionSecondary && (
          <p className={styles.description}>{descriptionSecondary}</p>
        )}

        <div className={styles.grid} ref={scrollRef}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.tierName}>{card.tier}</h3>
                <p className={styles.price}>{card.price}</p>
                <p className={styles.priceAlt}>{card.priceAlt}</p>
              </div>

              {card.includes && (
                <p className={styles.includes}>{card.includes}</p>
              )}

              <ul className={styles.pointsList}>
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {card.bestFor && (
                <div className={styles.bestFor}>
                  <span className={styles.bestForLabel}>Best for: </span>
                  {card.bestFor}
                </div>
              )}

              <a
                href={`https://wa.me/27693134060?text=${encodeURIComponent(`Hi, I'm interested in the ${heading} – ${card.tier} package (${card.price}). Could you please provide more information?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.enquireButton}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {cards.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ""}`}
              onClick={() => scrollToCard(i)}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageTierSection;
