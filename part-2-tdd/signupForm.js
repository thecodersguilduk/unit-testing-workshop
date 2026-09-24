/**
 * Validates the sign-up form. See CHALLENGE.md for the full spec.
 *
 * @param {object} form  – the raw form values (all strings)
 * @param {object} options
 * @param {Date}   options.today – the current date (injected so tests can control it)
 * @returns {{ valid: boolean, errors: object }}
 */
function validateSignup(form, { today = new Date() } = {}) {
  throw new Error('Not implemented yet – write a failing test first! 🔴');
}

module.exports = { validateSignup };
