'use client';

import PageShell from '../../components/PageShell';
import SectionIntro from '../../components/SectionIntro';
import { dates } from '../../lib/content';

export default function DatesPage() {
  return (
    <>
      <PageShell>
        <SectionIntro
          title="Important Dates"
          intro="The current timeline below follows the tentative schedule shared for the challenge."
        >
          <div className="dateTimeline">
            <div className="dateTimelineLine" aria-hidden="true" />
            {dates.map(([label, value], index) => (
              <div
                className={index % 2 === 0 ? 'dateTimelineRow left' : 'dateTimelineRow right'}
                key={label}
              >
                <article className="dateTimelineCard">
                  <div className="dateStamp">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="dateTimelineText">
                    <p>{label}</p>
                    <strong>{value}</strong>
                  </div>
                </article>
                <div className="dateTimelineDot" aria-hidden="true" />
              </div>
            ))}
          </div>
        </SectionIntro>
      </PageShell>

      <style jsx>{`
        .dateTimeline {
          position: relative;
          display: grid;
          gap: 1.4rem;
        }
        .dateTimelineLine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #2f80ed, #1d4fa8);
          border-radius: 999px;
        }
        .dateTimelineRow {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 88px 1fr;
          align-items: center;
        }
        .dateTimelineRow.left .dateTimelineCard {
          grid-column: 1;
        }
        .dateTimelineRow.right .dateTimelineCard {
          grid-column: 3;
        }
        .dateTimelineCard {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.4rem;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(47, 128, 237, 0.16);
          border-radius: 24px;
          box-shadow: 0 20px 44px rgba(33, 83, 155, 0.12);
        }
        .dateStamp {
          width: 96px;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          border: 2px solid rgba(47, 128, 237, 0.4);
          color: #1d4fa8;
          background: rgba(47, 128, 237, 0.06);
          font-size: 1.2rem;
          font-weight: 800;
          flex-shrink: 0;
        }
        .dateTimelineText p,
        .dateTimelineText strong {
          margin: 0;
        }
        .dateTimelineText p {
          margin-bottom: 0.45rem;
          color: #5f7696;
          font-size: 0.92rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .dateTimelineText strong {
          color: #0d2340;
          font-size: 1.15rem;
          font-weight: 800;
        }
        .dateTimelineDot {
          grid-column: 2;
          justify-self: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #2f80ed;
          border: 4px solid #eaf3ff;
          box-shadow: 0 0 0 5px rgba(47, 128, 237, 0.12);
        }
        @media (max-width: 960px) {
          .dateTimelineLine {
            left: 18px;
            transform: none;
          }
          .dateTimelineRow {
            grid-template-columns: 40px 1fr;
          }
          .dateTimelineRow.left .dateTimelineCard,
          .dateTimelineRow.right .dateTimelineCard {
            grid-column: 2;
          }
          .dateTimelineDot {
            grid-column: 1;
          }
        }
        @media (max-width: 640px) {
          .dateTimelineCard {
            flex-direction: column;
            align-items: flex-start;
          }
          .dateStamp {
            width: 78px;
            height: 78px;
            border-radius: 20px;
          }
        }
      `}</style>
    </>
  );
}
