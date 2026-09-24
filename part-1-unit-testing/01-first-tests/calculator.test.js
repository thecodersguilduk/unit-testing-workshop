const { add, subtract, multiply, isEven } = require('./calculator');

describe('add', () => {
  test('adds two positive numbers', () => expect(add(2, 3)).toBe(5));
  test('adds a negative number', () => expect(add(5, -2)).toBe(3));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
  test('floating point – use toBeCloseTo', () => expect(add(0.1, 0.2)).toBeCloseTo(0.3));
});

describe('subtract', () => {
  test('subtracts the second number from the first', () => expect(subtract(10, 4)).toBe(6));
  test('can return a negative result', () => expect(subtract(4, 10)).toBe(-6));
});

describe('multiply', () => {
  test('multiplies two numbers', () => expect(multiply(3, 4)).toBe(12));
  test('anything multiplied by zero is zero', () => expect(multiply(99, 0)).toBe(0));
});

describe('isEven', () => {
  test('returns true for an even number', () => expect(isEven(4)).toBe(true));
  test('returns false for an odd number', () => expect(isEven(7)).toBe(false));
  test('treats zero as even', () => expect(isEven(0)).toBe(true));
  test('works for negative numbers', () => {
    expect(isEven(-2)).toBe(true);
    expect(isEven(-3)).toBe(false);
  });
});
