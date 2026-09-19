import fs from 'fs';
import { RAW_ASSET_INVENTORY } from '../src/data/rawAssetInventory.ts';
import { ENTITY_ASSET_MAP } from '../src/data/entityAssetMap.ts';

const manifest = [];

for (const raw of RAW_ASSET_INVENTORY) {
  const meta = ENTITY_ASSET_MAP[raw.id] || {
    rawAssetId: raw.id,
    name: `${raw.category} ${raw.id}`,
    category: raw.category,
    heightCm: null,
    measurementType: null,
    subgroup: null,
    tags: [raw.category],
    aliases: [],
    status: 'needs-review',
    indexable: false,
  };

  const vbParts = raw.viewBox ? raw.viewBox.split(/\s+/).map(Number) : [0, 0, 100, 100];
  const measurementAnchor = vbParts.length === 4 ? {
    groundY: vbParts[1] + vbParts[3],
    measurementY: vbParts[1]
  } : null;

  const isSearchable = !raw.isUiIcon && raw.isValidSvg;

  manifest.push({
    id: raw.id,
    category: raw.category,
    filename: raw.filename,
    sourceFile: raw.sourceFile,
    publicPath: raw.publicPath,
    name: meta.name,
    slug: raw.id,
    heightCm: meta.heightCm,
    referenceHeightCm: meta.heightCm,
    measurementType: meta.measurementType || 'height',
    measurementAnchor,
    viewBox: raw.viewBox,
    aspectRatio: raw.aspectRatio,
    fileSize: raw.fileSize,
    status: meta.status,
    subgroup: meta.subgroup || null,
    tags: meta.tags || [raw.category],
    aliases: meta.aliases || [],
    searchable: isSearchable,
    indexable: meta.indexable && meta.status === 'verified',
  });
}

const manifestCode = `// AUTOMATICALLY GENERATED ASSET MANIFEST - PHASE 11
// Single Source of Truth: rawAssetInventory.ts + entityAssetMap.ts
// Total assets: ${manifest.length}

export interface DiscoveredAsset {
  id: string;
  category: 'male' | 'female' | 'apparel' | 'animals' | 'objects' | 'fictional' | 'plants' | 'sports';
  filename: string;
  sourceFile: string;
  publicPath: string;
  name: string;
  slug: string;
  heightCm: number | null;
  referenceHeightCm: number | null;
  measurementType: string | null;
  measurementAnchor: { groundY: number; measurementY: number } | null;
  viewBox: string;
  aspectRatio: number;
  fileSize: number;
  status: 'verified' | 'needs-review' | 'missing-height' | 'invalid';
  subgroup?: string | null;
  tags: string[];
  aliases: string[];
  searchable: boolean;
  indexable: boolean;
}

export const ASSET_MANIFEST: DiscoveredAsset[] = ${JSON.stringify(manifest, null, 2)};
`;

fs.writeFileSync('src/data/assetManifest.ts', manifestCode);
console.log('Successfully wrote src/data/assetManifest.ts with', manifest.length, 'assets');