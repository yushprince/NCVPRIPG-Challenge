import './globals.css';

export const metadata = {
  title: 'AutoAnn-Indic Challenge | NCVPRIPG 2026',
  description:
    'AutoAnn-Indic: Human-Effort Efficient Automated Annotation for Indic Manuscripts and Ram Charit Manas at NCVPRIPG 2026.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
