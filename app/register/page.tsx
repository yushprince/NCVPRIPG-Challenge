'use client';

import PageShell from '../../components/PageShell';
import SectionIntro from '../../components/SectionIntro';
import { challengeLink, registerLink } from '../../lib/content';

export default function RegisterPage() {
  return (
    <>
      <PageShell>
        <SectionIntro
          title="Register"
          intro="Register your interest through the Google Form and review the official challenge page for updates."
        >
          <div className="splitActions">
            <a href={registerLink} target="_blank" rel="noreferrer" className="button primary">
              Open Registration Form
            </a>
            <a href={challengeLink} target="_blank" rel="noreferrer" className="button ghost">
              Visit Challenge Page
            </a>
          </div>
        </SectionIntro>
      </PageShell>

      <style jsx>{`
        .splitActions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          margin-top: 1.5rem;
        }
        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0.82rem 1.24rem;
          border-radius: 999px;
          border: 1px solid transparent;
          font-weight: 800;
        }
        .primary {
          color: #fff;
          background: linear-gradient(135deg, #2f80ed, #1d4fa8);
        }
        .ghost {
          color: #1d4fa8;
          background: rgba(47, 128, 237, 0.08);
          border-color: rgba(47, 128, 237, 0.18);
        }
      `}</style>
    </>
  );
}
