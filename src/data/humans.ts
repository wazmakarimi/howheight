export interface HumanDefinition {
  id: string;
  slug: string;
  name: string;
  category: 'human';
  gender: 'male' | 'female';
  typicalHeightCm: number;
  minHeightCm: number;
  maxHeightCm: number;
  helpText: string;
  modelType: 'male' | 'female';
  measurementDefinition: string;
  bioSnippet: string;
  indexable: boolean;
  color: string;
  percentiles?: Array<{ label: string; cm: number; ftIn: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}

export const HUMANS: HumanDefinition[] = [
  {
    id: 'male',
    slug: 'male',
    name: 'Average Adult Male',
    category: 'human',
    gender: 'male',
    typicalHeightCm: 176,
    minHeightCm: 145,
    maxHeightCm: 215,
    helpText: 'Global adult male height benchmark (5 ft 9.3 in). Measured from floor to the top of the skull with bare feet.',
    modelType: 'male',
    measurementDefinition: 'Floor to the top of the head (vertex) standing erect without footwear.',
    bioSnippet: 'The global benchmark for adult male stature sits between 175 cm and 178 cm across North America, Europe, and international health registries. Stature correlates with physiological genetics, childhood nutrition, and biological developmental milestones.',
    indexable: true,
    color: '#2563eb',
    percentiles: [
      { label: '5th Percentile', cm: 165, ftIn: "5'5\"" },
      { label: '25th Percentile', cm: 171, ftIn: "5'7.3\"" },
      { label: '50th Percentile (Median)', cm: 176, ftIn: "5'9.3\"" },
      { label: '75th Percentile', cm: 181, ftIn: "5'11.3\"" },
      { label: '95th Percentile', cm: 188, ftIn: "6'2\"" },
    ],
    faqs: [
      {
        question: 'What is the average adult male height worldwide?',
        answer: 'The global median adult male height is approximately 176 cm (5 ft 9.3 in), varying from ~168 cm in certain Southeast Asian regions to ~183 cm in parts of Northern and Central Europe (such as the Netherlands and Scandinavia).'
      },
      {
        question: 'How is human height measured accurately?',
        answer: 'Human height is measured with a stadiometer or vertical wall ruler from the floor baseline to the highest point of the skull (vertex), with shoes removed, heels against the wall, and the head positioned along the Frankfort horizontal plane.'
      },
      {
        question: 'How does an average male compare to common objects?',
        answer: 'An average 176 cm male stands approximately 34 cm below a standard 210 cm doorway, roughly 26 cm above a 150 cm crossover automobile, and twice as tall as an 88 cm kitchen counter.'
      }
    ]
  },
  {
    id: 'female',
    slug: 'female',
    name: 'Average Adult Female',
    category: 'human',
    gender: 'female',
    typicalHeightCm: 162,
    minHeightCm: 135,
    maxHeightCm: 200,
    helpText: 'Global adult female height benchmark (5 ft 3.8 in). Measured from floor to vertex in stocking feet.',
    modelType: 'female',
    measurementDefinition: 'Floor to the top of the head (vertex) standing straight without heels or footwear.',
    bioSnippet: 'The worldwide benchmark for adult female stature averages approximately 162 cm (5 ft 3.8 in), reflecting sexual dimorphic skeletal architecture, epiphyseal fusion timing, and genetic variance.',
    indexable: true,
    color: '#ec4899',
    percentiles: [
      { label: '5th Percentile', cm: 152, ftIn: "5'0\"" },
      { label: '25th Percentile', cm: 157, ftIn: "5'1.8\"" },
      { label: '50th Percentile (Median)', cm: 162, ftIn: "5'3.8\"" },
      { label: '75th Percentile', cm: 167, ftIn: "5'5.7\"" },
      { label: '95th Percentile', cm: 173, ftIn: "5'8.1\"" },
    ],
    faqs: [
      {
        question: 'What is the average adult female height worldwide?',
        answer: 'The global median adult female height is approximately 162 cm (5 ft 3.8 in), with regional medians typically spanning between 154 cm and 170 cm.'
      },
      {
        question: 'What is the typical height difference between adult males and females?',
        answer: 'On average globally, adult males are approximately 14 cm (5.5 inches) taller than adult females due to sexual dimorphism in human skeletal growth periods.'
      },
      {
        question: 'How does an average female compare to typical animals?',
        answer: 'A 162 cm female stands slightly taller than a standard riding horse withers (160 cm), approximately 100 cm taller than a Golden Retriever (60 cm withers), and about 48 cm below a standard interior door.'
      }
    ]
  },
];

export function getHumanDefinition(idOrSlug: string): HumanDefinition | undefined {
  const normalized = idOrSlug.toLowerCase().trim();
  return HUMANS.find((h) => h.id === normalized || h.slug === normalized);
}
