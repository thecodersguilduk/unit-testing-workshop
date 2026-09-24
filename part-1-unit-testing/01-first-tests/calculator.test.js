/**
 * EXERCISE 01 – Your first tests
 * ------------------------------
 * Goal: get comfortable with the shape of a Jest test.
 *
 *   describe('thing being tested', () => {
 *     test('what it should do', () => {
 *       expect(actual).toBe(expected);
 *     });
 *   });
 *
 * Matchers you'll need: toBe, toBeTruthy / toBeFalsy (or toBe(true) / toBe(false))
 *
 * One test is done for you. Turn each test.todo into a real test.
 * Run just this file with:  npx jest 01
 */
const { add, subtract, multiply, isEven } = require('./calculator');

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test.todo('adds a negative number');
  test.todo('adding zero returns the same number');
});

describe('subtract', () => {
  test.todo('subtracts the second number from the first');
  test.todo('can return a negative result');
});

describe('multiply', () => {
  test.todo('multiplies two numbers');
  test.todo('anything multiplied by zero is zero');
});

describe('isEven', () => {
  test.todo('returns true for an even number');
  test.todo('returns false for an odd number');
  test.todo('treats zero as even');
  test.todo('works for negative numbers');
});

// 🤔 Discuss as a group: try  expect(add(0.1, 0.2)).toBe(0.3)  – what happens and why?
//    Look up the toBeCloseTo matcher.
