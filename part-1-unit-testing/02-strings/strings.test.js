const { capitalise, formatFullName, slugify, truncate } = require('./strings');

describe('capitalise', () => {
  test('capitalises the first letter', () => expect(capitalise('steve')).toBe('Steve'));
  test('lowercases the rest', () => expect(capitalise('sTEVE')).toBe('Steve'));
  test('empty string', () => expect(capitalise('')).toBe(''));
});

describe('formatFullName', () => {
  test('joins with a space', () => expect(formatFullName('Ada', 'Lovelace')).toBe('Ada Lovelace'));
  test('trims whitespace', () => expect(formatFullName('  Ada ', ' Lovelace  ')).toBe('Ada Lovelace'));
  test('fixes capitalisation', () => expect(formatFullName('aDA', 'LOVELACE')).toBe('Ada Lovelace'));
});

describe('slugify', () => {
  test('lowercases and dashes', () => expect(slugify('Hello World')).toBe('hello-world'));
  test('removes punctuation', () => expect(slugify('Hello, World!')).toBe('hello-world'));
  test('no double dashes', () => expect(slugify('hello   -  world')).not.toMatch(/--/));
  test('only safe characters', () => expect(slugify("What's New in 2026?")).toMatch(/^[a-z0-9-]+$/));
});

describe('truncate', () => {
  test('leaves short text alone', () => expect(truncate('Hi', 10)).toBe('Hi'));
  test('adds ...', () => expect(truncate('Hello world', 8)).toBe('Hello...'));
  test('never longer than max', () => expect(truncate('A very long sentence indeed', 12)).toHaveLength(12));
  test('exactly max is not truncated', () => expect(truncate('12345', 5)).toBe('12345'));
});
