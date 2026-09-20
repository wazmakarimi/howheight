import { ANIMALS, getAnimalDefinition } from './animals.ts';
import { OBJECTS, getObjectDefinition } from './objects.ts';
import { CELEBRITIES, getCelebrityById } from './celebrities.ts';
import { HUMANS, getHumanDefinition } from './humans.ts';
import type { ComparisonItem } from '../lib/constants.ts';

export interface ComparisonEntityRef {
  category: 'human' | 'animal' | 'object' | 'celebrity';
  id: string;
  customHeightCm?: number;
  label?: string;
}

export interface ComparisonDefinition {
  slug: string;
  title: string;
  h1: string;
  description: string;
  items: ComparisonEntityRef[];
  indexable: boolean;
  introText: string;
  significance: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const COMPARISONS: ComparisonDefinition[] = [
  // 1. Celebrity vs Celebrity
  {
    slug: 'virat-kohli-vs-ms-dhoni',
    title: 'Virat Kohli vs MS Dhoni Height Comparison | Cricket Icons',
    h1: 'Virat Kohli vs MS Dhoni Height Comparison',
    description: 'Compare the physical heights of Indian cricket icons Virat Kohli (175 cm / 5\'9") and MS Dhoni (178 cm / 5\'10") side-by-side with an interactive proportional visual tool.',
    items: [
      { category: 'celebrity', id: 'virat-kohli' },
      { category: 'celebrity', id: 'ms-dhoni' },
    ],
    indexable: true,
    introText: 'Virat Kohli and Mahendra Singh Dhoni are two of the most celebrated captains and athletes in cricket history. Fans frequently debate their physical presence on the field, batting stance balance, and athletic agility.',
    significance: 'MS Dhoni measures 178 cm (5 ft 10 in), giving him a slight 3 cm (1.2 in) height advantage over Virat Kohli at 175 cm (5 ft 9 in). Dhoni\'s upright wicketkeeping posture and Kohli\'s dynamic athletic athletic stance often make their perceived heights appear even closer in live broadcasts.',
    faqs: [
      {
        question: 'Who is taller, Virat Kohli or MS Dhoni?',
        answer: 'MS Dhoni is taller by approximately 3 cm (1.2 inches). Dhoni stands at 178 cm (5 ft 10 in), while Virat Kohli stands at 175 cm (5 ft 9 in).'
      },
      {
        question: 'What is Virat Kohli\'s height in feet and inches?',
        answer: 'Virat Kohli\'s verified height is 175 cm, which translates to 5 feet 8.9 inches (commonly cited as 5 ft 9 in).'
      },
      {
        question: 'What is MS Dhoni\'s height in feet and inches?',
        answer: 'MS Dhoni\'s verified height is 178 cm, which translates to 5 feet 10.1 inches (commonly cited as 5 ft 10 in).'
      }
    ]
  },
  {
    slug: 'shah-rukh-khan-vs-salman-khan',
    title: 'Shah Rukh Khan vs Salman Khan Height Comparison | Bollywood Superstars',
    h1: 'Shah Rukh Khan vs Salman Khan Height Comparison',
    description: 'Compare Bollywood superstars Shah Rukh Khan (173 cm / 5\'8") and Salman Khan (170 cm / 5\'7") side-by-side using accurate proportional human silhouettes.',
    items: [
      { category: 'celebrity', id: 'shah-rukh-khan' },
      { category: 'celebrity', id: 'salman-khan' },
    ],
    indexable: true,
    introText: 'Shah Rukh Khan and Salman Khan have reigned over Indian cinema for over three decades. Their comparative screen presence, physique, and stature remain among the most popular cinema trivia queries.',
    significance: 'Shah Rukh Khan stands at 173 cm (5 ft 8.1 in), making him approximately 3 cm (1.2 in) taller than Salman Khan at 170 cm (5 ft 7 in). Salman\'s broader muscular deltoid build often gives him an imposing visual frame that balances the slight vertical difference.',
    faqs: [
      {
        question: 'Is Shah Rukh Khan taller than Salman Khan?',
        answer: 'Yes, Shah Rukh Khan is approximately 3 cm (1.2 inches) taller than Salman Khan. SRK stands at 173 cm compared to Salman Khan\'s 170 cm.'
      },
      {
        question: 'What is Shah Rukh Khan\'s exact height?',
        answer: 'Shah Rukh Khan is officially documented at 173 cm (5 feet 8 inches).'
      },
      {
        question: 'What is Salman Khan\'s exact height?',
        answer: 'Salman Khan is officially documented at 170 cm (5 feet 7 inches).'
      }
    ]
  },
  {
    slug: 'tom-cruise-vs-dwayne-johnson',
    title: 'Tom Cruise vs Dwayne Johnson Height Comparison | Action Icons',
    h1: 'Tom Cruise vs Dwayne Johnson Height Comparison',
    description: 'Visual height comparison between action megastars Tom Cruise (170 cm / 5\'7") and Dwayne "The Rock" Johnson (196 cm / 6\'5"). See the staggering 26 cm difference on scale.',
    items: [
      { category: 'celebrity', id: 'tom-cruise' },
      { category: 'celebrity', id: 'dwayne-johnson' },
    ],
    indexable: true,
    introText: 'Comparing Tom Cruise and Dwayne Johnson illustrates one of the widest stature contrasts in Hollywood. Both are peerless action box office titans with completely different physical profiles.',
    significance: 'Dwayne "The Rock" Johnson stands at a towering 196 cm (6 ft 5.2 in), towering a full 26 cm (10.2 inches) over Tom Cruise at 170 cm (5 ft 7 in). Dwayne stands over 15% taller than Tom Cruise on a true physical baseline.',
    faqs: [
      {
        question: 'How much taller is Dwayne Johnson than Tom Cruise?',
        answer: 'Dwayne Johnson is 26 cm (10.2 inches) taller than Tom Cruise. Dwayne is 196 cm (6 ft 5 in) and Tom Cruise is 170 cm (5 ft 7 in).'
      },
      {
        question: 'Is Tom Cruise\'s height considered short for a Hollywood actor?',
        answer: 'At 170 cm (5 ft 7 in), Tom Cruise is slightly below the US average male height (176 cm), but his exceptional charisma, athletic stunt work, and framing techniques have made him one of cinema\'s greatest leading men.'
      }
    ]
  },
  {
    slug: 'amitabh-bachchan-vs-aamir-khan',
    title: 'Amitabh Bachchan vs Aamir Khan Height Comparison | Bollywood Legends',
    h1: 'Amitabh Bachchan vs Aamir Khan Height Comparison',
    description: 'Compare the dramatic height difference between Indian cinema legend Amitabh Bachchan (188 cm / 6\'2") and Aamir Khan (165 cm / 5\'5") on a shared floor baseline.',
    items: [
      { category: 'celebrity', id: 'amitabh-bachchan' },
      { category: 'celebrity', id: 'aamir-khan' },
    ],
    indexable: true,
    introText: 'When Amitabh Bachchan and Aamir Khan shared the screen in Thugs of Hindostan, audiences witnessed a classic juxtaposition of Bollywood\'s tallest and most versatile perfectionist actors.',
    significance: 'Amitabh Bachchan stands at 188 cm (6 ft 2 in), making him 23 cm (9 inches) taller than Aamir Khan at 165 cm (5 ft 5 in). Amitabh is one of the tallest leading actors in Hindi cinema history.',
    faqs: [
      {
        question: 'What is the height difference between Amitabh Bachchan and Aamir Khan?',
        answer: 'Amitabh Bachchan is 23 cm (9.1 inches) taller than Aamir Khan. Amitabh stands at 188 cm, while Aamir Khan stands at 165 cm.'
      }
    ]
  },
  {
    slug: 'virat-kohli-vs-rohit-sharma',
    title: 'Virat Kohli vs Rohit Sharma Height Comparison | Team India Leaders',
    h1: 'Virat Kohli vs Rohit Sharma Height Comparison',
    description: 'Compare the heights of Indian batting maestros Virat Kohli (175 cm / 5\'9") and Rohit Sharma (173 cm / 5\'8") visually with precise proportional scale.',
    items: [
      { category: 'celebrity', id: 'virat-kohli' },
      { category: 'celebrity', id: 'rohit-sharma' },
    ],
    indexable: true,
    introText: 'Virat Kohli and Rohit Sharma have formed one of cricket\'s most formidable modern batting partnerships. Fans love comparing their dimensions, stances, and athletic presence.',
    significance: 'Virat Kohli at 175 cm (5 ft 8.9 in) is marginally taller than Rohit Sharma at 173 cm (5 ft 8.1 in) by approximately 2 cm (0.8 inches). Both sit very close to the international athletic average.',
    faqs: [
      {
        question: 'Who is taller, Virat Kohli or Rohit Sharma?',
        answer: 'Virat Kohli is approximately 2 cm (0.8 inches) taller than Rohit Sharma. Virat is 175 cm, while Rohit Sharma is 173 cm.'
      }
    ]
  },

  // 2. Human vs Human
  {
    slug: 'male-vs-female',
    title: 'Average Male vs Female Height Comparison | Global Stature Norms',
    h1: 'Average Male vs Female Height Comparison',
    description: 'Visual side-by-side height comparison between the average global adult male (176 cm / 5\'9.3") and average adult female (162 cm / 5\'3.8") on an aligned baseline.',
    items: [
      { category: 'human', id: 'male' },
      { category: 'human', id: 'female' },
    ],
    indexable: true,
    introText: 'Sexual dimorphism in human skeletal growth results in an average global height difference of approximately 14 cm (5.5 inches) between adult men and women.',
    significance: 'An average adult male at 176 cm stands roughly 8.6% taller than an average adult female at 162 cm. This differential emerges primarily during puberty due to differences in estrogen-driven epiphyseal fusion timing.',
    faqs: [
      {
        question: 'What is the average height difference between men and women?',
        answer: 'Across global population registries, adult men are on average about 14 cm (5.5 inches) taller than adult women.'
      }
    ]
  },

  // 3. Human vs Animal
  {
    slug: 'human-vs-horse',
    title: 'Human vs Horse Height Comparison | Standing Human vs Equine Withers',
    h1: 'Human vs Horse Height Comparison',
    description: 'Compare an average adult human (176 cm) with a standard riding horse (160 cm at withers). Understand how equine shoulder measurement compares to human vertex.',
    items: [
      { category: 'human', id: 'male' },
      { category: 'animal', id: 'horse' },
    ],
    indexable: true,
    introText: 'Comparing a human with a horse is a classic biological visualization. Horses are measured at the highest point of the shoulder (withers), whereas humans are measured to the top of the skull.',
    significance: 'While a standard riding horse measures 160 cm (15.3 hands) to the withers—slightly lower than a 176 cm human head—the horse\'s raised neck and head elevate its top reach to over 220–240 cm, dwarfing a human in overall physical volume.',
    faqs: [
      {
        question: 'Is a horse taller than a human?',
        answer: 'At the shoulder (withers), a standard riding horse (160 cm) is slightly lower than an average human male (176 cm). However, when accounting for the horse\'s head and crest, a horse easily reaches 220 cm or higher.'
      }
    ]
  },
  {
    slug: 'human-vs-dog',
    title: 'Human vs Dog Height Comparison | Scale and Stature',
    h1: 'Human vs Dog Height Comparison',
    description: 'See how an average adult human (176 cm) compares visually to a standard domestic dog (60 cm withers) on a shared floor baseline with accurate proportions.',
    items: [
      { category: 'human', id: 'male' },
      { category: 'animal', id: 'dog' },
    ],
    indexable: true,
    introText: 'Dogs are our closest domestic companions, yet their shoulder heights vary from 20 cm (Chihuahuas) to over 90 cm (Irish Wolfhounds). A Golden Retriever or German Shepherd typically stands at 60 cm.',
    significance: 'An average human stands roughly 3 times taller (176 cm vs 60 cm) than a standard Golden Retriever at the shoulder. The dog\'s shoulder reaches approximately to mid-thigh on an adult human.',
    faqs: [
      {
        question: 'How does dog height compare to human leg height?',
        answer: 'A medium-to-large dog with a 60 cm shoulder height reaches right around an average adult\'s knee or mid-thigh.'
      }
    ]
  },
  {
    slug: 'elephant-vs-human',
    title: 'Elephant vs Human Height Comparison | Megafauna Scale',
    h1: 'Elephant vs Human Height Comparison',
    description: 'Compare a massive African bush elephant (320 cm shoulder height) with an average adult human (176 cm). Experience true megafauna proportions on scale.',
    items: [
      { category: 'human', id: 'male' },
      { category: 'animal', id: 'elephant' },
    ],
    indexable: true,
    introText: 'The African bush elephant is the largest living terrestrial mammal. Comparing its towering shoulder height with an adult human vividly demonstrates true megafauna scale.',
    significance: 'At 320 cm (10 ft 6 in) at the shoulder, an adult elephant stands almost double (1.82×) the height of an average adult male (176 cm / 5 ft 9 in). In total mass, the elephant weighs 60 to 80 times more.',
    faqs: [
      {
        question: 'How tall is an elephant compared to a person?',
        answer: 'An adult bull elephant reaches 320 cm (over 10.5 feet) at the shoulder—almost twice the height of a standing adult human.'
      }
    ]
  },

  // 4. Human vs Object
  {
    slug: 'human-vs-door',
    title: 'Human vs Standard Door Height Comparison | Architectural Scale',
    h1: 'Human vs Standard Door Height Comparison',
    description: 'Compare an average adult human (176 cm / 5\'9") against a standard interior residential door frame (210 cm / 6\'11") on a true architectural baseline.',
    items: [
      { category: 'human', id: 'male' },
      { category: 'object', id: 'door' },
    ],
    indexable: true,
    introText: 'Doors are universally designed around human ergonomic clearances. Standard residential doors in North America, Europe, and Asia range from 203 cm (6\'8") to 210 cm (6\'11").',
    significance: 'A 210 cm door frame provides approximately 34 cm (13.4 inches) of overhead clearance above an average 176 cm adult male, accommodating up to the 99th percentile of human stature comfortably.',
    faqs: [
      {
        question: 'What is the clearance between an average person and a door?',
        answer: 'An average 176 cm adult male has approximately 34 cm (13.4 in) of clearance beneath a 210 cm standard doorway.'
      }
    ]
  },
  {
    slug: 'human-vs-car',
    title: 'Human vs Car Height Comparison | Vehicle Roofline Perspective',
    h1: 'Human vs Car Height Comparison',
    description: 'Visual height comparison between an average adult human (176 cm) and a standard passenger sedan/crossover car (150 cm roofline).',
    items: [
      { category: 'human', id: 'male' },
      { category: 'object', id: 'car' },
    ],
    indexable: true,
    introText: 'Modern passenger automobiles range in roofline height from 142 cm (sports coupes) to 150 cm (sedans) and 170 cm (large SUVs).',
    significance: 'An average 176 cm adult stands roughly 26 cm (10 inches) above the roofline of a standard 150 cm compact/sedan vehicle, allowing clear visibility over the roof.',
    faqs: [
      {
        question: 'Is a standard car shorter than a person?',
        answer: 'Yes, standard passenger sedans measure around 145–152 cm (4 ft 9 in – 5 ft), while an average adult male stands at 176 cm (5 ft 9.3 in).'
      }
    ]
  },

  // 5. Mixed Celebrity vs Object / Animal
  {
    slug: 'virat-kohli-vs-door',
    title: 'Virat Kohli vs Door Height Comparison | Celebrity vs Architectural Scale',
    h1: 'Virat Kohli vs Door Height Comparison',
    description: 'See how Virat Kohli (175 cm / 5\'9") measures up against a standard 210 cm interior door frame on an aligned floor baseline.',
    items: [
      { category: 'celebrity', id: 'virat-kohli' },
      { category: 'object', id: 'door' },
    ],
    indexable: true,
    introText: 'Comparing a world-famous athlete like Virat Kohli against an everyday reference object like a door frame provides an immediate, relatable sense of physical stature.',
    significance: 'Virat Kohli stands 35 cm (13.8 inches) below the top jamb of a standard 210 cm door frame, leaving ample clearance.',
    faqs: [
      {
        question: 'How much head clearance does Virat Kohli have under a standard door?',
        answer: 'Under a 210 cm door, Virat Kohli (175 cm) has roughly 35 cm (13.8 inches) of head clearance.'
      }
    ]
  },
  {
    slug: 'dwayne-johnson-vs-horse',
    title: 'Dwayne Johnson vs Horse Height Comparison | The Rock vs Riding Horse',
    h1: 'Dwayne Johnson vs Horse Height Comparison',
    description: 'Visual comparison between Dwayne "The Rock" Johnson (196 cm / 6\'5") and a standard riding horse (160 cm at withers).',
    items: [
      { category: 'celebrity', id: 'dwayne-johnson' },
      { category: 'animal', id: 'horse' },
    ],
    indexable: true,
    introText: 'Dwayne Johnson\'s immense 196 cm stature is legendary. Comparing him against an equine withers line highlights his extraordinary physical frame.',
    significance: 'Dwayne Johnson stands a full 36 cm (14.2 inches) taller than the 160 cm shoulder withers of a standard Thoroughbred or Quarter horse.',
    faqs: [
      {
        question: 'Is Dwayne Johnson taller than a horse\'s back?',
        answer: 'Yes! At 196 cm (6 ft 5 in), Dwayne Johnson stands significantly taller than the 160 cm (15.3 hands) withers height of a typical riding horse.'
      }
    ]
  }
];

export function getComparisonBySlug(slug: string): ComparisonDefinition | undefined {
  const normalized = slug.toLowerCase().trim();
  return COMPARISONS.find((c) => c.slug === normalized);
}

/**
 * Resolves ComparisonEntityRef into concrete ComparisonItem ready for the universal engine.
 */
export function resolveComparisonItems(refs: ComparisonEntityRef[]): ComparisonItem[] {
  const palette = ['#2563eb', '#9333ea', '#ea580c', '#16a34a', '#dc2626'];
  return refs.map((ref, idx) => {
    const color = palette[idx % palette.length];

    if (ref.category === 'celebrity') {
      const cel = getCelebrityById(ref.id);
      if (cel) {
        return {
          id: `seo-cel-${cel.id}`,
          assetId: cel.assetId || (cel.gender === 'female' ? 'female-01' : 'male-010'),
          category: 'celebrities' as any,
          name: cel.name,
          gender: cel.gender,
          celebrityId: cel.id,
          profession: cel.profession,
          heightCm: cel.heightCm,
          referenceHeightCm: cel.heightCm,
          isCustomHeight: false,
          color,
        };
      }
    }

    if (ref.category === 'animal') {
      const animal = getAnimalDefinition(ref.id);
      if (animal) {
        return {
          id: `seo-animal-${animal.id}`,
          assetId: animal.assetId || (animal.id === 'horse' ? 'animal-048' : 'animal-018'),
          category: 'animals' as any,
          name: animal.name,
          animalType: animal.id,
          heightCm: animal.typicalHeightCm,
          referenceHeightCm: animal.typicalHeightCm,
          isCustomHeight: false,
          color,
        };
      }
    }

    if (ref.category === 'object') {
      const obj = getObjectDefinition(ref.id);
      if (obj) {
        return {
          id: `seo-obj-${obj.id}`,
          assetId: obj.assetId || (obj.id === 'door' ? 'object-016' : (obj.id === 'car' ? 'object-114' : 'object-016')),
          category: 'objects' as any,
          name: obj.name,
          objectType: obj.id,
          heightCm: obj.typicalHeightCm,
          referenceHeightCm: obj.typicalHeightCm,
          isCustomHeight: false,
          color,
        };
      }
    }

    // Default Human
    const human = getHumanDefinition(ref.id);
    const isFemale = human?.gender === 'female' || ref.id === 'female';
    const finalHeight = ref.customHeightCm || human?.typicalHeightCm || (isFemale ? 162 : 176);
    return {
      id: `seo-human-${ref.id}`,
      assetId: isFemale ? 'female-01' : 'male-010',
      category: isFemale ? 'female' : 'male',
      name: ref.label || human?.name || (isFemale ? 'Average Female' : 'Average Male'),
      gender: isFemale ? 'female' : 'male',
      heightCm: finalHeight,
      referenceHeightCm: finalHeight,
      isCustomHeight: Boolean(ref.customHeightCm),
      color,
    };
  });
}
