const BETWEEN_KATAKANA_HIRAGANA = 96;

/**
 * converts the first character of the argument to a Katakana (if it is Hiragana).
 *
 * if the character is not Hiragana, it would return unexpected value.
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

/**
 * converts the first character of the argument to a Hiragana (if it is Katakana).
 *
 * if the character is not Katakana, it would return unexpected value.
 * to avoid this, use isKatakana().
 *
 * @example
 * // returns 'あ'
 * kata2hira('ア')
 *
 * @example
 * // returns '受'
 * hira2kata('吷')
 *
 * @example
 * const c = '受';
 * // returns '受'
 * isKatakana(c) ? kata2hira(c) : c;
 */
export const kata2hira = (c: string): string =>
  String.fromCodePoint(c.codePointAt(0)! - BETWEEN_KATAKANA_HIRAGANA);

/**
 * converts all Katakana characters in the argument to Hiragana.
 *
 * non-Katakana characters are keep untouched.
 *
 * @example
 * // returns 'こんにちは'
 * kata2hiraAll('コンニチハ');
 *
 * @example
 * // returns '今日は'
 * hira2kataAll('今日ハ');
 */
export const kata2hiraAll = (s: string): string =>
  [...s].map(c => (isKatakana(c) ? kata2hira(c) : c)).join('');

/**
 * Code point of 'ぁ', first Hiragana in Unicode.
 *
 * 'ぁ'.codePointAt(0)
 */
const firstHiragana = 12353;

/**
 * Code point of 'ゖ', last Hiragana in Unicode.
 *
 * 'ゖ'.codePointAt(0)
 */
const lastHiragana = 12438;

/**
 * returns whether the first character of the argument is Hiragana.
 */
export const isHiragana = (c: string): boolean => {
  const codePoint = c.codePointAt(0)!;
  return firstHiragana <= codePoint && codePoint <= lastHiragana;
};

/**
 * Code point of 'ァ', first Katakana in Unicode.
 *
 * 'ァ'.codePointAt(0)
 */
const firstKatakana = 12449;

/**
 * Code point of 'ヺ', last Katakana in Unicode.
 *
 * 'ヺ'.codePointAt(0)
 */
const lastKatakana = 12538;

/**
 * returns whether the first character of the argument is Katakana.
 */
export const isKatakana = (c: string): boolean => {
  const codePoint = c.codePointAt(0)!;
  return firstKatakana <= codePoint && codePoint <= lastKatakana;
};

/**
 * returns whether the first character of
 * the argument is Kana (Hiragana or Katakana).
 */
export const isKana = (c: string): boolean => isHiragana(c) || isKatakana(c);

/**
 * returns whether all characters of
 * the argument is Kana (Hiragana or Katakana).
 */
export const isKanaAll = (s: string): boolean => [...s].every(isKana);
