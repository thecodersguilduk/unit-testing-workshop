/**
 * Pretend database – in real life this would be an API or DB call that takes time.
 */
const learners = {
  1: { id: 1, name: 'Ada Lovelace', otjHoursLogged: 120, otjHoursTarget: 300 },
  2: { id: 2, name: 'Alan Turing', otjHoursLogged: 300, otjHoursTarget: 300 },
  3: { id: 3, name: 'Grace Hopper', otjHoursLogged: 0, otjHoursTarget: 280 },
};

/** Resolves with the learner after a short delay, or rejects with Error('Learner not found'). */
function fetchLearner(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const learner = learners[id];
      if (learner) resolve(learner);
      else reject(new Error('Learner not found'));
    }, 50);
  });
}

/**
 * Resolves with a summary string, e.g.
 *   'Ada Lovelace: 120/300 OTJ hours (40%)'
 * Percentage is rounded to the nearest whole number.
 * Rejects if the learner doesn't exist.
 */
async function getOtjSummary(id) {
  const learner = await fetchLearner(id);
  const percent = Math.round((learner.otjHoursLogged / learner.otjHoursTarget) * 100);
  return `${learner.name}: ${learner.otjHoursLogged}/${learner.otjHoursTarget} OTJ hours (${percent}%)`;
}

/** Resolves true if the learner has hit (or passed) their OTJ target. */
async function hasMetOtjTarget(id) {
  const learner = await fetchLearner(id);
  return learner.otjHoursLogged >= learner.otjHoursTarget;
}

module.exports = { fetchLearner, getOtjSummary, hasMetOtjTarget };
