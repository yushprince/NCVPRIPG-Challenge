'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { challengeLink, heroImages, registerLink } from '../lib/content';
import styles from './Hero.module.css';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  /* key forces re-mount of text panel → re-runs color-in animations */
  const [panelKey, setPanelKey] = useState(0);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);

    let p = 0;
    progressRef.current = setInterval(() => {
      p += 2;
      setProgress(Math.min(p, 100));
      if (p >= 100 && progressRef.current) clearInterval(progressRef.current);
    }, 100); /* 50 ticks × 100 ms = 5 000 ms */

    timerRef.current = setInterval(() => {
      setActiveIndex((c) => (c + 1) % heroImages.length);
      setPanelKey((k) => k + 1);
      setProgress(0);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setPanelKey((k) => k + 1);
    resetTimer();
  };

  const showPrev = () =>
    goTo((activeIndex - 1 + heroImages.length) % heroImages.length);
  const showNext = () =>
    goTo((activeIndex + 1) % heroImages.length);

  return (
    <section className={styles.hero}>
      {/* ── Background images ──────────────────────────────────────── */}
      <div
        style={{ position: 'absolute', inset: 0 }}
        aria-hidden="true"
      >
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: i === activeIndex ? 1 : 0,
              transition: 'opacity 1s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <Image
              src={img.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={styles.bgImage}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
        {/* directional dark overlay */}
        <div className={styles.overlay} />
        {/* bottom fade */}
        <div className={styles.overlayBottom} />
        {/* subtle grid mesh */}
        <div className={styles.gridMesh} />
      </div>

    

      {/* ── Nav arrows ─────────────────────────────────────────────── */}
      <button
        type="button"
        className={styles.navBtn}
        style={{ left: '1.4rem' }}
        onClick={showPrev}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        type="button"
        className={styles.navBtn}
        style={{ right: '1.4rem' }}
        onClick={showNext}
        aria-label="Next slide"
      >
        →
      </button>

      {/* ── Main grid ──────────────────────────────────────────────── */}
      <div className={styles.grid}>

        {/* LEFT – text panel (light glass, dark blue text) */}
        <div
          key={panelKey}          /* re-mount triggers color-in animations */
          className={styles.textPanel}
        >
          {/* eyebrow */}
          <div className={styles.eyebrowRow}>
            <div className={styles.eyebrowLine} />
            <p className={styles.eyebrow}>NCVPRIPG 2026 · Challenge Track</p>
          </div>

          {/* Giant H1 – each word colours in independently */}
          <h1 className={styles.h1}>
            <span className={styles.word1}>Auto</span>
            <span className={styles.word2}>Ann</span>
            <span className={styles.wordDash}>&#8209;</span>
            <span className={styles.word3}>Indic</span>
            <br />
            <span className={styles.word4}>&lsquo;2026</span>
          </h1>

          {/* H2 */}
          <h2 className={styles.h2}>
            Human-Effort Efficient Automated Annotation
            <br />
            for Indic Manuscripts &amp; Ramcharit Manas
          </h2>

          {/* Body */}
          <p className={styles.body}>
            Build practical pre-annotation systems for degraded Indic
            manuscripts and help accelerate culturally significant document
            preservation.
          </p>

          {/* CTAs */}
          <div className={styles.btnRow}>
            <a
              href={challengeLink}
              target="_blank"
              rel="noreferrer"
              className={styles.btnPrimary}
            >
              Challenge Details &rarr;
            </a>
          </div>

          {/* Mini stats */}
          <div className={styles.statsRow}>
            {(
              [
                ['2026', 'Edition'],
                ['IIT BHU', 'Host'],
                ['July 22–24', 'Event'],
                ['Jaipur', 'Venue'],
              ] as [string, string][]
            ).map(([num, label]) => (
              <div key={label} className={styles.statItem}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – side panel */}
        <aside className={styles.sidePanel}>
          
          

          {/* org info */}
          <p className={styles.orgLabel}>Organised by</p>
          <h3 className={styles.orgName}>IIT (BHU) Varanasi</h3>

          {/* logo */}
          <div className={styles.logoBox}>
            <Image
              src="/iitbhu.png"
              alt="IIT BHU Varanasi logo"
              width={152}
              height={152}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* register CTA */}
          <a
            href={registerLink}
            target="_blank"
            rel="noreferrer"
            className={styles.registerBtn}
          >
            Register Now &rarr;
          </a>

          {/* slide dots */}
         
        </aside>
      </div>
    </section>
  );
}
