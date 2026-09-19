import type { CalculatorTranslationData } from './types';

export const ptCalculator: CalculatorTranslationData = {
  seo: {
    title: 'Calculadora de Diferença de Altura | Compare Estaturas e Porcentagens | HowHeight',
    description: 'Calcule a diferença exata de estatura física entre duas pessoas, casais ou objetos em centímetros, pés e polegadas. Calcule a porcentagem de diferença com o HowHeight.',
  },
  badge: 'Ferramenta de Medição de Altura de Precisão',
  h1: 'Calculadora de Diferença de Altura',
  subtitle: 'Calcule a diferença exata de altura física entre duas pessoas, parceiros ou objetos com conversões métricas e imperiais instantâneas.',
  personA: 'Pessoa / Item A',
  personB: 'Pessoa / Item B',
  nameLabel: 'Nome / Rótulo',
  defaultNameA: 'Pessoa 1',
  defaultNameB: 'Pessoa 2',
  heightCmLabel: 'Altura (Centímetros)',
  feetLabel: 'Pés',
  inchesLabel: 'Polegadas',
  resultTitle: 'Resultado do Cálculo',
  statCm: 'Centímetros',
  statIn: 'Polegadas',
  statFt: 'Pés e Polegadas',
  statPct: '% de Diferença',
  ctaButton: 'Comparar Visualmente na Tela de Comparação',
  sameHeightHeadline: 'Exatamente a Mesma Altura (0 cm)',
  sameHeightStatement: '{nameA} e {nameB} possuem exatamente a mesma estatura de {cm} cm ({ftIn}).',
  tallerStatement: '{nameA} é {diffCm} cm ({diffIn} pol) mais alto(a) que {nameB} ({pctDiff}% de diferença de altura).',
  diffHeadline: '{diffCm} cm de Diferença ({diffIn} polegadas)',
  tableTitle: 'Diferenças Comuns de Altura entre Casais e Humanos',
  tableSubtitle: 'Veja como as diferenças padrão de altura se manifestam na postura em pé lado a lado:',
  thGap: 'Diferença de Altura',
  thAppearance: 'Aparência Visual',
  thEffect: 'Nível dos Olhos e Efeito Postural',
  tableRows: [
    {
      gap: '2,5 cm (1 pol)',
      appearance: 'Sutil / Quase imperceptível',
      effect: 'Nível dos olhos praticamente idêntico ao ficar em pé; influenciado pela espessura da sola.',
    },
    {
      gap: '7,5 cm (3 pol)',
      appearance: 'Facilmente perceptível',
      effect: 'O topo da cabeça se alinha com o meio da testa da pessoa mais alta.',
    },
    {
      gap: '13 cm (5,1 pol)',
      appearance: 'Diferença média de casal',
      effect: 'Diferença média global padrão entre homens e mulheres (175 cm vs 162 cm).',
    },
    {
      gap: '20 cm (8 pol)',
      appearance: 'Contraste proeminente',
      effect: 'O olhar da pessoa mais baixa alinha-se diretamente com a boca ou queixo da pessoa mais alta.',
    },
    {
      gap: '30 cm (12 pol)',
      appearance: 'Contraste marcante',
      effect: 'O topo da cabeça da pessoa mais baixa fica na altura da clavícula ou ombro da pessoa mais alta.',
    },
  ],
  faqs: [
    {
      question: 'Como a diferença de altura é calculada?',
      answer: 'A calculadora converte ambas as alturas inseridas em centímetros decimais padronizados, calcula a diferença absoluta e converte o resultado em polegadas, pés, metros e porcentagem relativa.',
    },
    {
      question: 'O que é considerado uma diferença de altura significativa entre duas pessoas?',
      answer: 'Em pesquisas antropométricas, uma diferença de 5 a 7 cm (2 a 3 polegadas) é visualmente perceptível lado a lado. Uma diferença de 15 cm (6 polegadas) ou mais cria um contraste marcante na linha dos ombros e no nível dos olhos.',
    },
    {
      question: 'Posso visualizar essa diferença de altura na tela de comparação?',
      answer: 'Sim! Clique no botão "Comparar Visualmente na Tela de Comparação" após o cálculo e ambas as alturas serão carregadas instantaneamente na tela interativa do HowHeight.',
    },
    {
      question: 'Como faço a conversão entre centímetros e pés/polegadas?',
      answer: '1 polegada = 2,54 cm. 1 pé = 12 polegadas = 30,48 cm. Para converter cm em polegadas, divida por 2,54. Nossa calculadora realiza essa conversão em tempo real, sem erros de arredondamento.',
    },
  ],
};
