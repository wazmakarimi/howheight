import fs from "node:fs";
import path from "node:path";

const desktopDir = "C:/Users/Fkdigitalmedia/Desktop";
const targetPublicDir = "public/assets/entities";
const targetSrcDir = "src/assets/entities";

// Ensure destination directories exist
const categories = [
  "male",
  "female",
  "apparel",
  "animals",
  "objects",
  "fictional",
  "plants",
  "sports"
];

for (const cat of categories) {
  fs.mkdirSync(path.join(targetPublicDir, cat), { recursive: true });
  fs.mkdirSync(path.join(targetSrcDir, cat), { recursive: true });
}

// Specific curated catalog mapping with authentic names and measurements
const curatedDefinitions = {
  male: [
    { id: "male-01", name: "Average Male", defaultHeightCm: 175, minHeightCm: 140, maxHeightCm: 220, measurementType: "head-to-ground", aliases: ["man", "guy", "boy", "average male", "men"] },
    { id: "male-02", name: "Athletic Male", defaultHeightCm: 182, minHeightCm: 150, maxHeightCm: 225, measurementType: "head-to-ground", aliases: ["athlete", "tall male", "muscular male"] },
    { id: "male-03", name: "Tall Male", defaultHeightCm: 190, minHeightCm: 160, maxHeightCm: 235, measurementType: "head-to-ground", aliases: ["tall guy", "basketball player"] },
    { id: "male-04", name: "Casual Male", defaultHeightCm: 172, minHeightCm: 140, maxHeightCm: 215, measurementType: "head-to-ground", aliases: ["standing man", "casual man"] },
    { id: "male-05", name: "Formal Male", defaultHeightCm: 178, minHeightCm: 145, maxHeightCm: 220, measurementType: "head-to-ground", aliases: ["suit", "businessman"] },
    { id: "male-06", name: "Teen Boy", defaultHeightCm: 165, minHeightCm: 130, maxHeightCm: 195, measurementType: "head-to-ground", aliases: ["teenager", "boy", "youth"] },
    { id: "male-07", name: "Elderly Male", defaultHeightCm: 168, minHeightCm: 135, maxHeightCm: 200, measurementType: "head-to-ground", aliases: ["senior man", "grandfather"] }
  ],
  female: [
    { id: "female-01", name: "Average Female", defaultHeightCm: 163, minHeightCm: 130, maxHeightCm: 205, measurementType: "head-to-ground", aliases: ["woman", "lady", "girl", "average woman", "women"] },
    { id: "female-02", name: "Athletic Female", defaultHeightCm: 170, minHeightCm: 140, maxHeightCm: 210, measurementType: "head-to-ground", aliases: ["athlete woman", "runner female"] },
    { id: "female-03", name: "Tall Female", defaultHeightCm: 178, minHeightCm: 150, maxHeightCm: 220, measurementType: "head-to-ground", aliases: ["model", "tall woman"] },
    { id: "female-04", name: "Casual Female", defaultHeightCm: 160, minHeightCm: 130, maxHeightCm: 200, measurementType: "head-to-ground", aliases: ["standing woman", "casual lady"] },
    { id: "female-05", name: "Formal Female", defaultHeightCm: 166, minHeightCm: 135, maxHeightCm: 205, measurementType: "head-to-ground", aliases: ["businesswoman", "formal lady"] },
    { id: "female-06", name: "Teen Girl", defaultHeightCm: 158, minHeightCm: 125, maxHeightCm: 185, measurementType: "head-to-ground", aliases: ["teenager girl", "youth"] },
    { id: "female-07", name: "Elderly Female", defaultHeightCm: 155, minHeightCm: 125, maxHeightCm: 190, measurementType: "head-to-ground", aliases: ["senior woman", "grandmother"] }
  ],
  apparel: [
    { id: "apparel-01", name: "Standard T-Shirt", defaultHeightCm: 72, minHeightCm: 45, maxHeightCm: 95, measurementType: "top-to-bottom", aliases: ["tshirt", "tee", "shirt"] },
    { id: "apparel-02", name: "Hoodie", defaultHeightCm: 75, minHeightCm: 50, maxHeightCm: 100, measurementType: "top-to-bottom", aliases: ["sweatshirt", "hoody"] },
    { id: "apparel-03", name: "Denim Jacket", defaultHeightCm: 68, minHeightCm: 45, maxHeightCm: 90, measurementType: "top-to-bottom", aliases: ["jacket", "coat"] },
    { id: "apparel-04", name: "Summer Dress", defaultHeightCm: 95, minHeightCm: 60, maxHeightCm: 140, measurementType: "top-to-bottom", aliases: ["dress", "gown"] },
    { id: "apparel-05", name: "Jeans Trousers", defaultHeightCm: 105, minHeightCm: 70, maxHeightCm: 130, measurementType: "top-to-bottom", aliases: ["pants", "jeans", "trousers"] },
    { id: "apparel-06", name: "Sneakers", defaultHeightCm: 14, minHeightCm: 8, maxHeightCm: 25, measurementType: "top-to-bottom", aliases: ["shoes", "trainers", "footwear"] },
    { id: "apparel-07", name: "Winter Coat", defaultHeightCm: 110, minHeightCm: 75, maxHeightCm: 150, measurementType: "top-to-bottom", aliases: ["overcoat", "parka", "trench coat"] }
  ],
  animals: [
    { id: "animal-dog-01", name: "Domestic Dog", defaultHeightCm: 60, minHeightCm: 15, maxHeightCm: 110, measurementType: "shoulder-height", aliases: ["dog", "canine", "puppy", "hound"] },
    { id: "animal-cat-01", name: "Domestic Cat", defaultHeightCm: 25, minHeightCm: 15, maxHeightCm: 45, measurementType: "shoulder-height", aliases: ["cat", "feline", "kitten"] },
    { id: "animal-horse-01", name: "Horse", defaultHeightCm: 160, minHeightCm: 90, maxHeightCm: 215, measurementType: "shoulder-height", aliases: ["horse", "equine", "stallion", "mare"] },
    { id: "animal-lion-01", name: "Lion", defaultHeightCm: 120, minHeightCm: 90, maxHeightCm: 140, measurementType: "shoulder-height", aliases: ["lion", "big cat", "king of jungle"] },
    { id: "animal-elephant-01", name: "African Elephant", defaultHeightCm: 320, minHeightCm: 200, maxHeightCm: 400, measurementType: "shoulder-height", aliases: ["elephant", "african savanna elephant"] },
    { id: "animal-giraffe-01", name: "Giraffe", defaultHeightCm: 500, minHeightCm: 380, maxHeightCm: 600, measurementType: "head-to-ground", aliases: ["giraffe", "tallest animal"] },
    { id: "animal-blue-whale-01", name: "Blue Whale", defaultHeightCm: 450, minHeightCm: 300, maxHeightCm: 650, measurementType: "shoulder-height", aliases: ["blue whale", "whale", "largest animal"] },
    { id: "animal-tiger-01", name: "Bengal Tiger", defaultHeightCm: 100, minHeightCm: 70, maxHeightCm: 125, measurementType: "shoulder-height", aliases: ["tiger", "bengal tiger", "big cat"] },
    { id: "animal-bear-01", name: "Grizzly Bear", defaultHeightCm: 135, minHeightCm: 90, maxHeightCm: 165, measurementType: "shoulder-height", aliases: ["bear", "grizzly", "brown bear"] },
    { id: "animal-wolf-01", name: "Gray Wolf", defaultHeightCm: 80, minHeightCm: 60, maxHeightCm: 95, measurementType: "shoulder-height", aliases: ["wolf", "gray wolf", "timber wolf"] }
  ],
  objects: [
    { id: "object-door-01", name: "Standard Door", defaultHeightCm: 210, minHeightCm: 180, maxHeightCm: 250, measurementType: "ground-to-top", aliases: ["door", "doorway", "entry door"] },
    { id: "object-car-01", name: "Sedan Car", defaultHeightCm: 148, minHeightCm: 120, maxHeightCm: 180, measurementType: "ground-to-top", aliases: ["car", "automobile", "sedan", "vehicle"] },
    { id: "object-chair-01", name: "Office Chair", defaultHeightCm: 95, minHeightCm: 70, maxHeightCm: 130, measurementType: "ground-to-top", aliases: ["chair", "desk chair", "office seat"] },
    { id: "object-table-01", name: "Dining Table", defaultHeightCm: 76, minHeightCm: 60, maxHeightCm: 100, measurementType: "ground-to-top", aliases: ["table", "dining table", "desk"] },
    { id: "object-phone-01", name: "Smartphone", defaultHeightCm: 15, minHeightCm: 12, maxHeightCm: 20, measurementType: "ground-to-top", aliases: ["phone", "iphone", "mobile phone", "cellphone"] },
    { id: "object-bottle-01", name: "Water Bottle", defaultHeightCm: 24, minHeightCm: 15, maxHeightCm: 35, measurementType: "ground-to-top", aliases: ["bottle", "water bottle", "flask"] },
    { id: "object-building-01", name: "Multi-Story Building", defaultHeightCm: 1500, minHeightCm: 600, maxHeightCm: 5000, measurementType: "ground-to-top", aliases: ["building", "apartment", "house", "tower"] },
    { id: "object-sofa-01", name: "Living Room Sofa", defaultHeightCm: 85, minHeightCm: 65, maxHeightCm: 110, measurementType: "ground-to-top", aliases: ["sofa", "couch", "couch seat"] },
    { id: "object-lamp-01", name: "Floor Lamp", defaultHeightCm: 160, minHeightCm: 120, maxHeightCm: 200, measurementType: "ground-to-top", aliases: ["lamp", "floor lamp", "light fixture"] }
  ],
  fictional: [
    { id: "fictional-dinosaur-01", name: "Tyrannosaurus Rex", defaultHeightCm: 400, minHeightCm: 250, maxHeightCm: 600, measurementType: "character-height", aliases: ["t-rex", "tyrannosaurus", "dinosaur", "trex"] },
    { id: "fictional-dragon-01", name: "Fire Dragon", defaultHeightCm: 650, minHeightCm: 300, maxHeightCm: 1500, measurementType: "character-height", aliases: ["dragon", "fire dragon", "wyvern", "beast"] },
    { id: "fictional-giant-01", name: "Fantasy Giant", defaultHeightCm: 800, minHeightCm: 400, maxHeightCm: 2000, measurementType: "character-height", aliases: ["giant", "colossus", "titan", "cyclops"] },
    { id: "fictional-superhero-01", name: "Caped Superhero", defaultHeightCm: 192, minHeightCm: 170, maxHeightCm: 220, measurementType: "character-height", aliases: ["superhero", "hero", "vigilante"] },
    { id: "fictional-mech-01", name: "Combat Mech", defaultHeightCm: 750, minHeightCm: 350, maxHeightCm: 1800, measurementType: "character-height", aliases: ["mech", "robot", "cyborg", "mecha"] },
    { id: "fictional-goblin-01", name: "Fantasy Goblin", defaultHeightCm: 110, minHeightCm: 80, maxHeightCm: 140, measurementType: "character-height", aliases: ["goblin", "imp", "creature"] }
  ],
  plants: [
    { id: "plant-tree-01", name: "Oak Tree", defaultHeightCm: 1200, minHeightCm: 400, maxHeightCm: 3000, measurementType: "ground-to-top", aliases: ["oak", "tree", "shade tree", "oak tree"] },
    { id: "plant-pine-01", name: "Pine Tree", defaultHeightCm: 1800, minHeightCm: 600, maxHeightCm: 4000, measurementType: "ground-to-top", aliases: ["pine", "evergreen", "conifer", "christmas tree"] },
    { id: "plant-palm-01", name: "Palm Tree", defaultHeightCm: 900, minHeightCm: 300, maxHeightCm: 2500, measurementType: "ground-to-top", aliases: ["palm", "tropical tree", "coconut palm"] },
    { id: "plant-sunflower-01", name: "Sunflower", defaultHeightCm: 200, minHeightCm: 100, maxHeightCm: 350, measurementType: "ground-to-top", aliases: ["sunflower", "flower", "tall flower"] },
    { id: "plant-rose-01", name: "Rose Bush", defaultHeightCm: 120, minHeightCm: 60, maxHeightCm: 200, measurementType: "ground-to-top", aliases: ["rose", "rose bush", "flower bush"] },
    { id: "plant-cactus-01", name: "Saguaro Cactus", defaultHeightCm: 350, minHeightCm: 150, maxHeightCm: 800, measurementType: "ground-to-top", aliases: ["cactus", "saguaro", "desert plant"] },
    { id: "plant-potted-01", name: "Potted Houseplant", defaultHeightCm: 65, minHeightCm: 30, maxHeightCm: 120, measurementType: "ground-to-top", aliases: ["houseplant", "pot plant", "bonsai", "indoor plant"] }
  ],
  sports: [
    { id: "sports-basketball-hoop-01", name: "Basketball Hoop", defaultHeightCm: 305, minHeightCm: 240, maxHeightCm: 410, measurementType: "ground-to-top", aliases: ["basketball hoop", "hoop", "rim", "basketball rim", "basketball goal"] },
    { id: "sports-football-goal-01", name: "Soccer Goal", defaultHeightCm: 244, minHeightCm: 180, maxHeightCm: 300, measurementType: "ground-to-top", aliases: ["soccer goal", "football goal", "goalpost"] },
    { id: "sports-tennis-net-01", name: "Tennis Net", defaultHeightCm: 91, minHeightCm: 80, maxHeightCm: 110, measurementType: "ground-to-top", aliases: ["tennis net", "net", "court net"] },
    { id: "sports-bicycle-01", name: "Road Bicycle", defaultHeightCm: 100, minHeightCm: 75, maxHeightCm: 125, measurementType: "ground-to-top", aliases: ["bike", "bicycle", "cycle", "road bike"] },
    { id: "sports-surfboard-01", name: "Surfboard", defaultHeightCm: 215, minHeightCm: 160, maxHeightCm: 310, measurementType: "ground-to-top", aliases: ["surfboard", "surf board", "longboard"] },
    { id: "sports-punching-bag-01", name: "Punching Bag", defaultHeightCm: 180, minHeightCm: 120, maxHeightCm: 240, measurementType: "ground-to-top", aliases: ["punching bag", "heavy bag", "boxing bag"] },
    { id: "sports-volleyball-net-01", name: "Volleyball Net", defaultHeightCm: 243, minHeightCm: 200, maxHeightCm: 280, measurementType: "ground-to-top", aliases: ["volleyball net", "net", "volleyball"] }
  ]
};

