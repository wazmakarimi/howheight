import type { CalculatorTranslationData } from './types';

export const jaCalculator: CalculatorTranslationData = {
  seo: {
    title: '身長差計算ツール | 身長と割合を比較 | HowHeight',
    description: '2人の人物、カップル、または物体の正確な身長差をセンチメートル、フィート、インチで瞬時に計算します。HowHeightで身長差の割合や視覚的な差を確認できます。',
  },
  badge: '高精度身長測定ツール',
  h1: '身長差計算ツール',
  subtitle: '2人の人物、パートナー、または物体間の正確な身長差を、メートル法およびヤードポンド法で即座に計算・換算します。',
  personA: '人物 / 項目 A',
  personB: '人物 / 項目 B',
  nameLabel: '名前 / ラベル',
  defaultNameA: '人物 1',
  defaultNameB: '人物 2',
  heightCmLabel: '身長（センチメートル）',
  feetLabel: 'フィート',
  inchesLabel: 'インチ',
  resultTitle: '計算結果',
  statCm: 'センチメートル',
  statIn: 'インチ',
  statFt: 'フィート＆インチ',
  statPct: '身長差の割合',
  ctaButton: '比較キャンバスで視覚的に比較する',
  sameHeightHeadline: 'まったく同じ身長（0 cm）',
  sameHeightStatement: '{nameA}と{nameB}は、まったく同じ{cm} cm（{ftIn}）の身長です。',
  tallerStatement: '{nameA}は{nameB}より{diffCm} cm（{diffIn}インチ）高身長です（身長差{pctDiff}%）。',
  diffHeadline: '{diffCm} cmの身長差（{diffIn}インチ）',
  tableTitle: 'カップルおよび人間の一般的な身長差の目安',
  tableSubtitle: '並んで立ったときの標準的な身長差の視覚的な見え方と印象です：',
  thGap: '身長差',
  thAppearance: '見た目の印象',
  thEffect: '視線の高さと姿勢への影響',
  tableRows: [
    {
      gap: '2.5 cm（1インチ）',
      appearance: 'ごくわずか / ほぼ同等',
      effect: '立っているときの視線はほぼ同じ高さ。靴底の厚みで逆転する程度。',
    },
    {
      gap: '7.5 cm（3インチ）',
      appearance: 'はっきりとわかる',
      effect: '頭頂部が相手のおでこの中央付近に位置します。',
    },
    {
      gap: '13 cm（5.1インチ）',
      appearance: 'カップルの平均的な身長差',
      effect: '世界的な男女の標準的な平均身長差（175 cm vs 162 cm）。',
    },
    {
      gap: '20 cm（8インチ）',
      appearance: '際立った対比',
      effect: '背の低い人の視線が、背の高い人の口やあごのラインに位置します。',
    },
    {
      gap: '30 cm（12インチ）',
      appearance: '圧倒的な身長差',
      effect: '背の低い人の頭頂部が、背の高い人の鎖骨や肩の高さに届きます。',
    },
  ],
  faqs: [
    {
      question: '身長差はどのように計算されますか？',
      answer: 'この計算機は両方の数値を標準化された小数センチメートルに変換し、絶対差を計算して、インチ、フィート、メートル、および相対パーセンテージに換算します。',
    },
    {
      question: '2人の間で顕著な身長差とされるのはどのくらいですか？',
      answer: '人体測定学の研究では、5〜7 cm（2〜3インチ）の差があると並んだときに視覚的にはっきりと認識されます。15 cm（6インチ）以上の差があると、肩のラインや目線の高さに明確な差が生じます。',
    },
    {
      question: 'この身長差を比較キャンバスで確認できますか？',
      answer: 'はい！計算後に「比較キャンバスで視覚的に比較する」ボタンをクリックすると、両方の身長がHowHeightのインタラクティブな比較キャンバスに即座に読み込まれます。',
    },
    {
      question: 'センチメートルとフィート/インチの換算方法は？',
      answer: '1インチ = 2.54 cm、1フィート = 12インチ = 30.48 cmです。cmをインチに変換するには2.54で割ります。当計算ツールは端数処理の誤差なくリアルタイムで計算します。',
    },
  ],
};
