import type { Metadata } from "next";
import React from "react";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import styles from "./legal.module.css";

export const metadata: Metadata = {
  title: "Legal",
  description: "Privacy Policy and Terms & Conditions for Volenti wellness and fitness coaching services.",
  alternates: {
    canonical: "https://www.volenti.co.za/pages/legal",
  },
  robots: { index: false, follow: true },
};

export default function LegalPage() {
  const year = new Date().getFullYear();

  return (
    <main>
      <Navbar forceScrolled />

      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Legal</h1>
          <p className={styles.updated}>Last updated: April {year}</p>

          {/* ── Privacy Policy ──────────────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Privacy Policy</h2>

            <h3 className={styles.subHeading}>1. Information We Collect</h3>
            <p>
              When you interact with our website or services, we may collect personal information
              including your name, email address, and phone number — only when you voluntarily
              provide it through contact forms or newsletter sign-ups.
            </p>

            <h3 className={styles.subHeading}>2. How We Use Your Information</h3>
            <p>We use collected information to:</p>
            <ul className={styles.list}>
              <li>Respond to enquiries and provide coaching services</li>
              <li>Send newsletter updates you have opted into</li>
              <li>Improve our website and service offerings</li>
            </ul>
            <p>
              We do not sell, trade, or transfer your personal information to third parties. Your
              data is used solely for the purposes stated above.
            </p>

            <h3 className={styles.subHeading}>3. Data Storage & Security</h3>
            <p>
              We take reasonable precautions to protect your information. Emails submitted through
              our site are processed via Resend, a third-party email provider, in accordance with
              their own privacy and security standards.
            </p>

            <h3 className={styles.subHeading}>4. Cookies</h3>
            <p>
              This website does not use tracking or advertising cookies. Basic session functionality
              may use essential cookies that do not identify you personally.
            </p>

            <h3 className={styles.subHeading}>5. Your Rights</h3>
            <p>
              You have the right to request access to, correction of, or deletion of any personal
              data we hold about you. To exercise these rights, contact us at{" "}
              <a href="mailto:Leo@volenti.co.za" className={styles.link}>
                Leo@volenti.co.za
              </a>
              .
            </p>

            <h3 className={styles.subHeading}>6. Changes to This Policy</h3>
            <p>
              We may update this policy from time to time. Continued use of the website following
              any changes constitutes your acceptance of the revised policy.
            </p>
          </section>

          <div className={styles.divider} />

          {/* ── Terms & Conditions ──────────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Terms &amp; Conditions</h2>

            <h3 className={styles.subHeading}>1. Services</h3>
            <p>
              Volenti provides personal training, sports conditioning, occupational conditioning, and
              corporate wellness workshops. All services are subject to a separate agreement or
              proposal confirmed at the time of engagement.
            </p>

            <h3 className={styles.subHeading}>2. Health Disclaimer</h3>
            <p>
              Participation in any fitness or wellness programme involves inherent physical risk.
              Clients are responsible for disclosing any medical conditions or injuries prior to
              commencing any programme. Volenti does not accept liability for injury arising from
              undisclosed health conditions.
            </p>

            <h3 className={styles.subHeading}>3. Payments & Cancellations</h3>
            <p>
              Workshop deposits are non-refundable unless the event is cancelled by Volenti.
              Monthly coaching packages require 30 days&apos; written notice to cancel. Missed sessions
              without 24-hour notice will be forfeited.
            </p>

            <h3 className={styles.subHeading}>4. Intellectual Property</h3>
            <p>
              All content on this website — including programmes, materials, and resources — is the
              intellectual property of Volenti and may not be reproduced without prior written
              consent.
            </p>

            <h3 className={styles.subHeading}>5. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, Volenti shall not be liable for any indirect,
              incidental, or consequential damages arising from the use of our services or website.
            </p>

            <h3 className={styles.subHeading}>6. Governing Law</h3>
            <p>
              These terms are governed by the laws of the Republic of South Africa. Any disputes
              shall be subject to the jurisdiction of the South African courts.
            </p>

            <h3 className={styles.subHeading}>7. Contact</h3>
            <p>
              For any legal enquiries, contact us at{" "}
              <a href="mailto:Leo@volenti.co.za" className={styles.link}>
                Leo@volenti.co.za
              </a>{" "}
              or call{" "}
              <a href="tel:+27693134060" className={styles.link}>
                +27 69 313 4060
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
