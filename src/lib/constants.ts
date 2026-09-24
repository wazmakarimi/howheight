export type EntityCategory =
  | 'male'
  | 'female'
  | 'apparel'
  | 'animals'
  | 'objects'
  | 'fictional'
  | 'plants'
  | 'sports'
  | 'anime'
  | 'films'
  | 'celebrities'
  | 'custom'
  // Backward-compatible category aliases
  | 'human'
  | 'animal'
  | 'object'
  | 'celebrity'
  | 'plant';

export interface ComparisonItem {
  id: string;
  category: EntityCategory;
  assetId?: string;
  name: string;
  heightCm: number;
  color: string;
  opacity?: number;
  gender?: 'male' | 'female';
  animalType?: string;
  objectType?: string;
  celebrityId?: string;
  profession?: string;
  referenceHeightCm?: number;
  isCustomHeight?: boolean;
  positionX?: number;
  customImageUrl?: string;
  customImageAspect?: number;
  isCustomUpload?: boolean;
  publicPath?: string;
  viewBox?: string;
  measurementAnchor?: { groundY: number; measurementY: number } | null;
  isPng?: boolean;
}

// Backward-compatible alias for codebase integrity
export type Person = ComparisonItem;
export type { PublicEntity, CustomEntity, ComparisonEntity } from '../types/entity';

export type SortMode = 'added' | 'height-asc' | 'height-desc';
export type RulerUnit = 'cm' | 'ft';

export interface AppState {
  people: ComparisonItem[];
  editingId: string | null;
  selectedId: string | null;
  sortMode: SortMode;
  rulerUnit: RulerUnit;
  positionMode: 'auto' | 'manual';
  zoomLevel: number;
}

export interface InteractionState {
  mode: 'none' | 'dragging' | 'resizing';
  itemId: string | null;
  startX: number;
  startY: number;
  initialPositionX: number;
  initialHeightCm: number;
}

