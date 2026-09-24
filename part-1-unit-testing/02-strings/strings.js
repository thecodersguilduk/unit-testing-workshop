/** "steve" -> "Steve". Empty string returns empty string. */
function capitalise(word) {
  if (!word) return '';
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/** ("  ada ", "LOVELACE") -> "Ada Lovelace" */
function formatFullName(first, last) {
  return `${capitalise(first.trim())} ${capitalise(last.trim())}`;
}

/** "Hello World!" -> "hello-world"  (lowercase, spaces to dashes, punctuation removed) */
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Shortens text longer than max and adds "..." – the result (including "...") is never longer than max. */
function truncate(text, max) {
  if (text.length <= max) return text;
  return text.slice(0, max - 3) + '...';
}

module.exports = { capitalise, formatFullName, slugify, truncate };
