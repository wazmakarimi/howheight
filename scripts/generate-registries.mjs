import fs from 'fs';
import path from 'path';

const catalog = JSON.parse(fs.readFileSync('scripts/full-catalog.json', 'utf8'));

const catMap = {
  male: 'male',
  female: 'female',
  apparel: 'apparel',
  animal: 'animals',
  object: 'objects',
  fantasy: 'fictional',
  plant: 'plants',
  sport: 'sports'
};

const categoryPrefixMap = {
  male: 'male',
  female: 'female',
  apparel: 'apparel',
  animals: 'animal',
  objects: 'object',
  fictional: 'fictional',
  plants: 'plant',
  sports: 'sports'
};

const categoryLabels = {
  male: 'Male',
  female: 'Female',
  apparel: 'Apparel',
  animals: 'Animal',
  objects: 'Object',
  fictional: 'Fictional',
  plants: 'Plant',
  sports: 'Sports Item'
};

const catalogByVb = new Map();
for (const [sourceGroup, items] of Object.entries(catalog)) {
  const localCat = catMap[sourceGroup] || sourceGroup;
  // We only index matching category to avoid cross-category pollution
  for (const item of items) {
    if (!item.viewBox) continue;
    const parts = item.viewBox.trim().split(/\s+/).map(Number);
    if (parts.length !== 4) continue;
    const key = `${localCat}_${parts.map(p => p.toFixed(1)).join('_')}`;
    catalogByVb.set(key, { ...item, localCat });
  }
}

const base = 'src/assets/entities';
const localCats = ['male', 'female', 'apparel', 'animals', 'objects', 'fictional', 'plants', 'sports'];

const rawInventory = [];
const entityMap = {};

for (const cat of localCats) {
  const dir = path.join(base, cat);
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

  files.sort((a, b) => {
    const isNumA = a.includes('_svg_') || /^\d+\.svg$/.test(a);
    const isNumB = b.includes('_svg_') || /^\d+\.svg$/.test(b);
    if (!isNumA && isNumB) return -1;
    if (isNumA && !isNumB) return 1;
    const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10);
    const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10);
    return numA - numB;
  });

  for (const filename of files) {
    const prefix = categoryPrefixMap[cat] || cat;
    let id = '';
    const numMatch = filename.match(/\d+/);
    const numberIndex = numMatch ? parseInt(numMatch[0], 10) : 0;

    if (filename.startsWith(`${prefix}-`)) {
      id = filename.replace(/\.svg$/, '');
    } else if (filename.includes('_svg_') || /^\d+\.svg$/.test(filename)) {
      const padded = String(numberIndex).padStart(3, '0');
      id = `${prefix}-${padded}`;
    } else {
      const clean = filename.replace(/\.svg$/, '').replace(/[^a-z0-9_-]/gi, '-').toLowerCase();
      id = `${prefix}-${clean}`;
    }

    const srcFile = path.join(dir, filename);
    const content = fs.readFileSync(srcFile, 'utf8');
    const fileSize = fs.statSync(srcFile).size;

    const hasSvgOpen = /<svg[^>]*>/i.test(content);
    const hasSvgClose = /<\/svg>/i.test(content);
    const isValidSvg = hasSvgOpen && hasSvgClose;

    const vbMatch = content.match(/viewBox=["']([^"']+)["']/i);
    let viewBox = vbMatch ? vbMatch[1].trim() : '0 0 100 100';
    const vbParts = viewBox.split(/\s+/).map(Number);
    let aspectRatio = 0.5;
    if (vbParts.length === 4 && vbParts[2] > 0 && vbParts[3] > 0) {
      aspectRatio = parseFloat((vbParts[2] / vbParts[3]).toFixed(3));
    }

    const isUiIcon = (viewBox === '0 0 96 80' || viewBox === '0 0 100 80' || viewBox === '0 0 24 24' || viewBox === '0 0 2313 720') &&
                     (content.includes('stroke="#cbd5e1"') || content.includes('width="2313"'));

    rawInventory.push({
      id,
      category: cat,
      filename,
      sourceFile: `src/assets/entities/${cat}/${filename}`,
      publicPath: `/assets/entities/${cat}/${filename}`,
      extension: 'svg',
      viewBox,
      aspectRatio,
      fileSize,
      isUiIcon,
      isValidSvg
    });

    let catalogMatch = null;
    if (!isUiIcon && isValidSvg && vbParts.length === 4) {
      const key = `${cat}_${vbParts.map(p => p.toFixed(1)).join('_')}`;
      catalogMatch = catalogByVb.get(key);

      if (!catalogMatch) {
        for (const [cKey, item] of catalogByVb.entries()) {
          if (!cKey.startsWith(cat + '_')) continue;
          const cParts = item.viewBox.trim().split(/\s+/).map(Number);
          const diffX = Math.abs(vbParts[0] - cParts[0]);
          const diffY = Math.abs(vbParts[1] - cParts[1]);
          const diffW = Math.abs(vbParts[2] - cParts[2]);
          const diffH = Math.abs(vbParts[3] - cParts[3]);
          if (diffX < 1.5 && diffY < 1.5 && diffW < 1.5 && diffH < 1.5) {
            catalogMatch = item;
            break;
          }
        }
      }
    }

    const padded = String(numberIndex || 1).padStart(3, '0');
    const fallbackName = `${categoryLabels[cat]} ${padded}`;

    if (isUiIcon || !isValidSvg) {
      entityMap[id] = {
        rawAssetId: id,
        name: fallbackName,
        category: cat,
        heightCm: null,
        measurementType: null,
        subgroup: null,
        tags: [cat],
        aliases: [],
        status: 'invalid',
        indexable: false
      };
    } else if (catalogMatch && catalogMatch.defaultName && catalogMatch.defaultHeightCm) {
      entityMap[id] = {
        rawAssetId: id,
        name: catalogMatch.defaultName,
        category: cat,
        heightCm: catalogMatch.defaultHeightCm,
        measurementType: catalogMatch.measurementType || 'height',
        subgroup: catalogMatch.subgroup || null,
        tags: [cat, ...(catalogMatch.subgroup ? [catalogMatch.subgroup.toLowerCase()] : [])],
        aliases: catalogMatch.aliases || [],
        status: 'verified',
        indexable: true
      };
    } else {
      entityMap[id] = {
        rawAssetId: id,
        name: fallbackName,
        category: cat,
        heightCm: null,
        measurementType: null,
        subgroup: null,
        tags: [cat],
        aliases: [],
        status: 'needs-review',
        indexable: false
      };
    }
  }
}

