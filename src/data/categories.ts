import type { EntityCategory } from '../lib/constants';

export interface CategoryDefinition {
  id: string;
  slug: string;
  name: string;
  h1: string;
  route: string;
  entityCategoryKey: EntityCategory;
  secondaryCategoryKey?: EntityCategory;
  title: string;
  description: string;
  badge: string;
  measurementAnchor: string;
  measurementGuide: string;
  commonHeights: Array<{ label: string; heightCm: number; imperial: string; note: string }>;
  faqs: Array<{ question: string; answer: string }>;
  indexable?: boolean;
}

export const CATEGORIES: CategoryDefinition[] = [
  {
    id: 'people',
    slug: 'people-height-comparison',
    name: 'People',
    h1: 'People Height Comparison',
    route: '/people-height-comparison/',
    entityCategoryKey: 'male',
    secondaryCategoryKey: 'female',
    title: 'People Height Comparison | HowHeight',
    description: 'Compare adult male and female human heights side-by-side using mathematically accurate anatomical silhouettes aligned to an identical floor baseline.',
    badge: 'Anthropometric Reference',
    measurementAnchor: 'Crown to Soles (Barefoot standing stature)',
    measurementGuide: 'Human heights are measured vertically from the lowest plane of the heels (calcaneus) to the highest point of the skull (vertex) with the subject standing erect without footwear.',
    commonHeights: [
      { label: 'Global Female Average', heightCm: 162, imperial: '5\'4"', note: 'Worldwide median adult female height' },
      { label: 'Global Male Average', heightCm: 175, imperial: '5\'9"', note: 'Worldwide median adult male height' },
      { label: 'US/EU Male Average', heightCm: 178, imperial: '5\'10"', note: 'North American & European adult male mean' },
      { label: 'Dutch Male Average', heightCm: 184, imperial: '6\'0.5"', note: 'Highest national average stature globally' },
      { label: 'Tall Benchmark (6 ft)', heightCm: 183, imperial: '6\'0"', note: 'Standard colloquial height threshold' },
    ],
    faqs: [
      {
        question: 'How is human height measured on HowHeight?',
        answer: 'Heights are represented according to standardized anthropometric protocol: vertical barefoot stature from vertex to heels, calibrated in centimeters and feet/inches.',
      },
      {
        question: 'Can I compare men and women side-by-side?',
        answer: 'Yes! You can select distinct male and female anatomical silhouettes, each proportionally scaled to their exact specified height.',
      },
      {
        question: 'What is the average human height globally?',
        answer: 'Globally, the average adult male height is approximately 175 cm (5 ft 9 in), while the average adult female height is approximately 162 cm (5 ft 4 in).',
      },
    ],
  },
  {
    id: 'celebrities',
    slug: 'celebrity-height-comparison',
    name: 'Celebrities',
    h1: 'Celebrity Height Comparison',
    route: '/celebrity-height-comparison/',
    entityCategoryKey: 'celebrities',
    title: 'Celebrity Height Comparison | HowHeight',
    description: 'Compare verified heights of Hollywood actors, Bollywood stars, world-class athletes, and musicians with accurate visual models standing on an aligned baseline.',
    badge: 'Verified Stature Directory',
    measurementAnchor: 'Official standing stature documentation',
    measurementGuide: 'Celebrity heights are compiled from official sports combines, medical records, draft measurements, and verified public biographies.',
    commonHeights: [
      { label: 'Tom Cruise', heightCm: 170, imperial: '5\'7"', note: 'Acclaimed action superstar & Top Gun actor' },
      { label: 'Shah Rukh Khan', heightCm: 173, imperial: '5\'8"', note: 'King of Bollywood cinema' },
      { label: 'Virat Kohli', heightCm: 175, imperial: '5\'9"', note: 'World cricket batting record holder' },
      { label: 'Brad Pitt', heightCm: 180, imperial: '5\'11"', note: 'Academy Award-winning Hollywood lead' },
      { label: 'Dwayne Johnson', heightCm: 196, imperial: '6\'5"', note: 'WWE Champion & blockbuster Hollywood star' },
    ],
    faqs: [
      {
        question: 'Where do the celebrity height figures come from?',
        answer: 'We curate height data from verified athletic combine records (NBA, NFL, cricket boards), agency booking sheets, and verified biographical archives with cross-examination.',
      },
      {
        question: 'Can I compare celebrities against myself or everyday objects?',
        answer: 'Yes! The HowHeight comparison tool lets you mix celebrities with standard human models, animals, doors, sedans, and more on the same canvas.',
      },
      {
        question: 'Who is the tallest verified celebrity on the platform?',
        answer: 'In our verified public figure directory, Dwayne \'The Rock\' Johnson stands at 196 cm (6\'5"), while Amitabh Bachchan stands at 188 cm (6\'2").',
      },
    ],
  },
  {
    id: 'anime',
    slug: 'anime-height-comparison',
    name: 'Anime',
    h1: 'Anime Character Height Comparison',
    route: '/anime-height-comparison/',
    entityCategoryKey: 'anime',
    title: 'Anime Character Height Comparison | HowHeight',
    description: 'Compare official heights of popular anime and manga characters side-by-side. Discover canonical heights from Shonen Jump, studio databooks, and canon lore.',
    badge: 'Canonical Lore Database',
    measurementAnchor: 'Official Databook Standing Stature',
    measurementGuide: 'Anime character heights are derived from official franchise databooks, manga author notes, and canon character design sheets.',
    commonHeights: [
      { label: 'Edward Elric', heightCm: 149, imperial: '4\'11"', note: 'Fullmetal Alchemist (early series stature)' },
      { label: 'Monkey D. Luffy', heightCm: 174, imperial: '5\'8.5"', note: 'One Piece Straw Hat captain (post-timeskip)' },
      { label: 'Goku (Son Goku)', heightCm: 175, imperial: '5\'9"', note: 'Dragon Ball Z / Super legendary Saiyan' },
      { label: 'Naruto Uzumaki', heightCm: 180, imperial: '5\'11"', note: 'Naruto Shippuden / 7th Hokage' },
      { label: 'All Might (Hero Form)', heightCm: 220, imperial: '7\'2.6"', note: 'My Hero Academia Symbol of Peace' },
    ],
    faqs: [
      {
        question: 'Are anime character heights official?',
        answer: 'Yes, all documented character heights reflect official databooks published by Shueisha, Kodansha, and original manga creators.',
      },
      {
        question: 'How do anime character models render on the canvas?',
        answer: 'HowHeight uses our universal format-agnostic rendering engine supporting high-resolution PNG transparent cutouts and SVG vector silhouettes.',
      },
      {
        question: 'How does Goku compare to an average human?',
        answer: 'Goku stands at 175 cm (5 ft 9 in), which is virtually identical to the worldwide average adult male height.',
      },
    ],
  },
  {
    id: 'films',
    slug: 'film-height-comparison',
    name: 'Films',
    h1: 'Film Character Height Comparison',
    route: '/film-height-comparison/',
    entityCategoryKey: 'films',
    title: 'Film Character Height Comparison | HowHeight',
    description: 'Compare heights of famous movie heroes, villains, sci-fi creatures, and cinematic figures visually with exact mathematical proportions.',
    badge: 'Cinematic Stature Guide',
    measurementAnchor: 'Canon Script & Prop Blueprint Stature',
    measurementGuide: 'Film character heights are taken from studio production bibles, prop design blueprints, and actor on-set prosthetics specifications.',
    commonHeights: [
      { label: 'Wolverine (Comics Canon)', heightCm: 160, imperial: '5\'3"', note: 'Marvel comic accurate mutant berserker' },
      { label: 'Iron Man (Armor Mark 85)', heightCm: 198, imperial: '6\'6"', note: 'Stark Industries powered exoskeleton' },
      { label: 'Darth Vader (Armor)', heightCm: 203, imperial: '6\'8"', note: 'Galactic Empire Sith Lord life-support armor' },
      { label: 'Chewbacca (Wookiee)', heightCm: 228, imperial: '7\'6"', note: 'Millennium Falcon co-pilot stature' },
      { label: 'The Hulk (MCU Standard)', heightCm: 259, imperial: '8\'6"', note: 'Gamma-irradiated powerhouse' },
    ],
    faqs: [
      {
        question: 'Do movie character heights include armor and boots?',
        answer: 'Each entry notes whether the height represents the biological character or the full suit/armor (such as Iron Man or Darth Vader).',
      },
      {
        question: 'Can I compare film characters with real people?',
        answer: 'Yes! You can place any film character right beside real-life actors, average humans, or vehicles to understand their on-screen scale.',
      },
    ],
  },
  {
    id: 'animals',
    slug: 'animal-height-comparison',
    name: 'Animals',
    h1: 'Animal Height Comparison',
    route: '/animal-height-comparison/',
    entityCategoryKey: 'animals',
    title: 'Animal Height Comparison | HowHeight',
    description: 'Compare animal species heights and shoulder withers measurements to humans and everyday objects on a mathematically aligned ground baseline.',
    badge: 'Zoological Measurement Standards',
    measurementAnchor: 'Shoulder / Withers height for quadrupeds; Crown for bipeds',
    measurementGuide: 'In veterinary and biological science, quadruped mammals (horses, dogs, big cats, elephants) are standardly measured from the ground to the withers (the ridge between the shoulder blades), avoiding variations caused by head motion.',
    commonHeights: [
      { label: 'Domestic Cat', heightCm: 25, imperial: '10 in', note: 'Ground to shoulder withers' },
      { label: 'Golden Retriever', heightCm: 55, imperial: '1\'10"', note: 'Adult male shoulder height' },
      { label: 'African Lion', heightCm: 120, imperial: '3\'11"', note: 'Adult male shoulder withers' },
      { label: 'Domestic Horse', heightCm: 160, imperial: '5\'3" (15.3 hands)', note: 'Equestrian withers measurement' },
      { label: 'African Bush Elephant', heightCm: 320, imperial: '10\'6"', note: 'Adult bull shoulder height' },
      { label: 'Giraffe (Full Height)', heightCm: 520, imperial: '17\'1"', note: 'Ground to ossicones (horns)' },
    ],
    faqs: [
      {
        question: 'Why are animals measured at the shoulder/withers?',
        answer: 'Measuring at the withers provides an unvarying skeletal standard. Measuring to the head is unreliable because animals constantly raise, lower, or turn their heads.',
      },
      {
        question: 'Are horses measured in hands or centimeters?',
        answer: 'HowHeight provides both metric centimeters and traditional equestrian hands (where 1 hand = 4 inches = 10.16 cm).',
      },
      {
        question: 'How tall is an African Elephant compared to a human?',
        answer: 'An adult male African elephant stands roughly 320 cm (10\'6") at the shoulder, nearly double the height of an average 175 cm human.',
      },
    ],
  },
  {
    id: 'objects',
    slug: 'object-height-comparison',
    name: 'Objects',
    h1: 'Object Height Comparison',
    route: '/object-height-comparison/',
    entityCategoryKey: 'objects',
    title: 'Object Height Comparison | HowHeight',
    description: 'Compare everyday items, furniture, consumer electronics, vehicles, and architectural elements with humans using a standardized physical scale.',
    badge: 'Everyday Reference Standards',
    measurementAnchor: 'Ground / floor to highest rigid structural plane',
    measurementGuide: 'Objects and furniture are measured from their level resting base to their standard uppermost functional boundary (e.g. chair backrest, refrigerator top hinge, car roofline).',
    commonHeights: [
      { label: 'Dining Chair', heightCm: 90, imperial: '2\'11"', note: 'Floor to top of standard backrest' },
      { label: 'Sedan Car (Toyota Corolla)', heightCm: 145, imperial: '4\'9"', note: 'Pavement to roof apex' },
      { label: 'Home Refrigerator', heightCm: 175, imperial: '5\'9"', note: 'Floor to top door hinge' },
      { label: 'Standard Interior Door', heightCm: 210, imperial: '6\'11"', note: 'Architectural standard 80-inch frame' },
      { label: 'Standard Basketball Hoop', heightCm: 305, imperial: '10\'0"', note: 'Floor to rim surface' },
      { label: 'City Transit Bus', heightCm: 320, imperial: '10\'6"', note: 'Road surface to roof deck' },
    ],
    faqs: [
      {
        question: 'How do everyday objects provide perspective on human height?',
        answer: 'Because people interact with chairs, doors, and cars daily, seeing human figures beside a standard 210 cm door or 145 cm sedan provides immediate intuitive scale.',
      },
      {
        question: 'Are architectural doors standardized?',
        answer: 'Yes, standard residential interior doors in modern building codes are typically 80 inches (203.2 cm) with a 210 cm exterior frame opening.',
      },
    ],
  },
  {
    id: 'plants',
    slug: 'plant-height-comparison',
    name: 'Plants',
    h1: 'Plant Height Comparison',
    route: '/plant-height-comparison/',
    entityCategoryKey: 'plants',
    title: 'Plant Height Comparison | HowHeight',
    description: 'Compare trees, garden shrubs, flowering plants, and botanical specimens with human stature on a proportional scale.',
    badge: 'Botanical Scale Directory',
    measurementAnchor: 'Soil line to upper canopy apex',
    measurementGuide: 'Botanical heights measure vertical distance from root collar soil grade to the highest branch apex in natural growth posture.',
    commonHeights: [
      { label: 'Sunflower', heightCm: 180, imperial: '5\'11"', note: 'Mature floral stem and bloom' },
      { label: 'Garden Fruit Tree (Apple/Pear)', heightCm: 350, imperial: '11\'6"', note: 'Semi-dwarf orchard canopy' },
      { label: 'Saguaro Cactus', heightCm: 600, imperial: '19\'8"', note: 'Mature desert specimen' },
      { label: 'Date Palm Tree', heightCm: 1500, imperial: '49\'2"', note: 'Full mature frond crown' },
    ],
    faqs: [
      {
        question: 'How are plants measured on HowHeight?',
        answer: 'Plants are measured from ground level to the peak of their natural foliage canopy.',
      },
      {
        question: 'Can I compare houseplants with indoor furniture?',
        answer: 'Yes, you can place fiddle-leaf figs or monsteras next to dining tables and chairs for interior design scale.',
      },
    ],
  },
  {
    id: 'sports',
    slug: 'sports-height-comparison',
    name: 'Sports',
    h1: 'Sports Figure Height Comparison',
    route: '/sports-height-comparison/',
    entityCategoryKey: 'sports',
    title: 'Sports Figure Height Comparison | HowHeight',
    description: 'Compare athletes across basketball, football, cricket, and soccer alongside regulation equipment such as basketball rims and goalposts.',
    badge: 'Athletic Combine Standards',
    measurementAnchor: 'Official Combine Barefoot Stature & Regulation Rim Height',
    measurementGuide: 'Sports heights are derived from official league combines (e.g. NBA pre-draft barefoot measurements, FIFA registrations, ICC team rosters).',
    commonHeights: [
      { label: 'Lionel Messi', heightCm: 170, imperial: '5\'7"', note: 'Argentine soccer maestro' },
      { label: 'Cristiano Ronaldo', heightCm: 187, imperial: '6\'1.6"', note: 'Portuguese athletic forward' },
      { label: 'Michael Jordan', heightCm: 198, imperial: '6\'6"', note: 'NBA Hall of Fame shooting guard' },
      { label: 'Regulation Basketball Rim', heightCm: 305, imperial: '10\'0"', note: 'FIBA / NBA standard rim height' },
      { label: 'Victor Wembanyama', heightCm: 224, imperial: '7\'4"', note: 'NBA modern phenom center' },
    ],
    faqs: [
      {
        question: 'Does the NBA measure players with or without shoes?',
        answer: 'Since the 2019–20 season, the NBA officially certifies barefoot heights at team training camps without footwear.',
      },
      {
        question: 'How high is a regulation basketball rim?',
        answer: 'A regulation basketball hoop rim is exactly 10 feet (304.8 cm or 305 cm rounded) from the hardwood floor.',
      },
    ],
  },
  {
    id: 'apparel',
    slug: 'apparel-height-comparison',
    name: 'Apparel',
    h1: 'Apparel Height Comparison',
    route: '/apparel-height-comparison/',
    entityCategoryKey: 'apparel',
    title: 'Apparel Height Comparison | HowHeight',
    description: 'Compare how high heels, athletic platform sneakers, work boots, hats, and protective headgear modify human standing stature.',
    badge: 'Wearable Stature Dynamics',
    measurementAnchor: 'Effective vertical offset added to barefoot stature',
    measurementGuide: 'Apparel items represent the effective vertical elevation or added clearance introduced by footwear outsoles, platform wedges, or headwear crowns.',
    commonHeights: [
      { label: 'Standard Running Sneaker', heightCm: 3, imperial: '1.2 in', note: 'Typical foam midsole heel stack' },
      { label: 'Work Boot (Lug Sole)', heightCm: 4.5, imperial: '1.8 in', note: 'Heavy-duty welted leather boot' },
      { label: 'Classic Stiletto Heel', heightCm: 10, imperial: '4 in', note: 'Formal fashion high heel' },
      { label: 'Platform Boot', heightCm: 15, imperial: '6 in', note: 'Elevated runway platform' },
    ],
    faqs: [
      {
        question: 'How much height does typical footwear add?',
        answer: 'Standard lifestyle sneakers typically add 2.5 to 3.5 cm (1 to 1.4 inches), while dress shoes and boots add 3 to 5 cm.',
      },
      {
        question: 'Can apparel items be combined with human silhouettes?',
        answer: 'Yes, compare apparel items directly beside figures to understand perceived height differences in formal versus casual wear.',
      },
    ],
  },
  {
    id: 'fictional',
    slug: 'fictional-character-height-comparison',
    name: 'Fictional Characters',
    h1: 'Fictional Character Height Comparison',
    route: '/fictional-character-height-comparison/',
    entityCategoryKey: 'fictional',
    title: 'Fictional Character Height Comparison | HowHeight',
    description: 'Compare fantastical creatures, monsters, comic book legends, and mythological beings with realistic human figures.',
    badge: 'Fantasy & Sci-Fi Scale Guide',
    measurementAnchor: 'Canonical Franchise Lore & World-Building Archives',
    measurementGuide: 'Fictional character dimensions are cataloged from officially licensed world sourcebooks, tabletop rulebooks (e.g. D&D Bestiaries), and franchise encyclopedias.',
    commonHeights: [
      { label: 'Hobbit / Halfling', heightCm: 105, imperial: '3\'5"', note: 'Tolkien Middle-earth canonical average' },
      { label: 'Dwarf Stature', heightCm: 135, imperial: '4\'5"', note: 'High fantasy sturdy warrior stature' },
      { label: 'Centaur (Shoulder)', heightCm: 180, imperial: '5\'11"', note: 'Equine-human mythological hybrid' },
      { label: 'Hill Giant', heightCm: 480, imperial: '15\'9"', note: 'Tabletop RPG standard giant class' },
    ],
    faqs: [
      {
        question: 'How are fictional creature heights calibrated?',
        answer: 'We consult official creator documentation, licensed rulebooks, and canonical lore books to ensure accurate proportions.',
      },
      {
        question: 'Can I compare fictional characters to modern skyscrapers or vehicles?',
        answer: 'Yes! Place fantasy giants or monsters beside buses, doors, or humans on the HowHeight comparison canvas.',
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): CategoryDefinition | undefined {
  return CATEGORIES.find((c) => c.slug === slug || c.route.includes(slug));
}

export function getCategoryById(id: string): CategoryDefinition | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getCategoryByEntityKey(key: EntityCategory): CategoryDefinition | undefined {
  return CATEGORIES.find((c) => c.entityCategoryKey === key || c.secondaryCategoryKey === key);
}
