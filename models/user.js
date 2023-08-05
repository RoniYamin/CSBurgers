const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },

    orders: {
        type: Array,
        required: true
    },

    phoneNumber: {
        type: Number,
        required: true
    },

    password: {
        type: string,
        required: true
    },

    is_Manager: {
        type: Boolean,
        required: true
    },

    currentNumber:{
        type: mongoose.Schema.Types.ObjectId
    }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;