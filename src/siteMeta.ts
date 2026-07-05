// Single source of truth for site-wide and per-page metadata.
// Used by the React app (document titles on client navigation) and by
// scripts/prerender.mjs (static <head>, sitemap.xml, JSON-LD).

export const SITE_URL = 'https://condoclar.eu';
export const APP_URL = 'https://app.condoclar.eu';
export const SITE_NAME = 'Condoclar';

export interface PageMeta {
  /** Route path with trailing slash (except home). */
  path: string;
  title: string;
  description: string;
  ogImage: string;
  /** Pages excluded from sitemap / marked noindex (e.g. 404). */
  noindex?: boolean;
}

export const PAGES: PageMeta[] = [
  {
    path: '/',
    title: 'Condoclar — Your condominium is a community. Run it like one.',
    description:
      'Condoclar takes the busywork out of running a condominium — meetings, votes, budgets, maintenance and trusted local vendors — so neighbours can focus on their shared home, and on each other.',
    ogImage: '/media/hero-courtyard.jpg',
  },
  {
    path: '/features/',
    title: 'Features — Everything your condo needs, nothing it doesn’t | Condoclar',
    description:
      'Meetings with agendas and minutes, formal votes and ballots, transparent budgets and fees, maintenance jobs, monthly reports and a shared vendor directory — Condoclar in detail.',
    ogImage: '/media/feature-meeting.jpg',
  },
  {
    path: '/neighbours/',
    title: 'Neighbours helping neighbours — the shared vendor directory | Condoclar',
    description:
      'Good tradespeople travel by word of mouth. Condoclar lets nearby condominiums share and rate trusted vendors with each other — privately, never on the public internet.',
    ogImage: '/media/neighbours-vendor.jpg',
  },
  {
    path: '/manifesto/',
    title: 'The Condoclar Manifesto — Why we build this | Condoclar',
    description:
      'We believe a condominium is a community, not a cost centre. Read the seven beliefs behind Condoclar and why we build software that gets out of the way.',
    ogImage: '/media/manifesto-evening.jpg',
  },
  {
    path: '/404/',
    title: 'Page not found | Condoclar',
    description: 'This page doesn’t exist — but your community does. Head back home.',
    ogImage: '/media/hero-courtyard.jpg',
    noindex: true,
  },
];

export function pageForPath(pathname: string): PageMeta {
  const normalised = pathname.endsWith('/') || pathname === '/' ? pathname : `${pathname}/`;
  return PAGES.find((p) => p.path === normalised) ?? PAGES[PAGES.length - 1];
}

export interface FaqEntry {
  question: string;
  answer: string;
}

// Rendered on the home page and emitted as FAQPage JSON-LD by the prerenderer.
export const FAQ: FaqEntry[] = [
  {
    question: 'Who is Condoclar for?',
    answer:
      'Condoclar is built for the people who live in and run condominiums — owners, elected administrators and the neighbours who quietly keep everything going. If your building is self-managed, or you simply want everyone to see what’s happening, it’s for you.',
  },
  {
    question: 'Are vendor ratings public on the internet?',
    answer:
      'No. Ratings and recommendations are shared only between condominiums on Condoclar that are near each other — never published to the public internet. Your condo’s private notes about a vendor stay private to your condo.',
  },
  {
    question: 'What does Condoclar actually replace?',
    answer:
      'The group chat where decisions get lost, the spreadsheet only one person understands, the folder of PDFs nobody can find, and the meeting that runs two hours past dinner. One calm place: meetings, votes, budgets, fees, jobs, documents and reports.',
  },
  {
    question: 'How do my neighbours join?',
    answer:
      'Invite them by email, or share a join link — one tap and they’re in. Condoclar speaks English, Portuguese, Spanish, French, Italian and German, so every neighbour can use it in their own language.',
  },
  {
    question: 'Do we have to move our finances over on day one?',
    answer:
      'No. Start with whatever hurts most — meetings, a vote, or the vendor directory. When you’re ready, import your budget from a CSV and set up fee schedules. Condoclar meets your condo where it is.',
  },
];
