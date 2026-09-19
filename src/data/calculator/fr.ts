import type { CalculatorTranslationData } from './types';

export const frCalculator: CalculatorTranslationData = {
  seo: {
    title: 'Calculateur de Différence de Taille | Comparez les statures | HowHeight',
    description: 'Calculez la différence exacte de taille physique entre deux personnes, couples ou objets en centimètres, pieds et pouces. Calculez le pourcentage d\'écart avec HowHeight.',
  },
  badge: 'Outil de Mesure de Taille de Précision',
  h1: 'Calculateur de Différence de Taille',
  subtitle: 'Calculez la différence de stature physique exacte entre deux personnes, partenaires ou objets avec conversions métriques et impériales instantanées.',
  personA: 'Personne / Objet A',
  personB: 'Personne / Objet B',
  nameLabel: 'Nom / Libellé',
  defaultNameA: 'Personne 1',
  defaultNameB: 'Personne 2',
  heightCmLabel: 'Taille (Centimètres)',
  feetLabel: 'Pieds',
  inchesLabel: 'Pouces',
  resultTitle: 'Résultat du Calcul',
  statCm: 'Centimètres',
  statIn: 'Pouces',
  statFt: 'Pieds et Pouces',
  statPct: '% de Différence',
  ctaButton: 'Comparer Visuellement sur le Canevas',
  sameHeightHeadline: 'Taille Strictement Identique (0 cm)',
  sameHeightStatement: '{nameA} et {nameB} ont exactement la même stature de {cm} cm ({ftIn}).',
  tallerStatement: '{nameA} mesure {diffCm} cm ({diffIn} po) de plus que {nameB} ({pctDiff}% d\'écart de taille).',
  diffHeadline: '{diffCm} cm d\'écart ({diffIn} pouces)',
  tableTitle: 'Écarts de Taille Courants chez les Couples et Humains',
  tableSubtitle: 'Voici comment se perçoivent les écarts de stature réels en posture debout côte à côte :',
  thGap: 'Écart de Taille',
  thAppearance: 'Aspect Visuel',
  thEffect: 'Effet sur le Regard et la Posture',
  tableRows: [
    {
      gap: '2,5 cm (1 po)',
      appearance: 'Subtil / Négligeable',
      effect: 'Niveau des yeux pratiquement égal debout ; influencé par l\'épaisseur de semelle.',
    },
    {
      gap: '7,5 cm (3 po)',
      appearance: 'Facilement remarquable',
      effect: 'Le sommet de la tête s\'aligne avec le milieu du front de la personne plus grande.',
    },
    {
      gap: '13 cm (5,1 po)',
      appearance: 'Écart moyen de couple',
      effect: 'Écart mondial moyen standard homme-femme (175 cm contre 162 cm).',
    },
    {
      gap: '20 cm (8 po)',
      appearance: 'Contraste prononcé',
      effect: 'Le regard de la personne plus petite s\'aligne au niveau de la bouche ou du menton de la personne plus grande.',
    },
    {
      gap: '30 cm (12 po)',
      appearance: 'Contraste saisissant',
      effect: 'Le sommet de la tête de la personne plus petite arrive au niveau de la clavicule ou de l\'épaule.',
    },
  ],
  faqs: [
    {
      question: 'Comment la différence de taille est-elle calculée ?',
      answer: 'Le calculateur convertit les deux valeurs saisies en centimètres décimaux standardisés, calcule la différence absolue, puis convertit le résultat en pouces, pieds, mètres et pourcentage relatif.',
    },
    {
      question: 'Qu\'est-ce qui est considéré comme un écart de taille significatif entre deux personnes ?',
      answer: 'En recherche anthropométrique, une différence de 5 à 7 cm (2 à 3 pouces) est visiblement perceptible côte à côte. Un écart de 15 cm (6 pouces) ou plus crée un contraste indéniable au niveau des épaules et du regard.',
    },
    {
      question: 'Puis-je visualiser cette différence de taille sur le canevas de comparaison ?',
      answer: 'Oui ! Cliquez sur le bouton « Comparer Visuellement sur le Canevas » après le calcul, et les deux tailles seront instantanément chargées sur le canevas interactif HowHeight.',
    },
    {
      question: 'Comment convertir les centimètres en pieds et pouces ?',
      answer: '1 pouce = 2,54 cm. 1 pied = 12 pouces = 30,48 cm. Pour convertir les cm en pouces, divisez par 2,54. Notre calculateur effectue cette conversion en direct sans aucune erreur d\'arrondi.',
    },
  ],
};
