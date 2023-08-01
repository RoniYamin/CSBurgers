const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Catrgory = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Catrgory', Catrgory);