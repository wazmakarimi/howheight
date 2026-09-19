import type { CalculatorTranslationData } from './types';

export const enCalculator: CalculatorTranslationData = {
  seo: {
    title: 'Height Difference Calculator | Compare Statures & Percentages | HowHeight',
    description: 'Calculate the exact physical height difference between two people, couples, or objects in centimeters, feet, and inches. Compute percentage difference and visual stature gap with HowHeight.',
  },
  badge: 'Precision Height Measurement Tool',
  h1: 'Height Difference Calculator',
  subtitle: 'Calculate the exact physical height difference between two people, partners, or objects with instant metric and imperial conversions.',
  personA: 'Person / Item A',
  personB: 'Person / Item B',
  nameLabel: 'Name / Label',
  defaultNameA: 'Person 1',
  defaultNameB: 'Person 2',
  heightCmLabel: 'Height (Centimeters)',
  feetLabel: 'Feet',
  inchesLabel: 'Inches',
  resultTitle: 'Calculation Result',
  statCm: 'Centimeters',
  statIn: 'Inches',
  statFt: 'Feet & Inches',
  statPct: '% Difference',
  ctaButton: 'Compare Visually on Comparison Canvas',
  sameHeightHeadline: 'Exact Same Height (0 cm)',
  sameHeightStatement: '{nameA} and {nameB} stand at the exact same stature of {cm} cm ({ftIn}).',
  tallerStatement: '{nameA} is {diffCm} cm ({diffIn} in) taller than {nameB} ({pctDiff}% height difference).',
  diffHeadline: '{diffCm} cm Difference ({diffIn} inches)',
  tableTitle: 'Common Couple & Human Height Differences',
  tableSubtitle: 'Here is what standard real-world height differences feel like in side-by-side standing posture:',
  thGap: 'Height Gap',
  thAppearance: 'Visual Appearance',
  thEffect: 'Eye-Level & Posture Effect',
  tableRows: [
    {
      gap: "2.5 cm (1 in)",
      appearance: 'Subtle / Negligible',
      effect: 'Virtually equal standing eye level; affected by footwear sole thickness.',
    },
    {
      gap: "7.5 cm (3 in)",
      appearance: 'Easily noticeable',
      effect: 'Top of head aligns with mid-forehead of taller person.',
    },
    {
      gap: "13 cm (5.1 in)",
      appearance: 'Average Couple Gap',
      effect: 'Standard worldwide male-to-female height difference (175 cm vs 162 cm).',
    },
    {
      gap: "20 cm (8 in)",
      appearance: 'Prominent contrast',
      effect: "Shorter person's eye level aligns directly with taller person's mouth or chin.",
    },
    {
      gap: "30 cm (12 in)",
      appearance: 'Striking contrast',
      effect: "Top of shorter person's head rests at taller person's shoulder collarbone.",
    },
  ],
  faqs: [
    {
      question: 'How is the height difference calculated?',
      answer: 'The calculator converts both input heights into standardized decimal centimeters, computes the absolute difference, and converts the result into inches, feet, meters, and relative percentage.',
    },
    {
      question: 'What is considered a significant height difference between two people?',
      answer: 'In anthropometric research, a difference of 5 to 7 cm (2 to 3 inches) is visually noticeable side-by-side. A difference of 15 cm (6 inches) or more creates an unmistakable contrast in shoulder line and eye level.',
    },
    {
      question: 'Can I visualize this height difference on the comparison canvas?',
      answer: 'Yes! Click the "Compare Visually on Comparison Canvas" button after calculating, and both heights will instantly load onto the interactive HowHeight comparison canvas.',
    },
    {
      question: 'How do I convert between centimeters and feet/inches?',
      answer: '1 inch = 2.54 cm. 1 foot = 12 inches = 30.48 cm. To convert cm to inches, divide by 2.54. Our calculator performs this conversion in real-time with zero rounding errors.',
    },
  ],
};
