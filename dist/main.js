const BETWEEN_KATAKANA_HIRAGANA = 96;
export const hira2kata = (c) => String.fromCodePoint(c.codePointAt(0) + BETWEEN_KATAKANA_HIRAGANA);
export const hira2kataAll = (s) => [...s].map(c => (isHiragana(c) ? hira2kata(c) : c)).join('');
export const kata2hira = (c) => String.fromCodePoint(c.codePointAt(0) - BETWEEN_KATAKANA_HIRAGANA);
export const kata2hiraAll = (s) => [...s].map(c => (isKatakana(c) ? kata2hira : c)).join('');
const firstHiragana = 12353;
const lastHiragana = 12438;
export const isHiragana = (c) => {
    const codePoint = c.codePointAt(0);
    return firstHiragana <= codePoint && codePoint <= lastHiragana;
};
const firstKatakana = 12449;
const lastKatakana = 12538;
export const isKatakana = (c) => {
    const codePoint = c.codePointAt(0);
    return firstKatakana <= codePoint && codePoint <= lastKatakana;
};
export const isKana = (c) => isHiragana(c) || isKatakana(c);
export const isKanaAll = (s) => [...s].every(isKana);
