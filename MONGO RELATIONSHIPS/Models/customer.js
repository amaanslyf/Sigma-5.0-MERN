const mongoose = require('mongoose');
const { Schema } = mongoose;

main()
    .then(() => {
        console.log("Connection successfull")
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect('mongodb://localhost:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});


const customerSchema = new Schema({
    name: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'

    }]
});


const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);

const addCustomer=async () => {
    let cust1 = new Customer({
        name: "John Doe",
    }); 
    let order1 = await Order.findOne({ item: "Chips" });
    let order2 = await Order.findOne({ item: "Chocolate" });
    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log("Customer added successfully");
};
addCustomer();
    
    

const addOrders = async () => {
    let res = await Order.insertMany([
        { item: "Samosa", price: 12 },
        { item: "Chips", price: 10 },
        { item: "Chocolate", price: 40 }
    ]);
    console.log("Orders added successfully");
};
addOrders();