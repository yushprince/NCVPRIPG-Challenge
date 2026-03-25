import type { ReactNode } from 'react';
import styles from './SectionIntro.module.css';

type SectionIntroProps = {
  title: string;
  intro?: string;
  children: ReactNode;
  alt?: boolean;
};

export default function SectionIntro({
  title,
  intro,
  children,
  alt = false,
}: SectionIntroProps) {
  return (
    <section className={alt ? `${styles.section} ${styles.alt}` : styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionLead}>
          <p className={styles.eyebrow}>AutoAnn-Indic</p>
          <h1 className={styles.title}>{title}</h1>
          {intro ? <p className={styles.leadCopy}>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
