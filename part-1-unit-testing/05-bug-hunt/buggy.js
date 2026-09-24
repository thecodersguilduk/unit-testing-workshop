/**
 * EXERCISE 05 – BUG HUNT 🐛
 * ------------------------
 * Every function in this file has AT LEAST ONE bug.
 * The comment above each function is the spec – it is correct. The code is not.
 *
 * Your job:
 *   1. Write tests from the SPEC (don't just read the code and test what it does!)
 *   2. Watch a test go red – that's the bug found
 *   3. Fix the code until everything is green
 *   4. Keep the tests – they now stop the bug ever coming back (a "regression test")
 */

/**
 * Returns true if the year is a leap year.
 * Rules: divisible by 4 is a leap year, EXCEPT years divisible by 100,
 * which are NOT leap years, UNLESS they're also divisible by 400.
 *   2024 -> true, 2023 -> false, 1900 -> false, 2000 -> true
 */
function isLeapYear(year) {
  return year % 4 === 0;
}

/**
 * Returns 'Fizz' for multiples of 3, 'Buzz' for multiples of 5,
 * 'FizzBuzz' for multiples of both, otherwise the number as a string.
 *   3 -> 'Fizz', 5 -> 'Buzz', 15 -> 'FizzBuzz', 7 -> '7'
 */
function fizzBuzz(n) {
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  if (n % 15 === 0) return 'FizzBuzz';
  return n;
}

/**
 * Returns the average (mean) of an array of numbers.
 * An empty array returns 0.
 *   [2, 4, 6] -> 4, [] -> 0
 */
function average(numbers) {
  const total = numbers.reduce((sum, n) => sum + n, 0);
  return total / numbers.length;
}

/**
 * Returns the longest word in a sentence.
 * If two words are the same length, return the FIRST one.
 * Punctuation is not part of a word.
 *   'The quick brown fox' -> 'quick'
 *   'I love testing!'     -> 'testing'
 */
function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';
  for (const word of words) {
    if (word.length >= longest.length) longest = word;
  }
  return longest;
}

module.exports = { isLeapYear, fizzBuzz, average, longestWord };
