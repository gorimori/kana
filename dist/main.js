const BETWEEN_KATAKANA_HIRAGANA = 96;
const kana2hira = c =>
  String.fromCodePoint(c.codePointAt(0) + BETWEEN_KATAKANA_HIRAGANA);
const kana2hiraAll = s => [...s].map(kana2hira).join('');
const kata2hira = c =>
  String.fromCodePoint(c.codePointAt(0) - BETWEEN_KATAKANA_HIRAGANA);
const kata2hiraAll = s => [...s].map(kata2hira).join('');
const firstHiragana = 12353;
const lastHiragana = 12438;
function isHiragana(c) {
  const codePoint = c.codePointAt(0);
  return firstHiragana <= codePoint && codePoint <= lastHiragana;
}
const firstKatakana = 12449;
const lastKatakana = 12538;
function isKatakana(c) {
  const codePoint = c.codePointAt(0);
  return firstKatakana <= codePoint && codePoint <= lastKatakana;
}
const isKana = c => isHiragana(c) || isKatakana(c);
const isKanaAll = s => [...s].every(isKana);
