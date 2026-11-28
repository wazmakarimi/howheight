/**
 * Client-side string table for the comparison tool.
 *
 * The server (ComparisonTool.astro) serializes the current locale's tool
 * dictionary into the data-tool-i18n attribute of #comparison-tool.
 * The app calls initClientStrings() once at startup; cs() then resolves keys
 * with {placeholder} substitution, falling back to the bundled English table.
 */
import enComparison from '../i18n/en/comparison';

const FALLBACK: Record<string, string> = { ...enComparison };

let table: Record<string, string> = FALLBACK;

export function initClientStrings(): void {
  try {
    const raw = document.getElementById('comparison-tool')?.getAttribute('data-tool-i18n');
    if (raw) {
      const parsed = JSON.parse(raw) as Record<string, string>;
      if (parsed && typeof parsed === 'object') {
        table = { ...FALLBACK, ...parsed };
      }
    }
  } catch {
    // Keep English fallback if the payload is missing or malformed.
  }
}

export function cs(key: string, params?: Record<string, string | number>): string {
  let text = table[key] ?? FALLBACK[key] ?? key;
  if (params) {
    for (const [paramKey, paramVal] of Object.entries(params)) {
      text = text.replaceAll(`{${paramKey}}`, String(paramVal));
    }
  }
  return text;
}
