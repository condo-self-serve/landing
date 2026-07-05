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

export interface Copy {
  /** The language's own name for itself — shown in the switcher. */
  langName: string;

  meta: {
    home: PageMetaCopy;
    features: PageMetaCopy;
    neighbours: PageMetaCopy;
    manifesto: PageMetaCopy;
    notFound: PageMetaCopy;
  };

  header: {
    why: string;
    features: string;
    neighbours: string;
    manifesto: string;
    openApp: string;
    languageLabel: string;
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
    golden: { label: string; title: string; body: string }[];
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
}
