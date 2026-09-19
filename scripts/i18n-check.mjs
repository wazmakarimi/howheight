import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const i18nDir = path.join(rootDir, 'src', 'i18n');

const LOCALES = ['en', 'hi', 'es', 'fr', 'de', 'pt', 'ja', 'ko', 'ar'];
const MODULES = ['common', 'home', 'comparison', 'categories', 'seo'];

console.log('HOWHEIGHT.ORG - i18n TRANSLATION VALIDATION');

function readDict(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const keys = [];
  const regex = /'([^']+)'\s*:\s*/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys.push(match[1]);
  }
  return keys;
}

function runCheck() {
  const enKeys = [];
  for (const mod of MODULES) {
    const p = path.join(i18nDir, 'en', mod + '.ts');
    enKeys.push(...readDict(p));
  }
  console.log('English (en - Canonical) Total Keys: ' + enKeys.length);

  let totalErrors = 0;
  for (const locale of LOCALES) {
    if (locale === 'en') continue;
    const localeKeys = [];
    for (const mod of MODULES) {
      const p = path.join(i18nDir, locale, mod + '.ts');
      localeKeys.push(...readDict(p));
    }

    const missing = enKeys.filter((k) => !localeKeys.includes(k));
    console.log('Locale [' + locale + ']: ' + localeKeys.length + ' keys, ' + missing.length + ' missing');
    if (missing.length > 0) {
      console.error('Missing in ' + locale + ': ' + missing.slice(0, 3).join(', '));
      totalErrors += missing.length;
    }
  }

  if (totalErrors === 0) {
    console.log('ALL i18n VALIDATION CHECKS PASSED WITH 0 ERRORS!');
    process.exit(0);
  } else {
    console.error('Found ' + totalErrors + ' translation errors!');
    process.exit(1);
  }
}

runCheck();