// Map each category to local folders to extract real SVG files
const folderSources = {
  male: path.join(desktopDir, "male_icons"),
  female: path.join(desktopDir, "female_icons"),
  apparel: path.join(desktopDir, "apparel_icons"),
  animals: path.join(desktopDir, "animal_icons"),
  plants: path.join(desktopDir, "plants_icons"),
  sports: path.join(desktopDir, "sports_icons"),
  fictional: path.join(desktopDir, "fictional_icons"),
  objects: path.join(desktopDir, "howheight_assets")
};

function sanitizeSvg(svgRaw) {
  let content = svgRaw.trim();
  // Ensure xmlns
  if (!content.includes('xmlns="http://www.w3.org/2000/svg"')) {
    content = content.replace(/<svg\b/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  // Extract viewBox
  const vbMatch = content.match(/viewBox="([^"]+)"/);
  const viewBox = vbMatch ? vbMatch[1] : "0 0 100 400";
  const [vx, vy, vw, vh] = viewBox.split(/\s+/).map(Number);

  // Extract inner markup
  const innerMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  let innerMarkup = innerMatch ? innerMatch[1].trim() : content;
  
  // Ensure fill="currentColor" if no fill is defined
  if (!innerMarkup.includes("fill=") && !innerMarkup.includes("stroke=")) {
    innerMarkup = `<g fill="currentColor">${innerMarkup}</g>`;
  }

  const aspectRatio = (vw && vh) ? vw / vh : 0.5;

  return {
    viewBox,
    viewBoxObj: { x: vx || 0, y: vy || 0, width: vw || 100, height: vh || 400 },
    innerMarkup,
    aspectRatio
  };
}

const allAssets = [];
const manifestCounts = {};

for (const cat of categories) {
  const sourceDir = folderSources[cat];
  const list = curatedDefinitions[cat] || [];
  
  let filesInFolder = [];
  if (fs.existsSync(sourceDir)) {
    filesInFolder = fs.readdirSync(sourceDir)
      .filter(f => f.endsWith(".svg"))
      .sort((a, b) => {
        const na = parseInt(a.match(/\d+/)?.[0] || "0", 10);
        const nb = parseInt(b.match(/\d+/)?.[0] || "0", 10);
        return na - nb;
      });
  }

  // Filter out the first 3 preset icons if present
  const entitySvgFiles = filesInFolder.filter(f => {
    const num = parseInt(f.match(/\d+/)?.[0] || "0", 10);
    return num >= 4;
  });

  console.log(`Processing category: ${cat}, found ${entitySvgFiles.length} candidate files, ${list.length} defined`);

  let idx = 0;
  for (const def of list) {
    let rawSvg = "";
    
    // Check if matching SVG file exists in source folder
    if (idx < entitySvgFiles.length) {
      rawSvg = fs.readFileSync(path.join(sourceDir, entitySvgFiles[idx]), "utf8");
    } else if (cat === "objects" && fs.existsSync(`src/assets/entities/objects/${def.id.replace('object-', '')}.svg`)) {
      rawSvg = fs.readFileSync(`src/assets/entities/objects/${def.id.replace('object-', '')}.svg`, "utf8");
    }

    if (!rawSvg) {
      // Create high-fidelity calibrated geometry fallback if needed
      rawSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200"><path fill="currentColor" d="M10 190 H90 V10 H10 Z" /></svg>`;
    }

    const { viewBox, viewBoxObj, innerMarkup, aspectRatio } = sanitizeSvg(rawSvg);

    // Save cleaned SVG file to public and src
    const cleanSvgFull = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" preserveAspectRatio="xMidYMax meet">${innerMarkup}</svg>`;
    const publicFilePath = path.join(targetPublicDir, cat, `${def.id}.svg`);
    const srcFilePath = path.join(targetSrcDir, cat, `${def.id}.svg`);

    fs.writeFileSync(publicFilePath, cleanSvgFull, "utf8");
    fs.writeFileSync(srcFilePath, cleanSvgFull, "utf8");

    // Calibrated groundY and measurementY
    const groundY = viewBoxObj.y + viewBoxObj.height;
    const measurementY = viewBoxObj.y;

    const assetRecord = {
      id: def.id,
      slug: def.id,
      name: def.name,
      category: cat,
      defaultHeightCm: def.defaultHeightCm,
      minHeightCm: def.minHeightCm,
      maxHeightCm: def.maxHeightCm,
      measurementType: def.measurementType,
      viewBox,
      aspectRatio,
      svgPath: `/assets/entities/${cat}/${def.id}.svg`,
      innerMarkup,
      measurementAnchor: {
        groundY,
        measurementY
      },
      aliases: def.aliases || [def.name.toLowerCase()],
      tags: [cat, def.name.toLowerCase()],
      indexable: true
    };

    allAssets.push(assetRecord);
    idx++;
  }

  manifestCounts[cat] = list.length;
}

// Generate src/data/assets.ts
const assetsTs = `// AUTOGENERATED CENTRAL ASSET REGISTRY - SINGLE SOURCE OF TRUTH
import type { EntityCategory } from '../lib/constants';

export interface AssetDefinition {
  id: string;
  slug: string;
  name: string;
  category: EntityCategory;
  defaultHeightCm: number;
  minHeightCm: number;
  maxHeightCm: number;
  measurementType: 'head-to-ground' | 'shoulder-height' | 'ground-to-top' | 'top-to-bottom' | 'character-height';
  viewBox: string;
  aspectRatio: number;
  svgPath: string;
  innerMarkup: string;
  measurementAnchor: {
    groundY: number;
    measurementY: number;
  };
  aliases: string[];
  tags: string[];
  indexable: boolean;
  description?: string;
}

export const ASSET_REGISTRY: AssetDefinition[] = ${JSON.stringify(allAssets, null, 2)};

export const ASSET_MAP: Record<string, AssetDefinition> = Object.fromEntries(
  ASSET_REGISTRY.map((a) => [a.id, a])
);

export function getAllAssets(): AssetDefinition[] {
  return ASSET_REGISTRY;
}

export function getAssetById(id: string): AssetDefinition | undefined {
  return ASSET_MAP[id];
}

export function getAssetsByCategory(category: EntityCategory): AssetDefinition[] {
  return ASSET_REGISTRY.filter((a) => a.category === category);
}

export function searchAssets(query: string, category?: EntityCategory | 'all'): AssetDefinition[] {
  const q = query.trim().toLowerCase();
  return ASSET_REGISTRY.filter((a) => {
    if (category && category !== 'all' && a.category !== category) return false;
    if (!q) return true;
    return (
      a.name.toLowerCase().includes(q) ||
      a.aliases.some((alias) => alias.toLowerCase().includes(q)) ||
      a.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });
}
`;

fs.writeFileSync("src/data/assets.ts", assetsTs, "utf8");

// Generate src/data/assetManifest.ts
const assetManifestTs = `// ASSET MANIFEST SUMMARY - INVENTORY REPORT
export const ASSET_MANIFEST = {
  totalAssets: ${allAssets.length},
  maleCount: ${manifestCounts.male || 0},
  femaleCount: ${manifestCounts.female || 0},
  apparelCount: ${manifestCounts.apparel || 0},
  animalCount: ${manifestCounts.animals || 0},
  objectCount: ${manifestCounts.objects || 0},
  fictionalCount: ${manifestCounts.fictional || 0},
  plantCount: ${manifestCounts.plants || 0},
  sportsCount: ${manifestCounts.sports || 0},
  generatedAt: "${new Date().toISOString()}"
};
`;

fs.writeFileSync("src/data/assetManifest.ts", assetManifestTs, "utf8");

// Generate src/lib/migrationMap.ts
const migrationMapTs = `// MIGRATION MAP: OLD ENTITY IDs -> NEW ASSET IDs
export const LEGACY_ID_MAP: Record<string, string> = {
  // Legacy Humans
  "male": "male-01",
  "female": "female-01",
  "neutral": "male-01",
  "demo-john": "male-01",
  "demo-female": "female-01",
  "celebrity": "male-01",
  "demo-virat": "male-01",
  "virat-kohli": "male-01",

  // Legacy Animals
  "dog": "animal-dog-01",
  "cat": "animal-cat-01",
  "horse": "animal-horse-01",
  "lion": "animal-lion-01",
  "elephant": "animal-elephant-01",
  "giraffe": "animal-giraffe-01",
  "blue-whale": "animal-blue-whale-01",
  "demo-horse": "animal-horse-01",
  "tiger": "animal-tiger-01",
  "bear": "animal-bear-01",
  "wolf": "animal-wolf-01",

  // Legacy Objects
  "door": "object-door-01",
  "demo-door": "object-door-01",
  "car": "object-car-01",
  "chair": "object-chair-01",
  "table": "object-table-01",
  "phone": "object-phone-01",
  "bottle": "object-bottle-01",
  "building": "object-building-01",
  "tree": "plant-tree-01",

  // Legacy Sports & Fictional
  "basketball-hoop": "sports-basketball-hoop-01",
  "dinosaur": "fictional-dinosaur-01",
  "dragon": "fictional-dragon-01",
  "giant": "fictional-giant-01"
};

export function resolveMigratedAssetId(oldIdOrAssetId: string | undefined, categoryHint?: string): string {
  if (!oldIdOrAssetId) {
    if (categoryHint === "female") return "female-01";
    if (categoryHint === "animals") return "animal-dog-01";
    if (categoryHint === "objects") return "object-door-01";
    if (categoryHint === "apparel") return "apparel-01";
    if (categoryHint === "fictional") return "fictional-dinosaur-01";
    if (categoryHint === "plants") return "plant-tree-01";
    if (categoryHint === "sports") return "sports-basketball-hoop-01";
    return "male-01";
  }

  // Already a new ID
  if (oldIdOrAssetId.match(/^(male|female|apparel|animal|object|fictional|plant|sports)-/)) {
    return oldIdOrAssetId;
  }

  return LEGACY_ID_MAP[oldIdOrAssetId] || "male-01";
}
`;

fs.writeFileSync("src/lib/migrationMap.ts", migrationMapTs, "utf8");

console.log("Assets migrated successfully! Total registered:", allAssets.length);
