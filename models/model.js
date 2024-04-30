const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: Number
    },
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('users', dataSchema)