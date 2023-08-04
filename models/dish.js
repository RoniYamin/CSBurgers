const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dish = new Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    CategoryId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Dish', Dish);