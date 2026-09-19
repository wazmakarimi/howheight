import type { CalculatorTranslationData } from './types';

export const esCalculator: CalculatorTranslationData = {
  seo: {
    title: 'Calculadora de Diferencia de Altura | Compara Estaturas | HowHeight',
    description: 'Calcula la diferencia exacta de estatura física entre dos personas, parejas u objetos en centímetros, pies y pulgadas. Calcula el porcentaje y visualiza la brecha con HowHeight.',
  },
  badge: 'Herramienta de Medición de Altura de Precisión',
  h1: 'Calculadora de Diferencia de Altura',
  subtitle: 'Calcula la diferencia exacta de estatura entre dos personas, parejas u objetos con conversiones métricas e imperiales instantáneas.',
  personA: 'Persona / Elemento A',
  personB: 'Persona / Elemento B',
  nameLabel: 'Nombre / Etiqueta',
  defaultNameA: 'Persona 1',
  defaultNameB: 'Persona 2',
  heightCmLabel: 'Altura (Centímetros)',
  feetLabel: 'Pies',
  inchesLabel: 'Pulgadas',
  resultTitle: 'Resultado del Cálculo',
  statCm: 'Centímetros',
  statIn: 'Pulgadas',
  statFt: 'Pies y Pulgadas',
  statPct: '% de Diferencia',
  ctaButton: 'Comparar Visualmente en el Lienzo',
  sameHeightHeadline: 'Exactamente la Misma Altura (0 cm)',
  sameHeightStatement: '{nameA} y {nameB} tienen exactamente la misma estatura de {cm} cm ({ftIn}).',
  tallerStatement: '{nameA} es {diffCm} cm ({diffIn} in) más alto/a que {nameB} ({pctDiff}% de diferencia de estatura).',
  diffHeadline: '{diffCm} cm de Diferencia ({diffIn} pulgadas)',
  tableTitle: 'Diferencias Comunes de Altura en Parejas y Humanos',
  tableSubtitle: 'Así es como se perciben las diferencias estándar de altura en postura de pie lado a lado:',
  thGap: 'Brecha de Altura',
  thAppearance: 'Apariencia Visual',
  thEffect: 'Efecto en Nivel Visual y Postura',
  tableRows: [
    {
      gap: '2.5 cm (1 pulg)',
      appearance: 'Sutil / Imperceptible',
      effect: 'Nivel visual prácticamente idéntico de pie; influenciado por el grosor de la suela.',
    },
    {
      gap: '7.5 cm (3 pulg)',
      appearance: 'Fácilmente perceptible',
      effect: 'La coronilla se alinea con la mitad de la frente de la persona más alta.',
    },
    {
      gap: '13 cm (5.1 pulg)',
      appearance: 'Brecha promedio de pareja',
      effect: 'Diferencia promedio global estándar entre hombre y mujer (175 cm vs 162 cm).',
    },
    {
      gap: '20 cm (8 pulg)',
      appearance: 'Contraste prominente',
      effect: 'La mirada de la persona más baja se alinea directamente con la boca o barbilla de la persona más alta.',
    },
    {
      gap: '30 cm (12 pulg)',
      appearance: 'Contraste sorprendente',
      effect: 'La coronilla de la persona más baja descansa a la altura de la clavícula u hombro de la persona más alta.',
    },
  ],
  faqs: [
    {
      question: '¿Cómo se calcula la diferencia de altura?',
      answer: 'La calculadora convierte ambas alturas ingresadas en centímetros decimales estandarizados, calcula la diferencia absoluta y convierte el resultado a pulgadas, pies, metros y porcentaje relativo.',
    },
    {
      question: '¿Qué se considera una diferencia de altura significativa entre dos personas?',
      answer: 'En investigaciones antropométricas, una diferencia de 5 a 7 cm (2 a 3 pulgadas) es visualmente notable lado a lado. Una diferencia de 15 cm (6 pulgadas) o más crea un contraste inconfundible en la línea del hombro y el nivel de los ojos.',
    },
    {
      question: '¿Puedo visualizar esta diferencia de altura en el lienzo de comparación?',
      answer: '¡Sí! Haz clic en el botón "Comparar Visualmente en el Lienzo" después de calcular, y ambas alturas se cargarán instantáneamente en el lienzo interactivo de HowHeight.',
    },
    {
      question: '¿Cómo convierto entre centímetros y pies/pulgadas?',
      answer: '1 pulgada = 2.54 cm. 1 pie = 12 pulgadas = 30.48 cm. Para convertir cm a pulgadas, divide entre 2.54. Nuestra calculadora realiza esta conversión en tiempo real con cero errores de redondeo.',
    },
  ],
};
