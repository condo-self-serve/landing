// The full copy deck for one locale. Every user-visible string on the site
// lives in one of these objects — pages contain structure, never prose.

export interface PageMetaCopy {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  body: string;
  /** The bolded "So …" benefit line rendered after the body. */
  so: string;
}

export interface ClusterCopy {
  eyebrow: string;
  title: string;
  intro: string;
  imageAlt: string;
  features: FeatureItem[];
}

export interface CtaCopy {
  title: string;
  body: string;
  button: string;
}

/** The page for management companies. Optional until every locale has it: a locale without it has no such page. */
export interface CompanyCopy {
  heroEyebrow: string;
  heroTitle: string;
  heroLede: string;
  heroAlt: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** Accessible name of the explainer video, and the line under it. */
  videoLabel: string;
  videoCaption: string;
  painEyebrow: string;
  painTitle: string;
  pains: { kicker: string; title: string; body: string }[];
  howEyebrow: string;
  howTitle: string;
  steps: { title: string; body: string }[];
  clusters: ClusterCopy[];
  startEyebrow: string;
  startTitle: string;
  start: { title: string; body: string }[];
  faqEyebrow: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  cta: CtaCopy;
  /** The "Book a demo" form. */
  demo: {
    title: string;
    intro: string;
    name: string;
    nameRequired: string;
    email: string;
    emailRequired: string;
    company: string;
    buildings: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    note: string;
    sentTitle: string;
    sentBody: string;
    close: string;
    error: string;
    errorBusy: string;
  };
}

export interface Copy {
  /** The language's own name for itself — shown in the switcher. */
  langName: string;

  meta: {
    home: PageMetaCopy;
    features: PageMetaCopy;
    neighbours: PageMetaCopy;
    manifesto: PageMetaCopy;
    notFound: PageMetaCopy;
    company?: PageMetaCopy;
  };

  header: {
    /** Menu label for the management company page, where the locale has one. */
    company?: string;
    why: string;
    features: string;
    neighbours: string;
    manifesto: string;
    openApp: string;
    languageLabel: string;
  };

  /** Shown instead of opening the app while sign-ups are paused for the redesign. */
  comingSoon: {
    eyebrow: string;
    title: string;
    body: string;
    comeBack: string;
    button: string;
  };

  footer: {
    tagline: string;
    why: string;
    features: string;
    neighbours: string;
    manifesto: string;
    openApp: string;
    help: string;
    legal: string;
  };

  home: {
    heroAlt: string;
    heroLine1: string;
    heroLine2Pre: string;
    heroAccent: string;
    heroLede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    whyEyebrow: string;
    whyTitle1: string;
    whyTitle2: string;
    whyLede: string;
    /** titleAccent, when set, is rendered before title with the golden
     *  accent-underline highlight (same treatment as the hero). */
    golden: { label: string; titleAccent?: string; title: string; body: string }[];
    peekEyebrow: string;
    peekTitle: string;
    peekAlt: string;
    peekCaption: string;
    quote: string;
    quoteCite: string;
    momentsEyebrow: string;
    momentsTitle: string;
    moments: { kicker: string; title: string; body: string }[];
    teaserEyebrow: string;
    teaserTitle: string;
    teaserProse: string;
    teaserImgAlt: string;
    privacyPre: string;
    privacyStrong: string;
    privacyPost: string;
    teaserLink: string;
    faqEyebrow: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
    cta: CtaCopy;
  };

  features: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    heroAlt: string;
    clusters: ClusterCopy[];
    quote: string;
    cta: CtaCopy;
  };

  neighbours: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    heroAlt: string;
    oldEyebrow: string;
    oldTitle: string;
    oldP1: string;
    oldP2: string;
    wayEyebrow: string;
    wayTitle: string;
    steps: { title: string; body: string }[];
    proofEyebrow: string;
    proofTitle: string;
    proofP1: string;
    proofP2: string;
    proofButton: string;
    proofImgAlt: string;
    trustEyebrow: string;
    trustTitle: string;
    trust: { kicker: string; title: string; body: string }[];
    bandAlt: string;
    bandCaption: string;
    cta: CtaCopy;
  };

  manifesto: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    heroAlt: string;
    beliefs: { title: string; body: string }[];
    bandAlt: string;
    bandCaption: string;
    quote: string;
    quoteCite: string;
    cta: CtaCopy;
  };

  notFound: {
    title: string;
    lede: string;
    button: string;
  };

  company?: CompanyCopy;
}
