'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './NewsletterSection.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

const NewsletterSection: React.FC = () => {
  const [email, setEmail]       = useState('');
  const [status, setStatus]     = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const loadTimestamp = useRef<number>(0);

  useEffect(() => {
    loadTimestamp.current = Date.now();
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setStatus('idle');
    setEmail('');
    loadTimestamp.current = Date.now();
  }, []);

  useEffect(() => {
    if (!showModal) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [showModal, closeModal]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          loadTimestamp: loadTimestamp.current,
          hp_field: '',
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setShowModal(true);
    } catch {
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <>
      <section id="contact-us" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>
            ARE YOU READY TO<br/>
            THRIVE?
          </h2>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* Honeypot – hidden from real users, catches bots that fill all fields */}
            <input
              type="text"
              name="hp_field"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              readOnly
              aria-hidden="true"
            />
            <input
              type="email"
              placeholder="Drop Us Your Email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              aria-label="Email address"
            />
            <button
              type="submit"
              className={styles.button}
              disabled={status === 'loading'}
              aria-busy={status === 'loading'}
            >
              {status === 'loading' ? 'Sending…' : 'Submit'}
            </button>
          </form>

          {status === 'error' && (
            <p className={styles.errorText} role="alert">
              {errorMsg}
            </p>
          )}

          <p className={styles.subtext}>
            We&apos;ll reach out as soon as possible.
          </p>
        </div>
      </section>

      {showModal && (
        <div
          className={styles.overlay}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Subscription confirmed"
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

            <button className={styles.modalClose} onClick={closeModal} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>

            <div className={styles.modalIconWrap}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="20 6 9 17 4 12" stroke="#00352B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h2 className={styles.modalHeading}>You&apos;re In!</h2>

            <div className={styles.modalDivider} />

            <p className={styles.modalBody}>
              Check your inbox — a confirmation is on its way.<br/>
              We&apos;ll be in touch soon.
            </p>

            <button className={styles.modalBtn} onClick={closeModal}>
              Back to site
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterSection;
