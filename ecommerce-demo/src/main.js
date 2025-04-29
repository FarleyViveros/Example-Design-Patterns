const ProductFactory = require('./Product');
const { NotificationSystem, EmailNotification } = require('./Notification');
const Order = require('./Order');
const ProductDTO = require('./ProductDTO');
const Logger = require('./Logger');

const notificationSystem = new NotificationSystem();
notificationSystem.subscribe(new EmailNotification());

const product = ProductFactory.create('book');
const productDTO = new ProductDTO(product);

Logger.log('Creando nuevo pedido...');
notificationSystem.notify(`Nuevo producto creado: ${productDTO.getSummary()}`);

const order = new Order();
order.nextState();  
order.nextState();  

Logger.log('Pedido completado');
