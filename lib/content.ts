export type NavItem = {
  href: string;
  label: string;
};

export type Organizer = {
  name: string;
  role: string;
  affiliation: string;
  email: string;
  phone: string;
  image: string;
};

export type HeroSlide = {
  src: string;
  accent: string;
  accentDark: string;
  textPrimary: string;
  textSecondary: string;
  panelTint: string;
  overlayStart: string;
  overlayEnd: string;
};

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/challenge', label: 'Challenge' },
  { href: '/task', label: 'Task' },
  { href: '/dates', label: 'Dates' },
  { href: '/rules', label: 'Rules' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/register', label: 'Register' },
];

export const challengeLink = 'https://ncvpripg2026.lnmiit.ac.in/challenges';
export const registerLink = 'https://forms.gle/7Ae8pzSb41gs843C9';
export const heroImages: HeroSlide[] = [
  {
    src: '/Hero.png',
    accent: '#5da3ff',
    accentDark: '#366fd5',
    textPrimary: '#1b528f',
    textSecondary: '#3f679c',
    panelTint: 'rgba(242, 248, 255, 0.93)',
    overlayStart: 'rgba(93, 163, 255, 0.42)',
    overlayEnd: 'rgba(44, 104, 200, 0.16)',
  },
  {
    src: '/heero.jpg',
    accent: '#6a9bff',
    accentDark: '#405ec9',
    textPrimary: '#294f98',
    textSecondary: '#4c6ca8',
    panelTint: 'rgba(241, 244, 255, 0.93)',
    overlayStart: 'rgba(106, 155, 255, 0.4)',
    overlayEnd: 'rgba(64, 94, 201, 0.16)',
  },
  {
    src: '/her010.png',
    accent: '#61c2e9',
    accentDark: '#308dc6',
    textPrimary: '#166a97',
    textSecondary: '#3f799f',
    panelTint: 'rgba(240, 252, 255, 0.92)',
    overlayStart: 'rgba(97, 194, 233, 0.38)',
    overlayEnd: 'rgba(48, 141, 198, 0.15)',
  },
  {
    src: '/hero_11.png',
    accent: '#7aa6ff',
    accentDark: '#456ddc',
    textPrimary: '#2b4f8e',
    textSecondary: '#5674a7',
    panelTint: 'rgba(244, 246, 255, 0.93)',
    overlayStart: 'rgba(122, 166, 255, 0.4)',
    overlayEnd: 'rgba(69, 109, 220, 0.16)',
  },
  {
    src: '/hero-manuscript.jpeg',
    accent: '#58a8f3',
    accentDark: '#2d73ca',
    textPrimary: '#22548b',
    textSecondary: '#4a709c',
    panelTint: 'rgba(243, 248, 255, 0.93)',
    overlayStart: 'rgba(88, 168, 243, 0.38)',
    overlayEnd: 'rgba(45, 115, 202, 0.16)',
  },
  {
    src: '/6345_0001_web.jpg',
    accent: '#4db0dd',
    accentDark: '#2f7fae',
    textPrimary: '#1d6487',
    textSecondary: '#427592',
    panelTint: 'rgba(241, 250, 255, 0.92)',
    overlayStart: 'rgba(77, 176, 221, 0.38)',
    overlayEnd: 'rgba(47, 127, 174, 0.16)',
  },
  {
    src: '/6345_0010_web.jpg',
    accent: '#8ca8ff',
    accentDark: '#536fd9',
    textPrimary: '#34548f',
    textSecondary: '#5a73a3',
    panelTint: 'rgba(245, 246, 255, 0.93)',
    overlayStart: 'rgba(140, 168, 255, 0.4)',
    overlayEnd: 'rgba(83, 111, 217, 0.16)',
  },
];

export const introParagraphs: string[] = [
  'Indic manuscripts on paper and palm-leaf exhibit extreme variability in script, calligraphic style, ink density, background texture, page geometry, and degradations such as bleed-through, stains, cracks, holes, fading, marginal notes, ornaments, and inconsistent ruling.',
  'AutoAnn-Indic proposes a challenge on automated annotation generation for Indian cultural heritage documents, combining diverse Indic manuscripts with a focused Ramcharit Manas subset to represent a realistic deployment scenario.',
  'Participants will receive curated manuscript pages, a small seed set of expert-annotated samples, and a larger unlabeled pool to support weak supervision, self-training, and active learning strategies for high-quality pre-annotation generation.',
  'The benchmark emphasizes a practical human-in-the-loop setting: submissions are judged not only by annotation quality but also by correction time per page on a hidden evaluation subset, rewarding systems that save real annotator effort.',
];

