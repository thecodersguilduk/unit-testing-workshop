# Part 2 – TDD Challenge: The Sign-up Form

You're building the validation for a sign-up form. There's **no code yet** – just a stub that throws an error. You'll write the tests first, then the code.

## The rule of TDD: Red → Green → Refactor

1. 🔴 **Red** – write ONE small test for the next requirement. Run it. Watch it fail. (If it passes straight away, be suspicious!)
2. 🟢 **Green** – write the *simplest* code that makes it pass. Hard-coding is fine at first – the next test will force you to do better.
3. 🔵 **Refactor** – tidy up the code (and the tests) while everything stays green.
4. Commit. Repeat.

> Resist the urge to write the whole validator in one go. The discipline *is* the exercise.

Run just this part in watch mode (it re-runs every time you save):

```bash
npm run test:part2 -- --watch
```

## The function

```js
validateSignup(form, { today })
```

`form` is what the user typed – every field arrives as a **string**:

```js
{
  firstName: 'Ada',
  lastName: 'Lovelace',
  email: 'ada@example.com',
  password: 'Engines1843',
  confirmPassword: 'Engines1843',
  dateOfBirth: '2000-12-10'   // YYYY-MM-DD
}
```

`today` is a `Date` – passed in so your tests control what "today" is (remember exercise 07?).

It returns:

```js
{ valid: true, errors: {} }
// or
{ valid: false, errors: { email: 'Please enter a valid email address', password: '...' } }
```

## Requirements – work through them in order

> ⏱️ In the session, aim for **Levels 1–4**. Levels 5–6 and the stretch goals are take-away.

### Level 1 – Required fields
- `firstName`, `lastName` and `email` are required.
- A field that's missing, empty, or only spaces counts as missing.
- Messages: `'First name is required'`, `'Last name is required'`, `'Email is required'`

### Level 2 – Email format
- Must have something before an `@`, and a domain containing a `.` after it (e.g. `a@b.co`).
- No spaces allowed.
- Message: `'Please enter a valid email address'`
- (Only check the format if the email isn't empty – an empty email gets the "required" message.)

### Level 3 – Password strength
Check these in order and report the **first** one that fails:
1. Required – `'Password is required'`
2. At least 8 characters – `'Password must be at least 8 characters'`
3. Contains a number – `'Password must contain a number'`
4. Contains an uppercase letter – `'Password must contain an uppercase letter'`

### Level 4 – Confirm password
- `confirmPassword` must match `password` exactly.
- Message (on the `confirmPassword` field): `'Passwords do not match'`

### Level 5 – Age check
- `dateOfBirth` is required: `'Date of birth is required'`
- Must be a real date in `YYYY-MM-DD` format: `'Please enter a valid date'`
- The user must be **16 or over** on `today`: `'You must be at least 16 to sign up'`
- ⚠️ Think hard about the boundary: someone whose 16th birthday is *today* is allowed.

### Level 6 – Putting it together
- **All** errors are reported at once (not just the first field that fails).
- `valid` is `true` only when there are no errors.

## 🌶️ Stretch goals
- Add an optional `postcode` field – if provided, it must look like a UK postcode (`LS1 4AP`, `SW1A 1AA`). Lower case and no space should be accepted.
- Return a cleaned-up `data` object alongside `valid`/`errors`: names trimmed, email trimmed and lowercased.
- Refactor into small, individually tested validator functions (`isValidEmail`, `checkPassword` …). Did your tests make that refactor feel safe?
- Run `npm run test:coverage`. Is there any line of your validator not covered by a test? Why?

## Working as a group
Everyone codes in their **own fork**, but decide together:
- What's the next smallest test to write?
- Is this test testing *one* thing?
- What's the simplest code that could make it pass?

Try **ping-pong**: one person writes a failing test, the next person makes it pass and writes the next failing test.
