/**
 * EXERCISE 03 – Edge cases, boundaries and errors
 * -----------------------------------------------
 * The "happy path" is the easy bit. Bugs live at the EDGES.
 *
 * New tools:
 *   - Testing errors: expect(() => fn(badInput)).toThrow()
 *                     expect(() => fn(badInput)).toThrow('some message')
 *                     expect(() => fn(badInput)).toThrow(RangeError)
 *     ⚠️ Note the arrow function! Why do you think it's needed?
 *
 *   - test.each – run the same test with a table of inputs:
 *     test.each([
 *       [49, 'Fail'],
 *       [50, 'Pass'],
 *     ])('score %i is a %s', (score, expected) => {
 *       expect(getGrade(score)).toBe(expected);
 *     });
 *
 * Group challenge: for getGrade, what is the SMALLEST set of scores that proves
 * every boundary works? (Hint: boundary value analysis – test either side of each line.)
 */
const { applyDiscount, getGrade } = require('./pricing');

describe('applyDiscount', () => {
  test('takes 10% off £100', () => {
    expect(applyDiscount(100, 10)).toBe(90);
  });

  test.todo('0% discount returns the original price');
  test.todo('100% discount returns 0');
  test.todo('rounds to 2 decimal places (try £9.99 with 33% off)');
  test.todo('throws if the price is negative');
  test.todo('throws if the discount is over 100');
  test.todo('throws if the discount is negative');
});

describe('getGrade', () => {
  test.todo('use test.each to check every grade boundary');
  test.todo('throws a RangeError for a score over 100');
  test.todo('throws a RangeError for a negative score');
  test.todo('throws a TypeError for a string like "75"');
  test.todo('what should happen with 69.5? Discuss, then write a test that documents the behaviour');
});
