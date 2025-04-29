class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ProductFactory {
    static create(type) {
      switch(type) {
        case 'book':
          return new Product('Libro', 20);
        case 'shirt':
          return new Product('Camiseta', 15);
        default:
          throw new Error('Tipo desconocido');
      }
    }
  }
  
  module.exports = ProductFactory;
  