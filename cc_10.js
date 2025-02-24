//Task 1 Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price; 
        this.stock = stock; 
    }
    getDetails() {
        return `Product: ${this.name}, ID ${this.id}, Price $${this.price}, Stock: ${this.stock}`
    }
    updateStock(quantity) {
         this.stock -= quantity
    } // Creating a class product with properties. 
}

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7


//Task 2 Creating an Order Class
class Order { constructor(orderId, product, quantity) {
    this.orderId = orderId;
    this.product = product;
    this.quantity = quantity; 
    this.product.updateStock(quantity)

} // Creating a class order with properties
getOrderDetails() {return `Order ID: ${this.orderId}, Product${this.product}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`}
} // Shows order details
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)


//Task 3 Creating an Inventory Class 
class Inventory { constructor() {
    this.products = []; 
    this.orders = []; 
} addProduct(product) {this.products.push(product)}
listProducts() { this.products.forEach(product => console.log(product.getDetails()))}
//Task 4 Implementing Order Management 
placeOrder(orderId, product , quantity) { if (product.stock >= quantity ) {
    const order = new Order(orderId, product, quantity);
    this.orders.push(order);
} // Added Orders along with methods to create new orders 
} listOrders() {this.orders.forEach(order => console.log (order.getOrderDetails()))} 
//Logs placed Orders 

//Task 5 Implementing Product Restocking 
restockProduct(productId, quantity) {let product = this.products.find(product => product.id === productId)
    if (product) {product.stock += quantity}
} // Increased stock of product
}


const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"