export interface CalculatorTableRow {
  gap: string;
  appearance: string;
  effect: string;
}

export interface CalculatorFaq {
  question: string;
  answer: string;
}

export interface CalculatorTranslationData {
  seo: {
    title: string;
    description: string;
  };
  badge: string;
  h1: string;
  subtitle: string;
  personA: string;
  personB: string;
  nameLabel: string;
  defaultNameA: string;
  defaultNameB: string;
  heightCmLabel: string;
  feetLabel: string;
  inchesLabel: string;
  resultTitle: string;
  statCm: string;
  statIn: string;
  statFt: string;
  statPct: string;
  ctaButton: string;
  sameHeightHeadline: string;
  sameHeightStatement: string;
  tallerStatement: string;
  diffHeadline: string;
  tableTitle: string;
  tableSubtitle: string;
  thGap: string;
  thAppearance: string;
  thEffect: string;
  tableRows: CalculatorTableRow[];
  faqs: CalculatorFaq[];
}
