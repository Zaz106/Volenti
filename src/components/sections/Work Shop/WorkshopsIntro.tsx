import React from 'react';
import styles from './WorkshopsIntro.module.css';

const WorkshopsIntro: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        About Our Wellness<br />Workshops
      </h2>
      
      <p className={styles.text}>
        Volenti&apos;s workplace wellness workshops are structured sessions designed for corporate teams
        who want to build a healthier, more resilient workforce — not through motivational talks, but
        through practical science and lasting behaviour change strategies.
      </p>

      <p className={styles.text}>
        Each wellness workshop improves employee wellbeing, reduces sick days, enhances workplace
        performance, and equips participants with the tools to build sustainable personal health
        systems. Through guided education and hands-on practical application, everyone leaves with
        actionable strategies they can implement immediately — no gym membership required.
      </p>

      <p className={styles.text}>
        Sessions cover the core pillars of human performance: sleep quality and recovery, stress
        management, movement and mobility fundamentals, nutritional awareness, and mental resilience.
        Participants work through an evidence-based framework that explains clearly how daily habits
        shape energy, focus, and mood at work — and which small, consistent changes produce the
        greatest long-term results.
      </p>

      <p className={styles.text}>
        Every workshop is structured in three distinct phases: a theory block grounding participants
        in the science behind health and performance, a hands-on practical segment where learning is
        actively applied and explored, and a team facilitation period focused on shared goal-setting
        and accountability. This format ensures the content isn&apos;t just heard — it&apos;s understood,
        personalised, and retained.
      </p>

      <p className={styles.text}>
        A healthy team is a high-performing team. Research consistently shows that employees who feel
        well physically and mentally demonstrate stronger focus, better decision-making, and greater
        resilience under pressure. Investing in your team&apos;s wellbeing is not only a culture
        initiative — it&apos;s a strategic business decision with measurable financial returns, from lower
        absenteeism and reduced healthcare costs through to improved staff retention.
      </p>

      <p className={styles.text}>
        Whether your team is managing chronic fatigue, workplace stress, disengagement, or simply
        wants a stronger foundation for daily performance, Volenti&apos;s wellness workshops are built to
        meet them where they are — and take them further.
      </p>

      <div className={styles.buttonGroup}>
        <a href="#pricing" className={styles.button}>
          View Pricing
        </a>
      </div>
    </section>
  );
};

export default WorkshopsIntro;
