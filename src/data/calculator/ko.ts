import type { CalculatorTranslationData } from './types';

export const koCalculator: CalculatorTranslationData = {
  seo: {
    title: '키 차이 계산기 | 신장 및 비율 비교 | HowHeight',
    description: '두 사람, 연인 또는 사물 사이의 정확한 신장 차이를 센티미터, 피트, 인치로 계산하세요. HowHeight에서 키 차이 비율과 시각적 체격 차이를 확인하세요.',
  },
  badge: '정밀 신장 측정 도구',
  h1: '키 차이 계산기',
  subtitle: '두 사람, 파트너 또는 사물 간의 물리적인 키 차이를 미터법 및 야드파운드법으로 즉시 계산하고 환산합니다.',
  personA: '사람 / 항목 A',
  personB: '사람 / 항목 B',
  nameLabel: '이름 / 라벨',
  defaultNameA: '사람 1',
  defaultNameB: '사람 2',
  heightCmLabel: '키 (센티미터)',
  feetLabel: '피트',
  inchesLabel: '인치',
  resultTitle: '계산 결과',
  statCm: '센티미터',
  statIn: '인치',
  statFt: '피트 & 인치',
  statPct: '% 차이',
  ctaButton: '비교 캔버스에서 시각적으로 비교하기',
  sameHeightHeadline: '정확히 동일한 키 (0 cm)',
  sameHeightStatement: '{nameA}와(과) {nameB}은(는) {cm} cm ({ftIn})로 완전히 동일한 신장입니다.',
  tallerStatement: '{nameA}이(가) {nameB}보다 {diffCm} cm ({diffIn} in) 더 큽니다 ({pctDiff}% 키 차이).',
  diffHeadline: '{diffCm} cm 차이 ({diffIn} 인치)',
  tableTitle: '연인 및 사람 간의 일반적인 키 차이 체감',
  tableSubtitle: '나란히 섰을 때 일반적인 신장 차이가 시각적으로 어떻게 느껴지는지 확인하세요:',
  thGap: '키 차이',
  thAppearance: '시각적 느낌',
  thEffect: '시선 높이 및 자세 영향',
  tableRows: [
    {
      gap: '2.5 cm (1인치)',
      appearance: '미세함 / 거의 체감 없음',
      effect: '서 있을 때 시선 높이가 거의 동일하며, 신발 굽 두께에 따라 달라질 수 있습니다.',
    },
    {
      gap: '7.5 cm (3인치)',
      appearance: '쉽게 눈에 띔',
      effect: '정수리가 키 큰 사람의 이마 중간 부분과 일치합니다.',
    },
    {
      gap: '13 cm (5.1인치)',
      appearance: '평균적인 커플 키 차이',
      effect: '전 세계 표준 남녀 평균 신장 차이 (175 cm 대 162 cm).',
    },
    {
      gap: '20 cm (8인치)',
      appearance: '뚜렷한 대비',
      effect: '키 작은 사람의 시선이 키 큰 사람의 입이나 턱선에 닿습니다.',
    },
    {
      gap: '30 cm (12인치)',
      appearance: '인상적인 키 차이',
      effect: '키 작은 사람의 정수리가 키 큰 사람의 쇄골 또는 어깨 높이에 위치합니다.',
    },
  ],
  faqs: [
    {
      question: '키 차이는 어떻게 계산되나요?',
      answer: '계산기는 입력된 두 신장을 표준화된 소수점 센티미터로 변환하고, 절대적인 차이를 구한 후 인치, 피트, 미터 및 상대 비율로 환산합니다.',
    },
    {
      question: '두 사람 사이에 유의미한 키 차이의 기준은 무엇인가요?',
      answer: '인체측정학 연구에 따르면 5~7 cm (2~3인치) 차이는 나란히 섰을 때 시각적으로 확실히 구별됩니다. 15 cm (6인치) 이상의 차이는 어깨선과 눈높이에서 뚜렷한 차이를 만듭니다.',
    },
    {
      question: '이 키 차이를 비교 캔버스에서 직접 볼 수 있나요?',
      answer: '네! 계산 후 "비교 캔버스에서 시각적으로 비교하기" 버튼을 클릭하면 두 사람의 키가 인터랙티브 HowHeight 캔버스에 즉시 로드됩니다.',
    },
    {
      question: '센티미터와 피트/인치는 어떻게 환산하나요?',
      answer: '1인치 = 2.54 cm, 1피트 = 12인치 = 30.48 cm입니다. cm를 인치로 변환하려면 2.54로 나눕니다. 본 계산기는 반올림 오차 없이 실시간으로 계산을 처리합니다.',
    },
  ],
};