export const PRESET_COLORS = [
  { name: 'Blue', value: '#2563eb' },
  { name: 'Purple', value: '#9333ea' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Green', value: '#16a34a' },
  { name: 'Amber/Brown', value: '#b45309' },
  { name: 'Orange', value: '#ea580c' },
  { name: 'Red', value: '#dc2626' },
  { name: 'Slate', value: '#334155' },
];

export const INITIAL_PEOPLE: ComparisonItem[] = [
  {
    id: 'demo-john',
    assetId: 'male-010',
    category: 'male',
    name: 'Average Male',
    heightCm: 175,
    referenceHeightCm: 175,
    color: '#2563eb', // Blue
  },
  {
    id: 'demo-sarah',
    assetId: 'female-01',
    category: 'female',
    name: 'Average Female',
    heightCm: 163,
    referenceHeightCm: 163,
    color: '#ec4899', // Pink
  },
  {
    id: 'demo-horse',
    assetId: 'animal-048',
    category: 'animals',
    name: 'Domestic Horse',
    animalType: 'horse',
    heightCm: 160,
    referenceHeightCm: 160,
    color: '#b45309', // Brown
  },
  {
    id: 'demo-door',
    assetId: 'object-016',
    category: 'objects',
    name: 'Doorframe',
    objectType: 'door',
    heightCm: 245,
    referenceHeightCm: 245,
    color: '#334155', // Slate
  },
  {
    id: 'demo-dog',
    assetId: 'animal-018',
    category: 'animals',
    name: 'Domestic Dog',
    animalType: 'dog',
    heightCm: 55,
    referenceHeightCm: 55,
    color: '#16a34a', // Green
  },
];

export const CATEGORY_DEFINITIONS = [
  { id: 'male', label: 'Male', icon: 'user' },
  { id: 'female', label: 'Female', icon: 'user' },
  { id: 'apparel', label: 'Apparel', icon: 'shirt' },
  { id: 'animals', label: 'Animals', icon: 'paw' },
  { id: 'objects', label: 'Objects', icon: 'box' },
  { id: 'fictional', label: 'Fictional', icon: 'sparkles' },
  { id: 'plants', label: 'Plants', icon: 'tree' },
  { id: 'sports', label: 'Sports', icon: 'trophy' },
  { id: 'anime', label: 'Anime', icon: 'tv' },
  { id: 'films', label: 'Films', icon: 'film' },
  { id: 'celebrities', label: 'Celebrities', icon: 'star' },
] as const;

export const QUICK_PRESETS = [
  {
    id: 'men-vs-women',
    label: 'Men vs Women',
    description: 'Average male (175 cm) vs average female (163 cm)',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Average Male', heightCm: 175, color: '#2563eb' },
      { category: 'female' as const, assetId: 'female-01', name: 'Average Female', heightCm: 163, color: '#ec4899' },
    ],
  },
  {
    id: 'couple-height',
    label: 'Couple Height',
    description: 'Tall male partner (182 cm) with female partner (165 cm)',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Partner A (Male)', heightCm: 182, color: '#2563eb' },
      { category: 'female' as const, assetId: 'female-01', name: 'Partner B (Female)', heightCm: 165, color: '#ec4899' },
    ],
  },
  {
    id: 'basketball-hoop',
    label: 'Basketball Hoop Height',
    description: 'Official regulation basketball rim (410 cm) vs male (175 cm)',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Male', heightCm: 175, color: '#2563eb' },
      { category: 'objects' as const, assetId: 'object-004', name: 'Basketball Hoop', heightCm: 410, color: '#ea580c' },
    ],
  },
  {
    id: 'dinosaur-height',
    label: 'Dinosaur Height',
    description: 'War Elephant / Prehistoric creature compared to human (175 cm)',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Human', heightCm: 175, color: '#2563eb' },
      { category: 'fictional' as const, assetId: 'fictional-103', name: 'War Elephant', heightCm: 180, color: '#16a34a' },
    ],
  },
  {
    id: 'blue-whale',
    label: 'Elephant Comparison',
    description: 'Mammoth (335 cm) vs male height (175 cm)',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Human', heightCm: 175, color: '#2563eb' },
      { category: 'animals' as const, assetId: 'animal-118', name: 'Mammoth', heightCm: 335, color: '#0284c7' },
    ],
  },
];

// Preserved for backward compatibility with existing quick-compare components
export const QUICK_COMPARE_HUMAN_PRESETS = [
  {
    label: '5 ft vs 6 ft',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Person A', heightCm: 152.4, color: '#2563eb' },
      { category: 'female' as const, assetId: 'female-01', name: 'Person B', heightCm: 182.88, color: '#ec4899' },
    ],
  },
  {
    label: "5'4\" vs 5'10\"",
    items: [
      { category: 'female' as const, assetId: 'female-01', name: 'Emma', heightCm: 162.56, color: '#9333ea' },
      { category: 'male' as const, assetId: 'male-010', name: 'Liam', heightCm: 177.8, color: '#0284c7' },
    ],
  },
  {
    label: '160 cm vs 180 cm',
    items: [
      { category: 'female' as const, assetId: 'female-01', name: 'Elena', heightCm: 160, color: '#ea580c' },
      { category: 'male' as const, assetId: 'male-010', name: 'Marcus', heightCm: 180, color: '#16a34a' },
    ],
  },
];

export const QUICK_COMPARE_ANIMAL_PRESETS = [
  {
    label: 'Human vs Dog',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Male', heightCm: 175, color: '#2563eb' },
      { category: 'animals' as const, assetId: 'animal-018', name: 'Domestic Dog', heightCm: 55, color: '#16a34a' },
    ],
  },
  {
    label: 'Human vs Horse',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Male', heightCm: 175, color: '#2563eb' },
      { category: 'animals' as const, assetId: 'animal-048', name: 'Domestic Horse', heightCm: 160, color: '#b45309' },
    ],
  },
  {
    label: 'Human vs Elephant',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Male', heightCm: 175, color: '#2563eb' },
      { category: 'animals' as const, assetId: 'animal-118', name: 'Mammoth', heightCm: 335, color: '#475569' },
    ],
  },
  {
    label: 'Dog vs Cat',
    items: [
      { category: 'animals' as const, assetId: 'animal-018', name: 'Dog', heightCm: 55, color: '#16a34a' },
      { category: 'animals' as const, assetId: 'animal-028', name: 'Domestic Cat', heightCm: 25, color: '#9333ea' },
    ],
  },
];

