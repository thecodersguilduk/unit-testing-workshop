const { fetchLearner, getOtjSummary, hasMetOtjTarget } = require('./learnerService');

describe('fetchLearner', () => {
  test('known id', async () => {
    const learner = await fetchLearner(1);
    expect(learner.name).toBe('Ada Lovelace');
  });
  test('unknown id rejects', async () => {
    await expect(fetchLearner(999)).rejects.toThrow('Learner not found');
  });
});

describe('getOtjSummary', () => {
  test('Ada at 40%', async () => {
    await expect(getOtjSummary(1)).resolves.toBe('Ada Lovelace: 120/300 OTJ hours (40%)');
  });
  test('100% on target', async () => {
    expect(await getOtjSummary(2)).toContain('(100%)');
  });
  test('0 hours', async () => {
    expect(await getOtjSummary(3)).toBe('Grace Hopper: 0/280 OTJ hours (0%)');
  });
  test('unknown rejects', async () => {
    await expect(getOtjSummary(42)).rejects.toThrow('Learner not found');
  });
});

describe('hasMetOtjTarget', () => {
  test('equal to target is true', async () => expect(await hasMetOtjTarget(2)).toBe(true));
  test('under target is false', async () => expect(await hasMetOtjTarget(1)).toBe(false));
});
