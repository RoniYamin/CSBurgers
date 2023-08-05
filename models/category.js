const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const Category = mongoose.model("catrgories", CategorySchema);

module.exports = Category;