// Write src/data/rawAssetInventory.ts
const rawCode = `// RAW ASSET INVENTORY - PHASE 11
// Pure filesystem information. No guessed identities.
export interface RawAsset {
  id: string;
  category: 'male' | 'female' | 'apparel' | 'animals' | 'objects' | 'fictional' | 'plants' | 'sports';
  filename: string;
  sourceFile: string;
  publicPath: string;
  extension: string;
  viewBox: string;
  aspectRatio: number;
  fileSize: number;
  isUiIcon: boolean;
  isValidSvg: boolean;
}

export const RAW_ASSET_INVENTORY: RawAsset[] = ${JSON.stringify(rawInventory, null, 2)};
`;
fs.writeFileSync('src/data/rawAssetInventory.ts', rawCode);
console.log('Wrote src/data/rawAssetInventory.ts with', rawInventory.length, 'records');

// Write src/data/entityAssetMap.ts
const entityCode = `// ENTITY ASSET MAP - PHASE 11
// Explicit verified metadata connected by stable raw asset ID.
export type EntityReviewStatus = 'verified' | 'needs-review' | 'missing-height' | 'invalid';

export interface EntityMapping {
  rawAssetId: string;
  name: string;
  category: 'male' | 'female' | 'apparel' | 'animals' | 'objects' | 'fictional' | 'plants' | 'sports';
  heightCm: number | null;
  measurementType?: string | null;
  subgroup?: string | null;
  tags: string[];
  aliases: string[];
  status: EntityReviewStatus;
  indexable: boolean;
}

export const ENTITY_ASSET_MAP: Record<string, EntityMapping> = ${JSON.stringify(entityMap, null, 2)};
`;
fs.writeFileSync('src/data/entityAssetMap.ts', entityCode);
console.log('Wrote src/data/entityAssetMap.ts with', Object.keys(entityMap).length, 'mappings');