export const QUICK_COMPARE_OBJECT_PRESETS = [
  {
    label: 'Human vs Door',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Male', heightCm: 175, color: '#2563eb' },
      { category: 'objects' as const, assetId: 'object-016', name: 'Doorframe', heightCm: 245, color: '#334155' },
    ],
  },
  {
    label: 'Human vs Car',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Male', heightCm: 175, color: '#2563eb' },
      { category: 'objects' as const, assetId: 'object-114', name: 'Car', heightCm: 145, color: '#dc2626' },
    ],
  },
  {
    label: 'Human vs Basketball Hoop',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Male', heightCm: 175, color: '#2563eb' },
      { category: 'objects' as const, assetId: 'object-004', name: 'Basketball Hoop', heightCm: 410, color: '#ea580c' },
    ],
  },
];

export const QUICK_COMPARE_CELEBRITY_PRESETS = [
  {
    label: 'Dwayne Johnson vs Horse',
    items: [
      { category: 'celebrities' as const, assetId: 'celebrity-012', name: 'Dwayne Johnson', heightCm: 196, color: '#2563eb' },
      { category: 'animals' as const, assetId: 'animal-048', name: 'Domestic Horse', heightCm: 160, color: '#b45309' },
    ],
  },
  {
    label: 'Tom Cruise vs Dwayne Johnson',
    items: [
      { category: 'celebrities' as const, assetId: 'celebrity-040', name: 'Tom Cruise', heightCm: 170, color: '#16a34a' },
      { category: 'celebrities' as const, assetId: 'celebrity-012', name: 'Dwayne Johnson', heightCm: 196, color: '#2563eb' },
    ],
  },
  {
    label: 'Virat Kohli vs MS Dhoni',
    items: [
      { category: 'male' as const, assetId: 'male-010', name: 'Virat Kohli', heightCm: 175, color: '#ea580c' },
      { category: 'male' as const, assetId: 'male-010', name: 'MS Dhoni', heightCm: 178, color: '#0284c7' },
    ],
  },
];

export const BENCHMARK_SCALE_PRESET = {
  label: 'Full Benchmark Scale (8 Categories)',
  items: [
    { category: 'male' as const, assetId: 'male-01', name: 'Male', heightCm: 175, color: '#2563eb' },
    { category: 'female' as const, assetId: 'female-01', name: 'Female', heightCm: 163, color: '#ec4899' },
    { category: 'apparel' as const, assetId: 'apparel-01', name: 'T-Shirt', heightCm: 72, color: '#0284c7' },
    { category: 'animals' as const, assetId: 'animal-dog-01', name: 'Dog', heightCm: 60, color: '#16a34a' },
    { category: 'objects' as const, assetId: 'object-door-01', name: 'Door', heightCm: 210, color: '#334155' },
    { category: 'fictional' as const, assetId: 'fictional-dinosaur-01', name: 'T-Rex', heightCm: 400, color: '#b45309' },
    { category: 'plants' as const, assetId: 'plant-sunflower-01', name: 'Sunflower', heightCm: 200, color: '#ea580c' },
    { category: 'sports' as const, assetId: 'sports-basketball-hoop-01', name: 'Hoop', heightCm: 305, color: '#dc2626' },
  ],
};

export const LIMITS = {
  MIN_HEIGHT_CM: 15,
  MAX_HEIGHT_CM: 5000,
  MIN_FEET: 0,
  MAX_FEET: 164,
  MIN_INCHES: 0,
  MAX_INCHES: 11,
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 50,
  MAX_VISUAL_HEIGHT_PX: 640,
};
