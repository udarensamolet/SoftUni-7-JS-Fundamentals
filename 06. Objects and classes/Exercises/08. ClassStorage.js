function classStorage() {
  class Storage {
    constructor(capacity) {
      this.capacity = capacity;
      this.storage = [];
      this.totalCost = 0;
    }

    addProduct = (product) => {
      this.storage.push(product);
      this.capacity -= product.quantity;
      this.totalCost += product.price * product.quantity;
    };

    getProducts = () => {
      this.storage = this.storage.map(x => JSON.stringify(x));
      return this.storage.join('\n');
    };
  }
}