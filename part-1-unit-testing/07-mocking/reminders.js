const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Sends an OTJ reminder email to every learner who hasn't logged hours for MORE than 7 days.
 *
 * learners: [{ name, email, lastLogDate: Date }]
 * deps:
 *   emailService – an object with an async send(to, subject, body) method
 *   now          – a function returning the current Date (so tests can control time)
 *
 * - Learners without an email address are skipped.
 * - If sending to one learner fails, carry on with the rest.
 * - Resolves with { sent: number, failed: number }
 */
async function sendOtjReminders(learners, { emailService, now = () => new Date() }) {
  let sent = 0;
  let failed = 0;
  const today = now();

  for (const learner of learners) {
    if (!learner.email) continue;
    const daysSinceLog = (today - learner.lastLogDate) / DAY_MS;
    if (daysSinceLog <= 7) continue;

    try {
      await emailService.send(
        learner.email,
        'Reminder: log your OTJ hours',
        `Hi ${learner.name}, it's been ${Math.floor(daysSinceLog)} days since you last logged OTJ hours.`
      );
      sent++;
    } catch (err) {
      failed++;
    }
  }

  return { sent, failed };
}

module.exports = { sendOtjReminders };
