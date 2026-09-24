const { isLeapYear, fizzBuzz, average, longestWord } = require('./buggy');

describe('isLeapYear', () => {
  test.each([
    [2024, true],
    [2023, false],
    [1900, false], // bug 1
    [2000, true],
  ])('%i -> %s', (year, expected) => expect(isLeapYear(year)).toBe(expected));
});

describe('fizzBuzz', () => {
  test('3 -> Fizz', () => expect(fizzBuzz(3)).toBe('Fizz'));
  test('5 -> Buzz', () => expect(fizzBuzz(5)).toBe('Buzz'));
  test('15 -> FizzBuzz', () => expect(fizzBuzz(15)).toBe('FizzBuzz')); // bug 2
  test('7 -> "7" (a string)', () => expect(fizzBuzz(7)).toBe('7')); // bug 3
});

describe('average', () => {
  test('[2,4,6] -> 4', () => expect(average([2, 4, 6])).toBe(4));
  test('[] -> 0', () => expect(average([])).toBe(0)); // bug 4
});

describe('longestWord', () => {
  test('basic', () => expect(longestWord('The quick brown fox')).toBe('quick'));
  test('tie returns the first', () => expect(longestWord('cat dog')).toBe('cat')); // bug 5
  test('ignores punctuation', () => expect(longestWord('I love testing!')).toBe('testing')); // bug 6
});
