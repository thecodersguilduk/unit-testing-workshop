// Suggested solution – built one level at a time. Step through the commits on this branch
// (git log --oneline -- part-2-tdd) to see how the tests drove the code.
const { validateSignup } = require('./signupForm');

const TODAY = new Date('2026-09-25');
const validForm = (overrides = {}) => ({
  firstName: 'Ada',
  lastName: 'Lovelace',
  email: 'ada@example.com',
  password: 'Engines1843',
  confirmPassword: 'Engines1843',
  dateOfBirth: '2000-12-10',
  ...overrides,
});
const validate = (overrides) => validateSignup(validForm(overrides), { today: TODAY });

describe('Level 1 – required fields', () => {
  test('first name is required', () => expect(validate({ firstName: '' }).errors.firstName).toBe('First name is required'));
  test('whitespace-only counts as missing', () => expect(validate({ lastName: '   ' }).errors.lastName).toBe('Last name is required'));
  test('missing field entirely', () => {
    const { firstName, ...noFirstName } = validForm();
    expect(validateSignup(noFirstName, { today: TODAY }).errors.firstName).toBe('First name is required');
  });
  test('email is required', () => expect(validate({ email: '' }).errors.email).toBe('Email is required'));
});

describe('Level 2 – email format', () => {
  test.each(['ada', 'ada@', '@example.com', 'ada@example', 'ada lovelace@example.com'])('%s is invalid', (email) => {
    expect(validate({ email }).errors.email).toBe('Please enter a valid email address');
  });
  test('a@b.co is valid', () => expect(validate({ email: 'a@b.co' }).errors.email).toBeUndefined());
});

describe('Level 3 – password', () => {
  test.each([
    ['', 'Password is required'],
    ['Ab1', 'Password must be at least 8 characters'],
    ['Abcdefgh', 'Password must contain a number'],
    ['abcdefg1', 'Password must contain an uppercase letter'],
  ])('"%s" -> %s', (password, message) => {
    expect(validate({ password, confirmPassword: password }).errors.password).toBe(message);
  });
  test('reports only the first failing rule', () => {
    expect(validate({ password: 'abc', confirmPassword: 'abc' }).errors.password).toBe('Password must be at least 8 characters');
  });
});

describe('Level 4 – confirm password', () => {
  test('mismatch', () => expect(validate({ confirmPassword: 'Engines1844' }).errors.confirmPassword).toBe('Passwords do not match'));
  test('match is fine', () => expect(validate().errors.confirmPassword).toBeUndefined());
});

describe('Level 5 – age', () => {
  test('required', () => expect(validate({ dateOfBirth: '' }).errors.dateOfBirth).toBe('Date of birth is required'));
  test.each(['25/09/2000', '2000-13-01', '2023-02-30', 'yesterday'])('%s is not a valid date', (dateOfBirth) => {
    expect(validate({ dateOfBirth }).errors.dateOfBirth).toBe('Please enter a valid date');
  });
  test('16th birthday today is allowed', () => expect(validate({ dateOfBirth: '2010-09-25' }).errors.dateOfBirth).toBeUndefined());
  test('16th birthday tomorrow is not', () => {
    expect(validate({ dateOfBirth: '2010-09-26' }).errors.dateOfBirth).toBe('You must be at least 16 to sign up');
  });
});

