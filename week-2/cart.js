import { getProductById, checkStock } from './product.js';

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
  // 1. Get product details
  const product = getProductById(productId);
  if (!product) return "Product not found";

  // 2. Check stock availability
  if (!checkStock(productId, quantity)) {
    return "Not enough stock";
  }

  // 3. Check if product already in cart
  const existingItem = cartItems.find(item => item.productId === productId);

  if (existingItem) {
    // If yes, update quantity
    existingItem.quantity += quantity;
  } else {
    // If no, add new item
    cartItems.push({ productId, quantity });
  }

  // 4. Return success/error message
  return "Item added to cart";
}

export function removeFromCart(productId) {
  // Remove product from cart
  cartItems = cartItems.filter(item => item.productId !== productId);
  return "Item removed from cart";
}

export function updateQuantity(productId, newQuantity) {
  // Update quantity of product in cart
  // Check stock before updating

  if (!checkStock(productId, newQuantity)) {
    return "Not enough stock to update quantity";
  }

  const item = cartItems.find(i => i.productId === productId);
  if (!item) return "Item not in cart";

  item.quantity = newQuantity;

  return "Quantity updated";
}

export function getCartItems() {
  // Return all cart items with product details
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      productId: item.productId,
      name: product.name,
      price: product.price,
      quantity: item.quantity,
      total: product.price * item.quantity
    };
  });
}

export function getCartTotal() {
  // Calculate total price of all items in cart
  // Return total
  let total = 0;

  for (let item of cartItems) {
    const product = getProductById(item.productId);
    total += product.price * item.quantity;
  }

  return total;
}

export function clearCart() {
  // Empty the cart
  cartItems = [];
}