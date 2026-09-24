/**
 * EXERCISE 07 – Mocks (the tricky one)
 * ------------------------------------
 * We do NOT want our unit tests sending real emails! sendOtjReminders takes its
 * email service as a parameter ("dependency injection"), so we can hand it a FAKE.
 *
 *   const emailService = { send: jest.fn().mockResolvedValue(true) };
 *
 * Then we can ask the fake what happened:
 *   expect(emailService.send).toHaveBeenCalledTimes(1);
 *   expect(emailService.send).toHaveBeenCalledWith('ada@example.com', expect.any(String), expect.stringContaining('Ada'));
 *   expect(emailService.send).not.toHaveBeenCalled();
 *
 * Make a fake fail once:  emailService.send.mockRejectedValueOnce(new Error('SMTP down'));
 *
 * We also inject `now` so the test controls what "today" is – no flaky date tests.
 */
const { sendOtjReminders } = require('./reminders');

const TODAY = new Date('2026-09-25T09:00:00Z');
const daysAgo = (n) => new Date(TODAY.getTime() - n * 24 * 60 * 60 * 1000);

let emailService;
const now = () => TODAY;

beforeEach(() => {
  emailService = { send: jest.fn().mockResolvedValue(true) };
});

test('emails a learner who has not logged for 10 days', async () => {
  const learners = [{ name: 'Ada', email: 'ada@example.com', lastLogDate: daysAgo(10) }];

  const result = await sendOtjReminders(learners, { emailService, now });

  expect(emailService.send).toHaveBeenCalledTimes(1);
  expect(result).toEqual({ sent: 1, failed: 0 });
});

test.todo('does NOT email a learner who logged 3 days ago');
test.todo('exactly 7 days ago does NOT get an email (boundary!)');
test.todo('the email goes to the right address and mentions the learner by name');
test.todo('the body says how many days it has been');
test.todo('skips learners with no email address');
test.todo('if one email fails, the others still send – and failed is counted');
test.todo('returns { sent: 0, failed: 0 } for an empty list');

// 🌶️ Stretch: instead of injecting `now`, try jest.useFakeTimers() and jest.setSystemTime().
//    Which approach do you prefer, and why?
