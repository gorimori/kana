const BETWEEN_KATAKANA_HIRAGANA = 96;

/**
 * converts the first character of the argument to a Katakana (if it is Hiragana).
 *
 * if the argument is not Hiragana, it would return unexpected value.
 * to avoid this, use isHiragana().
 *
 * @example
 * // returns 'ア'
 * hira2kata('あ')
 *
 * @example
 * // returns '吷'
 * hira2kata('受')
 *
 * @example
 * const c = '受';
 * // returns '受'
 * isHiragana(c) ? hira2kana(c) : c;
 */
export const hira2kata = (c: string): string =>
  String.fromCodePoint(c.codePointAt(0)! + BETWEEN_KATAKANA_HIRAGANA);

/**
 * converts all Hiragana characters in the argument to Katakana.
 *
 * non-Hiragana characters are keep untouched.
 *
 * @example
 * // returns 'コンニチハ'
 * hira2kataAll('こんにちは');
 *
 * @example
 * // returns '今日ハ'
 * hira2kataAll('今日は');
 */
export const hira2kataAll = (s: string): string =>
  [...s].map(c => (isHiragana(c) ? hira2kata(c) : c)).join('');

export const kata2hira = (c: string): string =>
  String.fromCodePoint(c.codePointAt(0)! - BETWEEN_KATAKANA_HIRAGANA);

export const kata2hiraAll = (s: string): string =>
  [...s].map(kata2hira).join('');

const firstHiragana = 12353; // 'ぁ'.codePointAt(0);
const lastHiragana = 12438; //'ゖ'.codePointAt(0);
export const isHiragana = (c: string): boolean => {
  const codePoint = c.codePointAt(0)!;
  return firstHiragana <= codePoint && codePoint <= lastHiragana;
};

const firstKatakana = 12449; //'ァ'.codePointAt(0)!;
const lastKatakana = 12538; //'ヺ'.codePointAt(0)!;
export const isKatakana = (c: string): boolean => {
  const codePoint = c.codePointAt(0)!;
  return firstKatakana <= codePoint && codePoint <= lastKatakana;
};

export const isKana = (c: string): boolean => isHiragana(c) || isKatakana(c);

export const isKanaAll = (s: string): boolean => [...s].every(isKana);
