'use client';

import PageShell from '../../components/PageShell';
import SectionIntro from '../../components/SectionIntro';
import { rules } from '../../lib/content';

export default function RulesPage() {
  return (
    <>
      <PageShell>
        <SectionIntro
          title="Rules"
          intro="These high-level rules prepare teams for the official evaluation workflow and submission expectations."
        >
          <div className="rulesTimeline">
            <div className="rulesTimelineLine" aria-hidden="true" />
            {rules.map((rule, index) => (
              <div className="ruleLineItem" key={rule}>
                <div className="ruleLineDot" aria-hidden="true" />
                <article className="ruleLineCard">
                  <div className="ruleBadge">Rule {index + 1}</div>
                  <p>{rule}</p>
                </article>
              </div>
            ))}
          </div>
        </SectionIntro>
      </PageShell>

      <style jsx>{`
        .rulesTimeline {
          position: relative;
          display: grid;
          gap: 1rem;
        }
        .rulesTimelineLine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 18px;
          width: 4px;
          border-radius: 999px;
          background: linear-gradient(180deg, #2f80ed, #1d4fa8);
        }
        .ruleLineItem {
          position: relative;
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 1rem;
          align-items: start;
        }
        .ruleLineDot {
          position: relative;
          z-index: 1;
          width: 18px;
          height: 18px;
          margin-top: 1.2rem;
          margin-left: 9px;
          border-radius: 50%;
          background: #2f80ed;
          border: 3px solid #edf5ff;
          box-shadow: 0 0 0 5px rgba(47, 128, 237, 0.12);
        }
        .ruleLineCard {
          display: grid;
          gap: 0.9rem;
          align-content: start;
          padding: 1.3rem 1.4rem;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(240, 247, 255, 0.98), rgba(255, 255, 255, 0.98));
          border: 1px solid rgba(47, 128, 237, 0.16);
          border-left: 6px solid #2f80ed;
          box-shadow: 0 20px 44px rgba(33, 83, 155, 0.12);
        }
        .ruleBadge {
          display: inline-flex;
          width: fit-content;
          padding: 0.45rem 0.82rem;
          border-radius: 999px;
          background: rgba(47, 128, 237, 0.12);
          color: #1d4fa8;
          font-weight: 800;
        }
        p {
          margin: 0;
          color: #153456;
          line-height: 1.75;
        }
      `}</style>
    </>
  );
}
