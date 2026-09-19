// MIGRATION MAP: OLD ENTITY IDs -> NEW VERIFIED ASSET IDs - PHASE 11
export const LEGACY_ID_MAP: Record<string, string> = {
  // Legacy Humans -> Verified Male Figure (175 cm) & Female Figure (163 cm)
  "male": "male-010",
  "male-01": "male-010",
  "female": "female-01",
  "female-01": "female-01",
  "neutral": "male-010",
  "demo-john": "male-010",
  "demo-sarah": "female-01",
  "demo-female": "female-01",
  "celebrity": "male-010",
  "demo-virat": "male-010",
  "virat-kohli": "male-010",

  // Legacy Animals -> Verified Animal Assets
  // CRITICAL: Horse MUST NOT map to feline/cat visuals
  "horse": "animal-048",           // Domestic Horse (160 cm, animal_svg_48.svg)
  "demo-horse": "animal-048",
  "animal-horse-01": "animal-048",
  "arabian-horse": "animal-044",    // Arabian Horse (152 cm, animal_svg_44.svg)
  
  "dog": "animal-018",             // Dog (55 cm, animal_svg_18.svg)
  "demo-dog": "animal-018",
  "animal-dog-01": "animal-018",
  
  "cat": "animal-028",             // Domestic Cat (25 cm, animal_svg_28.svg)
  "animal-cat-01": "animal-028",
  
  "lion": "animal-035",            // Lion (140 cm, animal_svg_35.svg)
  "animal-lion-01": "animal-035",
  
  "elephant": "animal-118",        // Mammoth / Elephant (335 cm, animal_svg_118.svg)
  "animal-elephant-01": "animal-118",
  
  "giraffe": "animal-048",
  "animal-giraffe-01": "animal-048",
  "blue-whale": "fictional-103",
  "animal-blue-whale-01": "fictional-103",
  "tiger": "animal-035",
  "animal-tiger-01": "animal-035",
  "bear": "animal-048",
  "animal-bear-01": "animal-048",
  "wolf": "animal-018",
  "animal-wolf-01": "animal-018",

  // Legacy Objects -> Verified Objects
  "door": "object-016",            // Doorframe (245 cm, object_svg_16.svg)
  "demo-door": "object-016",
  "object-door-01": "object-016",
  "car": "object-114",             // Car (145 cm, object_svg_114.svg)
  "object-car-01": "object-114",
  "chair": "object-004",
  "object-chair-01": "object-004",
  "table": "object-004",
  "object-table-01": "object-004",
  "phone": "object-016",
  "object-phone-01": "object-016",
  "bottle": "object-016",
  "object-bottle-01": "object-016",
  "building": "object-016",
  "object-building-01": "object-016",
  "tree": "plant-001",
  "plant-tree-01": "plant-001",

  // Legacy Sports & Fictional
  "basketball-hoop": "object-004", // Basketball Hoop (410 cm, object_svg_4.svg)
  "sports-basketball-hoop-01": "object-004",
  "dinosaur": "fictional-103",
  "fictional-dinosaur-01": "fictional-103",
  "dragon": "fictional-103",
  "fictional-dragon-01": "fictional-103",
  "giant": "fictional-103",
  "fictional-giant-01": "fictional-103"
};

export function resolveMigratedAssetId(oldIdOrAssetId: string | undefined, categoryHint?: string): string {
  if (!oldIdOrAssetId) {
    if (categoryHint === "female") return "female-01";
    if (categoryHint === "animals") return "animal-018";
    if (categoryHint === "objects") return "object-016";
    if (categoryHint === "apparel") return "apparel-001";
    if (categoryHint === "fictional") return "fictional-103";
    if (categoryHint === "plants") return "plant-001";
    if (categoryHint === "sports") return "sports-001";
    return "male-010";
  }

  // If already mapped in legacy/redirect dictionary, return redirected ID
  if (LEGACY_ID_MAP[oldIdOrAssetId]) {
    return LEGACY_ID_MAP[oldIdOrAssetId];
  }

  // If already a valid new formatted ID
  if (oldIdOrAssetId.match(/^(male|female|apparel|animal|object|fictional|plant|sports)-/)) {
    return oldIdOrAssetId;
  }

  return LEGACY_ID_MAP[oldIdOrAssetId] || "male-010";
}

