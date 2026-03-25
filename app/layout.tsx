import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'AutoAnn-Indic Challenge | NCVPRIPG 2026',
  description:
    'AutoAnn-Indic: Human-Effort Efficient Automated Annotation for Indic Manuscripts and Ramcharit Manas at NCVPRIPG 2026.',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
