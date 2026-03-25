import Link from 'next/link';
import Hero from '../components/Hero';
import PageShell from '../components/PageShell';
import { highlightStats, impactPoints, introParagraphs } from '../lib/content';
import styles from './page.module.css';

export default function HomePage() {
  const routeCards = [
    {
      href: '/challenge',
      title: 'Challenge Overview',
      desc: 'Read the full introduction, motivation, and official challenge link.',
      accentColor: '#2563eb',
      num: '01',
    },
    {
      href: '/task',
      title: 'Task Details',
      desc: 'See the input data, expected outputs, and evaluation focus areas.',
      accentColor: '#1d4fa8',
      num: '02',
    },
    {
      href: '/dates',
      title: 'Important Dates',
      desc: 'Track the full tentative timeline from proposal to winners announcement.',
      accentColor: '#c9a227',
      num: '03',
    },
    {
      href: '/team',
      title: 'Organizing Team',
      desc: 'Meet the challenge chair, coordinators, and annotation leads.',
      accentColor: '#2563eb',
      num: '04',
    },
  ];

  return (
    <PageShell>
      <Hero />

      {/* ── Conference Band ─────────────────────────────────────────── */}
      <section
        className={`${styles.conferenceBand} relative overflow-hidden`}
        style={{
          background:
            'linear-gradient(135deg,#07111f 0%,#0b1c38 45%,#0e2450 100%)',
          borderBottom: '1px solid rgba(100,160,255,0.18)',
          padding: '4rem 0',
        }}
      >
        {/* decorative ambient orbs */}
        <div
          className={styles.orbA}
          style={{
            position: 'absolute',
            top: '-60%',
            left: '-8%',
            width: '440px',
            height: '440px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle,rgba(37,99,235,0.18) 0%,transparent 68%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className={styles.orbB}
          style={{
            position: 'absolute',
            bottom: '-40%',
            right: '-4%',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle,rgba(201,162,39,0.13) 0%,transparent 68%)',
            pointerEvents: 'none',
          }}
        />

        {/* grid line texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(100,160,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(100,160,255,0.04) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />

        <div
          className={`${styles.container} ${styles.conferenceGrid}`}
          style={{ position: 'relative', zIndex: 1 }}
        >
          {highlightStats.map(([label, value], i) => (
            <article
              className={`${styles.statCardDark} ${styles.fadeInUp}`}
              key={label}
              style={
                {
                  '--delay': `${i * 0.15}s`,
                  background:
                    'linear-gradient(145deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.03) 100%)',
                  border: '1px solid rgba(100,160,255,0.22)',
                  borderRadius: '22px',
                  padding: '2.2rem 2rem',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow:
                    '0 24px 48px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.08)',
                } as React.CSSProperties
              }
            >
              {/* shimmer sweep */}
              <div className={styles.shimmer} />
              {/* top accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '16%',
                  right: '16%',
                  height: '3px',
                  background:
                    'linear-gradient(90deg,transparent,rgba(201,162,39,0.8),transparent)',
                  borderRadius: '0 0 4px 4px',
                }}
              />
              <p
                className="font-extrabold uppercase tracking-widest"
                style={{
                  color: '#c9a227',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  marginBottom: '0.6rem',
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                {label}
              </p>
              <h3
                className="font-black"
                style={{
                  color: '#e8f4ff',
                  fontSize: 'clamp(1rem,2vw,1.35rem)',
                  lineHeight: 1.3,
                  margin: 0,
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                {value}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* ── Introduction Section ─────────────────────────────────────── */}
      <section
        className={`${styles.section} relative overflow-hidden`}
        style={{
          background:
            'linear-gradient(180deg,#f0f7ff 0%,#e8f3ff 50%,#f4f9ff 100%)',
          padding: '5.5rem 0',
        }}
      >
        {/* background blob */}
        <div
          style={{
            position: 'absolute',
            top: '5%',
            right: '3%',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '2%',
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle,rgba(201,162,39,0.05) 0%,transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          className={`${styles.container} ${styles.homeSpotlight}`}
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* section lead */}
          <div className={styles.sectionLead}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1.1rem',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '3px',
                  background: 'linear-gradient(90deg,#2563eb,#c9a227)',
                  borderRadius: '999px',
                }}
              />
              <p
                className="font-extrabold uppercase tracking-widest"
                style={{
                  color: '#1d4fa8',
                  fontSize: '0.74rem',
                  margin: 0,
                  letterSpacing: '0.18em',
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                Introduction
              </p>
            </div>
            <h2
              className={`${styles.gradientTitle} font-black`}
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: 'clamp(2.2rem,4vw,3.4rem)',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                margin: '0 0 1.5rem',
              }}
            >
              Why this challenge matters
            </h2>
            <p
              className="font-bold"
              style={{
                color: '#2f507f',
                maxWidth: '700px',
                lineHeight: 1.85,
                fontSize: '1.05rem',
                fontFamily: "'Times New Roman', Times, serif",
              }}
            >
              AutoAnn-Indic is designed as a practical benchmark for document AI
              systems that must work on difficult, degraded Indic manuscript
              pages in real annotation workflows.
            </p>
          </div>

          {/* spotlight cards */}
          <div className={styles.homeSpotlightGrid}>
            {introParagraphs.slice(0, 3).map((paragraph, index) => (
              <article
                className={`${styles.spotlightCardNew} ${styles.fadeInUp}`}
                key={paragraph}
                style={
                  {
                    '--delay': `${index * 0.18}s`,
                    background:
                      'linear-gradient(145deg,#ffffff 0%,#f0f7ff 100%)',
                    border: '1px solid rgba(37,99,235,0.14)',
                    borderRadius: '22px',
                    padding: '2.2rem 2rem 2.2rem 2.6rem',
                    boxShadow:
                      '0 20px 40px rgba(33,83,155,0.09),0 1px 0 rgba(255,255,255,0.9) inset',
                    position: 'relative',
                    overflow: 'hidden',
                  } as React.CSSProperties
                }
              >
                {/* left accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: '18%',
                    bottom: '18%',
                    left: 0,
                    width: '5px',
                    background: 'linear-gradient(180deg,#2563eb,#1d4fa8)',
                    borderRadius: '0 4px 4px 0',
                  }}
                />
                {/* index badge */}
                <span
                  className="font-black"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background:
                      'linear-gradient(135deg,#2563eb 0%,#1d4fa8 100%)',
                    color: '#fff',
                    fontSize: '1.05rem',
                    fontWeight: 900,
                    marginBottom: '1.2rem',
                    boxShadow: '0 8px 20px rgba(37,99,235,0.32)',
                    fontFamily: "'Times New Roman', Times, serif",
                  }}
                >
                  0{index + 1}
                </span>
                <p
                  className="font-bold"
                  style={{
                    color: '#1e3a5f',
                    lineHeight: 1.82,
                    fontSize: '0.96rem',
                    fontFamily: "'Times New Roman', Times, serif",
                    margin: 0,
                  }}
                >
                  {paragraph}
                </p>
                {/* corner glow */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-20%',
                    right: '-10%',
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Section ───────────────────────────────────────────── */}
      <section
        className={`${styles.section} relative overflow-hidden`}
        style={{
          background:
            'linear-gradient(180deg,#07111f 0%,#0b1c38 50%,#0e2450 100%)',
          padding: '5.5rem 0',
        }}
      >
        {/* mesh texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 50%,rgba(37,99,235,0.1) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(201,162,39,0.07) 0%,transparent 40%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(100,160,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(100,160,255,0.03) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
            pointerEvents: 'none',
          }}
        />

        <div
          className={styles.container}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className={styles.sectionLead}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1.1rem',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '3px',
                  background: 'linear-gradient(90deg,#c9a227,#f5b82e)',
                  borderRadius: '999px',
                }}
              />
              <p
                className="font-extrabold uppercase tracking-widest"
                style={{
                  color: '#c9a227',
                  fontSize: '0.74rem',
                  margin: 0,
                  letterSpacing: '0.18em',
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                Impact
              </p>
            </div>
            <h2
              className="font-black"
              style={{
                color: '#e8f4ff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: 'clamp(2.2rem,4vw,3.4rem)',
                lineHeight: 1.1,
                margin: '0 0 0.5rem',
              }}
            >
              Research &amp; Societal Significance
            </h2>
          </div>

          <div className={styles.impactGrid}>
            {impactPoints.map((point, index) => (
              <article
                className={`${styles.impactCardDark} ${styles.fadeInUp}`}
                key={point}
                style={
                  {
                    '--delay': `${index * 0.12}s`,
                    background:
                      'linear-gradient(145deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.03) 100%)',
                    border: '1px solid rgba(100,160,255,0.17)',
                    borderRadius: '22px',
                    padding: '2.2rem 2rem',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow:
                      '0 20px 40px rgba(0,0,0,0.28),inset 0 1px 0 rgba(255,255,255,0.06)',
                  } as React.CSSProperties
                }
              >
                {/* shimmer */}
                <div className={styles.shimmer} />
                {/* top accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background:
                      'linear-gradient(90deg,transparent,rgba(201,162,39,0.6),transparent)',
                  }}
                />
                {/* number badge */}
                <div
                  className="font-black"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background:
                      'linear-gradient(135deg,rgba(201,162,39,0.22),rgba(245,184,46,0.12))',
                    border: '1px solid rgba(201,162,39,0.38)',
                    color: '#f5b82e',
                    fontSize: '1.05rem',
                    fontWeight: 900,
                    marginBottom: '1.2rem',
                    fontFamily: "'Times New Roman', Times, serif",
                    boxShadow: '0 6px 16px rgba(201,162,39,0.2)',
                  }}
                >
                  0{index + 1}
                </div>
                <p
                  className="font-bold"
                  style={{
                    color: 'rgba(232,244,255,0.85)',
                    lineHeight: 1.82,
                    fontSize: '0.96rem',
                    fontFamily: "'Times New Roman', Times, serif",
                    margin: 0,
                  }}
                >
                  {point}
                </p>
                {/* corner ambient */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-25%',
                    right: '-12%',
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle,rgba(201,162,39,0.07) 0%,transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Navigation Cards Section ─────────────────────────────────── */}
      <section
        className={`${styles.section} relative overflow-hidden`}
        style={{
          background:
            'linear-gradient(180deg,#f4f9ff 0%,#eef5ff 60%,#f0f7ff 100%)',
          padding: '5.5rem 0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 50% 0%,rgba(37,99,235,0.06) 0%,transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        <div
          className={styles.container}
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* section header */}
          <div className={styles.sectionLead} style={{ marginBottom: '3rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1.1rem',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '3px',
                  background: 'linear-gradient(90deg,#2563eb,#1d4fa8)',
                  borderRadius: '999px',
                }}
              />
              <p
                className="font-extrabold uppercase tracking-widest"
                style={{
                  color: '#1d4fa8',
                  fontSize: '0.74rem',
                  margin: 0,
                  letterSpacing: '0.18em',
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                Explore
              </p>
            </div>
            <h2
              className="font-black"
              style={{
                color: '#0a1628',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: 'clamp(2.2rem,4vw,3.4rem)',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Discover the Challenge
            </h2>
          </div>

          <div className={styles.routeCards}>
            {routeCards.map(({ href, title, desc, accentColor, num }, i) => (
              <Link
                href={href}
                className={`${styles.routeCardNew} ${styles.fadeInUp}`}
                key={href}
                style={
                  {
                    '--delay': `${i * 0.14}s`,
                    '--accent': accentColor,
                    background:
                      'linear-gradient(145deg,#ffffff 0%,#f4f9ff 100%)',
                    border: '1px solid rgba(37,99,235,0.14)',
                    borderRadius: '24px',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    boxShadow: '0 20px 40px rgba(33,83,155,0.09)',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '210px',
                    textDecoration: 'none',
                  } as React.CSSProperties
                }
              >
                {/* top color accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg,${accentColor},${accentColor}66)`,
                    borderRadius: '24px 24px 0 0',
                  }}
                />
                {/* number + label row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <span
                    className="font-black"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: `linear-gradient(135deg,${accentColor}22,${accentColor}11)`,
                      border: `1px solid ${accentColor}30`,
                      color: accentColor,
                      fontSize: '0.82rem',
                      fontWeight: 900,
                      fontFamily: "'Times New Roman', Times, serif",
                    }}
                  >
                    {num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: '#1d4fa8',
                      fontFamily: "'Times New Roman', Times, serif",
                    }}
                  >
                    Explore
                  </span>
                </div>

                <h3
                  className="font-black"
                  style={{
                    color: '#0a1628',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '1.25rem',
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  {title}
                </h3>
                <p
                  className="font-bold"
                  style={{
                    color: '#2f507f',
                    lineHeight: 1.78,
                    fontSize: '0.94rem',
                    fontFamily: "'Times New Roman', Times, serif",
                    margin: 0,
                    flexGrow: 1,
                  }}
                >
                  {desc}
                </p>

                {/* arrow row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: accentColor,
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    fontFamily: "'Times New Roman', Times, serif",
                  }}
                >
                  <span>View details</span>
                  <span
                    className={styles.arrowIcon}
                    style={{ fontSize: '1rem' }}
                  >
                    →
                  </span>
                </div>

                {/* hover overlay */}
                <div className={styles.routeCardHover} />
                {/* corner orb */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-25%',
                    right: '-12%',
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle,${accentColor}0d 0%,transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
