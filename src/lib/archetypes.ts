// CLIENT ARCHETYPE REGISTRY
// Instant zero-network fallback for core baseline models
import type { EntityCategory } from './constants';

export interface ArchetypeAsset {
  id: string;
  category: EntityCategory;
  name: string;
  heightCm: number;
  publicPath: string;
  viewBox: string;
  measurementAnchor: { groundY: number; measurementY: number } | null;
  isPng: boolean;
}

export const CLIENT_ARCHETYPES: Record<string, ArchetypeAsset> = {
  "male-010": {
    "id": "male-010",
    "category": "male",
    "name": "Male Figure",
    "heightCm": 175,
    "publicPath": "/assets/entities/male/male_svg_10.svg",
    "viewBox": "307.58 113.5 389.14 1290.65",
    "measurementAnchor": {
      "groundY": 1404.15,
      "measurementY": 113.5
    },
    "isPng": false
  },
  "female-01": {
    "id": "female-01",
    "category": "female",
    "name": "Female Figure 10",
    "heightCm": 163,
    "publicPath": "/assets/entities/female/female-01.svg",
    "viewBox": "317.93 129.8 367.24 1260.03",
    "measurementAnchor": {
      "groundY": 1389.83,
      "measurementY": 129.8
    },
    "isPng": false
  },
  "animal-018": {
    "id": "animal-018",
    "category": "animals",
    "name": "Dog",
    "heightCm": 55,
    "publicPath": "/assets/entities/animals/animal_svg_18.svg",
    "viewBox": "66.31 80.52 792.57 813.41",
    "measurementAnchor": {
      "groundY": 893.93,
      "measurementY": 80.52
    },
    "isPng": false
  },
  "object-016": {
    "id": "object-016",
    "category": "objects",
    "name": "Doorframe",
    "heightCm": 245,
    "publicPath": "/assets/entities/objects/object_svg_16.svg",
    "viewBox": "160.65 192.41 704.89 1134.08",
    "measurementAnchor": {
      "groundY": 1326.49,
      "measurementY": 192.41
    },
    "isPng": false
  },
  "animal-048": {
    "id": "animal-048",
    "category": "animals",
    "name": "Domestic Horse",
    "heightCm": 160,
    "publicPath": "/assets/entities/animals/animal_svg_48.svg",
    "viewBox": "289.6 78.48 1028.1 829.45",
    "measurementAnchor": {
      "groundY": 907.9300000000001,
      "measurementY": 78.48
    },
    "isPng": false
  },
  "celebrity-012": {
    "id": "celebrity-012",
    "category": "celebrities",
    "name": "Dwayne Johnson",
    "heightCm": 196,
    "publicPath": "/assets/entities/celebrities/celebrity_img_12.png",
    "viewBox": "0 0 613 1469",
    "measurementAnchor": {
      "groundY": 1469,
      "measurementY": 0
    },
    "isPng": true
  },
  "plant-005": {
    "id": "plant-005",
    "category": "plants",
    "name": "Aloe Vera",
    "heightCm": 60,
    "publicPath": "/assets/entities/plants/plant_svg_5.svg",
    "viewBox": "40 330 944 694",
    "measurementAnchor": {
      "groundY": 1024,
      "measurementY": 330
    },
    "isPng": false
  },
  "sports-004": {
    "id": "sports-004",
    "category": "sports",
    "name": "American Football",
    "heightCm": 185,
    "publicPath": "/assets/entities/sports/sports_svg_4.svg",
    "viewBox": "175.06 261.26 739.4 950.41",
    "measurementAnchor": {
      "groundY": 1211.67,
      "measurementY": 261.26
    },
    "isPng": false
  },
  "fictional-004": {
    "id": "fictional-004",
    "category": "fictional",
    "name": "Abyss Demon",
    "heightCm": 180,
    "publicPath": "/assets/entities/fictional/fictional_svg_4.svg",
    "viewBox": "15.7 248.2 989.11 880.12",
    "measurementAnchor": {
      "groundY": 1128.32,
      "measurementY": 248.2
    },
    "isPng": false
  },
  "celebrity-040": {
    "id": "celebrity-040",
    "category": "celebrities",
    "name": "tom-cruise",
    "heightCm": 173,
    "publicPath": "/assets/entities/celebrities/celebrity_img_40.png",
    "viewBox": "0 0 225 706",
    "measurementAnchor": {
      "groundY": 706,
      "measurementY": 0
    },
    "isPng": true
  },
  "celebrity-046": {
    "id": "celebrity-046",
    "category": "celebrities",
    "name": "Lionel Messi",
    "heightCm": 170,
    "publicPath": "/assets/entities/celebrities/celebrity_img_46.png",
    "viewBox": "0 0 315 774",
    "measurementAnchor": {
      "groundY": 774,
      "measurementY": 0
    },
    "isPng": true
  },
  "celebrity-042": {
    "id": "celebrity-042",
    "category": "celebrities",
    "name": "Cristiano Ronaldo",
    "heightCm": 187,
    "publicPath": "/assets/entities/celebrities/celebrity_img_42.png",
    "viewBox": "0 0 489 1127",
    "measurementAnchor": {
      "groundY": 1127,
      "measurementY": 0
    },
    "isPng": true
  },
  "celebrity-007": {
    "id": "celebrity-007",
    "category": "celebrities",
    "name": "Brad Pitt",
    "heightCm": 180,
    "publicPath": "/assets/entities/celebrities/celebrity_img_7.png",
    "viewBox": "0 0 258 871",
    "measurementAnchor": {
      "groundY": 871,
      "measurementY": 0
    },
    "isPng": true
  }
};

export function getArchetypeAsset(assetIdOrOldId?: string, categoryHint?: string): ArchetypeAsset {
  if (assetIdOrOldId) {
    const norm = assetIdOrOldId.toLowerCase().trim();
    if (CLIENT_ARCHETYPES[norm]) return CLIENT_ARCHETYPES[norm];
    if (norm.includes('horse')) return CLIENT_ARCHETYPES['animal-048'];
    if (norm.includes('door')) return CLIENT_ARCHETYPES['object-016'];
    if (norm.includes('dog')) return CLIENT_ARCHETYPES['animal-018'];
    if (norm.includes('dwayne')) return CLIENT_ARCHETYPES['celebrity-012'];
  }
  const cat = (categoryHint || '').toLowerCase();
  if (cat === 'female') return CLIENT_ARCHETYPES['female-01'];
  if (cat.includes('animal')) return CLIENT_ARCHETYPES['animal-018'];
  if (cat.includes('object')) return CLIENT_ARCHETYPES['object-016'];
  if (cat.includes('plant')) return CLIENT_ARCHETYPES['plant-005'];
  if (cat.includes('sports')) return CLIENT_ARCHETYPES['sports-004'];
  if (cat.includes('fictional')) return CLIENT_ARCHETYPES['fictional-004'];
  return CLIENT_ARCHETYPES['male-010'];
}
