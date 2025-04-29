class Logger {
    constructor() {
      if (!Logger.instance) {
        this.logs = [];
        Logger.instance = this;
      }
      return Logger.instance;
    }
  
    log(message) {
      this.logs.push(message);
      console.log(`📝 LOG: ${message}`);
    }
  }
  
  const instance = new Logger();
  Object.freeze(instance);
  
  module.exports = instance;
  