import fs from 'fs';
import path from 'path';

const srcBase = 'src/assets/entities';
const pubBase = 'public/assets/entities';
const categories = ['male', 'female', 'apparel', 'animals', 'objects', 'fictional', 'plants', 'sports'];

// Ensure public entity folders exist
for (const cat of categories) {
  const pubCatDir = path.join(pubBase, cat);
  if (!fs.existsSync(pubCatDir)) {
    fs.mkdirSync(pubCatDir, { recursive: true });
  }
}

console.log('Scanning all assets in', srcBase);

// Category prefix map
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
  fictional: 'Fictional Character',
  plants: 'Plant',
  sports: 'Sports Item'
};

const allAssets = [];
const audit = {
  total: 0,
  byCategory: {},
  validSvg: 0,
  invalidSvg: 0,
  missingDimensions: 0,
  identified: 0,
  needsReview: 0,
  missingHeight: 0,
  needsCalibration: 0,
  uiIconsExcluded: 0,
};

for (const cat of categories) {
  audit.byCategory[cat] = 0;
  const dir = path.join(srcBase, cat);
  if (!fs.existsSync(dir)) continue;

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

  // Sort files logically (semantic files first, then numbered files in numerical order)
  files.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10);
    const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10);
    const isNumA = a.includes('_svg_') || /^\d+\.svg$/.test(a);
    const isNumB = b.includes('_svg_') || /^\d+\.svg$/.test(b);
    if (!isNumA && isNumB) return -1;
    if (isNumA && !isNumB) return 1;
    return numA - numB;
  });

  for (const filename of files) {
    audit.total++;
    audit.byCategory[cat]++;

    const srcFile = path.join(dir, filename);
    const pubFile = path.join(pubBase, cat, filename);
    const content = fs.readFileSync(srcFile, 'utf8');
    const fileSize = fs.statSync(srcFile).size;

    // Sync file to public if missing or different
    if (!fs.existsSync(pubFile) || fs.statSync(pubFile).size !== fileSize) {
      fs.copyFileSync(srcFile, pubFile);
    }

    // 1. SVG Validation
    const hasSvgOpen = /<svg[^>]*>/i.test(content);
    const hasSvgClose = /<\/svg>/i.test(content);
    const isValidSvg = hasSvgOpen && hasSvgClose;

    if (!isValidSvg) {
      audit.invalidSvg++;
    } else {
      audit.validSvg++;
    }

    // 2. Extract dimensions & viewBox
    const vbMatch = content.match(/viewBox=["']([^"']+)["']/i);
    const widthMatch = content.match(/width=["']([^"']+)["']/i);
    const heightMatch = content.match(/height=["']([^"']+)["']/i);

    let viewBox = vbMatch ? vbMatch[1].trim() : '';
    let width = widthMatch ? parseFloat(widthMatch[1]) : null;
    let height = heightMatch ? parseFloat(heightMatch[1]) : null;

    if (!viewBox) {
      if (width && height) {
        viewBox = `0 0 ${width} ${height}`;
      } else {
        viewBox = '0 0 100 100';
        audit.missingDimensions++;
      }
    }

    // Calculate aspect ratio
    const vbParts = viewBox.split(/\s+/).map(Number);
    let aspectRatio = 0.5; // default fallback
    if (vbParts.length === 4 && vbParts[2] > 0 && vbParts[3] > 0) {
      aspectRatio = parseFloat((vbParts[2] / vbParts[3]).toFixed(3));
    }

    // 3. Detect UI icon artifacts (e.g. viewBox="0 0 96 80" with size-12 class)
    const isUiIcon = (viewBox === '0 0 96 80' || viewBox === '0 0 100 80') && content.includes('stroke="#cbd5e1"');
    if (isUiIcon) {
      audit.uiIconsExcluded++;
    }

    // 4. Stable ID Generation
    const prefix = categoryPrefixMap[cat] || cat;
    let id = '';
    let numberIndex = 0;

    const numMatch = filename.match(/\d+/);
    if (numMatch) {
      numberIndex = parseInt(numMatch[0], 10);
    }

    if (filename.startsWith(`${prefix}-`)) {
      id = filename.replace(/\.svg$/, '');
    } else if (filename.includes('_svg_') || /^\d+\.svg$/.test(filename)) {
      const padded = String(numberIndex).padStart(3, '0');
      id = `${prefix}-${padded}`;
    } else {
      const sanitizedName = filename.replace(/\.svg$/, '').replace(/[^a-z0-9_-]/gi, '-').toLowerCase();
      id = `${prefix}-${sanitizedName}`;
    }

    // 5. Default Fallback Name & Slug
    const padded = String(numberIndex || 1).padStart(3, '0');
    const fallbackName = `${categoryLabels[cat]} ${padded}`;
    const fallbackSlug = id;

    const assetEntry = {
      id,
      category: cat,
      filename,
      sourceFile: path.relative(process.cwd(), srcFile).replace(/\\/g, '/'),
      publicPath: `/assets/entities/${cat}/${filename}`,
      name: fallbackName,
      slug: fallbackSlug,
      heightCm: null,
      referenceHeightCm: null,
      measurementType: null,
      measurementAnchor: null,
      viewBox,
      aspectRatio,
      fileSize,
      status: isUiIcon ? 'needs-review' : (!isValidSvg ? 'error' : 'needs-review'),
      tags: [cat],
      aliases: [],
      searchable: !isUiIcon && isValidSvg,
      indexable: false,
    };

    allAssets.push(assetEntry);
  }
}

console.log('Discovered', allAssets.length, 'total assets across 8 categories.');
console.log(audit);
