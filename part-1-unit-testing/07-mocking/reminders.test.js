const { sendOtjReminders } = require('./reminders');

const TODAY = new Date('2026-09-25T09:00:00Z');
const daysAgo = (n) => new Date(TODAY.getTime() - n * 24 * 60 * 60 * 1000);
const now = () => TODAY;
let emailService;

beforeEach(() => {
  emailService = { send: jest.fn().mockResolvedValue(true) };
});

const ada = { name: 'Ada', email: 'ada@example.com', lastLogDate: daysAgo(10) };

test('emails a learner 10 days overdue', async () => {
  expect(await sendOtjReminders([ada], { emailService, now })).toEqual({ sent: 1, failed: 0 });
  expect(emailService.send).toHaveBeenCalledTimes(1);
});

test('no email if logged 3 days ago', async () => {
  await sendOtjReminders([{ ...ada, lastLogDate: daysAgo(3) }], { emailService, now });
  expect(emailService.send).not.toHaveBeenCalled();
});

test('exactly 7 days – no email', async () => {
  await sendOtjReminders([{ ...ada, lastLogDate: daysAgo(7) }], { emailService, now });
  expect(emailService.send).not.toHaveBeenCalled();
});

test('right address and name', async () => {
  await sendOtjReminders([ada], { emailService, now });
  expect(emailService.send).toHaveBeenCalledWith('ada@example.com', expect.any(String), expect.stringContaining('Ada'));
});

test('body says how many days', async () => {
  await sendOtjReminders([ada], { emailService, now });
  const [, , body] = emailService.send.mock.calls[0];
  expect(body).toContain('10 days');
});

test('skips learners with no email', async () => {
  await sendOtjReminders([{ ...ada, email: '' }], { emailService, now });
  expect(emailService.send).not.toHaveBeenCalled();
});

test('one failure does not stop the rest', async () => {
  emailService.send.mockRejectedValueOnce(new Error('SMTP down'));
  const alan = { name: 'Alan', email: 'alan@example.com', lastLogDate: daysAgo(20) };
  const result = await sendOtjReminders([ada, alan], { emailService, now });
  expect(result).toEqual({ sent: 1, failed: 1 });
  expect(emailService.send).toHaveBeenCalledTimes(2);
});

test('empty list', async () => {
  expect(await sendOtjReminders([], { emailService, now })).toEqual({ sent: 0, failed: 0 });
});

test('stretch: fake timers instead of injecting now', async () => {
  jest.useFakeTimers().setSystemTime(TODAY);
  await sendOtjReminders([ada], { emailService });
  expect(emailService.send).toHaveBeenCalledTimes(1);
  jest.useRealTimers();
});
