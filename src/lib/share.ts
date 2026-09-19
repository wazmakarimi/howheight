import type { ComparisonItem } from './constants';
import { LIMITS } from './constants';
import { getCelebrityById } from '../data/celebrities';

interface CompactEntity {
  n: string;
  cat?: 'h' | 'a' | 'o' | 'c';
  g?: 'm' | 'f';
  a?: string; // animalType
  o?: string; // objectType
  cel?: string; // celebrityId
  prof?: string; // profession
  h: number;
  c: string;
  rx?: number; // referenceHeightCm
  cst?: 1; // isCustomHeight
  x?: number; // positionX
}

/**
 * Encodes items list into a safe URL parameter string
 */
export function encodePeopleToUrl(items: ComparisonItem[]): string {
  const compact: CompactEntity[] = items.map((item) => {
    let catCode: 'h' | 'a' | 'o' | 'c' = 'h';
    if (item.category === 'animal') catCode = 'a';
    if (item.category === 'object') catCode = 'o';
    if (item.category === 'celebrity') catCode = 'c';

    return {
      n: item.name.trim().slice(0, LIMITS.NAME_MAX_LENGTH),
      cat: catCode,
      g: (item.category === 'human' || item.category === 'celebrity') 
        ? (item.gender === 'female' ? 'f' : 'm') 
        : undefined,
      a: item.category === 'animal' ? item.animalType : undefined,
      o: item.category === 'object' ? item.objectType : undefined,
      cel: item.category === 'celebrity' ? item.celebrityId : undefined,
      prof: item.category === 'celebrity' ? item.profession : undefined,
      h: Number(item.heightCm.toFixed(2)),
      c: item.color.replace('#', ''),
      rx: item.referenceHeightCm ? Number(item.referenceHeightCm.toFixed(2)) : undefined,
      cst: item.isCustomHeight ? 1 : undefined,
      x: typeof item.positionX === 'number' ? Math.round(item.positionX) : undefined,
    };
  });

  try {
    const json = JSON.stringify(compact);
    if (typeof btoa === 'function') {
      return encodeURIComponent(btoa(unescape(encodeURIComponent(json))));
    }
    if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
      return encodeURIComponent(window.btoa(unescape(encodeURIComponent(json))));
    }
    return encodeURIComponent(json);
  } catch (e) {
    console.error('Failed to encode comparison items', e);
    return '';
  }
}

/**
 * Decodes URL parameter string back into validated ComparisonItem array with backward compatibility
 */
export function decodePeopleFromUrl(encoded: string): ComparisonItem[] | null {
  if (!encoded) return null;

  try {
    let json = '';
    const decodedUrl = decodeURIComponent(encoded);
    const atobFn = typeof atob === 'function' ? atob : (typeof window !== 'undefined' && typeof window.atob === 'function' ? window.atob : null);
    if (atobFn) {
      try {
        json = decodeURIComponent(escape(atobFn(decodedUrl)));
      } catch {
        json = decodedUrl;
      }
    } else {
      json = decodedUrl;
    }

    const parsed = JSON.parse(json);
    if (!Array.isArray(parsed)) return null;

    const items: ComparisonItem[] = [];
    for (let i = 0; i < parsed.length; i++) {
      const item = parsed[i];
      if (
        typeof item === 'object' &&
        item !== null &&
        typeof item.n === 'string' &&
        item.n.trim().length > 0 &&
        typeof item.h === 'number' &&
        item.h >= LIMITS.MIN_HEIGHT_CM &&
        item.h <= LIMITS.MAX_HEIGHT_CM
      ) {
        const isCelebrity = item.cat === 'c' || Boolean(item.cel);
        const isObject = !isCelebrity && (item.cat === 'o' || Boolean(item.o));
        const isAnimal = !isCelebrity && !isObject && (item.cat === 'a' || Boolean(item.a));

        let gender: 'male' | 'female' = item.g === 'f' ? 'female' : 'male';
        if (isCelebrity && item.cel) {
          const cel = getCelebrityById(item.cel);
          if (cel) gender = cel.gender;
        }

        let category: ComparisonItem['category'] = 'human';
        if (isCelebrity) category = 'celebrity';
        else if (isObject) category = 'object';
        else if (isAnimal) category = 'animal';

        items.push({
          id: `shared-${Date.now()}-${i}-${Math.random().toString(36).substring(2, 6)}`,
          name: item.n.trim().slice(0, LIMITS.NAME_MAX_LENGTH),
          category,
          gender: (category === 'human' || category === 'celebrity') ? gender : undefined,
          animalType: isAnimal ? (item.a || 'dog') : undefined,
          objectType: isObject ? (item.o || 'door') : undefined,
          celebrityId: isCelebrity ? item.cel : undefined,
          profession: isCelebrity ? item.prof : undefined,
          heightCm: Number(item.h.toFixed(2)),
          color: item.c ? (item.c.startsWith('#') ? item.c : `#${item.c}`) : '#2563eb',
          referenceHeightCm: typeof item.rx === 'number' ? Number(item.rx.toFixed(2)) : Number(item.h.toFixed(2)),
          isCustomHeight: item.cst === 1,
          positionX: typeof item.x === 'number' ? item.x : undefined,
        });
      }
    }

    return items.length > 0 ? items : null;
  } catch (e) {
    console.warn('Invalid shared URL data', e);
    return null;
  }
}

/**
 * Safely copies text to clipboard with fallback
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    textArea.remove();
    return successful;
  } catch (e) {
    console.error('Copy fallback failed', e);
    return false;
  }
}
