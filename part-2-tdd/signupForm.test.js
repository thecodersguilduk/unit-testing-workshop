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

