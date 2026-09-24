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

function validateSignup(form = {}, { today = new Date() } = {}) {
  const errors = {};

  if (isBlank(form.firstName)) errors.firstName = 'First name is required';
  if (isBlank(form.lastName)) errors.lastName = 'Last name is required';

  if (isBlank(form.email)) errors.email = 'Email is required';
  else if (!isValidEmail(form.email)) errors.email = 'Please enter a valid email address';

  const passwordError = checkPassword(form.password);
  if (passwordError) errors.password = passwordError;

  if (form.confirmPassword !== form.password) errors.confirmPassword = 'Passwords do not match';

  return { valid: Object.keys(errors).length === 0, errors };
}

module.exports = { validateSignup };
