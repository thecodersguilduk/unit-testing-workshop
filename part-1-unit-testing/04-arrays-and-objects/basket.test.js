const { createBasket, addItem, removeItem, basketTotal } = require('./basket');

const coffee = { id: 'c1', name: 'Coffee', price: 3.5 };
const cake = { id: 'k1', name: 'Cake', price: 2.25 };

let basket;
beforeEach(() => {
  basket = createBasket();
});

test('starts empty', () => expect(createBasket()).toEqual({ items: [] }));

describe('addItem', () => {
  test('adds an item', () => expect(addItem(basket, coffee).items).toHaveLength(1));
  test('defaults quantity to 1', () => {
    expect(addItem(basket, coffee).items[0]).toMatchObject({ id: 'c1', quantity: 1 });
  });
  test('same item twice increases quantity', () => {
    const result = addItem(addItem(basket, coffee), coffee);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].quantity).toBe(2);
  });
  test('does not mutate the original basket', () => {
    const before = addItem(basket, coffee);
    const snapshot = JSON.parse(JSON.stringify(before));
    addItem(before, coffee);
    addItem(before, cake);
    expect(before).toEqual(snapshot);
  });
});

describe('removeItem', () => {
  test('removes by id', () => {
    const b = addItem(addItem(basket, coffee), cake);
    expect(removeItem(b, 'c1').items).not.toContainEqual(expect.objectContaining({ id: 'c1' }));
  });
  test('unknown id leaves it unchanged', () => {
    const b = addItem(basket, coffee);
    expect(removeItem(b, 'nope')).toEqual(b);
  });
});

describe('basketTotal', () => {
  test('empty is 0', () => expect(basketTotal(basket)).toBe(0));
  test('price x quantity', () => expect(basketTotal(addItem(basket, { ...coffee, quantity: 3 }))).toBe(10.5));
  test('several items', () => expect(basketTotal(addItem(addItem(basket, coffee), cake))).toBe(5.75));
});
