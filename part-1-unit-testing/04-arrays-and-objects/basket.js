/**
 * A tiny shopping basket. Every function returns a NEW basket – the original is never changed.
 * An item looks like: { id: 'abc', name: 'Coffee', price: 3.5, quantity: 1 }
 */

function createBasket() {
  return { items: [] };
}

/** Adds an item. If an item with the same id is already in the basket, increase its quantity instead. */
function addItem(basket, item) {
  const existing = basket.items.find((i) => i.id === item.id);
  if (existing) {
    return {
      items: basket.items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i
      ),
    };
  }
  return { items: [...basket.items, { quantity: 1, ...item }] };
}

/** Removes an item completely by id. Removing an id that isn't there does nothing. */
function removeItem(basket, id) {
  return { items: basket.items.filter((i) => i.id !== id) };
}

/** Total cost of everything in the basket, rounded to 2dp. */
function basketTotal(basket) {
  const total = basket.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return Math.round(total * 100) / 100;
}

module.exports = { createBasket, addItem, removeItem, basketTotal };
