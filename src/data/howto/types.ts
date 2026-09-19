export interface HowToStep {
  number: number;
  title: string;
  description: string;
}

export interface HowToSection {
  id: string;
  heading: string;
  paragraphs: string[];
  steps?: HowToStep[];
  bulletPoints?: string[];
  callout?: {
    type: 'tip' | 'note' | 'info';
    text: string;
  };
  link?: {
    text: string;
    href: string;
  };
}

export interface HowToGuideData {
  locale: string;
  title: string;
  subtitle: string;
  badge: string;
  metaDescription: string;
  readTime: string;
  tocTitle: string;
  intro: {
    lead: string;
    paragraphs: string[];
  };
  sections: HowToSection[];
  faqTransition: {
    badge: string;
    heading: string;
    text: string;
    ctaText: string;
    ctaHref: string;
  };
  finalCta: {
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    secondaryText: string;
    secondaryHref: string;
  };
}
