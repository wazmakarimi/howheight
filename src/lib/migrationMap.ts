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
  "seo-cel-virat-kohli": "male-010",
  "rohit-sharma": "male-010",
  "seo-cel-rohit-sharma": "male-010",
  "ms-dhoni": "male-010",
  "seo-cel-ms-dhoni": "male-010",
  "sachin-tendulkar": "male-010",
  "seo-cel-sachin-tendulkar": "male-010",
  "jasprit-bumrah": "male-010",
  "neeraj-chopra": "male-010",
  "shah-rukh-khan": "male-010",
  "salman-khan": "male-010",
  "aamir-khan": "male-010",
  "amitabh-bachchan": "male-010",
  "akshay-kumar": "male-010",
  "hrithik-roshan": "male-010",
  "ranbir-kapoor": "male-010",
  "ranveer-singh": "male-010",
  "deepika-padukone": "female-01",
  "alia-bhatt": "female-01",
  "priyanka-chopra": "female-01",
  "chris-hemsworth": "male-010",
  "robert-downey-jr": "male-010",

  // Celebrities -> Verified High-Resolution PNG Assets
  "dwayne-johnson": "celebrity-012",
  "seo-cel-dwayne-johnson": "celebrity-012",
  "the-rock": "celebrity-012",
  "brad-pitt": "celebrity-007",
  "seo-cel-brad-pitt": "celebrity-007",
  "tom-cruise": "celebrity-040",
  "seo-cel-tom-cruise": "celebrity-040",
  "leonardo-dicaprio": "celebrity-027",
  "seo-cel-leonardo-dicaprio": "celebrity-027",
  "scarlett-johansson": "celebrity-036",
  "seo-cel-scarlett-johansson": "celebrity-036",
  "zendaya": "celebrity-041",
  "seo-cel-zendaya": "celebrity-041",
  "taylor-swift": "celebrity-039",
  "cristiano-ronaldo": "celebrity-042",
  "david-beckham": "celebrity-043",
  "kobe-bryant": "celebrity-044",
  "lebron-james": "celebrity-045",
  "lionel-messi": "celebrity-046",
  "simone-biles": "celebrity-047",
  "yao-ming": "celebrity-048",
  "ariana-grande": "celebrity-003",
  "benedict-cumberbatch": "celebrity-005",
  "blake-lively": "celebrity-006",
  "bruno-mars": "celebrity-008",
  "charlize-theron": "celebrity-009",
  "gal-gadot": "celebrity-014",
  "jennifer-lawrence": "celebrity-018",
  "johnny-depp": "celebrity-019",
  "kevin-hart": "celebrity-023",
  "lady-gaga": "celebrity-025",
  "nicole-kidman": "celebrity-031",

  // Legacy Animals -> Verified Animal Assets
  // CRITICAL: Horse MUST NOT map to feline/cat visuals
  "horse": "animal-048",           // Domestic Horse (160 cm, animal_svg_48.svg)
  "demo-horse": "animal-048",
  "seo-animal-horse": "animal-048",
  "animal-horse-01": "animal-048",
  "arabian-horse": "animal-044",    // Arabian Horse (152 cm, animal_svg_44.svg)
  
  "dog": "animal-018",             // Dog (55 cm, animal_svg_18.svg)
  "demo-dog": "animal-018",
  "seo-animal-dog": "animal-018",
  "animal-dog-01": "animal-018",
  
  "cat": "animal-028",             // Domestic Cat (25 cm, animal_svg_28.svg)
  "seo-animal-cat": "animal-028",
  "animal-cat-01": "animal-028",
  
  "lion": "animal-035",            // Lion (140 cm, animal_svg_35.svg)
  "seo-animal-lion": "animal-035",
  "animal-lion-01": "animal-035",
  
  "elephant": "animal-118",        // Mammoth / Elephant (335 cm, animal_svg_118.svg)
  "seo-animal-elephant": "animal-118",
  "animal-elephant-01": "animal-118",
  
  "giraffe": "animal-giraffe-01",
  "seo-animal-giraffe": "animal-giraffe-01",
  "animal-giraffe-01": "animal-giraffe-01",
  
  "blue-whale": "animal-blue-whale-01",
  "seo-animal-blue-whale": "animal-blue-whale-01",
  "animal-blue-whale-01": "animal-blue-whale-01",
  
  "tiger": "animal-035",
  "seo-animal-tiger": "animal-035",
  "animal-tiger-01": "animal-035",
  
  "bear": "animal-bear-01",
  "seo-animal-bear": "animal-bear-01",
  "animal-bear-01": "animal-bear-01",
  
  "wolf": "animal-wolf-01",
  "seo-animal-wolf": "animal-wolf-01",
  "animal-wolf-01": "animal-wolf-01",

  "cow": "animal-048",
  "seo-animal-cow": "animal-048",

  // Legacy Objects -> Verified Objects
  "door": "object-016",            // Doorframe (245 cm, object_svg_16.svg)
  "demo-door": "object-016",
  "seo-obj-door": "object-016",
  "object-door-01": "object-016",
  
  "car": "object-114",             // Car (145 cm, object_svg_114.svg)
  "seo-obj-car": "object-114",
  "object-car-01": "object-114",
  
  "chair": "object-004",
  "seo-obj-chair": "object-004",
  "object-chair-01": "object-004",
  
  "table": "object-004",
  "seo-obj-table": "object-004",
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
    if (categoryHint === "animals" || categoryHint === "animal") return "animal-018";
    if (categoryHint === "objects" || categoryHint === "object") return "object-016";
    if (categoryHint === "celebrities" || categoryHint === "celebrity") return "male-010";
    if (categoryHint === "apparel") return "apparel-001";
    if (categoryHint === "fictional") return "fictional-103";
    if (categoryHint === "plants" || categoryHint === "plant") return "plant-001";
    if (categoryHint === "sports" || categoryHint === "sport") return "sports-001";
    if (categoryHint === "anime") return "anime-001";
    if (categoryHint === "films" || categoryHint === "film") return "film-001";
    return "male-010";
  }

  // If already mapped in legacy/redirect dictionary, return redirected ID
  if (LEGACY_ID_MAP[oldIdOrAssetId]) {
    return LEGACY_ID_MAP[oldIdOrAssetId];
  }

  // Strip SEO prefixes if present and recheck
  const stripped = oldIdOrAssetId.replace(/^seo-(cel|animal|obj|human)-/, '');
  if (LEGACY_ID_MAP[stripped]) {
    return LEGACY_ID_MAP[stripped];
  }

  // If already a valid formatted ID
  if (oldIdOrAssetId.match(/^(male|female|apparel|animal|object|fictional|plant|sports|celebrity|anime|film)-/)) {
    return oldIdOrAssetId;
  }

  if (stripped.match(/^(male|female|apparel|animal|object|fictional|plant|sports|celebrity|anime|film)-/)) {
    return stripped;
  }

  // Category fallback
  if (categoryHint === "female") return "female-01";
  if (categoryHint === "animals" || categoryHint === "animal") return "animal-018";
  if (categoryHint === "objects" || categoryHint === "object") return "object-016";
  if (categoryHint === "celebrities" || categoryHint === "celebrity") return "male-010";

  return "male-010";
}
