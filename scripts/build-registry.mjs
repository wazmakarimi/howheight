import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Run generate-registries and build-manifest
console.log('Building Phase 11 Asset Inventory, Entity Map, and Manifest...');

import('./generate-registries.mjs').then(() => {
  return import('./build-manifest.mjs');
}).then(() => {
  console.log('All registries and manifests rebuilt successfully.');
});