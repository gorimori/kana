import { hira2kata, hira2kataAll } from './main.js';

type Case = {
  input: string;
  expected: string;
};

const test_hira2kata = () => {
  const cases: Case[] = [
    { input: 'あ', expected: 'ア' },
    { input: 'を', expected: 'ヲ' },
    { input: 'こ', expected: 'コ' },
    { input: 'z', expected: 'Ú' },
    { input: '愛', expected: '慻' }
  ];

  const failedCases = cases.filter(
    ({ input, expected }) => hira2kata(input) !== expected
  );

  if (failedCases.length <= 0) {
    return;
  }

  console.error('[Failed]: hira2kata()');
  for (const { input, expected } of failedCases) {
    console.error(
      `input: ${input}, expected ${expected}, but got ${hira2kata(input)}`
    );
  }
};

const test_hira2kataAll = () => {
  const cases: Case[] = [
    { input: 'こんにちは', expected: 'コンニチハ' },
    { input: '今日は', expected: '今日ハ' },
    { input: 'GoとRust', expected: 'GoトRust' }
  ];

  const failedCases = cases.filter(
    ({ input, expected }) => hira2kataAll(input) !== expected
  );

  if (failedCases.length <= 0) {
    return;
  }

  console.error('[Failed]: hira2kata()');
  for (const { input, expected } of failedCases) {
    console.error(
      `input: ${input}, expected ${expected}, but got ${hira2kata(input)}`
    );
  }
};

const main = () => {
  test_hira2kata();
  test_hira2kataAll();
};

main();
