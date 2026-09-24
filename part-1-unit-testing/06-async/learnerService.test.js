/**
 * EXERCISE 06 – Testing async code
 * --------------------------------
 * If a function returns a Promise, Jest needs to WAIT for it. Two common ways:
 *
 *   test('async/await style', async () => {
 *     const result = await getOtjSummary(1);
 *     expect(result).toBe('...');
 *   });
 *
 *   test('resolves/rejects style', async () => {
 *     await expect(getOtjSummary(1)).resolves.toBe('...');
 *     await expect(getOtjSummary(999)).rejects.toThrow('Learner not found');
 *   });
 *
 * ⚠️ Trap: forget the `await` / `async` and your test can pass even when it's wrong!
 *    Try it: remove the `await` from the example below and change the expected value
 *    to something silly. Does the test still pass? Why?
 */
const { fetchLearner, getOtjSummary, hasMetOtjTarget } = require('./learnerService');

describe('fetchLearner', () => {
  test('resolves with the learner for a known id', async () => {
    const learner = await fetchLearner(1);
    expect(learner.name).toBe('Ada Lovelace');
  });

  test.todo('rejects with "Learner not found" for an unknown id');
});

describe('getOtjSummary', () => {
  test.todo('returns the summary string for Ada (40%)');
  test.todo('shows 100% for a learner who has hit their target');
  test.todo('handles a learner with 0 hours logged');
  test.todo('rejects for an unknown learner');
});

describe('hasMetOtjTarget', () => {
  test.todo('true when hours logged equals the target');
  test.todo('false when under target');
});
