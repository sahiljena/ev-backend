const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    userUID:{
        unique: true,
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    phNo: {
        required: true,
        type: String,
    },
    status: {
        required: true,
        type: Number,
    },
    verified:{
        required: true,
        type: Boolean
    },
    password:{
        required: true,
        type: String,
    },
    regNo:{
        required: false,
        type:String
    }
})

module.exports = mongoose.model('EV-Users', dataSchema)