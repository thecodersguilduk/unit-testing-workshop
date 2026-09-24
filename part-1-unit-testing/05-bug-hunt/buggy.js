// FIXED VERSION – 6 bugs in the learner copy:
//  1. isLeapYear ignores the 100/400 rule
//  2. fizzBuzz checks 3 before 15, so 15 -> 'Fizz'
//  3. fizzBuzz returns a number, not a string, for the default case
//  4. average([]) returns NaN, not 0
//  5. longestWord returns the LAST longest word on a tie (>= instead of >)
//  6. longestWord includes punctuation ('testing!')

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function fizzBuzz(n) {
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return String(n);
}

function average(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}

function longestWord(sentence) {
  const words = sentence.replace(/[^\w\s]/g, '').split(/\s+/);
  let longest = '';
  for (const word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

module.exports = { isLeapYear, fizzBuzz, average, longestWord };
