/**
 * EXERCISE 02 – Testing strings
 * -----------------------------
 * New matchers: toMatch (regex), toHaveLength, toContain
 *
 * Read the comments above each function in strings.js – that's your spec.
 * Test what the spec PROMISES, not just what you think the code does.
 */
const { capitalise, formatFullName, slugify, truncate } = require('./strings');

describe('capitalise', () => {
  test('capitalises the first letter of a lowercase word', () => {
    expect(capitalise('steve')).toBe('Steve');
  });

  test.todo('lowercases the rest of the word ("sTEVE" -> "Steve")');
  test.todo('returns an empty string when given an empty string');
});

describe('formatFullName', () => {
  test.todo('joins first and last name with a space');
  test.todo('trims extra whitespace');
  test.todo('fixes the capitalisation of both names');
});

describe('slugify', () => {
  test.todo('lowercases and replaces spaces with dashes');
  test.todo('removes punctuation');
  test.todo('never produces double dashes (try "hello   -  world")');
  test.todo('only contains lowercase letters, numbers and dashes (use toMatch with a regex)');
});

describe('truncate', () => {
  test.todo('leaves short text alone');
  test.todo('adds "..." when the text is too long');
  test.todo('the result is never longer than max (use toHaveLength)');
  test.todo('text that is EXACTLY max characters is not truncated');
});
