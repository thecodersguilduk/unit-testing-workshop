/**
 * Applies a percentage discount and returns the new price rounded to 2 decimal places.
 * Throws an Error if price is negative, or if percent is below 0 or above 100.
 */
function applyDiscount(price, percent) {
  if (price < 0) throw new Error('Price cannot be negative');
  if (percent < 0 || percent > 100) throw new Error('Discount must be between 0 and 100');
  const discounted = price - price * (percent / 100);
  return Math.round(discounted * 100) / 100;
}

/**
 * Converts a percentage score into an EPA-style grade:
 *   0–49   -> 'Fail'
 *   50–69  -> 'Pass'
 *   70–100 -> 'Distinction'
 * Throws a RangeError for scores below 0 or above 100, and a TypeError if score isn't a number.
 */
function getGrade(score) {
  if (typeof score !== 'number' || Number.isNaN(score)) {
    throw new TypeError('Score must be a number');
  }
  if (score < 0 || score > 100) throw new RangeError('Score must be between 0 and 100');
  if (score >= 70) return 'Distinction';
  if (score >= 50) return 'Pass';
  return 'Fail';
}

module.exports = { applyDiscount, getGrade };
