# Unit Testing with Jest 🧪

Group coaching session – **Part 1:** unit testing, **Part 2:** Test-Driven Development (TDD).

## Getting set up

1. **Fork** this repo (button top-right on GitHub) so you have your own copy.
2. Clone *your* fork:
   ```bash
   git clone https://github.com/<your-username>/unit-testing-workshop.git
   cd unit-testing-workshop
   ```
3. Install Jest (you'll need Node 18 or newer – check with `node -v`):
   ```bash
   npm install
   ```
4. Check it works:
   ```bash
   npm test
   ```
   You should see everything pass, with a list of **todo** tests. Those todos are your job.

## Useful commands

| Command | What it does |
|---|---|
| `npm test` | Run every test |
| `npm run test:watch` | Re-run tests every time you save a file |
| `npx jest 03` | Run only files matching "03" (e.g. exercise 03) |
| `npm run test:part1` | Run only Part 1 |
| `npm run test:part2` | Run only Part 2 |
| `npm run test:coverage` | Show which lines of code your tests actually run |

## How we're working

You'll work **in a group** – talk it through, share screens, argue about the best test case. But everyone writes the tests in **their own fork**.

- Rotate who's "driving" (sharing their screen and typing) for each exercise.
- Commit after each exercise: `git add . && git commit -m "Exercise 03 tests"`
- Push at the end so your work's saved (and makes good portfolio evidence).

## Part 1 – Unit testing

Each exercise gets a bit harder. Every test file has instructions at the top, one worked example, and a list of `test.todo(...)` for you to turn into real tests.

| # | Exercise | You'll learn |
|---|---|---|
| 01 | `01-first-tests` – calculator | The shape of a test: `describe`, `test`, `expect`, `toBe` |
| 02 | `02-strings` – text formatting | `toMatch`, `toHaveLength`, testing against a spec |
| 03 | `03-edge-cases-and-errors` – pricing & grades | Boundaries, `toThrow`, `test.each` |
| 04 | `04-arrays-and-objects` – shopping basket | `toBe` vs `toEqual`, `beforeEach`, immutability |
| 05 | `05-bug-hunt` 🐛 – buggy functions | Writing tests from a spec to **find** bugs, then fixing them |
| 06 | `06-async` – OTJ learner service | Testing Promises with `async`/`await`, `resolves`/`rejects` |
| 07 | `07-mocking` 🌶️ – OTJ reminder emails | `jest.fn()`, mocks, dependency injection, controlling time |

**In the session:** aim for 01–04, then jump to 05 (bug hunt) if you've got time. Don't rush – quality over quantity.

**Take-away:** finish whatever's left after the session, especially 06 (async) and 07 (mocking). Commit and push as you go.

## Part 2 – TDD

Open [`part-2-tdd/CHALLENGE.md`](part-2-tdd/CHALLENGE.md). You'll build sign-up form validation **tests first**.

**In the session:** aim for Levels 1–4. Levels 5–6 and the stretch goals are yours to take away.

## What makes a good unit test?

- **Tests one thing** – if it fails, you know exactly what broke.
- **Has a clear name** – reads like a sentence: *"rejects an email with no @"*.
- **Arrange → Act → Assert** – set up the data, call the function, check the result.
- **Fast and independent** – no real network, no real emails, no relying on other tests.
- **Tests behaviour, not implementation** – what the function *promises*, not how it does it.
