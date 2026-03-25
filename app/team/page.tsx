'use client';

import Image from 'next/image';
import PageShell from '../../components/PageShell';
import SectionIntro from '../../components/SectionIntro';
import { organizers } from '../../lib/content';

export default function TeamPage() {
  return (
    <>
      <PageShell>
        <SectionIntro
          title="Team"
          intro="The challenge is coordinated by faculty and research leaders from IIT (BHU) Varanasi and LNMIIT Jaipur."
        >
          <div className="teamStrip">
            {organizers.map((organizer) => (
              <article className="teamMiniCard" key={organizer.email}>
                <div className="memberPhoto">
                  <Image
                    src={organizer.image}
                    alt={organizer.name}
                    width={320}
                    height={320}
                  />
                </div>
                <p className="eyebrow">{organizer.role}</p>
                <h3>{organizer.name}</h3>
                <p>{organizer.affiliation}</p>
                <a href={`mailto:${organizer.email}`}>{organizer.email}</a>
                <p>{organizer.phone}</p>
              </article>
            ))}
          </div>
        </SectionIntro>
      </PageShell>

      <style jsx>{`
        .teamStrip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
        }
        .teamMiniCard {
          text-align: center;
          padding: 1.15rem;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(47, 128, 237, 0.16);
          border-radius: 24px;
          box-shadow: 0 20px 44px rgba(33, 83, 155, 0.12);
          color: #153456;
        }
        .memberPhoto {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 18px;
          margin-bottom: 0.9rem;
          border: 1px solid rgba(47, 128, 237, 0.16);
          background: linear-gradient(180deg, rgba(223, 236, 255, 0.92), rgba(240, 247, 255, 0.98));
        }
        .memberPhoto :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .eyebrow {
          min-height: 2.6rem;
          color: #1d4fa8;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        h3 {
          margin: 0;
          color: #0d2340;
          font-weight: 800;
        }
        a {
          color: #1d4fa8;
          font-weight: 800;
        }
        p {
          line-height: 1.7;
        }
        @media (max-width: 960px) {
          .teamStrip {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
