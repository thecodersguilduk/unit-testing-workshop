const { applyDiscount, getGrade } = require('./pricing');

describe('applyDiscount', () => {
  test('10% off £100', () => expect(applyDiscount(100, 10)).toBe(90));
  test('0% returns original', () => expect(applyDiscount(50, 0)).toBe(50));
  test('100% returns 0', () => expect(applyDiscount(50, 100)).toBe(0));
  test('rounds to 2dp', () => expect(applyDiscount(9.99, 33)).toBe(6.69));
  test('negative price throws', () => expect(() => applyDiscount(-1, 10)).toThrow('Price cannot be negative'));
  test('discount over 100 throws', () => expect(() => applyDiscount(10, 101)).toThrow('between 0 and 100'));
  test('negative discount throws', () => expect(() => applyDiscount(10, -5)).toThrow());
});

describe('getGrade', () => {
  test.each([
    [0, 'Fail'],
    [49, 'Fail'],
    [50, 'Pass'],
    [69, 'Pass'],
    [70, 'Distinction'],
    [100, 'Distinction'],
  ])('score %i is a %s', (score, expected) => {
    expect(getGrade(score)).toBe(expected);
  });

  test('over 100 throws RangeError', () => expect(() => getGrade(101)).toThrow(RangeError));
  test('negative throws RangeError', () => expect(() => getGrade(-1)).toThrow(RangeError));
  test('string throws TypeError', () => expect(() => getGrade('75')).toThrow(TypeError));
  // Discussion point: current behaviour is 69.5 -> Pass (no rounding). Is that what the business wants?
  test('69.5 is a Pass (documents current behaviour)', () => expect(getGrade(69.5)).toBe('Pass'));
});
