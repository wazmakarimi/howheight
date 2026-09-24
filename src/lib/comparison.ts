import type { ComparisonItem, RulerUnit, SortMode } from './constants';
import { getVisualTotalHeightCm } from './visualModel';

export interface RulerTick {
  cm: number;
  label: string;
  isMajor: boolean;
}

/**
 * Calculates the rounded maximum height for the chart ruler.
 * Ensures the ruler encompasses the tallest person/animal plus reasonable headroom.
 */
export function calculateRulerMax(maxHeightCm: number): number {
  if (maxHeightCm <= 0) return 200;
  // Round up to sensible intervals based on magnitude
  const target = maxHeightCm + 15;
  const step = target > 300 ? 50 : 20;
  return Math.max(160, Math.ceil(target / step) * step);
}

/**
 * Calculates visual scale factor (pixels per cm)
 */
export function calculateScale(
  items: ComparisonItem[],
  visualHeightPx: number = 620
): { scale: number; rulerMaxCm: number } {
  if (!items || items.length === 0) {
    const defaultMax = 200;
    return { scale: visualHeightPx / defaultMax, rulerMaxCm: defaultMax };
  }

  // Account for entities whose visual bounds extend above the measurement anchor
  const maxVisualCm = Math.max(
    ...items.map((item) => {
      try {
        const visualHeight = getVisualTotalHeightCm(item.heightCm, item.assetId || item.animalType || item.objectType, item);
        return Math.max(item.heightCm, visualHeight || item.heightCm);
      } catch {
        return item.heightCm;
      }
    })
  );

  const rulerMaxCm = calculateRulerMax(maxVisualCm);
  const scale = visualHeightPx / rulerMaxCm;
  return { scale, rulerMaxCm };
}

/**
 * Generates ruler tick marks for either cm or ft/in
 */
export function generateRulerTicks(rulerMaxCm: number, unit: RulerUnit): RulerTick[] {
  const ticks: RulerTick[] = [];

  if (unit === 'cm') {
    const step = rulerMaxCm > 300 ? 50 : 20;
    const minorStep = step / 2;
    for (let cm = 0; cm <= rulerMaxCm; cm += minorStep) {
      const isMajor = cm % step === 0;
      ticks.push({
        cm,
        label: isMajor ? `${cm} cm` : '',
        isMajor,
      });
    }
  } else {
    // Imperial marks: major every 12 inches (1 ft), minor every 6 inches (0.5 ft)
    const maxInches = Math.ceil((rulerMaxCm / 2.54) / 6) * 6;
    for (let inch = 0; inch <= maxInches; inch += 6) {
      const cm = inch * 2.54;
      if (cm > rulerMaxCm + 5) break;

      const feet = Math.floor(inch / 12);
      const remainingInches = inch % 12;
      const isMajor = remainingInches === 0;

      const label = remainingInches === 0 ? `${feet}'0"` : `${feet}'6"`;

      ticks.push({
        cm,
        label,
        isMajor,
      });
    }
  }

  return ticks;
}

/**
 * Calculate difference between two entities
 */
export interface HeightDifferenceResult {
  p1: ComparisonItem;
  p2: ComparisonItem;
  diffCm: number;
  diffInchesRounded: number;
  diffInchesExact: number;
  statement: string;
  isEqual: boolean;
}

export function calculateDifference(items: ComparisonItem[]): HeightDifferenceResult | null {
  if (items.length !== 2) return null;

  const [p1, p2] = items;
  const diffCm = Math.abs(p1.heightCm - p2.heightCm);
  const diffInchesExact = diffCm / 2.54;
  const diffInchesRounded = Math.round(diffInchesExact);

  if (Math.abs(diffCm) < 0.1) {
    return {
      p1,
      p2,
      diffCm: 0,
      diffInchesRounded: 0,
      diffInchesExact: 0,
      statement: `${p1.name} and ${p2.name} are the exact same height.`,
      isEqual: true,
    };
  }

  const p1Taller = p1.heightCm > p2.heightCm;
  const inchWord = diffInchesRounded === 1 ? 'inch' : 'inches';
  const displayDiff = diffInchesRounded === 0 
    ? `${diffInchesExact.toFixed(1)} ${inchWord}`
    : `${diffInchesRounded} ${inchWord}`;

  const statement = `${p1.name} is ${displayDiff} ${p1Taller ? 'taller' : 'shorter'} than ${p2.name}.`;

  return {
    p1,
    p2,
    diffCm: Number(diffCm.toFixed(1)),
    diffInchesRounded,
    diffInchesExact: Number(diffInchesExact.toFixed(1)),
    statement,
    isEqual: false,
  };
}

/**
 * Sorts items array based on selected mode without mutating source
 */
export function sortPeople(items: ComparisonItem[], mode: SortMode): ComparisonItem[] {
  const copy = [...items];
  if (mode === 'height-asc') {
    return copy.sort((a, b) => a.heightCm - b.heightCm);
  }
  if (mode === 'height-desc') {
    return copy.sort((a, b) => b.heightCm - a.heightCm);
  }
  return copy; // 'added' preserves original order
}
