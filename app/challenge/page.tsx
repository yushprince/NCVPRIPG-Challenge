import PageShell from '../../components/PageShell';
import SectionIntro from '../../components/SectionIntro';
import { challengeLink, impactPoints, introParagraphs } from '../../lib/content';

export default function ChallengePage() {
  return (
    <PageShell>
      <SectionIntro
        title="Challenge"
        intro="A benchmark for automated annotation generation on Indic manuscripts with an explicit focus on real annotation efficiency."
      >
        {/* Two-column article grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.2rem',
            marginBottom: '1.2rem',
          }}
        >
          {[
            { heading: 'Overview', paras: introParagraphs.slice(0, 2) },
            { heading: 'What Participants Will Build', paras: introParagraphs.slice(2) },
          ].map(({ heading, paras }) => (
            <article
              key={heading}
              style={{
                background:
                  'linear-gradient(145deg,rgba(255,255,255,0.98),rgba(240,248,255,0.97))',
                border: '1px solid rgba(37,99,235,0.15)',
                borderRadius: '24px',
                padding: '2rem',
                boxShadow: '0 20px 44px rgba(33,83,155,0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* top accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg,#2563eb,#1d4fa8)',
                  borderRadius: '24px 24px 0 0',
                }}
              />
              <h3
                style={{
                  margin: '0 0 1rem',
                  color: '#07111f',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                {heading}
              </h3>
              {paras.map((p) => (
                <p
                  key={p}
                  style={{
                    lineHeight: 1.8,
                    color: '#1e3a5f',
                    fontWeight: 700,
                    fontFamily: "'Times New Roman', Times, serif",
                    marginBottom: '0.85rem',
                    fontSize: '0.97rem',
                  }}
                >
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>

        {/* CTA panel */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
            background:
              'linear-gradient(135deg,#07111f 0%,#0d2347 60%,#1a3568 100%)',
            border: '1px solid rgba(100,160,255,0.2)',
            borderRadius: '24px',
            padding: '2rem 2.5rem',
            boxShadow: '0 24px 48px rgba(0,0,0,0.25)',
          }}
        >
          <div>
            <p
              style={{
                color: '#c9a227',
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                marginBottom: '0.5rem',
                fontFamily: "'Times New Roman', Times, serif",
              }}
            >
              Official Link
            </p>
            <h3
              style={{
                margin: 0,
                color: '#e8f4ff',
                fontWeight: 900,
                fontSize: 'clamp(1rem,2vw,1.3rem)',
                fontFamily: "'Times New Roman', Times, serif",
              }}
            >
              Explore the challenge website and registration details
            </h3>
          </div>
          <a
            href={challengeLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '50px',
              padding: '0.85rem 2rem',
              borderRadius: '999px',
              background: 'linear-gradient(135deg,#2563eb,#1d4fa8)',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '0.95rem',
              fontFamily: "'Times New Roman', Times, serif",
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 14px 30px rgba(37,99,235,0.45)',
            }}
          >
            Open Official Challenge Link &rarr;
          </a>
        </div>
      </SectionIntro>

      <SectionIntro
        title="Impact &amp; Significance"
        intro="AutoAnn-Indic targets scalable ground-truth generation for cultural heritage collections."
        alt
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.2rem',
          }}
        >
          {impactPoints.map((point, index) => (
            <article
              key={point}
              style={{
                background:
                  'linear-gradient(145deg,rgba(255,255,255,0.98),rgba(240,248,255,0.97))',
                border: '1px solid rgba(37,99,235,0.14)',
                borderRadius: '22px',
                padding: '2rem',
                boxShadow: '0 20px 40px rgba(33,83,155,0.09)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg,#c9a227,#f5b82e)',
                }}
              />
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg,#2563eb,#1d4fa8)',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 900,
                  marginBottom: '1.1rem',
                  boxShadow: '0 8px 20px rgba(37,99,235,0.3)',
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                0{index + 1}
              </div>
              <p
                style={{
                  lineHeight: 1.8,
                  color: '#1e3a5f',
                  fontWeight: 700,
                  fontFamily: "'Times New Roman', Times, serif",
                  margin: 0,
                  fontSize: '0.97rem',
                }}
              >
                {point}
              </p>
            </article>
          ))}
        </div>
      </SectionIntro>
    </PageShell>
  );
}
