import { hira2kata } from './main.js';

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

const main = () => {
  test_hira2kata();
};

main();
