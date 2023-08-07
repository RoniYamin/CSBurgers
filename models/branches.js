const mongoose = require('mongoose');

const BranchesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    address: {
        type: String, 
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    activityTime: {
        type: String,
        required: true
    }, 

    manger: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const Branches = mongoose.model('branches', BranchesSchema);

module.exports = Branches;