export const impactPoints: string[] = [
  'Introduces a benchmark that evaluates both annotation quality and human effort saved.',
  'Promotes low-label learning through seed annotations paired with a larger unlabeled pool.',
  'Targets robustness across severe manuscript degradations, materials, and writing styles.',
  'Supports downstream OCR, HTR, retrieval, translation, and preservation workflows.',
  'Creates reusable evaluation scripts, annotation guidelines, and standardized output formats for the community.',
];

export const tasks: { title: string; items: string[] }[] = [
  {
    title: 'Input Data',
    items: [
      'Curated Indic manuscript pages across scripts, layouts, and degradation levels.',
      'A culturally significant Ramcharit Manas subset for focused evaluation.',
      'Seed labels plus a larger unlabeled training pool for semi-supervised methods.',
    ],
  },
  {
    title: 'Expected Outputs',
    items: [
      'Layout parsing for text regions, notes, illustrations, frames, and damage areas.',
      'Text-line and baseline extraction suitable for downstream transcription pipelines.',
      'Predictions in a standard format such as PAGE-XML or COCO polygons.',
    ],
  },
  {
    title: 'Evaluation Focus',
    items: [
      'Accuracy of generated pre-annotations on a hidden evaluation subset.',
      'Human correction effort measured in seconds per page.',
      'Practical quality-cost trade-offs that reflect real annotation workflows.',
    ],
  },
];

export const dates: [string, string][] = [
  ['Challenge Proposal Submission Starts', 'January 7, 2026'],
  ['Challenge Proposal Submission Deadline', 'February 15, 2026'],
  ['Dataset Release', 'Released: Check the Resources folder in the challenge document'],
  ['Validation Phase', 'April 20, 2026 - June 15, 2026 (tentative)'],
  ['Test Release (no GT)', 'June 25, 2026 (tentative)'],
  ['Final Submission Deadline', 'July 10, 2026 (tentative)'],
  ['Winners Announcement', 'During NCVPRIPG 2026, July 22-24, 2026'],
];

export const rules: string[] = [
  'Teams should submit original work and clearly document any external pretrained models or data used.',
  'Submissions must follow the announced output format and naming conventions for evaluation.',
  'Participants should preserve the reading structure of manuscripts while detecting regions, lines, and damage.',
  'Challenge organizers may request method descriptions or reproducibility material from shortlisted teams.',
  'The final leaderboard will prioritize both annotation quality and reduction in human correction effort.',
];

export const organizers: Organizer[] = [
  {
    name: 'Dr. Indra Deep Mastan',
    role: 'Challenge Chair',
    affiliation: 'Assistant Professor, IIT (BHU) Varanasi',
    email: 'indra.cse@iitbhu.ac.in',
    phone: '+91-9687034759',
    image: '/Mastan_Sir.jpg',
  },
  {
    name: 'Dr. Anukriti Bansal',
    role: 'Co-Organizer 1 (Conference Liaison)',
    affiliation: 'Assistant Professor, LNMIIT Jaipur',
    email: 'anukriti.bansal@lnmiit.ac.in',
    phone: '+91-8287593851',
    image: '/dr-anukriti-bansal.jpg',
  },
  {
    name: 'Dr. Aprajita Khan',
    role: 'Evaluation & Baselines Lead',
    affiliation: 'Assistant Professor, IIT (BHU) Varanasi',
    email: 'aparajita.cse@iitbhu.ac.in',
    phone: '+91-7384850465',
    image: "/Aprajita_Ma'am.jpg",
  },
  {
    name: 'Satyendra Yadav',
    role: 'Annotation/Tools Lead',
    affiliation: 'Research Scholar, IIT (BHU) Varanasi',
    email: 'satyendrayadav.rs.cse25@itbhu.ac.in',
    phone: '+91 9170795435',
    image: '/Satyendra.jpg',
  },
];

export const highlightStats: [string, string][] = [
  ['Conference', 'NCVPRIPG 2026 Challenge Track'],
  ['Venue', 'LNMIIT Jaipur in association with IUPRAI'],
  ['Focus', 'Automated annotation generation for Indic manuscripts'],
];
