/**
 * EXERCISE 05 – Bug hunt tests
 * Read the instructions at the top of buggy.js first.
 *
 * Group tip: have ONE person read the spec aloud and the others suggest test cases
 * BEFORE anyone looks at the code.
 *
 * How many bugs did your group find? (There are at least 5.)
 */
const { isLeapYear, fizzBuzz, average, longestWord } = require('./buggy');

describe('isLeapYear', () => {
  test('2024 is a leap year', () => {
    expect(isLeapYear(2024)).toBe(true);
  });

  test.todo('write tests for every rule in the spec');
});

describe('fizzBuzz', () => {
  test.todo('write tests for every rule in the spec');
});

describe('average', () => {
  test.todo('write tests for every rule in the spec');
});

describe('longestWord', () => {
  test.todo('write tests for every rule in the spec');
});
