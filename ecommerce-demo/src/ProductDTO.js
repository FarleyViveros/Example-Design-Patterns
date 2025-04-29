class ProductDTO {
    constructor(product) {
      this.name = product.name;
      this.price = product.price;
      this.tax = product.price * 0.16;
    }
  
    getSummary() {
      return `${this.name} - $${this.price} (+$${this.tax.toFixed(2)} IVA)`;
    }
  }
  
  module.exports = ProductDTO;
  