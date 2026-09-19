import { ASSET_REGISTRY } from '../src/data/assetRegistry.ts';

const total = ASSET_REGISTRY.length;
const verified = ASSET_REGISTRY.filter(a => a.status === 'verified').length;
const needsReview = ASSET_REGISTRY.filter(a => a.status === 'needs-review').length;
const invalid = ASSET_REGISTRY.filter(a => a.status === 'invalid').length;
const missingHeight = ASSET_REGISTRY.filter(a => a.heightCm === null && a.status !== 'invalid').length;

console.log('TOTAL ASSETS:', total);
console.log('VERIFIED:', verified);
console.log('NEEDS REVIEW:', needsReview);
console.log('UNMAPPED:', needsReview);
console.log('MISSING HEIGHT:', missingHeight);
console.log('INVALID:', invalid);