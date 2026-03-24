"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./WorkshopsStats.module.css";

interface StatCardProps {
  title: string;
  points: React.ReactNode[];
  roiText: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, points, roiText }) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const cardsData: StatCardProps[] = [
    {
      title: "ABSENTEEISM & LESS SICK DAYS",
      points: [
        <>Effective health programmes <strong>cut absenteeism by 25%</strong>.</>,
        <>Wellness programmes <strong>can reduce absenteeism by up to 16%</strong>.</>,
        <>Companies with wellness <strong>initiatives report 28% fewer sick days</strong>.</>,
        <>Programmes offering mindfulness training <strong>see 25% less stress-related absenteeism</strong>.</>,
        <>Absenteeism costs fall <strong>$2.73 for every $1 spent on wellness</strong>.</>,
      ],
      roiText:
        "Fewer absences mean less disruption, lower temporary-staff costs and more consistent output.",
    },
    {
      title: "HEALTH CARE COST REDUCTION",
      points: [
        <><strong>72%</strong> of companies experienced lower healthcare costs.</>,
        <>Medical costs drop $3.27 for every $1 invested in wellness.</>,
        <>Preventable conditions, often targeted by wellness initiatives, <strong>account for 75% of medical costs</strong>.</>,
      ],
      roiText:
        "Reduced claims and premiums generate hard savings and free funds for growth.",
    },
    {
      title: "RETURN ON INVESTMENT STATS",
      points: [
        <>Effective wellness programmes achieve an average ROI of 6:1.</>,
        <>Companies with comprehensive wellness strategies <strong>realise a 2.5x return</strong> through productivity gains and lower absenteeism.</>,
        <>Mental-health initiatives deliver <strong>5x returns on investment</strong>.</>,
      ],
      roiText:
        "Wellness spending pays for itself many times over through lower costs and higher output.",
    },
    {
      title: "RETENTION AND ATTRITION",
      points: [
        <>Companies with effective wellness programmes have <strong>6% less voluntary attrition</strong>.</>,
        <><strong>69%</strong> of HR leaders report improved employee retention.</>,
      ],
      roiText:
        "Retaining staff avoids recruitment and training costs and preserves institutional knowledge.",
    },
    {
      title: "EMPLOYEE SATISFACTION & CULTURE",
      points: [
        <><strong>77% of employees</strong> say wellness programmes positively affect workplace culture.</>,
        <>Wellness focused workplaces see 24% higher employee satisfaction.</>,
        <><strong>87% of employees</strong> value health and wellness offerings when selecting an employer.</>,
      ],
      roiText:
        "A strong wellness culture boosts engagement, morale and employer branding.",
    },
    {
      title: "MENTAL HEALTH & STRESS RESILIENCE",
      points: [
        <>Mental-health programmes report that <strong>83% of users recover or at least improve their well-being</strong>.</>,
        <>Mental-health challenges are the top cause of absenteeism.</>,
        <>Mindfulness-based wellness initiatives <strong>cut stress-related absences by 25%</strong>.</>,
      ],
      roiText:
        "Supporting mental health reduces absences, prevents burnout and enhances overall performance.",
    },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    const lastIdx = cards.length - 1;
    const visible = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = cards.indexOf(entry.target as HTMLElement);
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

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Statistical Benefits of
          <br />
          Wellness Workshops
        </h2>
        <p className={styles.description}>
          The statistics speak for themselves. Reduced healthcare costs, increased employee
          satisfaction, lower absenteeism, and greater stress resilience all show that investing in
          your staff delivers real returns, see below a the statistical benefits.
        </p>

        <div className={styles.grid} ref={scrollRef}>
          {cardsData.map((card, index) => (
            <StatCard key={index} {...card} />
          ))}
        </div>

        <div className={styles.dots}>
          {cardsData.map((_, i) => (
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

export default WorkshopsStats;
