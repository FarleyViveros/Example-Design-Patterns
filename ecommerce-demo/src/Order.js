class Order {
    constructor() {
      this.state = new ProcessingState();
    }
  
    nextState() {
      this.state = this.state.next();
    }
  }
  
  class ProcessingState {
    next() {
      console.log('Cambiando a estado "Enviado"');
      return new ShippedState();
    }
  }
  
  class ShippedState {
    next() {
      console.log('Cambiando a estado "Entregado"');
      return new DeliveredState();
    }
  }
  
  class DeliveredState {
    next() {
      console.log('Pedido finalizado');
    }
  }
  
  module.exports = Order;
  