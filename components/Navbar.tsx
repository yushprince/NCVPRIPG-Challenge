'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '../lib/content';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.topNav}>
      <Link href="/" className={styles.brand}>
        <span className={styles.brandPulse} aria-hidden="true" />
        <span>AutoAnn-Indic</span>
      </Link>

      <ul role="list" className={styles.list}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive ? `${styles.navLink} ${styles.activeNav}` : styles.navLink}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className={styles.navText}>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
