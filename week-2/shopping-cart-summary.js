// Assignment 1: Shopping Cart Summary Module
const cart = [
  { id: 101, name: 'Laptop', price: 60000, quantity: 1, inStock: true },
  { id: 102, name: 'Mouse', price: 800, quantity: 2, inStock: true },
  { id: 103, name: 'Keyboard', price: 1500, quantity: 1, inStock: false },
  { id: 104, name: 'Monitor', price: 12000, quantity: 1, inStock: true }
];

export function getInStockProducts(items) {
  return items.filter(item => item.inStock);
}

export function getProductTotals(items) {
  return items.map(item => ({
    name: item.name,
    totalPrice: item.price * item.quantity
  }));
}

export function getGrandTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function findProductByName(items, name) {
  return items.find(item => item.name.toLowerCase() === name.toLowerCase());
}

export function findProductIndex(items, name) {
  return items.findIndex(item => item.name.toLowerCase() === name.toLowerCase());
}

console.log('Shopping cart summary:');
console.log(getInStockProducts(cart));
console.log(getProductTotals(cart));
console.log('Grand total:', getGrandTotal(cart));
console.log('Mouse details:', findProductByName(cart, 'Mouse'));
console.log('Keyboard index:', findProductIndex(cart, 'Keyboard'));


