"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./WhatWeDo.module.css";

const WhatWeDo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isCarousel, setIsCarousel] = useState(false);

  const items = [
    {
      id: 1,
      image: "/What We Do - 1.png",
      title: "General Fitness Programs",
      text: "General Fitness Programs are designed to build a strong, balanced foundation — improving strength, endurance, mobility, and overall wellbeing.",
    },
    {
      id: 2,
      image: "/What We Do - 2.jpg",
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

  useEffect(() => {
    const checkLayout = () => {
      setIsCarousel(window.innerWidth < 1024);
    };
    checkLayout();
    window.addEventListener("resize", checkLayout);
    return () => window.removeEventListener("resize", checkLayout);
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    if (scrollWidth <= 0) return;
    const progress = container.scrollLeft / scrollWidth;
    const index = Math.round(progress * (items.length - 1));
    setActiveIndex(Math.min(Math.max(index, 0), items.length - 1));
  }, [items.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !isCarousel) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll, isCarousel]);

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const targetScroll = (index / (items.length - 1)) * scrollWidth;
    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  };

  return (
    <section id="what-we-do" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What We Do</h2>

        <p className={styles.text}>
          We offer three distinct service areas, each built around a specific goal and a single
          guiding principle: sustainable progress matters more than short-term results. Choose the
          path that fits your life and we&apos;ll build a programme around it.
        </p>

        <div className={styles.grid} ref={scrollRef}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1920px) 85vw, 33vw"
                style={{ objectFit: "cover" }}
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {isCarousel && (
          <div className={styles.dots}>
            {items.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ""}`}
                onClick={() => scrollToCard(i)}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        )}

        <div className={styles.buttonGroup}>
          <a href="/pages/packages" className={styles.button}>
            View Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
