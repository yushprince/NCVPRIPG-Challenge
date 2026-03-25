'use client';

import ContactForm from '../../components/ContactForm';
import PageShell from '../../components/PageShell';
import SectionIntro from '../../components/SectionIntro';

export default function ContactPage() {
  return (
    <>
      <PageShell>
        <SectionIntro
          title="Contact Us"
          intro="Fill in your name and email, then click send message to open your default mail app with the message ready."
        >
          <div className="contactShell">
            <div className="contactInfoCard">
              <p className="eyebrow">Primary Contact</p>
              <h3>AutoAnn-Indic Organizing Team</h3>
              <p>Your mail app will open and address the message to the challenge chair.</p>
              <p className="contactMini">Recipient: indra.cse@iitbhu.ac.in</p>
            </div>
            <ContactForm />
          </div>
        </SectionIntro>
      </PageShell>

      <style jsx>{`
        .contactShell {
          display: grid;
          grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);
          gap: 1.2rem;
        }
        .contactInfoCard {
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(47, 128, 237, 0.16);
          border-radius: 24px;
          padding: 1.5rem;
          box-shadow: 0 20px 44px rgba(33, 83, 155, 0.12);
          color: #153456;
        }
        .eyebrow {
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
        .contactMini {
          color: #1d4fa8;
          font-weight: 800;
        }
        @media (max-width: 960px) {
          .contactShell {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
