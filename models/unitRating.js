const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    customerID:{
        required: true,
        type: String,
    },
    units:{
        required: true,
        type: Number,
    },
    pay_status:{
        required: true,
        type: Number,
    },
    startDate:{
        required: true,
        type: String,
    },
    endDate:{
        required: true,
        type: String,
    },
    lastUpdated:{
        required: false,
        type: String,
    },
    dueBy:{
        required: false,
        type: String,
    }
})

module.exports = mongoose.model('EV-unit-ratings', dataSchema)