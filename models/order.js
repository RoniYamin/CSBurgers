const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderNumber: {
        type: Number,
        required: true
    },

    orderDate: {
        type: Date, 
        default: Date.now,
        required: true
    },

    customerId: {
        type: Number,
        required: true
    },

    totalprice: {
        type: Number,
        required: true
    },

    meals: {
        type: Array,
        required: true
    },

    dishes: {
        type: Array,
        required: true
    }
});

const Order = mongoose.model("orders", OrderSchema);

module.exports = Order;