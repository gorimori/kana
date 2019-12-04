const BETWEEN_KATAKANA_HIRAGANA = 96;

export const kana2hira = (c: string): string =>
  String.fromCodePoint(c.codePointAt(0)! + BETWEEN_KATAKANA_HIRAGANA);

export const kana2hiraAll = (s: string): string =>
  [...s].map(kana2hira).join('');

export const kata2hira = (c: string): string =>
  String.fromCodePoint(c.codePointAt(0)! - BETWEEN_KATAKANA_HIRAGANA);

export const kata2hiraAll = (s: string): string =>
  [...s].map(kata2hira).join('');

const firstHiragana = 12353; // 'ぁ'.codePointAt(0);
const lastHiragana = 12438; //'ゖ'.codePointAt(0);
export function isHiragana(c: string): boolean {
  const codePoint = c.codePointAt(0)!;
  return firstHiragana <= codePoint && codePoint <= lastHiragana;
}

const firstKatakana = 12449; //'ァ'.codePointAt(0)!;
const lastKatakana = 12538; //'ヺ'.codePointAt(0)!;
export function isKatakana(c: string): boolean {
  const codePoint = c.codePointAt(0)!;
  return firstKatakana <= codePoint && codePoint <= lastKatakana;
}

export const isKana = (c: string): boolean => isHiragana(c) || isKatakana(c);

export const isKanaAll = (s: string): boolean => [...s].every(isKana);
