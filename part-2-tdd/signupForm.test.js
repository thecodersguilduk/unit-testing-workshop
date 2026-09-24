/**
 * PART 2 – TDD: write your tests here FIRST, then the code in signupForm.js.
 * Read CHALLENGE.md before you start.
 *
 * To get going, uncomment the first test below, run it, and watch it go RED.
 * Then write just enough code in signupForm.js to make it GREEN.
 *
 * Tip: a helper that builds a VALID form means each test only has to change
 * the one field it cares about:
 *
 *   const validForm = (overrides = {}) => ({
 *     firstName: 'Ada',
 *     lastName: 'Lovelace',
 *     email: 'ada@example.com',
 *     password: 'Engines1843',
 *     confirmPassword: 'Engines1843',
 *     dateOfBirth: '2000-12-10',
 *     ...overrides,
 *   });
 *
 *   validateSignup(validForm({ email: '' }), { today: TODAY });
 */
const { validateSignup } = require('./signupForm');

const TODAY = new Date('2026-09-25');

describe('Level 1 – required fields', () => {
  // test('first name is required', () => {
  //   const result = validateSignup({ firstName: '' }, { today: TODAY });
  //   expect(result.errors.firstName).toBe('First name is required');
  // });

  test.todo('your first test goes here…');
});
