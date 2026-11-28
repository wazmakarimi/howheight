/**
 * Localized body content for a category landing page. Mirrors the English
 * fields of CategoryDefinition that carry prose: measurement anchor/guide,
 * the tool measurement note, common-height row labels/notes (aligned by
 * index with the base category's rows), FAQs and editorial sections.
 * Structure (counts and order) must match the English base exactly.
 */
export interface CategoryLocaleContent {
  measurementAnchor: string;
  measurementGuide: string;
  measurementNote?: string;
  commonHeights: Array<{ label: string; note: string }>;
  faqs: Array<{ question: string; answer: string }>;
  editorialSections: Array<{ heading: string; paragraphs: string[] }>;
}
