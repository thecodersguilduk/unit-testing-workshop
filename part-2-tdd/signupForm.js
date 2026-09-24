// Suggested solution – one of many valid approaches. See CHALLENGE.md for the spec.

const isBlank = (value) => typeof value !== 'string' || value.trim() === '';

function validateSignup(form = {}, { today = new Date() } = {}) {
  const errors = {};

  if (isBlank(form.firstName)) errors.firstName = 'First name is required';
  if (isBlank(form.lastName)) errors.lastName = 'Last name is required';
  if (isBlank(form.email)) errors.email = 'Email is required';

  return { valid: Object.keys(errors).length === 0, errors };
}

module.exports = { validateSignup };
