// ENTITY ASSET MAP - PHASE 12
// Explicit verified metadata connected by stable raw asset ID.
import type { EntityCategory } from '../lib/constants';

export type EntityReviewStatus = 'verified' | 'needs-review' | 'missing-height' | 'invalid';

export interface EntityMapping {
  rawAssetId: string;
  name: string;
  category: EntityCategory;
  heightCm: number | null;
  measurementType?: string | null;
  subgroup?: string | null;
  tags: string[];
  aliases: string[];
  status: EntityReviewStatus;
  indexable: boolean;
}

export const ENTITY_ASSET_MAP: Record<string, EntityMapping> = {
  "male-01": {
    "rawAssetId": "male-01",
    "name": "Jump touch",
    "category": "male",
    "heightCm": 305,
    "measurementType": "height",
    "subgroup": null,
    "tags": [
      "male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-02": {
    "rawAssetId": "male-02",
    "name": "Standing reach",
    "category": "male",
    "heightCm": 230,
    "measurementType": "height",
    "subgroup": null,
    "tags": [
      "male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-03": {
    "rawAssetId": "male-03",
    "name": "Wingspan",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": null,
    "tags": [
      "male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-04": {
    "rawAssetId": "male-04",
    "name": "Baby",
    "category": "male",
    "heightCm": 37.4,
    "measurementType": "length",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-05": {
    "rawAssetId": "male-05",
    "name": "Boy 1",
    "category": "male",
    "heightCm": 128,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-06": {
    "rawAssetId": "male-06",
    "name": "Child",
    "category": "male",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-07": {
    "rawAssetId": "male-07",
    "name": "Male Figure",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-001": {
    "rawAssetId": "male-001",
    "name": "Male 001",
    "category": "male",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "male"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "male-002": {
    "rawAssetId": "male-002",
    "name": "Male 002",
    "category": "male",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "male"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "male-003": {
    "rawAssetId": "male-003",
    "name": "Male 003",
    "category": "male",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "male"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "male-004": {
    "rawAssetId": "male-004",
    "name": "Jump touch",
    "category": "male",
    "heightCm": 305,
    "measurementType": "height",
    "subgroup": null,
    "tags": [
      "male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-005": {
    "rawAssetId": "male-005",
    "name": "Standing reach",
    "category": "male",
    "heightCm": 230,
    "measurementType": "height",
    "subgroup": null,
    "tags": [
      "male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-006": {
    "rawAssetId": "male-006",
    "name": "Wingspan",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": null,
    "tags": [
      "male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-007": {
    "rawAssetId": "male-007",
    "name": "Baby",
    "category": "male",
    "heightCm": 37.4,
    "measurementType": "length",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-008": {
    "rawAssetId": "male-008",
    "name": "Boy 1",
    "category": "male",
    "heightCm": 128,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-009": {
    "rawAssetId": "male-009",
    "name": "Child",
    "category": "male",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-010": {
    "rawAssetId": "male-010",
    "name": "Male Figure",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-011": {
    "rawAssetId": "male-011",
    "name": "Male Figure 10",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-012": {
    "rawAssetId": "male-012",
    "name": "Male Figure 11",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-013": {
    "rawAssetId": "male-013",
    "name": "Male Figure 12",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-014": {
    "rawAssetId": "male-014",
    "name": "Male Figure 13",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-015": {
    "rawAssetId": "male-015",
    "name": "Male Figure 14",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-016": {
    "rawAssetId": "male-016",
    "name": "Male Figure 15",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-017": {
    "rawAssetId": "male-017",
    "name": "Male Figure 16",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-018": {
    "rawAssetId": "male-018",
    "name": "Male Figure 17",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-019": {
    "rawAssetId": "male-019",
    "name": "Male Figure 18",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-020": {
    "rawAssetId": "male-020",
    "name": "Male Figure 2",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-021": {
    "rawAssetId": "male-021",
    "name": "Male Figure 3",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-022": {
    "rawAssetId": "male-022",
    "name": "Male Figure 4",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-023": {
    "rawAssetId": "male-023",
    "name": "Male Figure 5",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-024": {
    "rawAssetId": "male-024",
    "name": "Male Figure 6",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-025": {
    "rawAssetId": "male-025",
    "name": "Male Figure 7",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-026": {
    "rawAssetId": "male-026",
    "name": "Male Figure 8",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-027": {
    "rawAssetId": "male-027",
    "name": "Male Figure 9",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-028": {
    "rawAssetId": "male-028",
    "name": "Man",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-029": {
    "rawAssetId": "male-029",
    "name": "Man 1",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-030": {
    "rawAssetId": "male-030",
    "name": "Man 10",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-031": {
    "rawAssetId": "male-031",
    "name": "Man 11",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-032": {
    "rawAssetId": "male-032",
    "name": "Man 12",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-033": {
    "rawAssetId": "male-033",
    "name": "Man 13",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-034": {
    "rawAssetId": "male-034",
    "name": "Man 14",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-035": {
    "rawAssetId": "male-035",
    "name": "Man 15",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-036": {
    "rawAssetId": "male-036",
    "name": "Man 18",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-037": {
    "rawAssetId": "male-037",
    "name": "Man 17",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-038": {
    "rawAssetId": "male-038",
    "name": "Man 18",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-039": {
    "rawAssetId": "male-039",
    "name": "Man 19",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-040": {
    "rawAssetId": "male-040",
    "name": "Man 2",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-041": {
    "rawAssetId": "male-041",
    "name": "Man 3",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-042": {
    "rawAssetId": "male-042",
    "name": "Man 4",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-043": {
    "rawAssetId": "male-043",
    "name": "Man 5",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-044": {
    "rawAssetId": "male-044",
    "name": "Man 6",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-045": {
    "rawAssetId": "male-045",
    "name": "Man 7",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-046": {
    "rawAssetId": "male-046",
    "name": "Man 8",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-047": {
    "rawAssetId": "male-047",
    "name": "Man 9",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-048": {
    "rawAssetId": "male-048",
    "name": "Neutral",
    "category": "male",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-049": {
    "rawAssetId": "male-049",
    "name": "Reference Male",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-050": {
    "rawAssetId": "male-050",
    "name": "Reference Male 10",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-051": {
    "rawAssetId": "male-051",
    "name": "Reference Male 11",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-052": {
    "rawAssetId": "male-052",
    "name": "Reference Male 12",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-053": {
    "rawAssetId": "male-053",
    "name": "Reference Male 13",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-054": {
    "rawAssetId": "male-054",
    "name": "Reference Male 14",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-055": {
    "rawAssetId": "male-055",
    "name": "Reference Male 15",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-056": {
    "rawAssetId": "male-056",
    "name": "Reference Male 16",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-057": {
    "rawAssetId": "male-057",
    "name": "Reference Male 17",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-058": {
    "rawAssetId": "male-058",
    "name": "Reference Male 18",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-059": {
    "rawAssetId": "male-059",
    "name": "Reference Male 19",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-060": {
    "rawAssetId": "male-060",
    "name": "Reference Male 2",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-061": {
    "rawAssetId": "male-061",
    "name": "Reference Male 20",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-062": {
    "rawAssetId": "male-062",
    "name": "Reference Male 21",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-063": {
    "rawAssetId": "male-063",
    "name": "Reference Male 22",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-064": {
    "rawAssetId": "male-064",
    "name": "Reference Male 23",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-065": {
    "rawAssetId": "male-065",
    "name": "Reference Male 3",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-066": {
    "rawAssetId": "male-066",
    "name": "Reference Male 4",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-067": {
    "rawAssetId": "male-067",
    "name": "Reference Male 5",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-068": {
    "rawAssetId": "male-068",
    "name": "Reference Male 6",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-069": {
    "rawAssetId": "male-069",
    "name": "Reference Male 7",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-070": {
    "rawAssetId": "male-070",
    "name": "Reference Male 8",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-071": {
    "rawAssetId": "male-071",
    "name": "Reference Male 9",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-072": {
    "rawAssetId": "male-072",
    "name": "Man 1",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-073": {
    "rawAssetId": "male-073",
    "name": "Male 073",
    "category": "male",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "male"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "male-074": {
    "rawAssetId": "male-074",
    "name": "Male 074",
    "category": "male",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "male"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "male-075": {
    "rawAssetId": "male-075",
    "name": "Male 075",
    "category": "male",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "male"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "male-076": {
    "rawAssetId": "male-076",
    "name": "Man 1",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "male-077": {
    "rawAssetId": "male-077",
    "name": "Man 1",
    "category": "male",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[M] Male",
    "tags": [
      "male",
      "[m] male"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-01": {
    "rawAssetId": "female-01",
    "name": "Female Figure 10",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-02": {
    "rawAssetId": "female-02",
    "name": "Female Figure 100",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-03": {
    "rawAssetId": "female-03",
    "name": "Female Figure 101",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-04": {
    "rawAssetId": "female-04",
    "name": "Female Figure 104",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-05": {
    "rawAssetId": "female-05",
    "name": "Female Figure 108",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-06": {
    "rawAssetId": "female-06",
    "name": "Female Figure 109",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-07": {
    "rawAssetId": "female-07",
    "name": "Female Figure 11",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-001": {
    "rawAssetId": "female-001",
    "name": "Female 001",
    "category": "female",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "female"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "female-002": {
    "rawAssetId": "female-002",
    "name": "Female 002",
    "category": "female",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "female"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "female-003": {
    "rawAssetId": "female-003",
    "name": "Female 003",
    "category": "female",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "female"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "female-004": {
    "rawAssetId": "female-004",
    "name": "Female Figure 10",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-005": {
    "rawAssetId": "female-005",
    "name": "Female Figure 100",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-006": {
    "rawAssetId": "female-006",
    "name": "Female Figure 101",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-007": {
    "rawAssetId": "female-007",
    "name": "Female Figure 104",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-008": {
    "rawAssetId": "female-008",
    "name": "Female Figure 108",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-009": {
    "rawAssetId": "female-009",
    "name": "Female Figure 109",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-010": {
    "rawAssetId": "female-010",
    "name": "Female Figure 11",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-011": {
    "rawAssetId": "female-011",
    "name": "Female Figure 111",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-012": {
    "rawAssetId": "female-012",
    "name": "Female Figure 112",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-013": {
    "rawAssetId": "female-013",
    "name": "Female Figure 114",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-014": {
    "rawAssetId": "female-014",
    "name": "Female Figure 115",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-015": {
    "rawAssetId": "female-015",
    "name": "Female Figure 116",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-016": {
    "rawAssetId": "female-016",
    "name": "Female Figure 119",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-017": {
    "rawAssetId": "female-017",
    "name": "Female Figure 120",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-018": {
    "rawAssetId": "female-018",
    "name": "Female Figure 123",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-019": {
    "rawAssetId": "female-019",
    "name": "Female Figure 126",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-020": {
    "rawAssetId": "female-020",
    "name": "Female Figure 127",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-021": {
    "rawAssetId": "female-021",
    "name": "Female Figure 129",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-022": {
    "rawAssetId": "female-022",
    "name": "Female Figure 13",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-023": {
    "rawAssetId": "female-023",
    "name": "Female Figure 130",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-024": {
    "rawAssetId": "female-024",
    "name": "Female Figure 132",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-025": {
    "rawAssetId": "female-025",
    "name": "Female Figure 134",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-026": {
    "rawAssetId": "female-026",
    "name": "Female Figure 135",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-027": {
    "rawAssetId": "female-027",
    "name": "Female Figure 138",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-028": {
    "rawAssetId": "female-028",
    "name": "Female Figure 139",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-029": {
    "rawAssetId": "female-029",
    "name": "Female Figure 140",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-030": {
    "rawAssetId": "female-030",
    "name": "Female Figure 141",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-031": {
    "rawAssetId": "female-031",
    "name": "Female Figure 146",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-032": {
    "rawAssetId": "female-032",
    "name": "Female Figure 148",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-033": {
    "rawAssetId": "female-033",
    "name": "Female Figure 149",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-034": {
    "rawAssetId": "female-034",
    "name": "Female Figure 15",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-035": {
    "rawAssetId": "female-035",
    "name": "Female Figure 151",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-036": {
    "rawAssetId": "female-036",
    "name": "Female Figure 17",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-037": {
    "rawAssetId": "female-037",
    "name": "Female Figure 18",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-038": {
    "rawAssetId": "female-038",
    "name": "Female Figure 2",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-039": {
    "rawAssetId": "female-039",
    "name": "Female Figure 20",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-040": {
    "rawAssetId": "female-040",
    "name": "Female Figure 21",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-041": {
    "rawAssetId": "female-041",
    "name": "Female Figure 23",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-042": {
    "rawAssetId": "female-042",
    "name": "Female Figure 24",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-043": {
    "rawAssetId": "female-043",
    "name": "Female Figure 25",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-044": {
    "rawAssetId": "female-044",
    "name": "Female Figure 26",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-045": {
    "rawAssetId": "female-045",
    "name": "Female Figure 28",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-046": {
    "rawAssetId": "female-046",
    "name": "Female Figure 3",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-047": {
    "rawAssetId": "female-047",
    "name": "Female Figure 30",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-048": {
    "rawAssetId": "female-048",
    "name": "Female Figure 32",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-049": {
    "rawAssetId": "female-049",
    "name": "Female Figure 33",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-050": {
    "rawAssetId": "female-050",
    "name": "Female Figure 35",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-051": {
    "rawAssetId": "female-051",
    "name": "Female Figure 36",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-052": {
    "rawAssetId": "female-052",
    "name": "Female Figure 40",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-053": {
    "rawAssetId": "female-053",
    "name": "Female Figure 41",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-054": {
    "rawAssetId": "female-054",
    "name": "Female Figure 44",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-055": {
    "rawAssetId": "female-055",
    "name": "Female Figure 45",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-056": {
    "rawAssetId": "female-056",
    "name": "Female Figure 48",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-057": {
    "rawAssetId": "female-057",
    "name": "Female Figure 49",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-058": {
    "rawAssetId": "female-058",
    "name": "Female Figure 51",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-059": {
    "rawAssetId": "female-059",
    "name": "Female Figure 53",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-060": {
    "rawAssetId": "female-060",
    "name": "Female Figure 54",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-061": {
    "rawAssetId": "female-061",
    "name": "Female Figure 57",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-062": {
    "rawAssetId": "female-062",
    "name": "Female Figure 58",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-063": {
    "rawAssetId": "female-063",
    "name": "Female Figure 59",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-064": {
    "rawAssetId": "female-064",
    "name": "Female Figure 6",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-065": {
    "rawAssetId": "female-065",
    "name": "Female Figure 60",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-066": {
    "rawAssetId": "female-066",
    "name": "Female Figure 62",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-067": {
    "rawAssetId": "female-067",
    "name": "Female Figure 64",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-068": {
    "rawAssetId": "female-068",
    "name": "Female Figure 66",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-069": {
    "rawAssetId": "female-069",
    "name": "Female Figure 67",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-070": {
    "rawAssetId": "female-070",
    "name": "Female Figure 68",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-071": {
    "rawAssetId": "female-071",
    "name": "Female Figure 69",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-072": {
    "rawAssetId": "female-072",
    "name": "Female Figure 7",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-073": {
    "rawAssetId": "female-073",
    "name": "Female Figure 70",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-074": {
    "rawAssetId": "female-074",
    "name": "Female Figure 73",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-075": {
    "rawAssetId": "female-075",
    "name": "Female Figure 74",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-076": {
    "rawAssetId": "female-076",
    "name": "Female Figure 75",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-077": {
    "rawAssetId": "female-077",
    "name": "Female Figure 76",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-078": {
    "rawAssetId": "female-078",
    "name": "Female Figure 78",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-079": {
    "rawAssetId": "female-079",
    "name": "Female Figure 79",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-080": {
    "rawAssetId": "female-080",
    "name": "Female Figure 8",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-081": {
    "rawAssetId": "female-081",
    "name": "Female Figure 80",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-082": {
    "rawAssetId": "female-082",
    "name": "Female Figure 82",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-083": {
    "rawAssetId": "female-083",
    "name": "Female Figure 84",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-084": {
    "rawAssetId": "female-084",
    "name": "Female Figure 86",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-085": {
    "rawAssetId": "female-085",
    "name": "Female Figure 89",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-086": {
    "rawAssetId": "female-086",
    "name": "Female Figure 91",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-087": {
    "rawAssetId": "female-087",
    "name": "Female Figure 92",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-088": {
    "rawAssetId": "female-088",
    "name": "Female Figure 93",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-089": {
    "rawAssetId": "female-089",
    "name": "Female Figure 94",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-090": {
    "rawAssetId": "female-090",
    "name": "Female Figure 95",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-091": {
    "rawAssetId": "female-091",
    "name": "Female Figure 96",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-092": {
    "rawAssetId": "female-092",
    "name": "Female Figure 98",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-093": {
    "rawAssetId": "female-093",
    "name": "Girl 1",
    "category": "female",
    "heightCm": 138,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-094": {
    "rawAssetId": "female-094",
    "name": "Woman",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-095": {
    "rawAssetId": "female-095",
    "name": "Woman 1",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-096": {
    "rawAssetId": "female-096",
    "name": "Woman 10",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-097": {
    "rawAssetId": "female-097",
    "name": "Woman 11",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-098": {
    "rawAssetId": "female-098",
    "name": "Woman 12",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-099": {
    "rawAssetId": "female-099",
    "name": "Woman 13",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-100": {
    "rawAssetId": "female-100",
    "name": "Woman 14",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-101": {
    "rawAssetId": "female-101",
    "name": "Woman 16",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-102": {
    "rawAssetId": "female-102",
    "name": "Woman 2",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-103": {
    "rawAssetId": "female-103",
    "name": "Woman 3",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-104": {
    "rawAssetId": "female-104",
    "name": "Woman 6",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-105": {
    "rawAssetId": "female-105",
    "name": "Woman 7",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-106": {
    "rawAssetId": "female-106",
    "name": "Woman 8",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-107": {
    "rawAssetId": "female-107",
    "name": "Woman 9",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Long Hair",
    "tags": [
      "female",
      "[f] long hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-108": {
    "rawAssetId": "female-108",
    "name": "Female Figure",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-109": {
    "rawAssetId": "female-109",
    "name": "Female Figure 102",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-110": {
    "rawAssetId": "female-110",
    "name": "Female Figure 103",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-111": {
    "rawAssetId": "female-111",
    "name": "Female Figure 105",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-112": {
    "rawAssetId": "female-112",
    "name": "Female Figure 106",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-113": {
    "rawAssetId": "female-113",
    "name": "Female Figure 107",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-114": {
    "rawAssetId": "female-114",
    "name": "Female Figure 110",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-115": {
    "rawAssetId": "female-115",
    "name": "Female Figure 113",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-116": {
    "rawAssetId": "female-116",
    "name": "Female Figure 117",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-117": {
    "rawAssetId": "female-117",
    "name": "Female Figure 118",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-118": {
    "rawAssetId": "female-118",
    "name": "Female Figure 12",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-119": {
    "rawAssetId": "female-119",
    "name": "Female Figure 121",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-120": {
    "rawAssetId": "female-120",
    "name": "Female Figure 122",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-121": {
    "rawAssetId": "female-121",
    "name": "Female Figure 124",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-122": {
    "rawAssetId": "female-122",
    "name": "Female Figure 125",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-123": {
    "rawAssetId": "female-123",
    "name": "Female Figure 128",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-124": {
    "rawAssetId": "female-124",
    "name": "Female Figure 131",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-125": {
    "rawAssetId": "female-125",
    "name": "Female Figure 133",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-126": {
    "rawAssetId": "female-126",
    "name": "Female Figure 136",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-127": {
    "rawAssetId": "female-127",
    "name": "Female Figure 137",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-128": {
    "rawAssetId": "female-128",
    "name": "Female Figure 14",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-129": {
    "rawAssetId": "female-129",
    "name": "Female Figure 143",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-130": {
    "rawAssetId": "female-130",
    "name": "Female Figure 143",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-131": {
    "rawAssetId": "female-131",
    "name": "Female Figure 144",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-132": {
    "rawAssetId": "female-132",
    "name": "Female Figure 145",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-133": {
    "rawAssetId": "female-133",
    "name": "Female Figure 147",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-134": {
    "rawAssetId": "female-134",
    "name": "Female Figure 150",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-135": {
    "rawAssetId": "female-135",
    "name": "Female Figure 16",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-136": {
    "rawAssetId": "female-136",
    "name": "Female Figure 19",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-137": {
    "rawAssetId": "female-137",
    "name": "Female Figure 22",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-138": {
    "rawAssetId": "female-138",
    "name": "Female Figure 27",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-139": {
    "rawAssetId": "female-139",
    "name": "Female Figure 29",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-140": {
    "rawAssetId": "female-140",
    "name": "Female Figure 31",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-141": {
    "rawAssetId": "female-141",
    "name": "Female Figure 34",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-142": {
    "rawAssetId": "female-142",
    "name": "Female Figure 37",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-143": {
    "rawAssetId": "female-143",
    "name": "Female Figure 38",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-144": {
    "rawAssetId": "female-144",
    "name": "Female Figure 39",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-145": {
    "rawAssetId": "female-145",
    "name": "Female Figure 4",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-146": {
    "rawAssetId": "female-146",
    "name": "Female Figure 42",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-147": {
    "rawAssetId": "female-147",
    "name": "Female Figure 43",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-148": {
    "rawAssetId": "female-148",
    "name": "Female Figure 46",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-149": {
    "rawAssetId": "female-149",
    "name": "Female Figure 47",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-150": {
    "rawAssetId": "female-150",
    "name": "Female Figure 5",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-151": {
    "rawAssetId": "female-151",
    "name": "Female Figure 50",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-152": {
    "rawAssetId": "female-152",
    "name": "Female Figure 52",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-153": {
    "rawAssetId": "female-153",
    "name": "Female Figure 55",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-154": {
    "rawAssetId": "female-154",
    "name": "Female Figure 56",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-155": {
    "rawAssetId": "female-155",
    "name": "Female Figure 61",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-156": {
    "rawAssetId": "female-156",
    "name": "Female Figure 63",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-157": {
    "rawAssetId": "female-157",
    "name": "Female Figure 65",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-158": {
    "rawAssetId": "female-158",
    "name": "Female Figure 71",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-159": {
    "rawAssetId": "female-159",
    "name": "Female Figure 72",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-160": {
    "rawAssetId": "female-160",
    "name": "Female Figure 77",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-161": {
    "rawAssetId": "female-161",
    "name": "Female Figure 81",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-162": {
    "rawAssetId": "female-162",
    "name": "Female Figure 83",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-163": {
    "rawAssetId": "female-163",
    "name": "Female Figure 85",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-164": {
    "rawAssetId": "female-164",
    "name": "Female Figure 87",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-165": {
    "rawAssetId": "female-165",
    "name": "Female Figure 88",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-166": {
    "rawAssetId": "female-166",
    "name": "Female Figure 9",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-167": {
    "rawAssetId": "female-167",
    "name": "Female Figure 90",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-168": {
    "rawAssetId": "female-168",
    "name": "Female Figure 97",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-169": {
    "rawAssetId": "female-169",
    "name": "Female Figure 99",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-170": {
    "rawAssetId": "female-170",
    "name": "Woman 4",
    "category": "female",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[F] Short Hair",
    "tags": [
      "female",
      "[f] short hair"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "female-171": {
    "rawAssetId": "female-171",
    "name": "Female 171",
    "category": "female",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "female"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "female-172": {
    "rawAssetId": "female-172",
    "name": "Female 172",
    "category": "female",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "female"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "female-173": {
    "rawAssetId": "female-173",
    "name": "Female 173",
    "category": "female",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "female"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "female-174": {
    "rawAssetId": "female-174",
    "name": "Female 174",
    "category": "female",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "female"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "female-175": {
    "rawAssetId": "female-175",
    "name": "Female 175",
    "category": "female",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "female"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "female-176": {
    "rawAssetId": "female-176",
    "name": "Female 176",
    "category": "female",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "female"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-001": {
    "rawAssetId": "apparel-001",
    "name": "Apparel 001",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "apparel-002": {
    "rawAssetId": "apparel-002",
    "name": "Apparel 002",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "apparel-003": {
    "rawAssetId": "apparel-003",
    "name": "Apparel 003",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-004": {
    "rawAssetId": "apparel-004",
    "name": "Apparel 004",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-005": {
    "rawAssetId": "apparel-005",
    "name": "Apparel 005",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-006": {
    "rawAssetId": "apparel-006",
    "name": "Apparel 006",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-007": {
    "rawAssetId": "apparel-007",
    "name": "Apparel 007",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-008": {
    "rawAssetId": "apparel-008",
    "name": "Apparel 008",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-009": {
    "rawAssetId": "apparel-009",
    "name": "Apparel 009",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-010": {
    "rawAssetId": "apparel-010",
    "name": "Apparel 010",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-011": {
    "rawAssetId": "apparel-011",
    "name": "Apparel 011",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-012": {
    "rawAssetId": "apparel-012",
    "name": "Apparel 012",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-013": {
    "rawAssetId": "apparel-013",
    "name": "Apparel 013",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-014": {
    "rawAssetId": "apparel-014",
    "name": "Apparel 014",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-015": {
    "rawAssetId": "apparel-015",
    "name": "Apparel 015",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-016": {
    "rawAssetId": "apparel-016",
    "name": "Apparel 016",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-017": {
    "rawAssetId": "apparel-017",
    "name": "Apparel 017",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-018": {
    "rawAssetId": "apparel-018",
    "name": "Apparel 018",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-019": {
    "rawAssetId": "apparel-019",
    "name": "Apparel 019",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-020": {
    "rawAssetId": "apparel-020",
    "name": "Apparel 020",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-021": {
    "rawAssetId": "apparel-021",
    "name": "Apparel 021",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-022": {
    "rawAssetId": "apparel-022",
    "name": "Apparel 022",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-023": {
    "rawAssetId": "apparel-023",
    "name": "Apparel 023",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-024": {
    "rawAssetId": "apparel-024",
    "name": "Apparel 024",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-025": {
    "rawAssetId": "apparel-025",
    "name": "Apparel 025",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-026": {
    "rawAssetId": "apparel-026",
    "name": "Apparel 026",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-027": {
    "rawAssetId": "apparel-027",
    "name": "Apparel 027",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-028": {
    "rawAssetId": "apparel-028",
    "name": "Apparel 028",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-029": {
    "rawAssetId": "apparel-029",
    "name": "Apparel 029",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-030": {
    "rawAssetId": "apparel-030",
    "name": "Apparel 030",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-031": {
    "rawAssetId": "apparel-031",
    "name": "Apparel 031",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-032": {
    "rawAssetId": "apparel-032",
    "name": "Apparel 032",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-033": {
    "rawAssetId": "apparel-033",
    "name": "Apparel 033",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-034": {
    "rawAssetId": "apparel-034",
    "name": "Apparel 034",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-035": {
    "rawAssetId": "apparel-035",
    "name": "Apparel 035",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-036": {
    "rawAssetId": "apparel-036",
    "name": "Apparel 036",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-037": {
    "rawAssetId": "apparel-037",
    "name": "Apparel 037",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-038": {
    "rawAssetId": "apparel-038",
    "name": "Apparel 038",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-039": {
    "rawAssetId": "apparel-039",
    "name": "Apparel 039",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-040": {
    "rawAssetId": "apparel-040",
    "name": "Apparel 040",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-041": {
    "rawAssetId": "apparel-041",
    "name": "Apparel 041",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-042": {
    "rawAssetId": "apparel-042",
    "name": "Apparel 042",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-043": {
    "rawAssetId": "apparel-043",
    "name": "Apparel 043",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-044": {
    "rawAssetId": "apparel-044",
    "name": "Apparel 044",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-045": {
    "rawAssetId": "apparel-045",
    "name": "Apparel 045",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-046": {
    "rawAssetId": "apparel-046",
    "name": "Apparel 046",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-047": {
    "rawAssetId": "apparel-047",
    "name": "Apparel 047",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-048": {
    "rawAssetId": "apparel-048",
    "name": "Apparel 048",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-049": {
    "rawAssetId": "apparel-049",
    "name": "Apparel 049",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-050": {
    "rawAssetId": "apparel-050",
    "name": "Apparel 050",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-051": {
    "rawAssetId": "apparel-051",
    "name": "Apparel 051",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-052": {
    "rawAssetId": "apparel-052",
    "name": "Apparel 052",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-053": {
    "rawAssetId": "apparel-053",
    "name": "Apparel 053",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-054": {
    "rawAssetId": "apparel-054",
    "name": "Apparel 054",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-055": {
    "rawAssetId": "apparel-055",
    "name": "Apparel 055",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-056": {
    "rawAssetId": "apparel-056",
    "name": "Apparel 056",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-057": {
    "rawAssetId": "apparel-057",
    "name": "Apparel 057",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-058": {
    "rawAssetId": "apparel-058",
    "name": "Apparel 058",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-059": {
    "rawAssetId": "apparel-059",
    "name": "Apparel 059",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-060": {
    "rawAssetId": "apparel-060",
    "name": "Apparel 060",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-061": {
    "rawAssetId": "apparel-061",
    "name": "Apparel 061",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-062": {
    "rawAssetId": "apparel-062",
    "name": "Apparel 062",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-063": {
    "rawAssetId": "apparel-063",
    "name": "Apparel 063",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-064": {
    "rawAssetId": "apparel-064",
    "name": "Apparel 064",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-065": {
    "rawAssetId": "apparel-065",
    "name": "Apparel 065",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-066": {
    "rawAssetId": "apparel-066",
    "name": "Apparel 066",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-067": {
    "rawAssetId": "apparel-067",
    "name": "Apparel 067",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-068": {
    "rawAssetId": "apparel-068",
    "name": "Apparel 068",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-069": {
    "rawAssetId": "apparel-069",
    "name": "Apparel 069",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-070": {
    "rawAssetId": "apparel-070",
    "name": "Apparel 070",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-071": {
    "rawAssetId": "apparel-071",
    "name": "Apparel 071",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-072": {
    "rawAssetId": "apparel-072",
    "name": "Apparel 072",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-073": {
    "rawAssetId": "apparel-073",
    "name": "Apparel 073",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-074": {
    "rawAssetId": "apparel-074",
    "name": "Apparel 074",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-075": {
    "rawAssetId": "apparel-075",
    "name": "Apparel 075",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-076": {
    "rawAssetId": "apparel-076",
    "name": "Apparel 076",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-077": {
    "rawAssetId": "apparel-077",
    "name": "Apparel 077",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-078": {
    "rawAssetId": "apparel-078",
    "name": "Apparel 078",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-079": {
    "rawAssetId": "apparel-079",
    "name": "Apparel 079",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-080": {
    "rawAssetId": "apparel-080",
    "name": "Apparel 080",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-081": {
    "rawAssetId": "apparel-081",
    "name": "Apparel 081",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-082": {
    "rawAssetId": "apparel-082",
    "name": "Apparel 082",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-083": {
    "rawAssetId": "apparel-083",
    "name": "Apparel 083",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-084": {
    "rawAssetId": "apparel-084",
    "name": "Apparel 084",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-085": {
    "rawAssetId": "apparel-085",
    "name": "Apparel 085",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-086": {
    "rawAssetId": "apparel-086",
    "name": "Apparel 086",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-087": {
    "rawAssetId": "apparel-087",
    "name": "Apparel 087",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-088": {
    "rawAssetId": "apparel-088",
    "name": "Apparel 088",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-089": {
    "rawAssetId": "apparel-089",
    "name": "Apparel 089",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-090": {
    "rawAssetId": "apparel-090",
    "name": "Apparel 090",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-091": {
    "rawAssetId": "apparel-091",
    "name": "Apparel 091",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-092": {
    "rawAssetId": "apparel-092",
    "name": "Apparel 092",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-093": {
    "rawAssetId": "apparel-093",
    "name": "Apparel 093",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-094": {
    "rawAssetId": "apparel-094",
    "name": "Apparel 094",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-095": {
    "rawAssetId": "apparel-095",
    "name": "Apparel 095",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-096": {
    "rawAssetId": "apparel-096",
    "name": "Apparel 096",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-097": {
    "rawAssetId": "apparel-097",
    "name": "Apparel 097",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "apparel-098": {
    "rawAssetId": "apparel-098",
    "name": "Apparel 098",
    "category": "apparel",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "apparel"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "animal-bear-01": {
    "rawAssetId": "animal-bear-01",
    "name": "Grizzly Bear",
    "category": "animals",
    "heightCm": 135,
    "measurementType": "shoulder-height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "bear",
      "grizzly"
    ],
    "aliases": [
      "bear",
      "grizzly"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "animal-blue-whale-01": {
    "rawAssetId": "animal-blue-whale-01",
    "name": "Blue Whale",
    "category": "animals",
    "heightCm": 450,
    "measurementType": "shoulder-height",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "whale",
      "blue whale"
    ],
    "aliases": [
      "blue-whale",
      "whale"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "animal-cat-01": {
    "rawAssetId": "animal-cat-01",
    "name": "Domestic Cat",
    "category": "animals",
    "heightCm": 25,
    "measurementType": "shoulder-height",
    "subgroup": "[A] Felines",
    "tags": [
      "animals",
      "cat",
      "feline",
      "kitten"
    ],
    "aliases": [
      "cat",
      "feline"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "animal-dog-01": {
    "rawAssetId": "animal-dog-01",
    "name": "Domestic Dog",
    "category": "animals",
    "heightCm": 60,
    "measurementType": "shoulder-height",
    "subgroup": "[A] Canines",
    "tags": [
      "animals",
      "dog",
      "canine",
      "puppy"
    ],
    "aliases": [
      "dog",
      "canine"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "animal-elephant-01": {
    "rawAssetId": "animal-elephant-01",
    "name": "African Elephant",
    "category": "animals",
    "heightCm": 320,
    "measurementType": "shoulder-height",
    "subgroup": "[A] Elephants",
    "tags": [
      "animals",
      "elephant",
      "african elephant"
    ],
    "aliases": [
      "elephant"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "animal-giraffe-01": {
    "rawAssetId": "animal-giraffe-01",
    "name": "Giraffe",
    "category": "animals",
    "heightCm": 500,
    "measurementType": "ground-to-top",
    "subgroup": "[A] Giraffes",
    "tags": [
      "animals",
      "giraffe",
      "tallest animal"
    ],
    "aliases": [
      "giraffe"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "animal-horse-01": {
    "rawAssetId": "animal-horse-01",
    "name": "Horse",
    "category": "animals",
    "heightCm": 160,
    "measurementType": "shoulder-height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "horse",
      "equine",
      "stallion",
      "riding horse"
    ],
    "aliases": [
      "horse",
      "horse-standing",
      "equine"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "animal-lion-01": {
    "rawAssetId": "animal-lion-01",
    "name": "Lion",
    "category": "animals",
    "heightCm": 120,
    "measurementType": "shoulder-height",
    "subgroup": "[A] Big Cats",
    "tags": [
      "animals",
      "lion",
      "big cat",
      "panthera leo"
    ],
    "aliases": [
      "lion"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "animal-tiger-01": {
    "rawAssetId": "animal-tiger-01",
    "name": "Bengal Tiger",
    "category": "animals",
    "heightCm": 100,
    "measurementType": "shoulder-height",
    "subgroup": "[A] Big Cats",
    "tags": [
      "animals",
      "tiger",
      "big cat",
      "bengal tiger"
    ],
    "aliases": [
      "tiger",
      "bengal-tiger"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "animal-wolf-01": {
    "rawAssetId": "animal-wolf-01",
    "name": "Gray Wolf",
    "category": "animals",
    "heightCm": 80,
    "measurementType": "shoulder-height",
    "subgroup": "[A] Canines",
    "tags": [
      "animals",
      "wolf",
      "gray wolf"
    ],
    "aliases": [
      "wolf"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "animal-001": {
    "rawAssetId": "animal-001",
    "name": "Animal 001",
    "category": "animals",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "animals"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "animal-002": {
    "rawAssetId": "animal-002",
    "name": "Animal 002",
    "category": "animals",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "animals"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "animal-003": {
    "rawAssetId": "animal-003",
    "name": "Animal 003",
    "category": "animals",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "animals"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "animal-004": {
    "rawAssetId": "animal-004",
    "name": "Arctic Fox",
    "category": "animals",
    "heightCm": 28,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-005": {
    "rawAssetId": "animal-005",
    "name": "Arctic Wolf",
    "category": "animals",
    "heightCm": 85,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-006": {
    "rawAssetId": "animal-006",
    "name": "Big Cats",
    "category": "animals",
    "heightCm": 40,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-007": {
    "rawAssetId": "animal-007",
    "name": "British Shorthair Cat",
    "category": "animals",
    "heightCm": 25,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-008": {
    "rawAssetId": "animal-008",
    "name": "Cat",
    "category": "animals",
    "heightCm": 25,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-009": {
    "rawAssetId": "animal-009",
    "name": "Cat 2",
    "category": "animals",
    "heightCm": 25,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-010": {
    "rawAssetId": "animal-010",
    "name": "Cat 3",
    "category": "animals",
    "heightCm": 25,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-011": {
    "rawAssetId": "animal-011",
    "name": "Cat 4",
    "category": "animals",
    "heightCm": 25,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-012": {
    "rawAssetId": "animal-012",
    "name": "Cat 5",
    "category": "animals",
    "heightCm": 25,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-013": {
    "rawAssetId": "animal-013",
    "name": "Cat 6",
    "category": "animals",
    "heightCm": 25,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-014": {
    "rawAssetId": "animal-014",
    "name": "Cat 7",
    "category": "animals",
    "heightCm": 25,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-015": {
    "rawAssetId": "animal-015",
    "name": "Cheetah",
    "category": "animals",
    "heightCm": 77,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-016": {
    "rawAssetId": "animal-016",
    "name": "Cougar",
    "category": "animals",
    "heightCm": 65,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-017": {
    "rawAssetId": "animal-017",
    "name": "Coyote",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-018": {
    "rawAssetId": "animal-018",
    "name": "Dog",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-019": {
    "rawAssetId": "animal-019",
    "name": "Dog 10",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-020": {
    "rawAssetId": "animal-020",
    "name": "Dog 2",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-021": {
    "rawAssetId": "animal-021",
    "name": "Dog 3",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-022": {
    "rawAssetId": "animal-022",
    "name": "Dog 4",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-023": {
    "rawAssetId": "animal-023",
    "name": "Dog 5",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-024": {
    "rawAssetId": "animal-024",
    "name": "Dog 6",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-025": {
    "rawAssetId": "animal-025",
    "name": "Dog 7",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-026": {
    "rawAssetId": "animal-026",
    "name": "Dog 8",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-027": {
    "rawAssetId": "animal-027",
    "name": "Dog 9",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-028": {
    "rawAssetId": "animal-028",
    "name": "Domestic Cat",
    "category": "animals",
    "heightCm": 25,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-029": {
    "rawAssetId": "animal-029",
    "name": "Golden Cat",
    "category": "animals",
    "heightCm": 45,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-030": {
    "rawAssetId": "animal-030",
    "name": "Gray Wolf",
    "category": "animals",
    "heightCm": 70,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-031": {
    "rawAssetId": "animal-031",
    "name": "Large Dogs",
    "category": "animals",
    "heightCm": 75,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-032": {
    "rawAssetId": "animal-032",
    "name": "Large Dogs 1",
    "category": "animals",
    "heightCm": 75,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-033": {
    "rawAssetId": "animal-033",
    "name": "Large Dogs 2",
    "category": "animals",
    "heightCm": 70,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-034": {
    "rawAssetId": "animal-034",
    "name": "Leopard",
    "category": "animals",
    "heightCm": 65,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-035": {
    "rawAssetId": "animal-035",
    "name": "Lion",
    "category": "animals",
    "heightCm": 140,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-036": {
    "rawAssetId": "animal-036",
    "name": "Lynx",
    "category": "animals",
    "heightCm": 65,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-037": {
    "rawAssetId": "animal-037",
    "name": "Medium Sized Dog",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-038": {
    "rawAssetId": "animal-038",
    "name": "Ragdoll Cat",
    "category": "animals",
    "heightCm": 25,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-039": {
    "rawAssetId": "animal-039",
    "name": "Red Fox",
    "category": "animals",
    "heightCm": 40,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-040": {
    "rawAssetId": "animal-040",
    "name": "Serval",
    "category": "animals",
    "heightCm": 65,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-041": {
    "rawAssetId": "animal-041",
    "name": "Short Hair Cat",
    "category": "animals",
    "heightCm": 25,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-042": {
    "rawAssetId": "animal-042",
    "name": "Tiger",
    "category": "animals",
    "heightCm": 100,
    "measurementType": "height",
    "subgroup": "[A] Cats & Dogs",
    "tags": [
      "animals",
      "[a] cats & dogs"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-043": {
    "rawAssetId": "animal-043",
    "name": "American Bison",
    "category": "animals",
    "heightCm": 190,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-044": {
    "rawAssetId": "animal-044",
    "name": "Arabian Horse",
    "category": "animals",
    "heightCm": 152,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-045": {
    "rawAssetId": "animal-045",
    "name": "Black Bear",
    "category": "animals",
    "heightCm": 90,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-046": {
    "rawAssetId": "animal-046",
    "name": "Brown Bear",
    "category": "animals",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-047": {
    "rawAssetId": "animal-047",
    "name": "Domestic Cattle",
    "category": "animals",
    "heightCm": 130,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-048": {
    "rawAssetId": "animal-048",
    "name": "Domestic Horse",
    "category": "animals",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "horse",
      "domestic horse",
      "equine"
    ],
    "aliases": [
      "horse",
      "domestic-horse",
      "equine"
    ],
    "status": "verified",
    "indexable": true
  },
  "animal-049": {
    "rawAssetId": "animal-049",
    "name": "European Bison",
    "category": "animals",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-050": {
    "rawAssetId": "animal-050",
    "name": "Giant Panda",
    "category": "animals",
    "heightCm": 80,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-051": {
    "rawAssetId": "animal-051",
    "name": "Kodiak Bear",
    "category": "animals",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-052": {
    "rawAssetId": "animal-052",
    "name": "Lazy Bear",
    "category": "animals",
    "heightCm": 75,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-053": {
    "rawAssetId": "animal-053",
    "name": "Musk Ox",
    "category": "animals",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-054": {
    "rawAssetId": "animal-054",
    "name": "Polar Bear",
    "category": "animals",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-055": {
    "rawAssetId": "animal-055",
    "name": "Przewalski's Horse",
    "category": "animals",
    "heightCm": 132,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-056": {
    "rawAssetId": "animal-056",
    "name": "Shetland Pony",
    "category": "animals",
    "heightCm": 102,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-057": {
    "rawAssetId": "animal-057",
    "name": "Spectacled Bear",
    "category": "animals",
    "heightCm": 80,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-058": {
    "rawAssetId": "animal-058",
    "name": "White Rhinoceros",
    "category": "animals",
    "heightCm": 200,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-059": {
    "rawAssetId": "animal-059",
    "name": "Wildebeest",
    "category": "animals",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-060": {
    "rawAssetId": "animal-060",
    "name": "Zebra",
    "category": "animals",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-061": {
    "rawAssetId": "animal-061",
    "name": "Zebu",
    "category": "animals",
    "heightCm": 140,
    "measurementType": "height",
    "subgroup": "[A] Cattle, Horses & Bears",
    "tags": [
      "animals",
      "[a] cattle, horses & bears"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-062": {
    "rawAssetId": "animal-062",
    "name": "Elk",
    "category": "animals",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[A] Deer, Elephants & Rhinos",
    "tags": [
      "animals",
      "[a] deer, elephants & rhinos"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-063": {
    "rawAssetId": "animal-063",
    "name": "Fallow Deer",
    "category": "animals",
    "heightCm": 125,
    "measurementType": "height",
    "subgroup": "[A] Deer, Elephants & Rhinos",
    "tags": [
      "animals",
      "[a] deer, elephants & rhinos"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-064": {
    "rawAssetId": "animal-064",
    "name": "Indian Rhinoceros",
    "category": "animals",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[A] Deer, Elephants & Rhinos",
    "tags": [
      "animals",
      "[a] deer, elephants & rhinos"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-065": {
    "rawAssetId": "animal-065",
    "name": "Javan Rhinoceros",
    "category": "animals",
    "heightCm": 145,
    "measurementType": "height",
    "subgroup": "[A] Deer, Elephants & Rhinos",
    "tags": [
      "animals",
      "[a] deer, elephants & rhinos"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-066": {
    "rawAssetId": "animal-066",
    "name": "Mastodon",
    "category": "animals",
    "heightCm": 290,
    "measurementType": "height",
    "subgroup": "[A] Deer, Elephants & Rhinos",
    "tags": [
      "animals",
      "[a] deer, elephants & rhinos"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-067": {
    "rawAssetId": "animal-067",
    "name": "Oryx",
    "category": "animals",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[A] Deer, Elephants & Rhinos",
    "tags": [
      "animals",
      "[a] deer, elephants & rhinos"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-068": {
    "rawAssetId": "animal-068",
    "name": "Red Deer",
    "category": "animals",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[A] Deer, Elephants & Rhinos",
    "tags": [
      "animals",
      "[a] deer, elephants & rhinos"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-069": {
    "rawAssetId": "animal-069",
    "name": "Sambar",
    "category": "animals",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[A] Deer, Elephants & Rhinos",
    "tags": [
      "animals",
      "[a] deer, elephants & rhinos"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-070": {
    "rawAssetId": "animal-070",
    "name": "Sumatran Rhinoceros",
    "category": "animals",
    "heightCm": 132,
    "measurementType": "height",
    "subgroup": "[A] Deer, Elephants & Rhinos",
    "tags": [
      "animals",
      "[a] deer, elephants & rhinos"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-071": {
    "rawAssetId": "animal-071",
    "name": "White-tailed Deer",
    "category": "animals",
    "heightCm": 140,
    "measurementType": "height",
    "subgroup": "[A] Deer, Elephants & Rhinos",
    "tags": [
      "animals",
      "[a] deer, elephants & rhinos"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-072": {
    "rawAssetId": "animal-072",
    "name": "Angler Fish",
    "category": "animals",
    "heightCm": 57.6,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-073": {
    "rawAssetId": "animal-073",
    "name": "Beluga Whale",
    "category": "animals",
    "heightCm": 200,
    "measurementType": "height",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-074": {
    "rawAssetId": "animal-074",
    "name": "Blue Whale",
    "category": "animals",
    "heightCm": 571.4,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-075": {
    "rawAssetId": "animal-075",
    "name": "Giant Manta Ray",
    "category": "animals",
    "heightCm": 296.6,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-076": {
    "rawAssetId": "animal-076",
    "name": "Giant Pacific Octopus",
    "category": "animals",
    "heightCm": 234.1,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-077": {
    "rawAssetId": "animal-077",
    "name": "Giant Squid",
    "category": "animals",
    "heightCm": 83.3,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-078": {
    "rawAssetId": "animal-078",
    "name": "Goblin Shark",
    "category": "animals",
    "heightCm": 85.4,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-079": {
    "rawAssetId": "animal-079",
    "name": "Great White Shark",
    "category": "animals",
    "heightCm": 190,
    "measurementType": "height",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-080": {
    "rawAssetId": "animal-080",
    "name": "Hammerhead Shark",
    "category": "animals",
    "heightCm": 119.5,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-081": {
    "rawAssetId": "animal-081",
    "name": "Humpback Whale",
    "category": "animals",
    "heightCm": 472.8,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-082": {
    "rawAssetId": "animal-082",
    "name": "Lantern Fish",
    "category": "animals",
    "heightCm": 12.4,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-083": {
    "rawAssetId": "animal-083",
    "name": "Leafy Seadragon",
    "category": "animals",
    "heightCm": 23.4,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-084": {
    "rawAssetId": "animal-084",
    "name": "Leatherback Sea Turtle",
    "category": "animals",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-085": {
    "rawAssetId": "animal-085",
    "name": "Lion's Mane Jellyfish",
    "category": "animals",
    "heightCm": 360,
    "measurementType": "height",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-086": {
    "rawAssetId": "animal-086",
    "name": "Manatee",
    "category": "animals",
    "heightCm": 138.9,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-087": {
    "rawAssetId": "animal-087",
    "name": "Narwhal",
    "category": "animals",
    "heightCm": 218.2,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-088": {
    "rawAssetId": "animal-088",
    "name": "Oarfish",
    "category": "animals",
    "heightCm": 68.1,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-089": {
    "rawAssetId": "animal-089",
    "name": "Orca",
    "category": "animals",
    "heightCm": 275.9,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-090": {
    "rawAssetId": "animal-090",
    "name": "Portuguese Man-of-war Jellyfish",
    "category": "animals",
    "heightCm": 161.2,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-091": {
    "rawAssetId": "animal-091",
    "name": "Sawfish",
    "category": "animals",
    "heightCm": 102.3,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-092": {
    "rawAssetId": "animal-092",
    "name": "Sea Lion",
    "category": "animals",
    "heightCm": 190.7,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-093": {
    "rawAssetId": "animal-093",
    "name": "Sea Otter",
    "category": "animals",
    "heightCm": 72.8,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-094": {
    "rawAssetId": "animal-094",
    "name": "Seahorse",
    "category": "animals",
    "heightCm": 9.5,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-095": {
    "rawAssetId": "animal-095",
    "name": "Seal",
    "category": "animals",
    "heightCm": 70.9,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-096": {
    "rawAssetId": "animal-096",
    "name": "Sperm Whale",
    "category": "animals",
    "heightCm": 441.8,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-097": {
    "rawAssetId": "animal-097",
    "name": "Sunfish",
    "category": "animals",
    "heightCm": 221.6,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-098": {
    "rawAssetId": "animal-098",
    "name": "Swordfish",
    "category": "animals",
    "heightCm": 103.6,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-099": {
    "rawAssetId": "animal-099",
    "name": "Walrus",
    "category": "animals",
    "heightCm": 219.5,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-100": {
    "rawAssetId": "animal-100",
    "name": "Whale Shark",
    "category": "animals",
    "heightCm": 335.2,
    "measurementType": "length",
    "subgroup": "[A] Marine Life",
    "tags": [
      "animals",
      "[a] marine life"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-101": {
    "rawAssetId": "animal-101",
    "name": "Aerotitan",
    "category": "animals",
    "heightCm": 200,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-102": {
    "rawAssetId": "animal-102",
    "name": "Allosaurus",
    "category": "animals",
    "heightCm": 350,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-103": {
    "rawAssetId": "animal-103",
    "name": "Amargasaurus",
    "category": "animals",
    "heightCm": 1300,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-104": {
    "rawAssetId": "animal-104",
    "name": "Argentinosaurus",
    "category": "animals",
    "heightCm": 1400,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-105": {
    "rawAssetId": "animal-105",
    "name": "Brachiosaurus",
    "category": "animals",
    "heightCm": 1200,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-106": {
    "rawAssetId": "animal-106",
    "name": "Brontosaurus",
    "category": "animals",
    "heightCm": 700,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-107": {
    "rawAssetId": "animal-107",
    "name": "Carnotaurus",
    "category": "animals",
    "heightCm": 800,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-108": {
    "rawAssetId": "animal-108",
    "name": "Deinonychus",
    "category": "animals",
    "heightCm": 90,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-109": {
    "rawAssetId": "animal-109",
    "name": "Dilophosaurus",
    "category": "animals",
    "heightCm": 200,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-110": {
    "rawAssetId": "animal-110",
    "name": "Dinosaur",
    "category": "animals",
    "heightCm": 548.7,
    "measurementType": "length",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-111": {
    "rawAssetId": "animal-111",
    "name": "Dreadnoughtus Schrani",
    "category": "animals",
    "heightCm": 700,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-112": {
    "rawAssetId": "animal-112",
    "name": "Dsungaripterus",
    "category": "animals",
    "heightCm": 230,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-113": {
    "rawAssetId": "animal-113",
    "name": "Giganotosaurus",
    "category": "animals",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-114": {
    "rawAssetId": "animal-114",
    "name": "Heterodontosaurus",
    "category": "animals",
    "heightCm": 100,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-115": {
    "rawAssetId": "animal-115",
    "name": "Istiodactylus",
    "category": "animals",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-116": {
    "rawAssetId": "animal-116",
    "name": "Long-tailed Mosasaur",
    "category": "animals",
    "heightCm": 289.6,
    "measurementType": "length",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-117": {
    "rawAssetId": "animal-117",
    "name": "Mamenchisaurus",
    "category": "animals",
    "heightCm": 900,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-118": {
    "rawAssetId": "animal-118",
    "name": "Mammoth",
    "category": "animals",
    "heightCm": 335,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-119": {
    "rawAssetId": "animal-119",
    "name": "Mosasaurus",
    "category": "animals",
    "heightCm": 271.7,
    "measurementType": "length",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-120": {
    "rawAssetId": "animal-120",
    "name": "Patagotitan",
    "category": "animals",
    "heightCm": 1000,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-121": {
    "rawAssetId": "animal-121",
    "name": "Pteranodon",
    "category": "animals",
    "heightCm": 378.6,
    "measurementType": "length",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-122": {
    "rawAssetId": "animal-122",
    "name": "Quetzalcoatlus",
    "category": "animals",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-123": {
    "rawAssetId": "animal-123",
    "name": "Rhamphorhynchus",
    "category": "animals",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-124": {
    "rawAssetId": "animal-124",
    "name": "Saltasaurus",
    "category": "animals",
    "heightCm": 350,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-125": {
    "rawAssetId": "animal-125",
    "name": "Spinosaurus",
    "category": "animals",
    "heightCm": 550,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-126": {
    "rawAssetId": "animal-126",
    "name": "Tapejara",
    "category": "animals",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-127": {
    "rawAssetId": "animal-127",
    "name": "Therizinosaurus",
    "category": "animals",
    "heightCm": 100,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-128": {
    "rawAssetId": "animal-128",
    "name": "Tupandactylus",
    "category": "animals",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-129": {
    "rawAssetId": "animal-129",
    "name": "Tyrannosaurus Rex",
    "category": "animals",
    "heightCm": 600,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-130": {
    "rawAssetId": "animal-130",
    "name": "Utahraptor",
    "category": "animals",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-131": {
    "rawAssetId": "animal-131",
    "name": "Velociraptor",
    "category": "animals",
    "heightCm": 80,
    "measurementType": "height",
    "subgroup": "[A] Prehistoric Animals",
    "tags": [
      "animals",
      "[a] prehistoric animals"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-132": {
    "rawAssetId": "animal-132",
    "name": "Albatross",
    "category": "animals",
    "heightCm": 113.8,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-133": {
    "rawAssetId": "animal-133",
    "name": "Alligator",
    "category": "animals",
    "heightCm": 47.7,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-134": {
    "rawAssetId": "animal-134",
    "name": "Baobab",
    "category": "animals",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-135": {
    "rawAssetId": "animal-135",
    "name": "Cassowary",
    "category": "animals",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-136": {
    "rawAssetId": "animal-136",
    "name": "Chimpanzee",
    "category": "animals",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-137": {
    "rawAssetId": "animal-137",
    "name": "Chinese Alligator",
    "category": "animals",
    "heightCm": 33.2,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-138": {
    "rawAssetId": "animal-138",
    "name": "Cormorant",
    "category": "animals",
    "heightCm": 90,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-139": {
    "rawAssetId": "animal-139",
    "name": "Crocodile Monitor Lizard",
    "category": "animals",
    "heightCm": 55.3,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-140": {
    "rawAssetId": "animal-140",
    "name": "Domestic Duck",
    "category": "animals",
    "heightCm": 65,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-141": {
    "rawAssetId": "animal-141",
    "name": "Domestic Goose",
    "category": "animals",
    "heightCm": 100,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-142": {
    "rawAssetId": "animal-142",
    "name": "Egret",
    "category": "animals",
    "heightCm": 100,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-143": {
    "rawAssetId": "animal-143",
    "name": "Emu",
    "category": "animals",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-144": {
    "rawAssetId": "animal-144",
    "name": "Flamingo",
    "category": "animals",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-145": {
    "rawAssetId": "animal-145",
    "name": "Gharial",
    "category": "animals",
    "heightCm": 42.1,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-146": {
    "rawAssetId": "animal-146",
    "name": "Gibbon",
    "category": "animals",
    "heightCm": 36.4,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-147": {
    "rawAssetId": "animal-147",
    "name": "Golden Eagle",
    "category": "animals",
    "heightCm": 76.2,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-148": {
    "rawAssetId": "animal-148",
    "name": "Golden Monkey",
    "category": "animals",
    "heightCm": 40.3,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-149": {
    "rawAssetId": "animal-149",
    "name": "Gorilla",
    "category": "animals",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-150": {
    "rawAssetId": "animal-150",
    "name": "Hornbill",
    "category": "animals",
    "heightCm": 119.4,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-151": {
    "rawAssetId": "animal-151",
    "name": "King Penguin",
    "category": "animals",
    "heightCm": 90,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-152": {
    "rawAssetId": "animal-152",
    "name": "Komodo Dragon",
    "category": "animals",
    "heightCm": 51.5,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-153": {
    "rawAssetId": "animal-153",
    "name": "Macaw",
    "category": "animals",
    "heightCm": 124.8,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-154": {
    "rawAssetId": "animal-154",
    "name": "Mandrill",
    "category": "animals",
    "heightCm": 73.6,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-155": {
    "rawAssetId": "animal-155",
    "name": "Nile Crocodile",
    "category": "animals",
    "heightCm": 76.4,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-156": {
    "rawAssetId": "animal-156",
    "name": "Nile Monitor",
    "category": "animals",
    "heightCm": 63.9,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-157": {
    "rawAssetId": "animal-157",
    "name": "Orangutan",
    "category": "animals",
    "heightCm": 130,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-158": {
    "rawAssetId": "animal-158",
    "name": "Orinoco Crocodile",
    "category": "animals",
    "heightCm": 78.4,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-159": {
    "rawAssetId": "animal-159",
    "name": "Ostrich",
    "category": "animals",
    "heightCm": 270,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-160": {
    "rawAssetId": "animal-160",
    "name": "Peacock",
    "category": "animals",
    "heightCm": 144.1,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-161": {
    "rawAssetId": "animal-161",
    "name": "Ring-tailed Lemur",
    "category": "animals",
    "heightCm": 51.2,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-162": {
    "rawAssetId": "animal-162",
    "name": "Rooster",
    "category": "animals",
    "heightCm": 76.9,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-163": {
    "rawAssetId": "animal-163",
    "name": "Seagull",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-164": {
    "rawAssetId": "animal-164",
    "name": "Stork",
    "category": "animals",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-165": {
    "rawAssetId": "animal-165",
    "name": "Swan",
    "category": "animals",
    "heightCm": 99.7,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-166": {
    "rawAssetId": "animal-166",
    "name": "Taiga",
    "category": "animals",
    "heightCm": 30,
    "measurementType": "height",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-167": {
    "rawAssetId": "animal-167",
    "name": "Toucan",
    "category": "animals",
    "heightCm": 43.5,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-168": {
    "rawAssetId": "animal-168",
    "name": "Tree Monitor Lizard",
    "category": "animals",
    "heightCm": 88.9,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-169": {
    "rawAssetId": "animal-169",
    "name": "Vulture",
    "category": "animals",
    "heightCm": 122.3,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-170": {
    "rawAssetId": "animal-170",
    "name": "White-throated Monitor",
    "category": "animals",
    "heightCm": 51.6,
    "measurementType": "length",
    "subgroup": "[A] Primates, Birds & Reptiles",
    "tags": [
      "animals",
      "[a] primates, birds & reptiles"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-171": {
    "rawAssetId": "animal-171",
    "name": "Aardvark",
    "category": "animals",
    "heightCm": 55.5,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-172": {
    "rawAssetId": "animal-172",
    "name": "Alpaca",
    "category": "animals",
    "heightCm": 145,
    "measurementType": "height",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-173": {
    "rawAssetId": "animal-173",
    "name": "Badger",
    "category": "animals",
    "heightCm": 45.3,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-174": {
    "rawAssetId": "animal-174",
    "name": "Beaver",
    "category": "animals",
    "heightCm": 44.2,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-175": {
    "rawAssetId": "animal-175",
    "name": "Capybara",
    "category": "animals",
    "heightCm": 84,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-176": {
    "rawAssetId": "animal-176",
    "name": "Chameleon",
    "category": "animals",
    "heightCm": 47.6,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-177": {
    "rawAssetId": "animal-177",
    "name": "Chinchilla",
    "category": "animals",
    "heightCm": 27.6,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-178": {
    "rawAssetId": "animal-178",
    "name": "Chipmunk",
    "category": "animals",
    "heightCm": 14.8,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-179": {
    "rawAssetId": "animal-179",
    "name": "Coati",
    "category": "animals",
    "heightCm": 78,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-180": {
    "rawAssetId": "animal-180",
    "name": "Dugong",
    "category": "animals",
    "heightCm": 125.1,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-181": {
    "rawAssetId": "animal-181",
    "name": "Echidna",
    "category": "animals",
    "heightCm": 21.4,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-182": {
    "rawAssetId": "animal-182",
    "name": "Ferret",
    "category": "animals",
    "heightCm": 21.6,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-183": {
    "rawAssetId": "animal-183",
    "name": "Flying Fox",
    "category": "animals",
    "heightCm": 39.8,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-184": {
    "rawAssetId": "animal-184",
    "name": "Giant Anteater",
    "category": "animals",
    "heightCm": 63.3,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-185": {
    "rawAssetId": "animal-185",
    "name": "Green Iguana",
    "category": "animals",
    "heightCm": 72.3,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-186": {
    "rawAssetId": "animal-186",
    "name": "Guanaco",
    "category": "animals",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-187": {
    "rawAssetId": "animal-187",
    "name": "Hare",
    "category": "animals",
    "heightCm": 62.2,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-188": {
    "rawAssetId": "animal-188",
    "name": "Honey Badger",
    "category": "animals",
    "heightCm": 38.2,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-189": {
    "rawAssetId": "animal-189",
    "name": "Koala",
    "category": "animals",
    "heightCm": 142.5,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-190": {
    "rawAssetId": "animal-190",
    "name": "Little Alpaca",
    "category": "animals",
    "heightCm": 128,
    "measurementType": "height",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-191": {
    "rawAssetId": "animal-191",
    "name": "Llama",
    "category": "animals",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-192": {
    "rawAssetId": "animal-192",
    "name": "Malayan Tapir",
    "category": "animals",
    "heightCm": 114.7,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-193": {
    "rawAssetId": "animal-193",
    "name": "Marmot",
    "category": "animals",
    "heightCm": 54.4,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-194": {
    "rawAssetId": "animal-194",
    "name": "Nine-banded Armadillo",
    "category": "animals",
    "heightCm": 26.4,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-195": {
    "rawAssetId": "animal-195",
    "name": "Okapi",
    "category": "animals",
    "heightCm": 190,
    "measurementType": "height",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-196": {
    "rawAssetId": "animal-196",
    "name": "Pangolin",
    "category": "animals",
    "heightCm": 29.6,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-197": {
    "rawAssetId": "animal-197",
    "name": "Platypus",
    "category": "animals",
    "heightCm": 16.1,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-198": {
    "rawAssetId": "animal-198",
    "name": "Porcupine",
    "category": "animals",
    "heightCm": 45.7,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-199": {
    "rawAssetId": "animal-199",
    "name": "Prairie Dog",
    "category": "animals",
    "heightCm": 30.6,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-200": {
    "rawAssetId": "animal-200",
    "name": "Red Kangaroo",
    "category": "animals",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-201": {
    "rawAssetId": "animal-201",
    "name": "Red Panda",
    "category": "animals",
    "heightCm": 47.4,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-202": {
    "rawAssetId": "animal-202",
    "name": "Sloth",
    "category": "animals",
    "heightCm": 40,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-203": {
    "rawAssetId": "animal-203",
    "name": "Spotted Hyena",
    "category": "animals",
    "heightCm": 110.1,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-204": {
    "rawAssetId": "animal-204",
    "name": "Squirrel",
    "category": "animals",
    "heightCm": 39.9,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-205": {
    "rawAssetId": "animal-205",
    "name": "Tasmanian Devil",
    "category": "animals",
    "heightCm": 29.6,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-206": {
    "rawAssetId": "animal-206",
    "name": "Tree Frog",
    "category": "animals",
    "heightCm": 9,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-207": {
    "rawAssetId": "animal-207",
    "name": "Tree Kangaroo",
    "category": "animals",
    "heightCm": 58,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-208": {
    "rawAssetId": "animal-208",
    "name": "Wallaby",
    "category": "animals",
    "heightCm": 55,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-209": {
    "rawAssetId": "animal-209",
    "name": "Warthog",
    "category": "animals",
    "heightCm": 80.8,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-210": {
    "rawAssetId": "animal-210",
    "name": "Wolverine",
    "category": "animals",
    "heightCm": 54.4,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-211": {
    "rawAssetId": "animal-211",
    "name": "Wombat",
    "category": "animals",
    "heightCm": 49.9,
    "measurementType": "length",
    "subgroup": "[A] Uncategorized",
    "tags": [
      "animals",
      "[a] uncategorized"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "animal-212": {
    "rawAssetId": "animal-212",
    "name": "Animal 212",
    "category": "animals",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "animals"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "animal-213": {
    "rawAssetId": "animal-213",
    "name": "Animal 213",
    "category": "animals",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "animals"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "animal-214": {
    "rawAssetId": "animal-214",
    "name": "Animal 214",
    "category": "animals",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "animals"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "animal-215": {
    "rawAssetId": "animal-215",
    "name": "Animal 215",
    "category": "animals",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "animals"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "animal-216": {
    "rawAssetId": "animal-216",
    "name": "Animal 216",
    "category": "animals",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "animals"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "object-bottle-01": {
    "rawAssetId": "object-bottle-01",
    "name": "Object 001",
    "category": "objects",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "objects"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "object-building-01": {
    "rawAssetId": "object-building-01",
    "name": "Object 001",
    "category": "objects",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "objects"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "object-car-01": {
    "rawAssetId": "object-car-01",
    "name": "Sedan Car",
    "category": "objects",
    "heightCm": 148,
    "measurementType": "ground-to-top",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "car",
      "sedan",
      "automobile"
    ],
    "aliases": [
      "car",
      "automobile"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "object-chair-01": {
    "rawAssetId": "object-chair-01",
    "name": "Office Chair",
    "category": "objects",
    "heightCm": 95,
    "measurementType": "ground-to-top",
    "subgroup": "[O] Furniture",
    "tags": [
      "objects",
      "chair",
      "furniture"
    ],
    "aliases": [
      "chair",
      "office-chair"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "object-door-01": {
    "rawAssetId": "object-door-01",
    "name": "Standard Door",
    "category": "objects",
    "heightCm": 210,
    "measurementType": "ground-to-top",
    "subgroup": "[O] Architecture & Entryways",
    "tags": [
      "objects",
      "door",
      "doorway"
    ],
    "aliases": [
      "door",
      "standard-door"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "object-lamp-01": {
    "rawAssetId": "object-lamp-01",
    "name": "Object 001",
    "category": "objects",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "objects"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "object-phone-01": {
    "rawAssetId": "object-phone-01",
    "name": "Smartphone",
    "category": "objects",
    "heightCm": 15,
    "measurementType": "ground-to-top",
    "subgroup": "[O] Consumer Electronics",
    "tags": [
      "objects",
      "phone",
      "smartphone"
    ],
    "aliases": [
      "phone",
      "smartphone"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "object-sofa-01": {
    "rawAssetId": "object-sofa-01",
    "name": "Object 001",
    "category": "objects",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "objects"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "object-table-01": {
    "rawAssetId": "object-table-01",
    "name": "Dining Table",
    "category": "objects",
    "heightCm": 76,
    "measurementType": "ground-to-top",
    "subgroup": "[O] Furniture",
    "tags": [
      "objects",
      "table",
      "dining table"
    ],
    "aliases": [
      "table"
    ],
    "status": "needs-review",
    "indexable": false
  },
  "object-001": {
    "rawAssetId": "object-001",
    "name": "Object 001",
    "category": "objects",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "objects"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "object-002": {
    "rawAssetId": "object-002",
    "name": "Object 002",
    "category": "objects",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "objects"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "object-003": {
    "rawAssetId": "object-003",
    "name": "Object 003",
    "category": "objects",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "objects"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "object-004": {
    "rawAssetId": "object-004",
    "name": "Basketball Hoop",
    "category": "objects",
    "heightCm": 410,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [
      "basketball-hoop",
      "hoop",
      "basketball-rim",
      "nba-hoop"
    ],
    "status": "verified",
    "indexable": true
  },
  "object-005": {
    "rawAssetId": "object-005",
    "name": "ATM Machine",
    "category": "objects",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-006": {
    "rawAssetId": "object-006",
    "name": "Automatic Ticket Vending Machine",
    "category": "objects",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-007": {
    "rawAssetId": "object-007",
    "name": "Bench",
    "category": "objects",
    "heightCm": 85,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-008": {
    "rawAssetId": "object-008",
    "name": "Bookcase",
    "category": "objects",
    "heightCm": 200,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-009": {
    "rawAssetId": "object-009",
    "name": "Bus Stop Sign",
    "category": "objects",
    "heightCm": 230,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-010": {
    "rawAssetId": "object-010",
    "name": "Chandelier",
    "category": "objects",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-011": {
    "rawAssetId": "object-011",
    "name": "Christmas Tree",
    "category": "objects",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-012": {
    "rawAssetId": "object-012",
    "name": "Coat Rack",
    "category": "objects",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-013": {
    "rawAssetId": "object-013",
    "name": "Crane Machine",
    "category": "objects",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-014": {
    "rawAssetId": "object-014",
    "name": "Desk Lamp",
    "category": "objects",
    "heightCm": 50,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-015": {
    "rawAssetId": "object-015",
    "name": "Dishwasher",
    "category": "objects",
    "heightCm": 85,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-016": {
    "rawAssetId": "object-016",
    "name": "Doorframe",
    "category": "objects",
    "heightCm": 245,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-017": {
    "rawAssetId": "object-017",
    "name": "Double Door Wardrobe",
    "category": "objects",
    "heightCm": 200,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-018": {
    "rawAssetId": "object-018",
    "name": "Drum Set",
    "category": "objects",
    "heightCm": 145,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-019": {
    "rawAssetId": "object-019",
    "name": "Dryer",
    "category": "objects",
    "heightCm": 85,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-020": {
    "rawAssetId": "object-020",
    "name": "Electric Vehicle Charging Pile",
    "category": "objects",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-021": {
    "rawAssetId": "object-021",
    "name": "Fence",
    "category": "objects",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-022": {
    "rawAssetId": "object-022",
    "name": "Fire Hydrant",
    "category": "objects",
    "heightCm": 95,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-023": {
    "rawAssetId": "object-023",
    "name": "Fitness Sandbag",
    "category": "objects",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-024": {
    "rawAssetId": "object-024",
    "name": "Flatbed Trolley",
    "category": "objects",
    "heightCm": 95,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-025": {
    "rawAssetId": "object-025",
    "name": "Floor Lamp",
    "category": "objects",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-026": {
    "rawAssetId": "object-026",
    "name": "Floor Mirror",
    "category": "objects",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-027": {
    "rawAssetId": "object-027",
    "name": "Golf Bag",
    "category": "objects",
    "heightCm": 90,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-028": {
    "rawAssetId": "object-028",
    "name": "Grandfather Clock",
    "category": "objects",
    "heightCm": 200,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-029": {
    "rawAssetId": "object-029",
    "name": "Guitar",
    "category": "objects",
    "heightCm": 100,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-030": {
    "rawAssetId": "object-030",
    "name": "Knife",
    "category": "objects",
    "heightCm": 110,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-031": {
    "rawAssetId": "object-031",
    "name": "Mail",
    "category": "objects",
    "heightCm": 130,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-032": {
    "rawAssetId": "object-032",
    "name": "Mailbox",
    "category": "objects",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-033": {
    "rawAssetId": "object-033",
    "name": "Micro-wave Oven",
    "category": "objects",
    "heightCm": 33,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-034": {
    "rawAssetId": "object-034",
    "name": "Music Stand",
    "category": "objects",
    "heightCm": 145,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-035": {
    "rawAssetId": "object-035",
    "name": "Oil Dispenser",
    "category": "objects",
    "heightCm": 190,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-036": {
    "rawAssetId": "object-036",
    "name": "Oven",
    "category": "objects",
    "heightCm": 90,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-037": {
    "rawAssetId": "object-037",
    "name": "Parking Meter",
    "category": "objects",
    "heightCm": 115,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-038": {
    "rawAssetId": "object-038",
    "name": "Piano",
    "category": "objects",
    "heightCm": 122,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-039": {
    "rawAssetId": "object-039",
    "name": "Pull-ups",
    "category": "objects",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-040": {
    "rawAssetId": "object-040",
    "name": "Recycling Bin",
    "category": "objects",
    "heightCm": 105,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-041": {
    "rawAssetId": "object-041",
    "name": "Refrigerator",
    "category": "objects",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-042": {
    "rawAssetId": "object-042",
    "name": "Roadside Phone Booth",
    "category": "objects",
    "heightCm": 240,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-043": {
    "rawAssetId": "object-043",
    "name": "Shelves",
    "category": "objects",
    "heightCm": 200,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-044": {
    "rawAssetId": "object-044",
    "name": "Signpost",
    "category": "objects",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-045": {
    "rawAssetId": "object-045",
    "name": "Sofa",
    "category": "objects",
    "heightCm": 95,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-046": {
    "rawAssetId": "object-046",
    "name": "Spinning Bike",
    "category": "objects",
    "heightCm": 140,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-047": {
    "rawAssetId": "object-047",
    "name": "Standing Cabinet Air Conditioner",
    "category": "objects",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-048": {
    "rawAssetId": "object-048",
    "name": "Street Lamp",
    "category": "objects",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-049": {
    "rawAssetId": "object-049",
    "name": "Street Signs",
    "category": "objects",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-050": {
    "rawAssetId": "object-050",
    "name": "Suitcase",
    "category": "objects",
    "heightCm": 75,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-051": {
    "rawAssetId": "object-051",
    "name": "Swing Frame",
    "category": "objects",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-052": {
    "rawAssetId": "object-052",
    "name": "Sword",
    "category": "objects",
    "heightCm": 110,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-053": {
    "rawAssetId": "object-053",
    "name": "Telegraph Pole",
    "category": "objects",
    "heightCm": 1000,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-054": {
    "rawAssetId": "object-054",
    "name": "Traffic Light",
    "category": "objects",
    "heightCm": 420,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-055": {
    "rawAssetId": "object-055",
    "name": "Tub",
    "category": "objects",
    "heightCm": 60,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-056": {
    "rawAssetId": "object-056",
    "name": "Umbrella",
    "category": "objects",
    "heightCm": 100,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-057": {
    "rawAssetId": "object-057",
    "name": "Vacuum Cleaner",
    "category": "objects",
    "heightCm": 110,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-058": {
    "rawAssetId": "object-058",
    "name": "Vertical Fan",
    "category": "objects",
    "heightCm": 135,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-059": {
    "rawAssetId": "object-059",
    "name": "Violin",
    "category": "objects",
    "heightCm": 60,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-060": {
    "rawAssetId": "object-060",
    "name": "Washbasin",
    "category": "objects",
    "heightCm": 85,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-061": {
    "rawAssetId": "object-061",
    "name": "Washing Machine",
    "category": "objects",
    "heightCm": 85,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-062": {
    "rawAssetId": "object-062",
    "name": "Water Dispenser",
    "category": "objects",
    "heightCm": 100,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-063": {
    "rawAssetId": "object-063",
    "name": "Wheelchair",
    "category": "objects",
    "heightCm": 95,
    "measurementType": "height",
    "subgroup": "[O] Furniture & Public Fixtures",
    "tags": [
      "objects",
      "[o] furniture & public fixtures"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-064": {
    "rawAssetId": "object-064",
    "name": "Angkor Wat Main Tower",
    "category": "objects",
    "heightCm": 6500,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-065": {
    "rawAssetId": "object-065",
    "name": "Apartment Building",
    "category": "objects",
    "heightCm": 1500,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-066": {
    "rawAssetId": "object-066",
    "name": "Arc De Triomphe",
    "category": "objects",
    "heightCm": 5000,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-067": {
    "rawAssetId": "object-067",
    "name": "Arc De Triomphe 2",
    "category": "objects",
    "heightCm": 5000,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-068": {
    "rawAssetId": "object-068",
    "name": "Big Ben Clock Tower",
    "category": "objects",
    "heightCm": 9600,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-069": {
    "rawAssetId": "object-069",
    "name": "Borobudur",
    "category": "objects",
    "heightCm": 3500,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-070": {
    "rawAssetId": "object-070",
    "name": "Brandenburg Gate",
    "category": "objects",
    "heightCm": 2600,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-071": {
    "rawAssetId": "object-071",
    "name": "Burj Khalifa",
    "category": "objects",
    "heightCm": 82800,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-072": {
    "rawAssetId": "object-072",
    "name": "Christ the Redeemer in Rio De Janeiro",
    "category": "objects",
    "heightCm": 3800,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-073": {
    "rawAssetId": "object-073",
    "name": "CN Tower",
    "category": "objects",
    "heightCm": 55300,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-074": {
    "rawAssetId": "object-074",
    "name": "Cologne Cathedral",
    "category": "objects",
    "heightCm": 15700,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-075": {
    "rawAssetId": "object-075",
    "name": "Colosseum",
    "category": "objects",
    "heightCm": 4800,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-076": {
    "rawAssetId": "object-076",
    "name": "Dubai Frame",
    "category": "objects",
    "heightCm": 15000,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-077": {
    "rawAssetId": "object-077",
    "name": "Easter Island Statues",
    "category": "objects",
    "heightCm": 400,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-078": {
    "rawAssetId": "object-078",
    "name": "Eiffel Tower",
    "category": "objects",
    "heightCm": 33000,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-079": {
    "rawAssetId": "object-079",
    "name": "Empire State Building",
    "category": "objects",
    "heightCm": 44300,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-080": {
    "rawAssetId": "object-080",
    "name": "Great Pyramid of Giza",
    "category": "objects",
    "heightCm": 14600,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-081": {
    "rawAssetId": "object-081",
    "name": "Great Sphinx of Giza",
    "category": "objects",
    "heightCm": 2000,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-082": {
    "rawAssetId": "object-082",
    "name": "Himeji Castle",
    "category": "objects",
    "heightCm": 4600,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-083": {
    "rawAssetId": "object-083",
    "name": "Leaning Tower of Pisa",
    "category": "objects",
    "heightCm": 5600,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-084": {
    "rawAssetId": "object-084",
    "name": "London Eye",
    "category": "objects",
    "heightCm": 13500,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-085": {
    "rawAssetId": "object-085",
    "name": "Mount Rushmore Presidential Statue",
    "category": "objects",
    "heightCm": 1800,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-086": {
    "rawAssetId": "object-086",
    "name": "Notre Dame Cathedral Facade",
    "category": "objects",
    "heightCm": 6900,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-087": {
    "rawAssetId": "object-087",
    "name": "Parthenon, Athens",
    "category": "objects",
    "heightCm": 1370,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-088": {
    "rawAssetId": "object-088",
    "name": "Pineapple House",
    "category": "objects",
    "heightCm": 1400,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-089": {
    "rawAssetId": "object-089",
    "name": "Saint Basil's Assumption Cathedral",
    "category": "objects",
    "heightCm": 6500,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-090": {
    "rawAssetId": "object-090",
    "name": "Single-story House",
    "category": "objects",
    "heightCm": 700,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-091": {
    "rawAssetId": "object-091",
    "name": "Space Needle",
    "category": "objects",
    "heightCm": 18400,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-092": {
    "rawAssetId": "object-092",
    "name": "St. Peter's Basilica",
    "category": "objects",
    "heightCm": 13600,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-093": {
    "rawAssetId": "object-093",
    "name": "Statue of Liberty",
    "category": "objects",
    "heightCm": 9300,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-094": {
    "rawAssetId": "object-094",
    "name": "Stonehenge",
    "category": "objects",
    "heightCm": 600,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-095": {
    "rawAssetId": "object-095",
    "name": "Sydney Opera House",
    "category": "objects",
    "heightCm": 6500,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-096": {
    "rawAssetId": "object-096",
    "name": "Taipei 101",
    "category": "objects",
    "heightCm": 50800,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-097": {
    "rawAssetId": "object-097",
    "name": "Taj Mahal",
    "category": "objects",
    "heightCm": 7300,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-098": {
    "rawAssetId": "object-098",
    "name": "Transmitting Tower",
    "category": "objects",
    "heightCm": 10000,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-099": {
    "rawAssetId": "object-099",
    "name": "Twin Towers",
    "category": "objects",
    "heightCm": 41700,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-100": {
    "rawAssetId": "object-100",
    "name": "Two-story House",
    "category": "objects",
    "heightCm": 950,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-101": {
    "rawAssetId": "object-101",
    "name": "Washington Monument",
    "category": "objects",
    "heightCm": 16900,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-102": {
    "rawAssetId": "object-102",
    "name": "Windmill Tower",
    "category": "objects",
    "heightCm": 2200,
    "measurementType": "height",
    "subgroup": "[O] Landmarks & Buildings",
    "tags": [
      "objects",
      "[o] landmarks & buildings"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-103": {
    "rawAssetId": "object-103",
    "name": "Air Tanker",
    "category": "objects",
    "heightCm": 1500,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-104": {
    "rawAssetId": "object-104",
    "name": "Aircraft Carrier",
    "category": "objects",
    "heightCm": 7000,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-105": {
    "rawAssetId": "object-105",
    "name": "Amphibious Armored Vehicle",
    "category": "objects",
    "heightCm": 300,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-106": {
    "rawAssetId": "object-106",
    "name": "Amphibious Assault Ship",
    "category": "objects",
    "heightCm": 5000,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-107": {
    "rawAssetId": "object-107",
    "name": "Anti-aircraft Gun",
    "category": "objects",
    "heightCm": 300,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-108": {
    "rawAssetId": "object-108",
    "name": "Anti-tank Gun",
    "category": "objects",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-109": {
    "rawAssetId": "object-109",
    "name": "Battleship",
    "category": "objects",
    "heightCm": 5500,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-110": {
    "rawAssetId": "object-110",
    "name": "BMW 3 Series",
    "category": "objects",
    "heightCm": 144,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-111": {
    "rawAssetId": "object-111",
    "name": "BMW X5",
    "category": "objects",
    "heightCm": 176,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-112": {
    "rawAssetId": "object-112",
    "name": "Bomber",
    "category": "objects",
    "heightCm": 1200,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-113": {
    "rawAssetId": "object-113",
    "name": "Bus",
    "category": "objects",
    "heightCm": 330,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-114": {
    "rawAssetId": "object-114",
    "name": "Car",
    "category": "objects",
    "heightCm": 145,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-115": {
    "rawAssetId": "object-115",
    "name": "Container Ship",
    "category": "objects",
    "heightCm": 6000,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-116": {
    "rawAssetId": "object-116",
    "name": "Destroyer",
    "category": "objects",
    "heightCm": 3500,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-117": {
    "rawAssetId": "object-117",
    "name": "Drone",
    "category": "objects",
    "heightCm": 300,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-118": {
    "rawAssetId": "object-118",
    "name": "Early Warning Aircraft",
    "category": "objects",
    "heightCm": 1300,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-119": {
    "rawAssetId": "object-119",
    "name": "Frigate",
    "category": "objects",
    "heightCm": 3000,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-120": {
    "rawAssetId": "object-120",
    "name": "Gunship",
    "category": "objects",
    "heightCm": 400,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-121": {
    "rawAssetId": "object-121",
    "name": "Honda Civic",
    "category": "objects",
    "heightCm": 141,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-122": {
    "rawAssetId": "object-122",
    "name": "Infantry Fighting Vehicle",
    "category": "objects",
    "heightCm": 280,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-123": {
    "rawAssetId": "object-123",
    "name": "Landing Ship",
    "category": "objects",
    "heightCm": 1100,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-124": {
    "rawAssetId": "object-124",
    "name": "Main Battle Tank",
    "category": "objects",
    "heightCm": 270,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-125": {
    "rawAssetId": "object-125",
    "name": "Mercedes-benz C-class",
    "category": "objects",
    "heightCm": 143.8,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-126": {
    "rawAssetId": "object-126",
    "name": "Mercedes-benz E-class",
    "category": "objects",
    "heightCm": 147.1,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-127": {
    "rawAssetId": "object-127",
    "name": "Mercedes-benz S-class",
    "category": "objects",
    "heightCm": 150.4,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-128": {
    "rawAssetId": "object-128",
    "name": "Military Jeep",
    "category": "objects",
    "heightCm": 200,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-129": {
    "rawAssetId": "object-129",
    "name": "Missile Launcher",
    "category": "objects",
    "heightCm": 400,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-130": {
    "rawAssetId": "object-130",
    "name": "Motorcycle",
    "category": "objects",
    "heightCm": 110,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-131": {
    "rawAssetId": "object-131",
    "name": "Porsche 911",
    "category": "objects",
    "heightCm": 130,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-132": {
    "rawAssetId": "object-132",
    "name": "Rocket",
    "category": "objects",
    "heightCm": 7000,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-133": {
    "rawAssetId": "object-133",
    "name": "Rocket Launcher",
    "category": "objects",
    "heightCm": 300,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-134": {
    "rawAssetId": "object-134",
    "name": "Scooter",
    "category": "objects",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-135": {
    "rawAssetId": "object-135",
    "name": "Stealth Fighter",
    "category": "objects",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-136": {
    "rawAssetId": "object-136",
    "name": "Submarine",
    "category": "objects",
    "heightCm": 1200,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-137": {
    "rawAssetId": "object-137",
    "name": "Tesla Model 3",
    "category": "objects",
    "heightCm": 144,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-138": {
    "rawAssetId": "object-138",
    "name": "Tesla Model Y",
    "category": "objects",
    "heightCm": 162,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-139": {
    "rawAssetId": "object-139",
    "name": "Toyota Camry",
    "category": "objects",
    "heightCm": 144,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-140": {
    "rawAssetId": "object-140",
    "name": "Toyota Corolla",
    "category": "objects",
    "heightCm": 146,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-141": {
    "rawAssetId": "object-141",
    "name": "Toyota RAV4",
    "category": "objects",
    "heightCm": 169,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-142": {
    "rawAssetId": "object-142",
    "name": "Train Gun",
    "category": "objects",
    "heightCm": 700,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-143": {
    "rawAssetId": "object-143",
    "name": "Transport Aircraft",
    "category": "objects",
    "heightCm": 1200,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-144": {
    "rawAssetId": "object-144",
    "name": "Transport Helicopter",
    "category": "objects",
    "heightCm": 600,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-145": {
    "rawAssetId": "object-145",
    "name": "Volkswagen Golf",
    "category": "objects",
    "heightCm": 149,
    "measurementType": "height",
    "subgroup": "[O] Vehicles & Machinery",
    "tags": [
      "objects",
      "[o] vehicles & machinery"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "object-146": {
    "rawAssetId": "object-146",
    "name": "Object 146",
    "category": "objects",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "objects"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "object-147": {
    "rawAssetId": "object-147",
    "name": "Object 147",
    "category": "objects",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "objects"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "object-148": {
    "rawAssetId": "object-148",
    "name": "Object 148",
    "category": "objects",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "objects"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "object-149": {
    "rawAssetId": "object-149",
    "name": "Object 149",
    "category": "objects",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "objects"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "object-150": {
    "rawAssetId": "object-150",
    "name": "Object 150",
    "category": "objects",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "objects"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "fictional-dinosaur-01": {
    "rawAssetId": "fictional-dinosaur-01",
    "name": "Abyss Demon",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "fictional-dragon-01": {
    "rawAssetId": "fictional-dragon-01",
    "name": "Ancient Dragon",
    "category": "fictional",
    "heightCm": 708.1,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "fictional-giant-01": {
    "rawAssetId": "fictional-giant-01",
    "name": "Antler Man",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "fictional-goblin-01": {
    "rawAssetId": "fictional-goblin-01",
    "name": "Armored Rhinoceros",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "fictional-mech-01": {
    "rawAssetId": "fictional-mech-01",
    "name": "Armored Knight",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "fictional-superhero-01": {
    "rawAssetId": "fictional-superhero-01",
    "name": "Arakkoa",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "fictional-001": {
    "rawAssetId": "fictional-001",
    "name": "Fictional 001",
    "category": "fictional",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "fictional"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "fictional-002": {
    "rawAssetId": "fictional-002",
    "name": "Fictional 002",
    "category": "fictional",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "fictional"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "fictional-003": {
    "rawAssetId": "fictional-003",
    "name": "Fictional 003",
    "category": "fictional",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "fictional"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "fictional-004": {
    "rawAssetId": "fictional-004",
    "name": "Abyss Demon",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "abyss-demon"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-005": {
    "rawAssetId": "fictional-005",
    "name": "Ancient Dragon",
    "category": "fictional",
    "heightCm": 708.1,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "ancient-dragon"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-006": {
    "rawAssetId": "fictional-006",
    "name": "Antler Man",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "antler-man"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-007": {
    "rawAssetId": "fictional-007",
    "name": "Arakkoa",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "arakkoa"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-008": {
    "rawAssetId": "fictional-008",
    "name": "Armored Knight",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "armored-knight"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-009": {
    "rawAssetId": "fictional-009",
    "name": "Armored Rhinoceros",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "armored-rhinoceros"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-010": {
    "rawAssetId": "fictional-010",
    "name": "Armored Warhorse",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "armored-warhorse"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-011": {
    "rawAssetId": "fictional-011",
    "name": "Assassin",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "assassin"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-012": {
    "rawAssetId": "fictional-012",
    "name": "Banshee",
    "category": "fictional",
    "heightCm": 168,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "banshee"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-013": {
    "rawAssetId": "fictional-013",
    "name": "Berserker",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "berserker"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-014": {
    "rawAssetId": "fictional-014",
    "name": "Cat People",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "cat-people"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-015": {
    "rawAssetId": "fictional-015",
    "name": "Cavalry",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "cavalry"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-016": {
    "rawAssetId": "fictional-016",
    "name": "Cave Beetle Mount",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "cave-beetle-mount"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-017": {
    "rawAssetId": "fictional-017",
    "name": "Centaur",
    "category": "fictional",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "centaur"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-018": {
    "rawAssetId": "fictional-018",
    "name": "Centaur Variant",
    "category": "fictional",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "centaur-variant"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-019": {
    "rawAssetId": "fictional-019",
    "name": "Chimera",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "chimera"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-020": {
    "rawAssetId": "fictional-020",
    "name": "Cursed Knight",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "cursed-knight"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-021": {
    "rawAssetId": "fictional-021",
    "name": "Cyclops",
    "category": "fictional",
    "heightCm": 600,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "cyclops"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-022": {
    "rawAssetId": "fictional-022",
    "name": "Dark Elf",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "dark-elf"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-023": {
    "rawAssetId": "fictional-023",
    "name": "Deep Sea Dragon Turtle",
    "category": "fictional",
    "heightCm": 115.3,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "deep-sea-dragon-turtle"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-024": {
    "rawAssetId": "fictional-024",
    "name": "Demon Dog",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "demon-dog"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-025": {
    "rawAssetId": "fictional-025",
    "name": "Desert Camel Beast",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "desert-camel-beast"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-026": {
    "rawAssetId": "fictional-026",
    "name": "Dragon 1",
    "category": "fictional",
    "heightCm": 611.8,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "dragon-1"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-027": {
    "rawAssetId": "fictional-027",
    "name": "Dragon 2",
    "category": "fictional",
    "heightCm": 1119.3,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [
      "dragon-2"
    ],
    "status": "verified",
    "indexable": true
  },
  "fictional-028": {
    "rawAssetId": "fictional-028",
    "name": "Dragonborn Warrior",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-029": {
    "rawAssetId": "fictional-029",
    "name": "Dwarf",
    "category": "fictional",
    "heightCm": 145,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-030": {
    "rawAssetId": "fictional-030",
    "name": "Dwarf Blacksmith",
    "category": "fictional",
    "heightCm": 145,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-031": {
    "rawAssetId": "fictional-031",
    "name": "Dwarf Warrior",
    "category": "fictional",
    "heightCm": 145,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-032": {
    "rawAssetId": "fictional-032",
    "name": "Elf",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-033": {
    "rawAssetId": "fictional-033",
    "name": "Elf 2",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-034": {
    "rawAssetId": "fictional-034",
    "name": "Elf Queen",
    "category": "fictional",
    "heightCm": 168,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-035": {
    "rawAssetId": "fictional-035",
    "name": "Fire Giant",
    "category": "fictional",
    "heightCm": 600,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-036": {
    "rawAssetId": "fictional-036",
    "name": "Forest Elf",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-037": {
    "rawAssetId": "fictional-037",
    "name": "Frost Giant",
    "category": "fictional",
    "heightCm": 600,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-038": {
    "rawAssetId": "fictional-038",
    "name": "Frostfang",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-039": {
    "rawAssetId": "fictional-039",
    "name": "Gargoyle",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-040": {
    "rawAssetId": "fictional-040",
    "name": "Gargoyle 2",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-041": {
    "rawAssetId": "fictional-041",
    "name": "Ghost",
    "category": "fictional",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-042": {
    "rawAssetId": "fictional-042",
    "name": "Ghoul",
    "category": "fictional",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-043": {
    "rawAssetId": "fictional-043",
    "name": "Giant Deer",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-044": {
    "rawAssetId": "fictional-044",
    "name": "Giant Spider",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-045": {
    "rawAssetId": "fictional-045",
    "name": "Giant Wolf",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-046": {
    "rawAssetId": "fictional-046",
    "name": "Goblin",
    "category": "fictional",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-047": {
    "rawAssetId": "fictional-047",
    "name": "Goblin Tinkerer",
    "category": "fictional",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-048": {
    "rawAssetId": "fictional-048",
    "name": "Griffin",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-049": {
    "rawAssetId": "fictional-049",
    "name": "Halfling",
    "category": "fictional",
    "heightCm": 125,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-050": {
    "rawAssetId": "fictional-050",
    "name": "Hated Stitches",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-051": {
    "rawAssetId": "fictional-051",
    "name": "Hellhound",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-052": {
    "rawAssetId": "fictional-052",
    "name": "Hero",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-053": {
    "rawAssetId": "fictional-053",
    "name": "High Elf",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-054": {
    "rawAssetId": "fictional-054",
    "name": "Human Infantry",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-055": {
    "rawAssetId": "fictional-055",
    "name": "Human Knight",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-056": {
    "rawAssetId": "fictional-056",
    "name": "Hydra",
    "category": "fictional",
    "heightCm": 152.2,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-057": {
    "rawAssetId": "fictional-057",
    "name": "Hydra 2",
    "category": "fictional",
    "heightCm": 195.7,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-058": {
    "rawAssetId": "fictional-058",
    "name": "Knight",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-059": {
    "rawAssetId": "fictional-059",
    "name": "Knight 1",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-060": {
    "rawAssetId": "fictional-060",
    "name": "Kraken",
    "category": "fictional",
    "heightCm": 168,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-061": {
    "rawAssetId": "fictional-061",
    "name": "Lava Dog",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-062": {
    "rawAssetId": "fictional-062",
    "name": "Lich",
    "category": "fictional",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-063": {
    "rawAssetId": "fictional-063",
    "name": "Lich 2",
    "category": "fictional",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-064": {
    "rawAssetId": "fictional-064",
    "name": "Lithosaurus",
    "category": "fictional",
    "heightCm": 662.9,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-065": {
    "rawAssetId": "fictional-065",
    "name": "Lizard Man",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-066": {
    "rawAssetId": "fictional-066",
    "name": "Manticore",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-067": {
    "rawAssetId": "fictional-067",
    "name": "Mermaid",
    "category": "fictional",
    "heightCm": 168,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-068": {
    "rawAssetId": "fictional-068",
    "name": "Monitor Lizard Mount",
    "category": "fictional",
    "heightCm": 101.4,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-069": {
    "rawAssetId": "fictional-069",
    "name": "Moonlight Deer",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-070": {
    "rawAssetId": "fictional-070",
    "name": "Mountain Dragon",
    "category": "fictional",
    "heightCm": 781.8,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-071": {
    "rawAssetId": "fictional-071",
    "name": "Mountain Giant",
    "category": "fictional",
    "heightCm": 600,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-072": {
    "rawAssetId": "fictional-072",
    "name": "Nightwing Dragon",
    "category": "fictional",
    "heightCm": 652,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-073": {
    "rawAssetId": "fictional-073",
    "name": "Ogre",
    "category": "fictional",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-074": {
    "rawAssetId": "fictional-074",
    "name": "Orc",
    "category": "fictional",
    "heightCm": 195,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-075": {
    "rawAssetId": "fictional-075",
    "name": "Orc 1",
    "category": "fictional",
    "heightCm": 195,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-076": {
    "rawAssetId": "fictional-076",
    "name": "Orc 2",
    "category": "fictional",
    "heightCm": 195,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-077": {
    "rawAssetId": "fictional-077",
    "name": "Orc Chieftain",
    "category": "fictional",
    "heightCm": 195,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-078": {
    "rawAssetId": "fictional-078",
    "name": "Orc Warrior",
    "category": "fictional",
    "heightCm": 195,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-079": {
    "rawAssetId": "fictional-079",
    "name": "Paladin",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-080": {
    "rawAssetId": "fictional-080",
    "name": "Pegasus",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-081": {
    "rawAssetId": "fictional-081",
    "name": "Phoenix",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-082": {
    "rawAssetId": "fictional-082",
    "name": "Priest",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-083": {
    "rawAssetId": "fictional-083",
    "name": "Ranger",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-084": {
    "rawAssetId": "fictional-084",
    "name": "Ranger 2",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-085": {
    "rawAssetId": "fictional-085",
    "name": "Shadowborn Walker",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-086": {
    "rawAssetId": "fictional-086",
    "name": "Skeleton Knight",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-087": {
    "rawAssetId": "fictional-087",
    "name": "Skeleton Soldier",
    "category": "fictional",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-088": {
    "rawAssetId": "fictional-088",
    "name": "Slime",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-089": {
    "rawAssetId": "fictional-089",
    "name": "Snake Man",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-090": {
    "rawAssetId": "fictional-090",
    "name": "Snow Pack Animal",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-091": {
    "rawAssetId": "fictional-091",
    "name": "Sphinx",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-092": {
    "rawAssetId": "fictional-092",
    "name": "Sprite 3",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-093": {
    "rawAssetId": "fictional-093",
    "name": "Stone Giant",
    "category": "fictional",
    "heightCm": 600,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-094": {
    "rawAssetId": "fictional-094",
    "name": "Swamp Thing",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-095": {
    "rawAssetId": "fictional-095",
    "name": "Swamp Witch",
    "category": "fictional",
    "heightCm": 168,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-096": {
    "rawAssetId": "fictional-096",
    "name": "Swamp Wyvern",
    "category": "fictional",
    "heightCm": 587.1,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-097": {
    "rawAssetId": "fictional-097",
    "name": "Tauren",
    "category": "fictional",
    "heightCm": 225,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-098": {
    "rawAssetId": "fictional-098",
    "name": "Tomb Guard",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-099": {
    "rawAssetId": "fictional-099",
    "name": "Treant",
    "category": "fictional",
    "heightCm": 520,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-100": {
    "rawAssetId": "fictional-100",
    "name": "Troll",
    "category": "fictional",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-101": {
    "rawAssetId": "fictional-101",
    "name": "Unicorn",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-102": {
    "rawAssetId": "fictional-102",
    "name": "Unicorn 1",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-103": {
    "rawAssetId": "fictional-103",
    "name": "War Elephant",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-104": {
    "rawAssetId": "fictional-104",
    "name": "Warhorse",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-105": {
    "rawAssetId": "fictional-105",
    "name": "Warlock",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-106": {
    "rawAssetId": "fictional-106",
    "name": "Weird Dark Knight",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-107": {
    "rawAssetId": "fictional-107",
    "name": "Werewolf",
    "category": "fictional",
    "heightCm": 190,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-108": {
    "rawAssetId": "fictional-108",
    "name": "Wizard",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-109": {
    "rawAssetId": "fictional-109",
    "name": "Wizard 2",
    "category": "fictional",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-110": {
    "rawAssetId": "fictional-110",
    "name": "Wolf Riding Mount",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-111": {
    "rawAssetId": "fictional-111",
    "name": "Woodland Deerhorn",
    "category": "fictional",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-112": {
    "rawAssetId": "fictional-112",
    "name": "Wyvern",
    "category": "fictional",
    "heightCm": 899.1,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-113": {
    "rawAssetId": "fictional-113",
    "name": "Wyvern Mount",
    "category": "fictional",
    "heightCm": 689.5,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-114": {
    "rawAssetId": "fictional-114",
    "name": "Young Western Dragon",
    "category": "fictional",
    "heightCm": 860.4,
    "measurementType": "length",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-115": {
    "rawAssetId": "fictional-115",
    "name": "Zombie",
    "category": "fictional",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[X] Fantasy",
    "tags": [
      "fictional",
      "[x] fantasy"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-116": {
    "rawAssetId": "fictional-116",
    "name": "Manga",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-117": {
    "rawAssetId": "fictional-117",
    "name": "Manga 10",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-118": {
    "rawAssetId": "fictional-118",
    "name": "Manga 100",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-119": {
    "rawAssetId": "fictional-119",
    "name": "Manga 101",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-120": {
    "rawAssetId": "fictional-120",
    "name": "Manga 102",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-121": {
    "rawAssetId": "fictional-121",
    "name": "Manga 103",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-122": {
    "rawAssetId": "fictional-122",
    "name": "Manga 104",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-123": {
    "rawAssetId": "fictional-123",
    "name": "Manga 105",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-124": {
    "rawAssetId": "fictional-124",
    "name": "Manga 106",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-125": {
    "rawAssetId": "fictional-125",
    "name": "Manga 107",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-126": {
    "rawAssetId": "fictional-126",
    "name": "Manga 108",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-127": {
    "rawAssetId": "fictional-127",
    "name": "Manga 109",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-128": {
    "rawAssetId": "fictional-128",
    "name": "Manga 11",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-129": {
    "rawAssetId": "fictional-129",
    "name": "Manga 110",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-130": {
    "rawAssetId": "fictional-130",
    "name": "Manga 111",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-131": {
    "rawAssetId": "fictional-131",
    "name": "Manga 112",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-132": {
    "rawAssetId": "fictional-132",
    "name": "Manga 113",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-133": {
    "rawAssetId": "fictional-133",
    "name": "Manga 114",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-134": {
    "rawAssetId": "fictional-134",
    "name": "Manga 115",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-135": {
    "rawAssetId": "fictional-135",
    "name": "Manga 116",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-136": {
    "rawAssetId": "fictional-136",
    "name": "Manga 117",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-137": {
    "rawAssetId": "fictional-137",
    "name": "Manga 118",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-138": {
    "rawAssetId": "fictional-138",
    "name": "Manga 119",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-139": {
    "rawAssetId": "fictional-139",
    "name": "Manga 12",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-140": {
    "rawAssetId": "fictional-140",
    "name": "Manga 120",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-141": {
    "rawAssetId": "fictional-141",
    "name": "Manga 121",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-142": {
    "rawAssetId": "fictional-142",
    "name": "Manga 122",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-143": {
    "rawAssetId": "fictional-143",
    "name": "Manga 123",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-144": {
    "rawAssetId": "fictional-144",
    "name": "Manga 124",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-145": {
    "rawAssetId": "fictional-145",
    "name": "Manga 125",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-146": {
    "rawAssetId": "fictional-146",
    "name": "Manga 126",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-147": {
    "rawAssetId": "fictional-147",
    "name": "Manga 127",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-148": {
    "rawAssetId": "fictional-148",
    "name": "Manga 128",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-149": {
    "rawAssetId": "fictional-149",
    "name": "Manga 129",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-150": {
    "rawAssetId": "fictional-150",
    "name": "Manga 13",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-151": {
    "rawAssetId": "fictional-151",
    "name": "Manga 130",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-152": {
    "rawAssetId": "fictional-152",
    "name": "Manga 131",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-153": {
    "rawAssetId": "fictional-153",
    "name": "Manga 132",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-154": {
    "rawAssetId": "fictional-154",
    "name": "Manga 133",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-155": {
    "rawAssetId": "fictional-155",
    "name": "Manga 134",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-156": {
    "rawAssetId": "fictional-156",
    "name": "Manga 136",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-157": {
    "rawAssetId": "fictional-157",
    "name": "Manga 14",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-158": {
    "rawAssetId": "fictional-158",
    "name": "Manga 15",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-159": {
    "rawAssetId": "fictional-159",
    "name": "Manga 16",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-160": {
    "rawAssetId": "fictional-160",
    "name": "Manga 17",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-161": {
    "rawAssetId": "fictional-161",
    "name": "Manga 18",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-162": {
    "rawAssetId": "fictional-162",
    "name": "Manga 19",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-163": {
    "rawAssetId": "fictional-163",
    "name": "Manga 2",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-164": {
    "rawAssetId": "fictional-164",
    "name": "Manga 20",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-165": {
    "rawAssetId": "fictional-165",
    "name": "Manga 21",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-166": {
    "rawAssetId": "fictional-166",
    "name": "Manga 22",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-167": {
    "rawAssetId": "fictional-167",
    "name": "Manga 23",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-168": {
    "rawAssetId": "fictional-168",
    "name": "Manga 24",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-169": {
    "rawAssetId": "fictional-169",
    "name": "Manga 25",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-170": {
    "rawAssetId": "fictional-170",
    "name": "Manga 26",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-171": {
    "rawAssetId": "fictional-171",
    "name": "Manga 27",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-172": {
    "rawAssetId": "fictional-172",
    "name": "Manga 28",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-173": {
    "rawAssetId": "fictional-173",
    "name": "Manga 29",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-174": {
    "rawAssetId": "fictional-174",
    "name": "Manga 3",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-175": {
    "rawAssetId": "fictional-175",
    "name": "Manga 30",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-176": {
    "rawAssetId": "fictional-176",
    "name": "Manga 31",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-177": {
    "rawAssetId": "fictional-177",
    "name": "Manga 32",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-178": {
    "rawAssetId": "fictional-178",
    "name": "Manga 33",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-179": {
    "rawAssetId": "fictional-179",
    "name": "Manga 34",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-180": {
    "rawAssetId": "fictional-180",
    "name": "Manga 35",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-181": {
    "rawAssetId": "fictional-181",
    "name": "Manga 36",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-182": {
    "rawAssetId": "fictional-182",
    "name": "Manga 37",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-183": {
    "rawAssetId": "fictional-183",
    "name": "Manga 38",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-184": {
    "rawAssetId": "fictional-184",
    "name": "Manga 39",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-185": {
    "rawAssetId": "fictional-185",
    "name": "Manga 4",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-186": {
    "rawAssetId": "fictional-186",
    "name": "Manga 40",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-187": {
    "rawAssetId": "fictional-187",
    "name": "Manga 41",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-188": {
    "rawAssetId": "fictional-188",
    "name": "Manga 42",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-189": {
    "rawAssetId": "fictional-189",
    "name": "Manga 43",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-190": {
    "rawAssetId": "fictional-190",
    "name": "Manga 44",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-191": {
    "rawAssetId": "fictional-191",
    "name": "Manga 45",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-192": {
    "rawAssetId": "fictional-192",
    "name": "Manga 46",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-193": {
    "rawAssetId": "fictional-193",
    "name": "Manga 47",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-194": {
    "rawAssetId": "fictional-194",
    "name": "Manga 48",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-195": {
    "rawAssetId": "fictional-195",
    "name": "Manga 49",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-196": {
    "rawAssetId": "fictional-196",
    "name": "Manga 5",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-197": {
    "rawAssetId": "fictional-197",
    "name": "Manga 50",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-198": {
    "rawAssetId": "fictional-198",
    "name": "Manga 51",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-199": {
    "rawAssetId": "fictional-199",
    "name": "Manga 52",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-200": {
    "rawAssetId": "fictional-200",
    "name": "Manga 53",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-201": {
    "rawAssetId": "fictional-201",
    "name": "Manga 54",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-202": {
    "rawAssetId": "fictional-202",
    "name": "Manga 55",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-203": {
    "rawAssetId": "fictional-203",
    "name": "Manga 56",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-204": {
    "rawAssetId": "fictional-204",
    "name": "Manga 57",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-205": {
    "rawAssetId": "fictional-205",
    "name": "Manga 58",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-206": {
    "rawAssetId": "fictional-206",
    "name": "Manga 59",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-207": {
    "rawAssetId": "fictional-207",
    "name": "Manga 6",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-208": {
    "rawAssetId": "fictional-208",
    "name": "Manga 60",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-209": {
    "rawAssetId": "fictional-209",
    "name": "Manga 61",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-210": {
    "rawAssetId": "fictional-210",
    "name": "Manga 62",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-211": {
    "rawAssetId": "fictional-211",
    "name": "Manga 63",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-212": {
    "rawAssetId": "fictional-212",
    "name": "Manga 64",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-213": {
    "rawAssetId": "fictional-213",
    "name": "Manga 65",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-214": {
    "rawAssetId": "fictional-214",
    "name": "Manga 66",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-215": {
    "rawAssetId": "fictional-215",
    "name": "Manga 67",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-216": {
    "rawAssetId": "fictional-216",
    "name": "Manga 68",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-217": {
    "rawAssetId": "fictional-217",
    "name": "Manga 69",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-218": {
    "rawAssetId": "fictional-218",
    "name": "Manga 7",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-219": {
    "rawAssetId": "fictional-219",
    "name": "Manga 70",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-220": {
    "rawAssetId": "fictional-220",
    "name": "Manga 71",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-221": {
    "rawAssetId": "fictional-221",
    "name": "Manga 72",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-222": {
    "rawAssetId": "fictional-222",
    "name": "Manga 73",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-223": {
    "rawAssetId": "fictional-223",
    "name": "Manga 74",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-224": {
    "rawAssetId": "fictional-224",
    "name": "Manga 75",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-225": {
    "rawAssetId": "fictional-225",
    "name": "Manga 76",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-226": {
    "rawAssetId": "fictional-226",
    "name": "Manga 77",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-227": {
    "rawAssetId": "fictional-227",
    "name": "Manga 78",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-228": {
    "rawAssetId": "fictional-228",
    "name": "Manga 79",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-229": {
    "rawAssetId": "fictional-229",
    "name": "Manga 8",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-230": {
    "rawAssetId": "fictional-230",
    "name": "Manga 80",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-231": {
    "rawAssetId": "fictional-231",
    "name": "Manga 81",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-232": {
    "rawAssetId": "fictional-232",
    "name": "Manga 82",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-233": {
    "rawAssetId": "fictional-233",
    "name": "Manga 83",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-234": {
    "rawAssetId": "fictional-234",
    "name": "Manga 84",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-235": {
    "rawAssetId": "fictional-235",
    "name": "Manga 85",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-236": {
    "rawAssetId": "fictional-236",
    "name": "Manga 86",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-237": {
    "rawAssetId": "fictional-237",
    "name": "Manga 87",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-238": {
    "rawAssetId": "fictional-238",
    "name": "Manga 88",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-239": {
    "rawAssetId": "fictional-239",
    "name": "Manga 89",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-240": {
    "rawAssetId": "fictional-240",
    "name": "Manga 9",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-241": {
    "rawAssetId": "fictional-241",
    "name": "Manga 90",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-242": {
    "rawAssetId": "fictional-242",
    "name": "Manga 91",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-243": {
    "rawAssetId": "fictional-243",
    "name": "Manga 92",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-244": {
    "rawAssetId": "fictional-244",
    "name": "Manga 93",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-245": {
    "rawAssetId": "fictional-245",
    "name": "Manga 94",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-246": {
    "rawAssetId": "fictional-246",
    "name": "Manga 95",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-247": {
    "rawAssetId": "fictional-247",
    "name": "Manga 96",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-248": {
    "rawAssetId": "fictional-248",
    "name": "Manga 97",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-249": {
    "rawAssetId": "fictional-249",
    "name": "Manga 98",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-250": {
    "rawAssetId": "fictional-250",
    "name": "Manga 99",
    "category": "fictional",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[X] Manga",
    "tags": [
      "fictional",
      "[x] manga"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "fictional-251": {
    "rawAssetId": "fictional-251",
    "name": "Fictional 251",
    "category": "fictional",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "fictional"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "fictional-252": {
    "rawAssetId": "fictional-252",
    "name": "Fictional 252",
    "category": "fictional",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "fictional"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "fictional-253": {
    "rawAssetId": "fictional-253",
    "name": "Fictional 253",
    "category": "fictional",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "fictional"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "fictional-254": {
    "rawAssetId": "fictional-254",
    "name": "Fictional 254",
    "category": "fictional",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "fictional"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "fictional-255": {
    "rawAssetId": "fictional-255",
    "name": "Fictional 255",
    "category": "fictional",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "fictional"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "plant-cactus-01": {
    "rawAssetId": "plant-cactus-01",
    "name": "Golden Amber Cactus",
    "category": "plants",
    "heightCm": 90,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "plant-palm-01": {
    "rawAssetId": "plant-palm-01",
    "name": "Ball Cactus",
    "category": "plants",
    "heightCm": 60,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "plant-pine-01": {
    "rawAssetId": "plant-pine-01",
    "name": "Aloe Vera",
    "category": "plants",
    "heightCm": 60,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "plant-potted-01": {
    "rawAssetId": "plant-potted-01",
    "name": "Rattle",
    "category": "plants",
    "heightCm": 250,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "plant-rose-01": {
    "rawAssetId": "plant-rose-01",
    "name": "Fan Cactus",
    "category": "plants",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "plant-sunflower-01": {
    "rawAssetId": "plant-sunflower-01",
    "name": "Buddha Belly Tree",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "plant-tree-01": {
    "rawAssetId": "plant-tree-01",
    "name": "Agave",
    "category": "plants",
    "heightCm": 110,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "plant-001": {
    "rawAssetId": "plant-001",
    "name": "Plant 001",
    "category": "plants",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "plants"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "plant-002": {
    "rawAssetId": "plant-002",
    "name": "Plant 002",
    "category": "plants",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "plants"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "plant-003": {
    "rawAssetId": "plant-003",
    "name": "Plant 003",
    "category": "plants",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "plants"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "plant-004": {
    "rawAssetId": "plant-004",
    "name": "Agave",
    "category": "plants",
    "heightCm": 110,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [
      "agave"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-005": {
    "rawAssetId": "plant-005",
    "name": "Aloe Vera",
    "category": "plants",
    "heightCm": 60,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [
      "aloe-vera"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-006": {
    "rawAssetId": "plant-006",
    "name": "Ball Cactus",
    "category": "plants",
    "heightCm": 60,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [
      "ball-cactus"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-007": {
    "rawAssetId": "plant-007",
    "name": "Buddha Belly Tree",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [
      "buddha-belly-tree"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-008": {
    "rawAssetId": "plant-008",
    "name": "Fan Cactus",
    "category": "plants",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [
      "fan-cactus"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-009": {
    "rawAssetId": "plant-009",
    "name": "Golden Amber Cactus",
    "category": "plants",
    "heightCm": 90,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [
      "golden-amber-cactus"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-010": {
    "rawAssetId": "plant-010",
    "name": "Rattle",
    "category": "plants",
    "heightCm": 250,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [
      "rattle"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-011": {
    "rawAssetId": "plant-011",
    "name": "Saguaro Cactus",
    "category": "plants",
    "heightCm": 650,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [
      "saguaro-cactus"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-012": {
    "rawAssetId": "plant-012",
    "name": "Succulent Rosette",
    "category": "plants",
    "heightCm": 18,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [
      "succulent-rosette"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-013": {
    "rawAssetId": "plant-013",
    "name": "Yushu",
    "category": "plants",
    "heightCm": 200,
    "measurementType": "height",
    "subgroup": "[P] Cacti, Succulents & Unusual Forms",
    "tags": [
      "plants",
      "[p] cacti, succulents & unusual forms"
    ],
    "aliases": [
      "yushu"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-014": {
    "rawAssetId": "plant-014",
    "name": "Arundodis",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "arundodis"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-015": {
    "rawAssetId": "plant-015",
    "name": "Bamboo",
    "category": "plants",
    "heightCm": 450,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "bamboo"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-016": {
    "rawAssetId": "plant-016",
    "name": "Begonia",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "begonia"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-017": {
    "rawAssetId": "plant-017",
    "name": "Begonia Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "begonia-tree"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-018": {
    "rawAssetId": "plant-018",
    "name": "Canna",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "canna"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-019": {
    "rawAssetId": "plant-019",
    "name": "Cat-tail",
    "category": "plants",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "cat-tail"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-020": {
    "rawAssetId": "plant-020",
    "name": "Chinese Peony",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "chinese-peony"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-021": {
    "rawAssetId": "plant-021",
    "name": "Cockscomb",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "cockscomb"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-022": {
    "rawAssetId": "plant-022",
    "name": "Corn Plant",
    "category": "plants",
    "heightCm": 240,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "corn-plant"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-023": {
    "rawAssetId": "plant-023",
    "name": "Cotton Plant",
    "category": "plants",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "cotton-plant"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-024": {
    "rawAssetId": "plant-024",
    "name": "Dahlia",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "dahlia"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-025": {
    "rawAssetId": "plant-025",
    "name": "Flower of the Other Shore",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "flower-of-the-other-shore"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-026": {
    "rawAssetId": "plant-026",
    "name": "Foxglove",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [
      "foxglove"
    ],
    "status": "verified",
    "indexable": true
  },
  "plant-027": {
    "rawAssetId": "plant-027",
    "name": "Foxtail Lily",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-028": {
    "rawAssetId": "plant-028",
    "name": "Hollyhock",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-029": {
    "rawAssetId": "plant-029",
    "name": "Iris",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-030": {
    "rawAssetId": "plant-030",
    "name": "Lavender",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-031": {
    "rawAssetId": "plant-031",
    "name": "Lily",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-032": {
    "rawAssetId": "plant-032",
    "name": "Loquat Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-033": {
    "rawAssetId": "plant-033",
    "name": "Lotus",
    "category": "plants",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-034": {
    "rawAssetId": "plant-034",
    "name": "Lu Binghua",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-035": {
    "rawAssetId": "plant-035",
    "name": "Marigold",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-036": {
    "rawAssetId": "plant-036",
    "name": "Mint Bush",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-037": {
    "rawAssetId": "plant-037",
    "name": "Miscanthus",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-038": {
    "rawAssetId": "plant-038",
    "name": "Orchid",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-039": {
    "rawAssetId": "plant-039",
    "name": "Pampas Grass",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-040": {
    "rawAssetId": "plant-040",
    "name": "Papyrus",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-041": {
    "rawAssetId": "plant-041",
    "name": "Peony",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-042": {
    "rawAssetId": "plant-042",
    "name": "Pineapple Plant",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-043": {
    "rawAssetId": "plant-043",
    "name": "Poppy",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-044": {
    "rawAssetId": "plant-044",
    "name": "Purse Peony",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-045": {
    "rawAssetId": "plant-045",
    "name": "Reed",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-046": {
    "rawAssetId": "plant-046",
    "name": "Rice Plant",
    "category": "plants",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-047": {
    "rawAssetId": "plant-047",
    "name": "Sage Inflorescence",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-048": {
    "rawAssetId": "plant-048",
    "name": "Sorghum",
    "category": "plants",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-049": {
    "rawAssetId": "plant-049",
    "name": "Sunflower",
    "category": "plants",
    "heightCm": 250,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-050": {
    "rawAssetId": "plant-050",
    "name": "Tea Tree",
    "category": "plants",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-051": {
    "rawAssetId": "plant-051",
    "name": "Torch Flower",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-052": {
    "rawAssetId": "plant-052",
    "name": "Tulip",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-053": {
    "rawAssetId": "plant-053",
    "name": "Wang Lian",
    "category": "plants",
    "heightCm": 30,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-054": {
    "rawAssetId": "plant-054",
    "name": "Water Lily",
    "category": "plants",
    "heightCm": 15,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-055": {
    "rawAssetId": "plant-055",
    "name": "Wheat Plant",
    "category": "plants",
    "heightCm": 100,
    "measurementType": "height",
    "subgroup": "[P] Flowers, Herbaceous, Aquatic & Crops",
    "tags": [
      "plants",
      "[p] flowers, herbaceous, aquatic & crops"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-056": {
    "rawAssetId": "plant-056",
    "name": "Bird's Nest Fern",
    "category": "plants",
    "heightCm": 110,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-057": {
    "rawAssetId": "plant-057",
    "name": "Box Ball",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-058": {
    "rawAssetId": "plant-058",
    "name": "Camellia Shrub",
    "category": "plants",
    "heightCm": 280,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-059": {
    "rawAssetId": "plant-059",
    "name": "Delphinium",
    "category": "plants",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-060": {
    "rawAssetId": "plant-060",
    "name": "Forsythia Shrub",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-061": {
    "rawAssetId": "plant-061",
    "name": "Fuso",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-062": {
    "rawAssetId": "plant-062",
    "name": "Gardenia Shrub",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-063": {
    "rawAssetId": "plant-063",
    "name": "Grape Vine Trellis",
    "category": "plants",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-064": {
    "rawAssetId": "plant-064",
    "name": "Hibiscus",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-065": {
    "rawAssetId": "plant-065",
    "name": "Honeysuckle Pergola",
    "category": "plants",
    "heightCm": 280,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-066": {
    "rawAssetId": "plant-066",
    "name": "Hops Pergola",
    "category": "plants",
    "heightCm": 300,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-067": {
    "rawAssetId": "plant-067",
    "name": "Hyacinth",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-068": {
    "rawAssetId": "plant-068",
    "name": "Hydrangea Shrub",
    "category": "plants",
    "heightCm": 140,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-069": {
    "rawAssetId": "plant-069",
    "name": "Ivy Column",
    "category": "plants",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-070": {
    "rawAssetId": "plant-070",
    "name": "Jasmine Bush",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-071": {
    "rawAssetId": "plant-071",
    "name": "Lingxiao Flower Pergola",
    "category": "plants",
    "heightCm": 300,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-072": {
    "rawAssetId": "plant-072",
    "name": "Morning Glory Pergola",
    "category": "plants",
    "heightCm": 230,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-073": {
    "rawAssetId": "plant-073",
    "name": "Oleander",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-074": {
    "rawAssetId": "plant-074",
    "name": "Red Rosewood Shrub",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-075": {
    "rawAssetId": "plant-075",
    "name": "Rhododendron Shrub",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-076": {
    "rawAssetId": "plant-076",
    "name": "Rose Bush",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-077": {
    "rawAssetId": "plant-077",
    "name": "Rosemary Shrub",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-078": {
    "rawAssetId": "plant-078",
    "name": "Wisteria",
    "category": "plants",
    "heightCm": 400,
    "measurementType": "height",
    "subgroup": "[P] Shrubs, Vines & Mid-sized Landscaping",
    "tags": [
      "plants",
      "[p] shrubs, vines & mid-sized landscaping"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-079": {
    "rawAssetId": "plant-079",
    "name": "Apple Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-080": {
    "rawAssetId": "plant-080",
    "name": "Araucaria",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-081": {
    "rawAssetId": "plant-081",
    "name": "Bald Cypress",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-082": {
    "rawAssetId": "plant-082",
    "name": "Banyan Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-083": {
    "rawAssetId": "plant-083",
    "name": "Baobab Tree",
    "category": "plants",
    "heightCm": 1800,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-084": {
    "rawAssetId": "plant-084",
    "name": "Bayberry Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-085": {
    "rawAssetId": "plant-085",
    "name": "Birch Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-086": {
    "rawAssetId": "plant-086",
    "name": "Camphor Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-087": {
    "rawAssetId": "plant-087",
    "name": "Cedar",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-088": {
    "rawAssetId": "plant-088",
    "name": "Cherry Blossom Tree",
    "category": "plants",
    "heightCm": 600,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-089": {
    "rawAssetId": "plant-089",
    "name": "Chestnut",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-090": {
    "rawAssetId": "plant-090",
    "name": "Coffee Tree",
    "category": "plants",
    "heightCm": 350,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-091": {
    "rawAssetId": "plant-091",
    "name": "Cypress",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-092": {
    "rawAssetId": "plant-092",
    "name": "Durian Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-093": {
    "rawAssetId": "plant-093",
    "name": "Elm",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-094": {
    "rawAssetId": "plant-094",
    "name": "Eucalyptus",
    "category": "plants",
    "heightCm": 1500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-095": {
    "rawAssetId": "plant-095",
    "name": "Fig Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-096": {
    "rawAssetId": "plant-096",
    "name": "Fir",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-097": {
    "rawAssetId": "plant-097",
    "name": "Ginkgo Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-098": {
    "rawAssetId": "plant-098",
    "name": "Grapefruit Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-099": {
    "rawAssetId": "plant-099",
    "name": "Hawthorn Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-100": {
    "rawAssetId": "plant-100",
    "name": "Jacaranda",
    "category": "plants",
    "heightCm": 1200,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-101": {
    "rawAssetId": "plant-101",
    "name": "Jackfruit Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-102": {
    "rawAssetId": "plant-102",
    "name": "Juniper",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-103": {
    "rawAssetId": "plant-103",
    "name": "Kapok Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-104": {
    "rawAssetId": "plant-104",
    "name": "Lemon",
    "category": "plants",
    "heightCm": 300,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-105": {
    "rawAssetId": "plant-105",
    "name": "Locust Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-106": {
    "rawAssetId": "plant-106",
    "name": "Longan Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-107": {
    "rawAssetId": "plant-107",
    "name": "Lychee Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-108": {
    "rawAssetId": "plant-108",
    "name": "Magnolia Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-109": {
    "rawAssetId": "plant-109",
    "name": "Mango Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-110": {
    "rawAssetId": "plant-110",
    "name": "Maple",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-111": {
    "rawAssetId": "plant-111",
    "name": "Metasequoia",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-112": {
    "rawAssetId": "plant-112",
    "name": "Oak",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-113": {
    "rawAssetId": "plant-113",
    "name": "Olive Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-114": {
    "rawAssetId": "plant-114",
    "name": "Peach",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-115": {
    "rawAssetId": "plant-115",
    "name": "Pear Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-116": {
    "rawAssetId": "plant-116",
    "name": "Persimmon Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-117": {
    "rawAssetId": "plant-117",
    "name": "Pine",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-118": {
    "rawAssetId": "plant-118",
    "name": "Plane Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-119": {
    "rawAssetId": "plant-119",
    "name": "Podocarpus",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-120": {
    "rawAssetId": "plant-120",
    "name": "Pomegranate Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-121": {
    "rawAssetId": "plant-121",
    "name": "Populus Euphratica",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-122": {
    "rawAssetId": "plant-122",
    "name": "Redbud Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-123": {
    "rawAssetId": "plant-123",
    "name": "Redwood Tree",
    "category": "plants",
    "heightCm": 7000,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-124": {
    "rawAssetId": "plant-124",
    "name": "Rubber Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-125": {
    "rawAssetId": "plant-125",
    "name": "Spruce",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-126": {
    "rawAssetId": "plant-126",
    "name": "Walnut Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-127": {
    "rawAssetId": "plant-127",
    "name": "Willow Tree",
    "category": "plants",
    "heightCm": 1700,
    "measurementType": "height",
    "subgroup": "[P] Trees & Large Woody Plants",
    "tags": [
      "plants",
      "[p] trees & large woody plants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-128": {
    "rawAssetId": "plant-128",
    "name": "Alocasia",
    "category": "plants",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-129": {
    "rawAssetId": "plant-129",
    "name": "Banana",
    "category": "plants",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-130": {
    "rawAssetId": "plant-130",
    "name": "Brown Bamboo",
    "category": "plants",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-131": {
    "rawAssetId": "plant-131",
    "name": "Coconut Tree",
    "category": "plants",
    "heightCm": 1800,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-132": {
    "rawAssetId": "plant-132",
    "name": "Coleus",
    "category": "plants",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-133": {
    "rawAssetId": "plant-133",
    "name": "Cycad",
    "category": "plants",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-134": {
    "rawAssetId": "plant-134",
    "name": "Date Palm",
    "category": "plants",
    "heightCm": 1400,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-135": {
    "rawAssetId": "plant-135",
    "name": "Dracaena",
    "category": "plants",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-136": {
    "rawAssetId": "plant-136",
    "name": "Dripping Water Guanyin",
    "category": "plants",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-137": {
    "rawAssetId": "plant-137",
    "name": "Monstera Deliciosa",
    "category": "plants",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-138": {
    "rawAssetId": "plant-138",
    "name": "Palm Tree",
    "category": "plants",
    "heightCm": 1500,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-139": {
    "rawAssetId": "plant-139",
    "name": "Plumeria Potted Tree Shape",
    "category": "plants",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-140": {
    "rawAssetId": "plant-140",
    "name": "Plumeria Tree",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-141": {
    "rawAssetId": "plant-141",
    "name": "Qin Ye Rong",
    "category": "plants",
    "heightCm": 240,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-142": {
    "rawAssetId": "plant-142",
    "name": "Sansevieria",
    "category": "plants",
    "heightCm": 90,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-143": {
    "rawAssetId": "plant-143",
    "name": "Sanwei Kwai",
    "category": "plants",
    "heightCm": 240,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-144": {
    "rawAssetId": "plant-144",
    "name": "Strelitzia Reginae",
    "category": "plants",
    "heightCm": 120,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-145": {
    "rawAssetId": "plant-145",
    "name": "Traveler Banana",
    "category": "plants",
    "heightCm": 900,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-146": {
    "rawAssetId": "plant-146",
    "name": "Tree Fern",
    "category": "plants",
    "heightCm": 500,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-147": {
    "rawAssetId": "plant-147",
    "name": "Umbrella Tree",
    "category": "plants",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-148": {
    "rawAssetId": "plant-148",
    "name": "Wolf Tail Fern",
    "category": "plants",
    "heightCm": 220,
    "measurementType": "height",
    "subgroup": "[P] Tropical Foliage, Palms & Houseplants",
    "tags": [
      "plants",
      "[p] tropical foliage, palms & houseplants"
    ],
    "aliases": [],
    "status": "verified",
    "indexable": true
  },
  "plant-149": {
    "rawAssetId": "plant-149",
    "name": "Plant 149",
    "category": "plants",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "plants"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "plant-150": {
    "rawAssetId": "plant-150",
    "name": "Plant 150",
    "category": "plants",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "plants"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "plant-151": {
    "rawAssetId": "plant-151",
    "name": "Plant 151",
    "category": "plants",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "plants"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "plant-152": {
    "rawAssetId": "plant-152",
    "name": "Plant 152",
    "category": "plants",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "plants"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "plant-153": {
    "rawAssetId": "plant-153",
    "name": "Plant 153",
    "category": "plants",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "plants"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-basketball-hoop-01": {
    "rawAssetId": "sports-basketball-hoop-01",
    "name": "American Football",
    "category": "sports",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-bicycle-01": {
    "rawAssetId": "sports-bicycle-01",
    "name": "Basketball",
    "category": "sports",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-football-goal-01": {
    "rawAssetId": "sports-football-goal-01",
    "name": "Balance Ball",
    "category": "sports",
    "heightCm": 140,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-punching-bag-01": {
    "rawAssetId": "sports-punching-bag-01",
    "name": "Bowling Ball",
    "category": "sports",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-surfboard-01": {
    "rawAssetId": "sports-surfboard-01",
    "name": "Beach Volleyball",
    "category": "sports",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-tennis-net-01": {
    "rawAssetId": "sports-tennis-net-01",
    "name": "Baseball",
    "category": "sports",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-volleyball-net-01": {
    "rawAssetId": "sports-volleyball-net-01",
    "name": "Children's Ball",
    "category": "sports",
    "heightCm": 125,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-001": {
    "rawAssetId": "sports-001",
    "name": "Sports Item 001",
    "category": "sports",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "sports"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "sports-002": {
    "rawAssetId": "sports-002",
    "name": "Sports Item 002",
    "category": "sports",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "sports"
    ],
    "aliases": [],
    "status": "invalid",
    "indexable": false
  },
  "sports-003": {
    "rawAssetId": "sports-003",
    "name": "Sports Item 003",
    "category": "sports",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-004": {
    "rawAssetId": "sports-004",
    "name": "American Football",
    "category": "sports",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "american-football",
      "football"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-005": {
    "rawAssetId": "sports-005",
    "name": "Balance Ball",
    "category": "sports",
    "heightCm": 140,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "balance-ball",
      "exercise-ball",
      "swiss-ball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-006": {
    "rawAssetId": "sports-006",
    "name": "Baseball",
    "category": "sports",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "baseball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-007": {
    "rawAssetId": "sports-007",
    "name": "Basketball",
    "category": "sports",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "basketball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-008": {
    "rawAssetId": "sports-008",
    "name": "Beach Volleyball",
    "category": "sports",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "beach-volleyball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-009": {
    "rawAssetId": "sports-009",
    "name": "Bowling Ball",
    "category": "sports",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "bowling-ball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-010": {
    "rawAssetId": "sports-010",
    "name": "Children's Ball",
    "category": "sports",
    "heightCm": 125,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "childrens-ball",
      "children-ball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-011": {
    "rawAssetId": "sports-011",
    "name": "Cricket Ball",
    "category": "sports",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "cricket-ball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-012": {
    "rawAssetId": "sports-012",
    "name": "Dodgeball",
    "category": "sports",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "dodgeball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-013": {
    "rawAssetId": "sports-013",
    "name": "Field Hockey Ball",
    "category": "sports",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "field-hockey-ball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-014": {
    "rawAssetId": "sports-014",
    "name": "Football",
    "category": "sports",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "soccer-ball",
      "football-soccer"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-015": {
    "rawAssetId": "sports-015",
    "name": "Gateball",
    "category": "sports",
    "heightCm": 165,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "gateball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-016": {
    "rawAssetId": "sports-016",
    "name": "Golf Ball",
    "category": "sports",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "golf-ball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-017": {
    "rawAssetId": "sports-017",
    "name": "Handball",
    "category": "sports",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "handball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-018": {
    "rawAssetId": "sports-018",
    "name": "Hockey Puck",
    "category": "sports",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "hockey-puck"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-019": {
    "rawAssetId": "sports-019",
    "name": "Medicine Ball",
    "category": "sports",
    "heightCm": 145,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "medicine-ball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-020": {
    "rawAssetId": "sports-020",
    "name": "Sepak Takraw Ball",
    "category": "sports",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "sepak-takraw-ball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-021": {
    "rawAssetId": "sports-021",
    "name": "Shuttlecock",
    "category": "sports",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "shuttlecock",
      "badminton-shuttlecock"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-022": {
    "rawAssetId": "sports-022",
    "name": "Softball",
    "category": "sports",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "softball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-023": {
    "rawAssetId": "sports-023",
    "name": "Table Tennis Ball",
    "category": "sports",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "table-tennis-ball",
      "ping-pong-ball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-024": {
    "rawAssetId": "sports-024",
    "name": "Tennis Ball",
    "category": "sports",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "tennis-ball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-025": {
    "rawAssetId": "sports-025",
    "name": "Volleyball",
    "category": "sports",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "volleyball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-026": {
    "rawAssetId": "sports-026",
    "name": "Water Polo Ball",
    "category": "sports",
    "heightCm": 95,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "water-polo-ball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-027": {
    "rawAssetId": "sports-027",
    "name": "Yoga Ball",
    "category": "sports",
    "heightCm": 115,
    "measurementType": "height",
    "subgroup": "[S] Sports",
    "tags": [
      "sports",
      "[s] sports"
    ],
    "aliases": [
      "yoga-ball"
    ],
    "status": "verified",
    "indexable": true
  },
  "sports-028": {
    "rawAssetId": "sports-028",
    "name": "Sports Item 028",
    "category": "sports",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-029": {
    "rawAssetId": "sports-029",
    "name": "Sports Item 029",
    "category": "sports",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-030": {
    "rawAssetId": "sports-030",
    "name": "Sports Item 030",
    "category": "sports",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-031": {
    "rawAssetId": "sports-031",
    "name": "Sports Item 031",
    "category": "sports",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-032": {
    "rawAssetId": "sports-032",
    "name": "Sports Item 032",
    "category": "sports",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-033": {
    "rawAssetId": "sports-033",
    "name": "Sports Item 033",
    "category": "sports",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-034": {
    "rawAssetId": "sports-034",
    "name": "Sports Item 034",
    "category": "sports",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-035": {
    "rawAssetId": "sports-035",
    "name": "Sports Item 035",
    "category": "sports",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "sports-036": {
    "rawAssetId": "sports-036",
    "name": "Sports Item 036",
    "category": "sports",
    "heightCm": null,
    "measurementType": null,
    "subgroup": null,
    "tags": [
      "sports"
    ],
    "aliases": [],
    "status": "needs-review",
    "indexable": false
  },
  "anime-002": {
    "rawAssetId": "anime-002",
    "name": "Brook",
    "category": "anime",
    "heightCm": 277,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "brook",
      "brook"
    ],
    "aliases": [
      "brook",
      "brook"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-003": {
    "rawAssetId": "anime-003",
    "name": "Charlotte Linlin Big Mom",
    "category": "anime",
    "heightCm": 880,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "charlotte-linlin-big-mom",
      "charlotte linlin big mom"
    ],
    "aliases": [
      "charlotte-linlin-big-mom",
      "charlotte linlin big mom"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-004": {
    "rawAssetId": "anime-004",
    "name": "Chopper",
    "category": "anime",
    "heightCm": 90,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "chopper",
      "chopper"
    ],
    "aliases": [
      "chopper",
      "chopper"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-005": {
    "rawAssetId": "anime-005",
    "name": "Edward Newgate Whitebeard",
    "category": "anime",
    "heightCm": 666,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "edward-newgate-whitebeard",
      "edward newgate whitebeard"
    ],
    "aliases": [
      "edward-newgate-whitebeard",
      "edward newgate whitebeard"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-006": {
    "rawAssetId": "anime-006",
    "name": "Franky",
    "category": "anime",
    "heightCm": 240,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "franky",
      "franky"
    ],
    "aliases": [
      "franky",
      "franky"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-007": {
    "rawAssetId": "anime-007",
    "name": "Jinbe",
    "category": "anime",
    "heightCm": 301,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "jinbe",
      "jinbe"
    ],
    "aliases": [
      "jinbe",
      "jinbe"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-008": {
    "rawAssetId": "anime-008",
    "name": "Kaido",
    "category": "anime",
    "heightCm": 710,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "kaido",
      "kaido"
    ],
    "aliases": [
      "kaido",
      "kaido"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-009": {
    "rawAssetId": "anime-009",
    "name": "Monkey D. Luffy",
    "category": "anime",
    "heightCm": 174,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "monkey-d-luffy",
      "monkey d. luffy"
    ],
    "aliases": [
      "monkey-d-luffy",
      "monkey d. luffy"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-010": {
    "rawAssetId": "anime-010",
    "name": "Nami",
    "category": "anime",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "nami",
      "nami"
    ],
    "aliases": [
      "nami",
      "nami"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-011": {
    "rawAssetId": "anime-011",
    "name": "Nico Robin",
    "category": "anime",
    "heightCm": 188,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "nico-robin",
      "nico robin"
    ],
    "aliases": [
      "nico-robin",
      "nico robin"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-012": {
    "rawAssetId": "anime-012",
    "name": "Roronoa Zoro",
    "category": "anime",
    "heightCm": 181,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "roronoa-zoro",
      "roronoa zoro"
    ],
    "aliases": [
      "roronoa-zoro",
      "roronoa zoro"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-013": {
    "rawAssetId": "anime-013",
    "name": "Sanji",
    "category": "anime",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "sanji",
      "sanji"
    ],
    "aliases": [
      "sanji",
      "sanji"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-014": {
    "rawAssetId": "anime-014",
    "name": "Usopp",
    "category": "anime",
    "heightCm": 176,
    "measurementType": "height",
    "subgroup": "[AN] one piece",
    "tags": [
      "anime",
      "usopp",
      "usopp"
    ],
    "aliases": [
      "usopp",
      "usopp"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-015": {
    "rawAssetId": "anime-015",
    "name": "Armin Arlert",
    "category": "anime",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[AN] attack on titan",
    "tags": [
      "anime",
      "armin-arlert",
      "armin arlert"
    ],
    "aliases": [
      "armin-arlert",
      "armin arlert"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-016": {
    "rawAssetId": "anime-016",
    "name": "colossal titan",
    "category": "anime",
    "heightCm": 6000,
    "measurementType": "height",
    "subgroup": "[AN] attack on titan",
    "tags": [
      "anime",
      "colossal-titan",
      "colossal titan"
    ],
    "aliases": [
      "colossal-titan",
      "colossal titan"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-017": {
    "rawAssetId": "anime-017",
    "name": "Eren Yeager",
    "category": "anime",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[AN] attack on titan",
    "tags": [
      "anime",
      "eren-yeager",
      "eren yeager"
    ],
    "aliases": [
      "eren-yeager",
      "eren yeager"
    ],
    "status": "verified",
    "indexable": true
  },
  "anime-018": {
    "rawAssetId": "anime-018",
    "name": "Levi Ackerman",
    "category": "anime",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[AN] attack on titan",
    "tags": [
      "anime",
      "levi-ackerman",
      "levi ackerman"
    ],
    "aliases": [
      "levi-ackerman",
      "levi ackerman"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-002": {
    "rawAssetId": "film-002",
    "name": "aat",
    "category": "films",
    "heightCm": 919,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "aat",
      "aat"
    ],
    "aliases": [
      "aat",
      "aat"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-003": {
    "rawAssetId": "film-003",
    "name": "acklay",
    "category": "films",
    "heightCm": 305,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "acklay",
      "acklay"
    ],
    "aliases": [
      "acklay",
      "acklay"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-004": {
    "rawAssetId": "film-004",
    "name": "admiral ackbar",
    "category": "films",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "admiral-ackbar",
      "admiral ackbar"
    ],
    "aliases": [
      "admiral-ackbar",
      "admiral ackbar"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-005": {
    "rawAssetId": "film-005",
    "name": "anakin skywalker",
    "category": "films",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "anakin-skywalker",
      "anakin skywalker"
    ],
    "aliases": [
      "anakin-skywalker",
      "anakin skywalker"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-006": {
    "rawAssetId": "film-006",
    "name": "at at",
    "category": "films",
    "heightCm": 2253,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "at-at",
      "at at"
    ],
    "aliases": [
      "at-at",
      "at at"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-007": {
    "rawAssetId": "film-007",
    "name": "at m6",
    "category": "films",
    "heightCm": 3609,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "at-m6",
      "at m6"
    ],
    "aliases": [
      "at-m6",
      "at m6"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-008": {
    "rawAssetId": "film-008",
    "name": "at st",
    "category": "films",
    "heightCm": 861,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "at-st",
      "at st"
    ],
    "aliases": [
      "at-st",
      "at st"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-009": {
    "rawAssetId": "film-009",
    "name": "at te",
    "category": "films",
    "heightCm": 960,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "at-te",
      "at te"
    ],
    "aliases": [
      "at-te",
      "at te"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-010": {
    "rawAssetId": "film-010",
    "name": "b1 battle droid",
    "category": "films",
    "heightCm": 193,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "b1-battle-droid",
      "b1 battle droid"
    ],
    "aliases": [
      "b1-battle-droid",
      "b1 battle droid"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-011": {
    "rawAssetId": "film-011",
    "name": "b2 battle droid",
    "category": "films",
    "heightCm": 191,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "b2-battle-droid",
      "b2 battle droid"
    ],
    "aliases": [
      "b2-battle-droid",
      "b2 battle droid"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-012": {
    "rawAssetId": "film-012",
    "name": "baby yoda",
    "category": "films",
    "heightCm": 33,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "baby-yoda",
      "baby yoda"
    ],
    "aliases": [
      "baby-yoda",
      "baby yoda"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-013": {
    "rawAssetId": "film-013",
    "name": "bantha",
    "category": "films",
    "heightCm": 251,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "bantha",
      "bantha"
    ],
    "aliases": [
      "bantha",
      "bantha"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-014": {
    "rawAssetId": "film-014",
    "name": "bb 8",
    "category": "films",
    "heightCm": 66,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "bb-8",
      "bb 8"
    ],
    "aliases": [
      "bb-8",
      "bb 8"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-015": {
    "rawAssetId": "film-015",
    "name": "bb 9e",
    "category": "films",
    "heightCm": 61,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "bb-9e",
      "bb 9e"
    ],
    "aliases": [
      "bb-9e",
      "bb 9e"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-016": {
    "rawAssetId": "film-016",
    "name": "boba fett",
    "category": "films",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "boba-fett",
      "boba fett"
    ],
    "aliases": [
      "boba-fett",
      "boba fett"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-017": {
    "rawAssetId": "film-017",
    "name": "c 3po",
    "category": "films",
    "heightCm": 173,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "c-3po",
      "c 3po"
    ],
    "aliases": [
      "c-3po",
      "c 3po"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-018": {
    "rawAssetId": "film-018",
    "name": "captain phasma",
    "category": "films",
    "heightCm": 201,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "captain-phasma",
      "captain phasma"
    ],
    "aliases": [
      "captain-phasma",
      "captain phasma"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-019": {
    "rawAssetId": "film-019",
    "name": "chewbacca",
    "category": "films",
    "heightCm": 229,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "chewbacca",
      "chewbacca"
    ],
    "aliases": [
      "chewbacca",
      "chewbacca"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-020": {
    "rawAssetId": "film-020",
    "name": "count dooku",
    "category": "films",
    "heightCm": 196,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "count-dooku",
      "count dooku"
    ],
    "aliases": [
      "count-dooku",
      "count dooku"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-021": {
    "rawAssetId": "film-021",
    "name": "darth maul",
    "category": "films",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "darth-maul",
      "darth maul"
    ],
    "aliases": [
      "darth-maul",
      "darth maul"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-022": {
    "rawAssetId": "film-022",
    "name": "darth vader",
    "category": "films",
    "heightCm": 203,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "darth-vader",
      "darth vader"
    ],
    "aliases": [
      "darth-vader",
      "darth vader"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-023": {
    "rawAssetId": "film-023",
    "name": "death trooper",
    "category": "films",
    "heightCm": 191,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "death-trooper",
      "death trooper"
    ],
    "aliases": [
      "death-trooper",
      "death trooper"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-024": {
    "rawAssetId": "film-024",
    "name": "droideka",
    "category": "films",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "droideka",
      "droideka"
    ],
    "aliases": [
      "droideka",
      "droideka"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-025": {
    "rawAssetId": "film-025",
    "name": "dwarf spider droid",
    "category": "films",
    "heightCm": 198,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "dwarf-spider-droid",
      "dwarf spider droid"
    ],
    "aliases": [
      "dwarf-spider-droid",
      "dwarf spider droid"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-026": {
    "rawAssetId": "film-026",
    "name": "emperor palpatine",
    "category": "films",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "emperor-palpatine",
      "emperor palpatine"
    ],
    "aliases": [
      "emperor-palpatine",
      "emperor palpatine"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-027": {
    "rawAssetId": "film-027",
    "name": "ewok",
    "category": "films",
    "heightCm": 99,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "ewok",
      "ewok"
    ],
    "aliases": [
      "ewok",
      "ewok"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-028": {
    "rawAssetId": "film-028",
    "name": "finn",
    "category": "films",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "finn",
      "finn"
    ],
    "aliases": [
      "finn",
      "finn"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-029": {
    "rawAssetId": "film-029",
    "name": "gnk droid",
    "category": "films",
    "heightCm": 109,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "gnk-droid",
      "gnk droid"
    ],
    "aliases": [
      "gnk-droid",
      "gnk droid"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-030": {
    "rawAssetId": "film-030",
    "name": "greivous",
    "category": "films",
    "heightCm": 218,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "greivous",
      "greivous"
    ],
    "aliases": [
      "greivous",
      "greivous"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-031": {
    "rawAssetId": "film-031",
    "name": "hailfire droid",
    "category": "films",
    "heightCm": 848,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "hailfire-droid",
      "hailfire droid"
    ],
    "aliases": [
      "hailfire-droid",
      "hailfire droid"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-032": {
    "rawAssetId": "film-032",
    "name": "han solo",
    "category": "films",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "han-solo",
      "han solo"
    ],
    "aliases": [
      "han-solo",
      "han solo"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-033": {
    "rawAssetId": "film-033",
    "name": "jabba the hutt",
    "category": "films",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "jabba-the-hutt",
      "jabba the hutt"
    ],
    "aliases": [
      "jabba-the-hutt",
      "jabba the hutt"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-034": {
    "rawAssetId": "film-034",
    "name": "jango fett",
    "category": "films",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "jango-fett",
      "jango fett"
    ],
    "aliases": [
      "jango-fett",
      "jango fett"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-035": {
    "rawAssetId": "film-035",
    "name": "jar jar binks",
    "category": "films",
    "heightCm": 196,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "jar-jar-binks",
      "jar jar binks"
    ],
    "aliases": [
      "jar-jar-binks",
      "jar jar binks"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-036": {
    "rawAssetId": "film-036",
    "name": "jawa",
    "category": "films",
    "heightCm": 99,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "jawa",
      "jawa"
    ],
    "aliases": [
      "jawa",
      "jawa"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-037": {
    "rawAssetId": "film-037",
    "name": "jyn erso",
    "category": "films",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "jyn-erso",
      "jyn erso"
    ],
    "aliases": [
      "jyn-erso",
      "jyn erso"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-038": {
    "rawAssetId": "film-038",
    "name": "k 2so",
    "category": "films",
    "heightCm": 218,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "k-2so",
      "k 2so"
    ],
    "aliases": [
      "k-2so",
      "k 2so"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-039": {
    "rawAssetId": "film-039",
    "name": "ki adi mundi",
    "category": "films",
    "heightCm": 191,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "ki-adi-mundi",
      "ki adi mundi"
    ],
    "aliases": [
      "ki-adi-mundi",
      "ki adi mundi"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-040": {
    "rawAssetId": "film-040",
    "name": "kit fisto",
    "category": "films",
    "heightCm": 196,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "kit-fisto",
      "kit fisto"
    ],
    "aliases": [
      "kit-fisto",
      "kit fisto"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-041": {
    "rawAssetId": "film-041",
    "name": "kylo ren",
    "category": "films",
    "heightCm": 188,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "kylo-ren",
      "kylo ren"
    ],
    "aliases": [
      "kylo-ren",
      "kylo ren"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-042": {
    "rawAssetId": "film-042",
    "name": "lando calrissian",
    "category": "films",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "lando-calrissian",
      "lando calrissian"
    ],
    "aliases": [
      "lando-calrissian",
      "lando calrissian"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-043": {
    "rawAssetId": "film-043",
    "name": "leia organa",
    "category": "films",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "leia-organa",
      "leia organa"
    ],
    "aliases": [
      "leia-organa",
      "leia organa"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-044": {
    "rawAssetId": "film-044",
    "name": "luke skywalker",
    "category": "films",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "luke-skywalker",
      "luke skywalker"
    ],
    "aliases": [
      "luke-skywalker",
      "luke skywalker"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-045": {
    "rawAssetId": "film-045",
    "name": "mace windu",
    "category": "films",
    "heightCm": 188,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "mace-windu",
      "mace windu"
    ],
    "aliases": [
      "mace-windu",
      "mace windu"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-046": {
    "rawAssetId": "film-046",
    "name": "maz kanata",
    "category": "films",
    "heightCm": 124,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "maz-kanata",
      "maz kanata"
    ],
    "aliases": [
      "maz-kanata",
      "maz kanata"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-047": {
    "rawAssetId": "film-047",
    "name": "mouse droid",
    "category": "films",
    "heightCm": 25,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "mouse-droid",
      "mouse droid"
    ],
    "aliases": [
      "mouse-droid",
      "mouse droid"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-048": {
    "rawAssetId": "film-048",
    "name": "nexu",
    "category": "films",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "nexu",
      "nexu"
    ],
    "aliases": [
      "nexu",
      "nexu"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-049": {
    "rawAssetId": "film-049",
    "name": "nien nunb",
    "category": "films",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "nien-nunb",
      "nien nunb"
    ],
    "aliases": [
      "nien-nunb",
      "nien nunb"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-050": {
    "rawAssetId": "film-050",
    "name": "obi wan kenobi",
    "category": "films",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "obi-wan-kenobi",
      "obi wan kenobi"
    ],
    "aliases": [
      "obi-wan-kenobi",
      "obi wan kenobi"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-051": {
    "rawAssetId": "film-051",
    "name": "orson krennic",
    "category": "films",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "orson-krennic",
      "orson krennic"
    ],
    "aliases": [
      "orson-krennic",
      "orson krennic"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-052": {
    "rawAssetId": "film-052",
    "name": "padme amidala",
    "category": "films",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "padme-amidala",
      "padme amidala"
    ],
    "aliases": [
      "padme-amidala",
      "padme amidala"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-053": {
    "rawAssetId": "film-053",
    "name": "pao",
    "category": "films",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "pao",
      "pao"
    ],
    "aliases": [
      "pao",
      "pao"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-054": {
    "rawAssetId": "film-054",
    "name": "poe dameron",
    "category": "films",
    "heightCm": 173,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "poe-dameron",
      "poe dameron"
    ],
    "aliases": [
      "poe-dameron",
      "poe dameron"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-055": {
    "rawAssetId": "film-055",
    "name": "qui gon jinn",
    "category": "films",
    "heightCm": 193,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "qui-gon-jinn",
      "qui gon jinn"
    ],
    "aliases": [
      "qui-gon-jinn",
      "qui gon jinn"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-056": {
    "rawAssetId": "film-056",
    "name": "r2 d2",
    "category": "films",
    "heightCm": 109,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "r2-d2",
      "r2 d2"
    ],
    "aliases": [
      "r2-d2",
      "r2 d2"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-057": {
    "rawAssetId": "film-057",
    "name": "rancor",
    "category": "films",
    "heightCm": 498,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "rancor",
      "rancor"
    ],
    "aliases": [
      "rancor",
      "rancor"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-058": {
    "rawAssetId": "film-058",
    "name": "reek",
    "category": "films",
    "heightCm": 305,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "reek",
      "reek"
    ],
    "aliases": [
      "reek",
      "reek"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-059": {
    "rawAssetId": "film-059",
    "name": "rey",
    "category": "films",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "rey",
      "rey"
    ],
    "aliases": [
      "rey",
      "rey"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-060": {
    "rawAssetId": "film-060",
    "name": "rose tico",
    "category": "films",
    "heightCm": 157,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "rose-tico",
      "rose tico"
    ],
    "aliases": [
      "rose-tico",
      "rose tico"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-061": {
    "rawAssetId": "film-061",
    "name": "stromtrooper",
    "category": "films",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "stromtrooper",
      "stromtrooper"
    ],
    "aliases": [
      "stromtrooper",
      "stromtrooper"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-062": {
    "rawAssetId": "film-062",
    "name": "tauntaun",
    "category": "films",
    "heightCm": 201,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "tauntaun",
      "tauntaun"
    ],
    "aliases": [
      "tauntaun",
      "tauntaun"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-063": {
    "rawAssetId": "film-063",
    "name": "wampa",
    "category": "films",
    "heightCm": 244,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "wampa",
      "wampa"
    ],
    "aliases": [
      "wampa",
      "wampa"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-064": {
    "rawAssetId": "film-064",
    "name": "watto",
    "category": "films",
    "heightCm": 137,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "watto",
      "watto"
    ],
    "aliases": [
      "watto",
      "watto"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-065": {
    "rawAssetId": "film-065",
    "name": "yoda",
    "category": "films",
    "heightCm": 66,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "yoda",
      "yoda"
    ],
    "aliases": [
      "yoda",
      "yoda"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-066": {
    "rawAssetId": "film-066",
    "name": "zillo",
    "category": "films",
    "heightCm": 3998,
    "measurementType": "height",
    "subgroup": "[F] star wars",
    "tags": [
      "films",
      "movie",
      "zillo",
      "zillo"
    ],
    "aliases": [
      "zillo",
      "zillo"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-067": {
    "rawAssetId": "film-067",
    "name": "aaron twd",
    "category": "films",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "aaron-twd",
      "aaron twd"
    ],
    "aliases": [
      "aaron-twd",
      "aaron twd"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-068": {
    "rawAssetId": "film-068",
    "name": "andrea twd",
    "category": "films",
    "heightCm": 165,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "andrea-twd",
      "andrea twd"
    ],
    "aliases": [
      "andrea-twd",
      "andrea twd"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-069": {
    "rawAssetId": "film-069",
    "name": "beth greene",
    "category": "films",
    "heightCm": 165,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "beth-greene",
      "beth greene"
    ],
    "aliases": [
      "beth-greene",
      "beth greene"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-070": {
    "rawAssetId": "film-070",
    "name": "carl grimes",
    "category": "films",
    "heightCm": 173,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "carl-grimes",
      "carl grimes"
    ],
    "aliases": [
      "carl-grimes",
      "carl grimes"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-071": {
    "rawAssetId": "film-071",
    "name": "carol peletier",
    "category": "films",
    "heightCm": 168,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "carol-peletier",
      "carol peletier"
    ],
    "aliases": [
      "carol-peletier",
      "carol peletier"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-072": {
    "rawAssetId": "film-072",
    "name": "daryl dixon",
    "category": "films",
    "heightCm": 177,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "daryl-dixon",
      "daryl dixon"
    ],
    "aliases": [
      "daryl-dixon",
      "daryl dixon"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-073": {
    "rawAssetId": "film-073",
    "name": "eugene porter",
    "category": "films",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "eugene-porter",
      "eugene porter"
    ],
    "aliases": [
      "eugene-porter",
      "eugene porter"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-074": {
    "rawAssetId": "film-074",
    "name": "glenn rhee",
    "category": "films",
    "heightCm": 173,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "glenn-rhee",
      "glenn rhee"
    ],
    "aliases": [
      "glenn-rhee",
      "glenn rhee"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-075": {
    "rawAssetId": "film-075",
    "name": "hershel greene",
    "category": "films",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "hershel-greene",
      "hershel greene"
    ],
    "aliases": [
      "hershel-greene",
      "hershel greene"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-076": {
    "rawAssetId": "film-076",
    "name": "maggie rhee",
    "category": "films",
    "heightCm": 173,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "maggie-rhee",
      "maggie rhee"
    ],
    "aliases": [
      "maggie-rhee",
      "maggie rhee"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-077": {
    "rawAssetId": "film-077",
    "name": "merle dixon",
    "category": "films",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "merle-dixon",
      "merle dixon"
    ],
    "aliases": [
      "merle-dixon",
      "merle dixon"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-078": {
    "rawAssetId": "film-078",
    "name": "michonne hawthorne",
    "category": "films",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "michonne-hawthorne",
      "michonne hawthorne"
    ],
    "aliases": [
      "michonne-hawthorne",
      "michonne hawthorne"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-079": {
    "rawAssetId": "film-079",
    "name": "morgan jones",
    "category": "films",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "morgan-jones",
      "morgan jones"
    ],
    "aliases": [
      "morgan-jones",
      "morgan jones"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-080": {
    "rawAssetId": "film-080",
    "name": "negan smith",
    "category": "films",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "negan-smith",
      "negan smith"
    ],
    "aliases": [
      "negan-smith",
      "negan smith"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-081": {
    "rawAssetId": "film-081",
    "name": "rick grimes",
    "category": "films",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "rick-grimes",
      "rick grimes"
    ],
    "aliases": [
      "rick-grimes",
      "rick grimes"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-082": {
    "rawAssetId": "film-082",
    "name": "rosita espinosa",
    "category": "films",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "rosita-espinosa",
      "rosita espinosa"
    ],
    "aliases": [
      "rosita-espinosa",
      "rosita espinosa"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-083": {
    "rawAssetId": "film-083",
    "name": "sasha williams",
    "category": "films",
    "heightCm": 164,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "sasha-williams",
      "sasha williams"
    ],
    "aliases": [
      "sasha-williams",
      "sasha williams"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-084": {
    "rawAssetId": "film-084",
    "name": "shane walsh",
    "category": "films",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "shane-walsh",
      "shane walsh"
    ],
    "aliases": [
      "shane-walsh",
      "shane walsh"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-085": {
    "rawAssetId": "film-085",
    "name": "the governor",
    "category": "films",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "the-governor",
      "the governor"
    ],
    "aliases": [
      "the-governor",
      "the governor"
    ],
    "status": "verified",
    "indexable": true
  },
  "film-086": {
    "rawAssetId": "film-086",
    "name": "tyreese williams",
    "category": "films",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[F] walking dead",
    "tags": [
      "films",
      "movie",
      "tyreese-williams",
      "tyreese williams"
    ],
    "aliases": [
      "tyreese-williams",
      "tyreese williams"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-002": {
    "rawAssetId": "celebrity-002",
    "name": "Aaron Kwok",
    "category": "celebrities",
    "heightCm": 165,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "aaron-kwok",
      "aaron kwok"
    ],
    "aliases": [
      "aaron-kwok",
      "aaron kwok"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-003": {
    "rawAssetId": "celebrity-003",
    "name": "Ariana Grande",
    "category": "celebrities",
    "heightCm": 153,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "ariana-grande",
      "ariana grande"
    ],
    "aliases": [
      "ariana-grande",
      "ariana grande"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-004": {
    "rawAssetId": "celebrity-004",
    "name": "Ashby Gentry",
    "category": "celebrities",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "ashby-gentry",
      "ashby gentry"
    ],
    "aliases": [
      "ashby-gentry",
      "ashby gentry"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-005": {
    "rawAssetId": "celebrity-005",
    "name": "Benedict Cumberbatch",
    "category": "celebrities",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "benedict-cumberbatch",
      "benedict cumberbatch"
    ],
    "aliases": [
      "benedict-cumberbatch",
      "benedict cumberbatch"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-006": {
    "rawAssetId": "celebrity-006",
    "name": "Blake Lively",
    "category": "celebrities",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "blake-lively",
      "blake lively"
    ],
    "aliases": [
      "blake-lively",
      "blake lively"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-007": {
    "rawAssetId": "celebrity-007",
    "name": "Brad Pitt",
    "category": "celebrities",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "brad-pitt",
      "brad pitt"
    ],
    "aliases": [
      "brad-pitt",
      "brad pitt"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-008": {
    "rawAssetId": "celebrity-008",
    "name": "Bruno Mars",
    "category": "celebrities",
    "heightCm": 165,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "bruno-mars",
      "bruno mars"
    ],
    "aliases": [
      "bruno-mars",
      "bruno mars"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-009": {
    "rawAssetId": "celebrity-009",
    "name": "Charlize Theron",
    "category": "celebrities",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "charlize-theron",
      "charlize theron"
    ],
    "aliases": [
      "charlize-theron",
      "charlize theron"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-010": {
    "rawAssetId": "celebrity-010",
    "name": "Connor Stanhope",
    "category": "celebrities",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "connor-stanhope",
      "connor stanhope"
    ],
    "aliases": [
      "connor-stanhope",
      "connor stanhope"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-011": {
    "rawAssetId": "celebrity-011",
    "name": "Corey Fogelmanis",
    "category": "celebrities",
    "heightCm": 177,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "corey-fogelmanis",
      "corey fogelmanis"
    ],
    "aliases": [
      "corey-fogelmanis",
      "corey fogelmanis"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-012": {
    "rawAssetId": "celebrity-012",
    "name": "Dwayne Johnson",
    "category": "celebrities",
    "heightCm": 196,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "dwayne-johnson",
      "dwayne johnson"
    ],
    "aliases": [
      "dwayne-johnson",
      "dwayne johnson"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-013": {
    "rawAssetId": "celebrity-013",
    "name": "Famke Janssen",
    "category": "celebrities",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "famke-janssen",
      "famke janssen"
    ],
    "aliases": [
      "famke-janssen",
      "famke janssen"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-014": {
    "rawAssetId": "celebrity-014",
    "name": "Gal Gadot",
    "category": "celebrities",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "gal-gadot",
      "gal gadot"
    ],
    "aliases": [
      "gal-gadot",
      "gal gadot"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-015": {
    "rawAssetId": "celebrity-015",
    "name": "Guo Jingming",
    "category": "celebrities",
    "heightCm": 147,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "guo-jingming",
      "guo jingming"
    ],
    "aliases": [
      "guo-jingming",
      "guo jingming"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-016": {
    "rawAssetId": "celebrity-016",
    "name": "He Jiong",
    "category": "celebrities",
    "heightCm": 165,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "he-jiong",
      "he jiong"
    ],
    "aliases": [
      "he-jiong",
      "he jiong"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-017": {
    "rawAssetId": "celebrity-017",
    "name": "Huang Xiaoming",
    "category": "celebrities",
    "heightCm": 172,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "huang-xiaoming",
      "huang xiaoming"
    ],
    "aliases": [
      "huang-xiaoming",
      "huang xiaoming"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-018": {
    "rawAssetId": "celebrity-018",
    "name": "Jennifer Lawrence",
    "category": "celebrities",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "jennifer-lawrence",
      "jennifer lawrence"
    ],
    "aliases": [
      "jennifer-lawrence",
      "jennifer lawrence"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-019": {
    "rawAssetId": "celebrity-019",
    "name": "Johnny Depp",
    "category": "celebrities",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "johnny-depp",
      "johnny depp"
    ],
    "aliases": [
      "johnny-depp",
      "johnny depp"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-020": {
    "rawAssetId": "celebrity-020",
    "name": "Johnny Link",
    "category": "celebrities",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "johnny-link",
      "johnny link"
    ],
    "aliases": [
      "johnny-link",
      "johnny link"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-021": {
    "rawAssetId": "celebrity-021",
    "name": "Joseph Gordon-Levitt",
    "category": "celebrities",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "joseph-gordon-levitt",
      "joseph gordon-levitt"
    ],
    "aliases": [
      "joseph-gordon-levitt",
      "joseph gordon-levitt"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-022": {
    "rawAssetId": "celebrity-022",
    "name": "Kate Upton",
    "category": "celebrities",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "kate-upton",
      "kate upton"
    ],
    "aliases": [
      "kate-upton",
      "kate upton"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-023": {
    "rawAssetId": "celebrity-023",
    "name": "kevin-hart",
    "category": "celebrities",
    "heightCm": 165,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "kevin-hart",
      "kevin-hart"
    ],
    "aliases": [
      "kevin-hart",
      "kevin-hart"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-024": {
    "rawAssetId": "celebrity-024",
    "name": "Khloé Kardashian",
    "category": "celebrities",
    "heightCm": 179,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "khlo-kardashian",
      "khloé kardashian"
    ],
    "aliases": [
      "khlo-kardashian",
      "khloé kardashian"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-025": {
    "rawAssetId": "celebrity-025",
    "name": "Lady Gaga",
    "category": "celebrities",
    "heightCm": 155,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "lady-gaga",
      "lady gaga"
    ],
    "aliases": [
      "lady-gaga",
      "lady gaga"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-026": {
    "rawAssetId": "celebrity-026",
    "name": "Laura Dern",
    "category": "celebrities",
    "heightCm": 179,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "laura-dern",
      "laura dern"
    ],
    "aliases": [
      "laura-dern",
      "laura dern"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-027": {
    "rawAssetId": "celebrity-027",
    "name": "Leonardo DiCaprio",
    "category": "celebrities",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "leonardo-dicaprio",
      "leonardo dicaprio"
    ],
    "aliases": [
      "leonardo-dicaprio",
      "leonardo dicaprio"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-028": {
    "rawAssetId": "celebrity-028",
    "name": "Mandy Moore",
    "category": "celebrities",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "mandy-moore",
      "mandy moore"
    ],
    "aliases": [
      "mandy-moore",
      "mandy moore"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-029": {
    "rawAssetId": "celebrity-029",
    "name": "Marc Blucas",
    "category": "celebrities",
    "heightCm": 188,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "marc-blucas",
      "marc blucas"
    ],
    "aliases": [
      "marc-blucas",
      "marc blucas"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-030": {
    "rawAssetId": "celebrity-030",
    "name": "Neil Fingleton",
    "category": "celebrities",
    "heightCm": 231,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "neil-fingleton",
      "neil fingleton"
    ],
    "aliases": [
      "neil-fingleton",
      "neil fingleton"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-031": {
    "rawAssetId": "celebrity-031",
    "name": "Nicole Kidman",
    "category": "celebrities",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "nicole-kidman",
      "nicole kidman"
    ],
    "aliases": [
      "nicole-kidman",
      "nicole kidman"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-032": {
    "rawAssetId": "celebrity-032",
    "name": "nikki rodriguez",
    "category": "celebrities",
    "heightCm": 163,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "nikki-rodriguez",
      "nikki rodriguez"
    ],
    "aliases": [
      "nikki-rodriguez",
      "nikki rodriguez"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-033": {
    "rawAssetId": "celebrity-033",
    "name": "Noah Lalonde",
    "category": "celebrities",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "noah-lalonde",
      "noah lalonde"
    ],
    "aliases": [
      "noah-lalonde",
      "noah lalonde"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-034": {
    "rawAssetId": "celebrity-034",
    "name": "Rocky Emerson",
    "category": "celebrities",
    "heightCm": 190,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "rocky-emerson",
      "rocky emerson"
    ],
    "aliases": [
      "rocky-emerson",
      "rocky emerson"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-035": {
    "rawAssetId": "celebrity-035",
    "name": "Sarah Rafferty",
    "category": "celebrities",
    "heightCm": 176,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "sarah-rafferty",
      "sarah rafferty"
    ],
    "aliases": [
      "sarah-rafferty",
      "sarah rafferty"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-036": {
    "rawAssetId": "celebrity-036",
    "name": "Scarlett Johansson",
    "category": "celebrities",
    "heightCm": 160,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "scarlett-johansson",
      "scarlett johansson"
    ],
    "aliases": [
      "scarlett-johansson",
      "scarlett johansson"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-037": {
    "rawAssetId": "celebrity-037",
    "name": "Show Lo",
    "category": "celebrities",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "show-lo",
      "show lo"
    ],
    "aliases": [
      "show-lo",
      "show lo"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-038": {
    "rawAssetId": "celebrity-038",
    "name": "Sophie Turner",
    "category": "celebrities",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "sophie-turner",
      "sophie turner"
    ],
    "aliases": [
      "sophie-turner",
      "sophie turner"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-039": {
    "rawAssetId": "celebrity-039",
    "name": "Taylor Swift",
    "category": "celebrities",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "taylor-swift",
      "taylor swift"
    ],
    "aliases": [
      "taylor-swift",
      "taylor swift"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-040": {
    "rawAssetId": "celebrity-040",
    "name": "tom-cruise",
    "category": "celebrities",
    "heightCm": 173,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "tom-cruise",
      "tom-cruise"
    ],
    "aliases": [
      "tom-cruise",
      "tom-cruise"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-041": {
    "rawAssetId": "celebrity-041",
    "name": "Zendaya",
    "category": "celebrities",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[C] entertainment celebs",
    "tags": [
      "celebrities",
      "celebrity",
      "zendaya",
      "zendaya"
    ],
    "aliases": [
      "zendaya",
      "zendaya"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-042": {
    "rawAssetId": "celebrity-042",
    "name": "Cristiano Ronaldo",
    "category": "celebrities",
    "heightCm": 187,
    "measurementType": "height",
    "subgroup": "[C] sports stars",
    "tags": [
      "celebrities",
      "celebrity",
      "cristiano-ronaldo",
      "cristiano ronaldo"
    ],
    "aliases": [
      "cristiano-ronaldo",
      "cristiano ronaldo"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-043": {
    "rawAssetId": "celebrity-043",
    "name": "David-Beckham",
    "category": "celebrities",
    "heightCm": 183,
    "measurementType": "height",
    "subgroup": "[C] sports stars",
    "tags": [
      "celebrities",
      "celebrity",
      "david-beckham",
      "david-beckham"
    ],
    "aliases": [
      "david-beckham",
      "david-beckham"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-044": {
    "rawAssetId": "celebrity-044",
    "name": "Kobe Bryant",
    "category": "celebrities",
    "heightCm": 198,
    "measurementType": "height",
    "subgroup": "[C] sports stars",
    "tags": [
      "celebrities",
      "celebrity",
      "kobe-bryant",
      "kobe bryant"
    ],
    "aliases": [
      "kobe-bryant",
      "kobe bryant"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-045": {
    "rawAssetId": "celebrity-045",
    "name": "LeBron James",
    "category": "celebrities",
    "heightCm": 204,
    "measurementType": "height",
    "subgroup": "[C] sports stars",
    "tags": [
      "celebrities",
      "celebrity",
      "lebron-james",
      "lebron james"
    ],
    "aliases": [
      "lebron-james",
      "lebron james"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-046": {
    "rawAssetId": "celebrity-046",
    "name": "Lionel Messi",
    "category": "celebrities",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[C] sports stars",
    "tags": [
      "celebrities",
      "celebrity",
      "lionel-messi",
      "lionel messi"
    ],
    "aliases": [
      "lionel-messi",
      "lionel messi"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-047": {
    "rawAssetId": "celebrity-047",
    "name": "Simone Biles",
    "category": "celebrities",
    "heightCm": 142,
    "measurementType": "height",
    "subgroup": "[C] sports stars",
    "tags": [
      "celebrities",
      "celebrity",
      "simone-biles",
      "simone biles"
    ],
    "aliases": [
      "simone-biles",
      "simone biles"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-048": {
    "rawAssetId": "celebrity-048",
    "name": "Yao Ming",
    "category": "celebrities",
    "heightCm": 229,
    "measurementType": "height",
    "subgroup": "[C] sports stars",
    "tags": [
      "celebrities",
      "celebrity",
      "yao-ming",
      "yao ming"
    ],
    "aliases": [
      "yao-ming",
      "yao ming"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-049": {
    "rawAssetId": "celebrity-049",
    "name": "Abraham Lincoln",
    "category": "celebrities",
    "heightCm": 193,
    "measurementType": "height",
    "subgroup": "[C] politician",
    "tags": [
      "celebrities",
      "celebrity",
      "abraham-lincoln",
      "abraham lincoln"
    ],
    "aliases": [
      "abraham-lincoln",
      "abraham lincoln"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-050": {
    "rawAssetId": "celebrity-050",
    "name": "Adolf Hitler",
    "category": "celebrities",
    "heightCm": 165,
    "measurementType": "height",
    "subgroup": "[C] politician",
    "tags": [
      "celebrities",
      "celebrity",
      "adolf-hitler",
      "adolf hitler"
    ],
    "aliases": [
      "adolf-hitler",
      "adolf hitler"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-051": {
    "rawAssetId": "celebrity-051",
    "name": "Barack Obama",
    "category": "celebrities",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[C] politician",
    "tags": [
      "celebrities",
      "celebrity",
      "barack-obama",
      "barack obama"
    ],
    "aliases": [
      "barack-obama",
      "barack obama"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-052": {
    "rawAssetId": "celebrity-052",
    "name": "Deng Xiaoping",
    "category": "celebrities",
    "heightCm": 157,
    "measurementType": "height",
    "subgroup": "[C] politician",
    "tags": [
      "celebrities",
      "celebrity",
      "deng-xiaoping",
      "deng xiaoping"
    ],
    "aliases": [
      "deng-xiaoping",
      "deng xiaoping"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-053": {
    "rawAssetId": "celebrity-053",
    "name": "Donald Trump",
    "category": "celebrities",
    "heightCm": 190,
    "measurementType": "height",
    "subgroup": "[C] politician",
    "tags": [
      "celebrities",
      "celebrity",
      "donald-trump",
      "donald trump"
    ],
    "aliases": [
      "donald-trump",
      "donald trump"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-054": {
    "rawAssetId": "celebrity-054",
    "name": "George Washington",
    "category": "celebrities",
    "heightCm": 188,
    "measurementType": "height",
    "subgroup": "[C] politician",
    "tags": [
      "celebrities",
      "celebrity",
      "george-washington",
      "george washington"
    ],
    "aliases": [
      "george-washington",
      "george washington"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-055": {
    "rawAssetId": "celebrity-055",
    "name": "Jack Ma",
    "category": "celebrities",
    "heightCm": 166,
    "measurementType": "height",
    "subgroup": "[C] politician",
    "tags": [
      "celebrities",
      "celebrity",
      "jack-ma",
      "jack ma"
    ],
    "aliases": [
      "jack-ma",
      "jack ma"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-056": {
    "rawAssetId": "celebrity-056",
    "name": "Joseph Stalin",
    "category": "celebrities",
    "heightCm": 162,
    "measurementType": "height",
    "subgroup": "[C] politician",
    "tags": [
      "celebrities",
      "celebrity",
      "joseph-stalin",
      "joseph stalin"
    ],
    "aliases": [
      "joseph-stalin",
      "joseph stalin"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-057": {
    "rawAssetId": "celebrity-057",
    "name": "Masayoshi Son",
    "category": "celebrities",
    "heightCm": 150,
    "measurementType": "height",
    "subgroup": "[C] politician",
    "tags": [
      "celebrities",
      "celebrity",
      "masayoshi-son",
      "masayoshi son"
    ],
    "aliases": [
      "masayoshi-son",
      "masayoshi son"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-058": {
    "rawAssetId": "celebrity-058",
    "name": "Napoleon Bonaparte",
    "category": "celebrities",
    "heightCm": 165,
    "measurementType": "height",
    "subgroup": "[C] politician",
    "tags": [
      "celebrities",
      "celebrity",
      "napoleon-bonaparte",
      "napoleon bonaparte"
    ],
    "aliases": [
      "napoleon-bonaparte",
      "napoleon bonaparte"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-059": {
    "rawAssetId": "celebrity-059",
    "name": "Vladimir Lenin",
    "category": "celebrities",
    "heightCm": 164,
    "measurementType": "height",
    "subgroup": "[C] politician",
    "tags": [
      "celebrities",
      "celebrity",
      "vladimir-lenin",
      "vladimir lenin"
    ],
    "aliases": [
      "vladimir-lenin",
      "vladimir lenin"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-060": {
    "rawAssetId": "celebrity-060",
    "name": "Vladimir Putin",
    "category": "celebrities",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[C] politician",
    "tags": [
      "celebrities",
      "celebrity",
      "vladimir-putin",
      "vladimir putin"
    ],
    "aliases": [
      "vladimir-putin",
      "vladimir putin"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-061": {
    "rawAssetId": "celebrity-061",
    "name": "John Rogan",
    "category": "celebrities",
    "heightCm": 267,
    "measurementType": "height",
    "subgroup": "[C] height record holders",
    "tags": [
      "celebrities",
      "celebrity",
      "john-rogan",
      "john rogan"
    ],
    "aliases": [
      "john-rogan",
      "john rogan"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-062": {
    "rawAssetId": "celebrity-062",
    "name": "Robert Wadlow",
    "category": "celebrities",
    "heightCm": 272,
    "measurementType": "height",
    "subgroup": "[C] height record holders",
    "tags": [
      "celebrities",
      "celebrity",
      "robert-wadlow",
      "robert wadlow"
    ],
    "aliases": [
      "robert-wadlow",
      "robert wadlow"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-063": {
    "rawAssetId": "celebrity-063",
    "name": "Sultan Kösen",
    "category": "celebrities",
    "heightCm": 251,
    "measurementType": "height",
    "subgroup": "[C] height record holders",
    "tags": [
      "celebrities",
      "celebrity",
      "sultan-k-sen",
      "sultan kösen"
    ],
    "aliases": [
      "sultan-k-sen",
      "sultan kösen"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-064": {
    "rawAssetId": "celebrity-064",
    "name": "Zeng Jinlian",
    "category": "celebrities",
    "heightCm": 248,
    "measurementType": "height",
    "subgroup": "[C] height record holders",
    "tags": [
      "celebrities",
      "celebrity",
      "zeng-jinlian",
      "zeng jinlian"
    ],
    "aliases": [
      "zeng-jinlian",
      "zeng jinlian"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-065": {
    "rawAssetId": "celebrity-065",
    "name": "Zhang Juncai",
    "category": "celebrities",
    "heightCm": 242,
    "measurementType": "height",
    "subgroup": "[C] height record holders",
    "tags": [
      "celebrities",
      "celebrity",
      "zhang-juncai",
      "zhang juncai"
    ],
    "aliases": [
      "zhang-juncai",
      "zhang juncai"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-066": {
    "rawAssetId": "celebrity-066",
    "name": "Apollo",
    "category": "celebrities",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "apollo",
      "apollo"
    ],
    "aliases": [
      "apollo",
      "apollo"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-067": {
    "rawAssetId": "celebrity-067",
    "name": "Ares",
    "category": "celebrities",
    "heightCm": 190,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "ares",
      "ares"
    ],
    "aliases": [
      "ares",
      "ares"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-068": {
    "rawAssetId": "celebrity-068",
    "name": "Athena",
    "category": "celebrities",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "athena",
      "athena"
    ],
    "aliases": [
      "athena",
      "athena"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-069": {
    "rawAssetId": "celebrity-069",
    "name": "Erlang Shen",
    "category": "celebrities",
    "heightCm": 185,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "erlang-shen",
      "erlang shen"
    ],
    "aliases": [
      "erlang-shen",
      "erlang shen"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-070": {
    "rawAssetId": "celebrity-070",
    "name": "Guanyin Bodhisattva",
    "category": "celebrities",
    "heightCm": 200,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "guanyin-bodhisattva",
      "guanyin bodhisattva"
    ],
    "aliases": [
      "guanyin-bodhisattva",
      "guanyin bodhisattva"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-071": {
    "rawAssetId": "celebrity-071",
    "name": "Jade Emperor",
    "category": "celebrities",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "jade-emperor",
      "jade emperor"
    ],
    "aliases": [
      "jade-emperor",
      "jade emperor"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-072": {
    "rawAssetId": "celebrity-072",
    "name": "Jesus Christ",
    "category": "celebrities",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "jesus-christ",
      "jesus christ"
    ],
    "aliases": [
      "jesus-christ",
      "jesus christ"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-073": {
    "rawAssetId": "celebrity-073",
    "name": "Li Jing Pagoda-Bearing Heavenly King",
    "category": "celebrities",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "li-jing-pagoda-bearing-heavenly-king",
      "li jing pagoda-bearing heavenly king"
    ],
    "aliases": [
      "li-jing-pagoda-bearing-heavenly-king",
      "li jing pagoda-bearing heavenly king"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-074": {
    "rawAssetId": "celebrity-074",
    "name": "Loki",
    "category": "celebrities",
    "heightCm": 188,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "loki",
      "loki"
    ],
    "aliases": [
      "loki",
      "loki"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-075": {
    "rawAssetId": "celebrity-075",
    "name": "Moses",
    "category": "celebrities",
    "heightCm": 178,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "moses",
      "moses"
    ],
    "aliases": [
      "moses",
      "moses"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-076": {
    "rawAssetId": "celebrity-076",
    "name": "Muhammad",
    "category": "celebrities",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "muhammad",
      "muhammad"
    ],
    "aliases": [
      "muhammad",
      "muhammad"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-077": {
    "rawAssetId": "celebrity-077",
    "name": "Nezha",
    "category": "celebrities",
    "heightCm": 140,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "nezha",
      "nezha"
    ],
    "aliases": [
      "nezha",
      "nezha"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-078": {
    "rawAssetId": "celebrity-078",
    "name": "Odin",
    "category": "celebrities",
    "heightCm": 195,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "odin",
      "odin"
    ],
    "aliases": [
      "odin",
      "odin"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-079": {
    "rawAssetId": "celebrity-079",
    "name": "Poseidon",
    "category": "celebrities",
    "heightCm": 200,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "poseidon",
      "poseidon"
    ],
    "aliases": [
      "poseidon",
      "poseidon"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-080": {
    "rawAssetId": "celebrity-080",
    "name": "Sha Wujing",
    "category": "celebrities",
    "heightCm": 400,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "sha-wujing",
      "sha wujing"
    ],
    "aliases": [
      "sha-wujing",
      "sha wujing"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-081": {
    "rawAssetId": "celebrity-081",
    "name": "Shakyamuni",
    "category": "celebrities",
    "heightCm": 180,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "shakyamuni",
      "shakyamuni"
    ],
    "aliases": [
      "shakyamuni",
      "shakyamuni"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-082": {
    "rawAssetId": "celebrity-082",
    "name": "Sun Wukong",
    "category": "celebrities",
    "heightCm": 130,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "sun-wukong",
      "sun wukong"
    ],
    "aliases": [
      "sun-wukong",
      "sun wukong"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-083": {
    "rawAssetId": "celebrity-083",
    "name": "Tai Shang Lao Jun Grand Supreme Elderly Lord",
    "category": "celebrities",
    "heightCm": 170,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "tai-shang-lao-jun-grand-supreme-elderly-lord",
      "tai shang lao jun grand supreme elderly lord"
    ],
    "aliases": [
      "tai-shang-lao-jun-grand-supreme-elderly-lord",
      "tai shang lao jun grand supreme elderly lord"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-084": {
    "rawAssetId": "celebrity-084",
    "name": "Tang Sanzang",
    "category": "celebrities",
    "heightCm": 175,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "tang-sanzang",
      "tang sanzang"
    ],
    "aliases": [
      "tang-sanzang",
      "tang sanzang"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-085": {
    "rawAssetId": "celebrity-085",
    "name": "Tathāgata Buddha",
    "category": "celebrities",
    "heightCm": 512,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "tath-gata-buddha",
      "tathāgata buddha"
    ],
    "aliases": [
      "tath-gata-buddha",
      "tathāgata buddha"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-086": {
    "rawAssetId": "celebrity-086",
    "name": "Zeus",
    "category": "celebrities",
    "heightCm": 300,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "zeus",
      "zeus"
    ],
    "aliases": [
      "zeus",
      "zeus"
    ],
    "status": "verified",
    "indexable": true
  },
  "celebrity-087": {
    "rawAssetId": "celebrity-087",
    "name": "Zhu Bajie",
    "category": "celebrities",
    "heightCm": 350,
    "measurementType": "height",
    "subgroup": "[C] religious mythological",
    "tags": [
      "celebrities",
      "celebrity",
      "zhu-bajie",
      "zhu bajie"
    ],
    "aliases": [
      "zhu-bajie",
      "zhu bajie"
    ],
    "status": "verified",
    "indexable": true
  }
};
