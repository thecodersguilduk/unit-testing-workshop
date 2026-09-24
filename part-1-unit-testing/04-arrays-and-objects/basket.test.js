/**
 * EXERCISE 04 – Arrays and objects
 * --------------------------------
 * toBe checks "is this the exact same thing?" (===)
 * toEqual checks "does this have the same contents?" (deep equality)
 *
 * Try this first:  expect({ a: 1 }).toBe({ a: 1 })   – why does it fail?
 *
 * New matchers: toEqual, toHaveLength, toContainEqual, toHaveProperty, toMatchObject
 *
 * Tip: create test data in a beforeEach so every test starts fresh.
 */
const { createBasket, addItem, removeItem, basketTotal } = require('./basket');

const coffee = { id: 'c1', name: 'Coffee', price: 3.5 };
const cake = { id: 'k1', name: 'Cake', price: 2.25 };

describe('createBasket', () => {
  test('starts empty', () => {
    expect(createBasket()).toEqual({ items: [] });
  });
});

describe('addItem', () => {
  test.todo('adds an item to an empty basket (toHaveLength)');
  test.todo('defaults quantity to 1 (toHaveProperty or toMatchObject)');
  test.todo('adding the same item twice increases the quantity rather than adding a duplicate');
  test.todo('does NOT change the original basket (immutability!)');
});

describe('removeItem', () => {
  test.todo('removes an item by id');
  test.todo('removing an id that is not in the basket leaves it unchanged');
});

describe('basketTotal', () => {
  test.todo('an empty basket totals 0');
  test.todo('multiplies price by quantity');
  test.todo('adds up several different items');
});

// 🤔 Discuss: if addItem mutated the original basket, which of your tests would catch it?
//    If none – write one that would.
