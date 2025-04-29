# Demo Example-Design-Patterns

## Student: Farley Rodrigo Eduardo Viveros Blanco

## Execute
In new terminal, execute the command: node src/main.js

## Implemented Patterns

### 1. **Factory Method**  
**Purpose:** Centralizes the creation of specific objects, allowing the instance type to be modified without altering the client code.  
**Use Case:** Ideal for systems with multiple product types that share a common interface.  
**Example:**  
// Create 'Book' or 'T-Shirt' depending on the parameter
const product = ProductFactory.create('book');

### 2. **Observer**  
**Purpose:** Automatically notifies multiple components about important events.  
**Use case:** Perfect for real-time notification systems or status updates.  
Example:** **  
notificationSystem.subscribe(new EmailNotification());
notificationSystem.notify('Order created'); // Triggers notifications.

### 3. **State**  
**Purpose:** Allows an object to alter its behavior by changing its internal state.  
**Use case:** Workflow management (e.g., processed → shipped → delivered).  
**Example:**  
order.nextState(); // Changes from 'Processing' to 'Sent'.

### 4. **DTO (Data Transfer Object)  
**Purpose:** Data structure for transfer between components, avoiding coupling.  
**Use case:** Protects the internal structure of the business model when exposing APIs.  
**Example:** **Const productDTO = new ProductDTO  
const productDTO = new ProductDTO(product); // { name, price, tax }

### 5. **Singleton**  
**Purpose:** Ensures a single global instance accessible from anywhere in the system.  
**Use case:** Shared resources such as loggers, DB connections or configurations.  
**Example:** **Example:**
Logger.log('Message'); // Use the same instance throughout the app.

Key benefits:** **Flexibility:** ** Adding new  
**Flexibility:** Add new types of products/status without breaking existing code  
**Scalability:** Unlimited notifications with the Observer  
**Security:** DTO acts as a “translator” between layers  
**Consistency:** Singleton prevents duplication of resources
