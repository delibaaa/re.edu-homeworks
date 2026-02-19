class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    this.items.push(item);
  }

  removeFromCart(id) {
    this.items = this.items.filter((i) => i.id !== id);
  }

  updateItem(id, updates) {
    const item = this.items.find((i) => i.id === id);
    if (item) Object.assign(item, updates);
  }

  calculateTotalPrice() {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}

const cart = new ShoppingCart();
cart.addToCart({ id: 1, name: "porsche 911", price: 80000, quantity: 1 });
cart.addToCart({ id: 2, name: "girlfriends", price: 1, quantity: 30 });
cart.updateItem(1, { quantity: 2 });
console.log(cart.calculateTotalPrice());
cart.removeFromCart(2);
console.log(cart.items);
