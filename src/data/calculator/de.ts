import type { CalculatorTranslationData } from './types';

export const deCalculator: CalculatorTranslationData = {
  seo: {
    title: 'Größenunterschied-Rechner | Körpergrößen & Prozentsätze vergleichen | HowHeight',
    description: 'Berechnen Sie den exakten physischen Größenunterschied zwischen zwei Personen, Paaren oder Objekten in Zentimetern, Fuß und Zoll. Berechnen Sie den Prozentunterschied mit HowHeight.',
  },
  badge: 'Präzisions-Körpergrößen-Messwerkzeug',
  h1: 'Größenunterschied-Rechner',
  subtitle: 'Berechnen Sie den exakten physischen Größenunterschied zwischen zwei Personen, Partnern oder Objekten mit sofortigen metrischen und imperialen Umrechnungen.',
  personA: 'Person / Objekt A',
  personB: 'Person / Objekt B',
  nameLabel: 'Name / Bezeichnung',
  defaultNameA: 'Person 1',
  defaultNameB: 'Person 2',
  heightCmLabel: 'Körpergröße (Zentimeter)',
  feetLabel: 'Fuß',
  inchesLabel: 'Zoll',
  resultTitle: 'Berechnungsergebnis',
  statCm: 'Zentimeter',
  statIn: 'Zoll',
  statFt: 'Fuß & Zoll',
  statPct: '% Unterschied',
  ctaButton: 'Visuell auf der Vergleichsleinwand vergleichen',
  sameHeightHeadline: 'Exakt dieselbe Körpergröße (0 cm)',
  sameHeightStatement: '{nameA} und {nameB} haben exakt dieselbe Statur von {cm} cm ({ftIn}).',
  tallerStatement: '{nameA} ist {diffCm} cm ({diffIn} Zoll) größer als {nameB} ({pctDiff}% Größenunterschied).',
  diffHeadline: '{diffCm} cm Unterschied ({diffIn} Zoll)',
  tableTitle: 'Typische Größenunterschiede bei Paaren & Menschen',
  tableSubtitle: 'So fühlen sich standardmäßige Größenunterschiede im realen Nebeneinander-Stehen an:',
  thGap: 'Größenabstand',
  thAppearance: 'Visuelles Erscheinungsbild',
  thEffect: 'Augenhöhe & Haltungsauswirkung',
  tableRows: [
    {
      gap: '2,5 cm (1 Zoll)',
      appearance: 'Subtil / Kaum wahrnehmbar',
      effect: 'Nahezu gleiche Augenhöhe im Stehen; leicht beeinflusst durch Schuhsohlendicke.',
    },
    {
      gap: '7,5 cm (3 Zoll)',
      appearance: 'Leicht bemerkbar',
      effect: 'Oberkante des Kopfes liegt auf Höhe der Stirnmitte der größeren Person.',
    },
    {
      gap: '13 cm (5,1 Zoll)',
      appearance: 'Durchschnittlicher Paar-Abstand',
      effect: 'Weltweit typischer Größenunterschied zwischen Mann und Frau (175 cm vs. 162 cm).',
    },
    {
      gap: '20 cm (8 Zoll)',
      appearance: 'Deutlicher Kontrast',
      effect: 'Die Augenhöhe der kleineren Person liegt direkt auf Mund- oder Kinnhöhe der größeren Person.',
    },
    {
      gap: '30 cm (12 Zoll)',
      appearance: 'Markanter Kontrast',
      effect: 'Der Kopf der kleineren Person reicht bis zum Schlüsselbein oder der Schulter der größeren Person.',
    },
  ],
  faqs: [
    {
      question: 'Wie wird der Größenunterschied berechnet?',
      answer: 'Der Rechner wandelt beide Höheneingaben in standardisierte Dezimal-Zentimeter um, berechnet die absolute Differenz und wandelt das Ergebnis in Zoll, Fuß, Meter und relative Prozent um.',
    },
    {
      question: 'Was gilt als signifikanter Größenunterschied zwischen zwei Menschen?',
      answer: 'In anthropometrischen Untersuchungen ist ein Unterschied von 5 bis 7 cm (2 bis 3 Zoll) nebeneinander visuell auffällig. Ein Abstand von 15 cm (6 Zoll) oder mehr erzeugt einen unverkennbaren Kontrast an Schulterlinie und Augenhöhe.',
    },
    {
      question: 'Kann ich diesen Größenunterschied auf der Vergleichsleinwand visualisieren?',
      answer: 'Ja! Klicken Sie nach der Berechnung auf die Schaltfläche „Visuell auf der Vergleichsleinwand vergleichen“, und beide Staturen werden sofort auf die interaktive HowHeight-Leinwand geladen.',
    },
    {
      question: 'Wie rechne ich zwischen Zentimetern und Fuß/Zoll um?',
      answer: '1 Zoll = 2,54 cm. 1 Fuß = 12 Zoll = 30,48 cm. Um cm in Zoll umzurechnen, teilen Sie durch 2,54. Unser Rechner führt diese Umrechnung in Echtzeit ohne Rundungsfehler durch.',
    },
  ],
};
