const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    dishesId: {
        type: Array,
        required: true
    }
});

const Meal = mongoose.model("meals", MealSchema);

module.exports = Meal;