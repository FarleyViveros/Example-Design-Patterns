class NotificationSystem {
    constructor() {
      this.subscribers = [];
    }
  
    subscribe(observer) {
      this.subscribers.push(observer);
    }
  
    notify(message) {
      this.subscribers.forEach(sub => sub.update(message));
    }
  }
  
  class EmailNotification {
    update(message) {
      console.log(`✉️ Email: ${message}`);
    }
  }
  
  module.exports = { NotificationSystem, EmailNotification };
  