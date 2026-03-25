'use client';
import styles from './Footer.module.css';

const footerLinks = {
  Challenge: [
    { label: 'Overview',       href: '/challenge' },
    { label: 'Task Details',   href: '/task' },
    { label: 'Important Dates',href: '/dates' },
    { label: 'Rules',          href: '/rules' },
  ],
  Resources: [
    { label: 'Dataset',        href: '/dataset' },
    { label: 'Leaderboard',    href: '/leaderboard' },
    { label: 'Submission',     href: '/submission' },
    { label: 'FAQ',            href: '/faq' },
  ],
  About: [
    { label: 'Organizing Team',href: '/team' },
    { label: 'Contact',        href: '/contact' },
    { label: 'NCVPRIPG 2026',  href: 'https://ncvpripg2026.iitbhu.ac.in', },
    { label: 'IIT BHU',        href: 'https://iitbhu.ac.in' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <span className={styles.footerBrandName}>AutoAnn-Indic</span>
            <p>
              NCVPRIPG 2026 challenge on human-effort efficient automated
              annotation for Indic manuscripts and Ramcharit Manas.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div className={styles.footerCol} key={heading}>
              <h4>{heading}</h4>
              <ul>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(href.startsWith('http')
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footerBottom}>
          <p>
            © 2026{' '}
            <a href="https://iitbhu.ac.in" target="_blank" rel="noreferrer">
              IIT (BHU) Varanasi
            </a>{' '}
            &amp; LNMIIT Jaipur · July 22-24, 2026
          </p>

          <span className={styles.footerMade}>Made for manuscript preservation</span>
        </div>
      </div>
    </footer>
  );
}
