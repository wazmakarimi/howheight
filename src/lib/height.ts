import { LIMITS } from './constants';

/**
 * Converts feet and inches to centimeters.
 * Formula: cm = (feet * 30.48) + (inches * 2.54)
 */
export function feetInchesToCm(feet: number, inches: number): number {
  const safeFeet = Math.max(0, feet || 0);
  const safeInches = Math.max(0, inches || 0);
  const totalCm = (safeFeet * 30.48) + (safeInches * 2.54);
  return Number(totalCm.toFixed(2));
}

/**
 * Converts centimeters to feet and rounded inches.
 * Total inches = cm / 2.54
 * feet = floor(totalInches / 12)
 * inches = round(totalInches % 12)
 */
export function cmToFeetInches(cm: number): {
  feet: number;
  inches: number;
  formatted: string;
  exactInches: number;
} {
  const totalInches = cm / 2.54;
  let feet = Math.floor(totalInches / 12);
  let inches = Math.round(totalInches % 12);

  if (inches >= 12) {
    feet += 1;
    inches = 0;
  }

  return {
    feet,
    inches,
    formatted: `${feet}'${inches}"`,
    exactInches: totalInches,
  };
}

/**
 * Format a height in cm to a standard display string based on unit
 */
export function formatHeight(cm: number, unit: 'cm' | 'ft'): string {
  if (unit === 'cm') {
    return `${Math.round(cm)} cm`;
  }
  const { formatted } = cmToFeetInches(cm);
  return formatted;
}

/**
 * Full format with both units: e.g. "6 ft 0 in (183 cm)"
 */
export function formatHeightFull(cm: number): string {
  const { feet, inches } = cmToFeetInches(cm);
  return `${feet} ft ${inches} in (${Math.round(cm)} cm)`;
}

/**
 * Validates height inputs
 */
export function validateHeightInputs(
  unit: 'cm' | 'ft',
  values: { cm?: number; feet?: number; inches?: number }
): { isValid: boolean; error?: string; cm: number } {
  if (unit === 'cm') {
    const cm = Number(values.cm);
    if (isNaN(cm) || cm < LIMITS.MIN_HEIGHT_CM || cm > LIMITS.MAX_HEIGHT_CM) {
      return {
        isValid: false,
        error: `Please enter a height between ${LIMITS.MIN_HEIGHT_CM} cm and ${LIMITS.MAX_HEIGHT_CM} cm.`,
        cm: 0,
      };
    }
    return { isValid: true, cm: Number(cm.toFixed(2)) };
  } else {
    const feet = Number(values.feet);
    const inches = Number(values.inches ?? 0);

    if (isNaN(feet) || feet < LIMITS.MIN_FEET || feet > LIMITS.MAX_FEET) {
      return {
        isValid: false,
        error: `Feet must be between ${LIMITS.MIN_FEET} and ${LIMITS.MAX_FEET}.`,
        cm: 0,
      };
    }

    if (isNaN(inches) || inches < LIMITS.MIN_INCHES || inches > LIMITS.MAX_INCHES) {
      return {
        isValid: false,
        error: `Inches must be between ${LIMITS.MIN_INCHES} and ${LIMITS.MAX_INCHES}.`,
        cm: 0,
      };
    }

    const cm = feetInchesToCm(feet, inches);
    if (cm < LIMITS.MIN_HEIGHT_CM || cm > LIMITS.MAX_HEIGHT_CM) {
      return {
        isValid: false,
        error: `Combined height must be between ${LIMITS.MIN_HEIGHT_CM} cm and ${LIMITS.MAX_HEIGHT_CM} cm.`,
        cm: 0,
      };
    }

    return { isValid: true, cm };
  }
}
