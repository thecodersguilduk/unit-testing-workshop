// Suggested solution – one of many valid approaches. See CHALLENGE.md for the spec.

const isBlank = (value) => typeof value !== 'string' || value.trim() === '';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

function checkPassword(password) {
  if (isBlank(password)) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters';
  if (!/\d/.test(password)) return 'Password must contain a number';
  if (!/[A-Z]/.test(password)) return 'Password must contain an uppercase letter';
  return null;
}

function parseDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const [, y, m, d] = match.map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  // Reject dates like 2023-02-30 that JS silently rolls over
  if (date.getUTCFullYear() !== y || date.getUTCMonth() !== m - 1 || date.getUTCDate() !== d) return null;
  return { y, m, d };
}

function ageOn(dob, today) {
  let age = today.getUTCFullYear() - dob.y;
  const month = today.getUTCMonth() + 1;
  const day = today.getUTCDate();
  if (month < dob.m || (month === dob.m && day < dob.d)) age--;
  return age;
}

function checkDateOfBirth(value, today) {
  if (isBlank(value)) return 'Date of birth is required';
  const dob = parseDate(value.trim());
  if (!dob) return 'Please enter a valid date';
  if (ageOn(dob, today) < 16) return 'You must be at least 16 to sign up';
  return null;
}

function validateSignup(form = {}, { today = new Date() } = {}) {
  const errors = {};

  if (isBlank(form.firstName)) errors.firstName = 'First name is required';
  if (isBlank(form.lastName)) errors.lastName = 'Last name is required';

  if (isBlank(form.email)) errors.email = 'Email is required';
  else if (!isValidEmail(form.email)) errors.email = 'Please enter a valid email address';

  const passwordError = checkPassword(form.password);
  if (passwordError) errors.password = passwordError;

  if (form.confirmPassword !== form.password) errors.confirmPassword = 'Passwords do not match';

  const dobError = checkDateOfBirth(form.dateOfBirth, today);
  if (dobError) errors.dateOfBirth = dobError;

  return { valid: Object.keys(errors).length === 0, errors };
}

module.exports = { validateSignup };
