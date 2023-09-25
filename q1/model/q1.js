const mongoose = require('mongoose')

const Q1Schema = new mongoose.Schema({

    name: {
        type:String
    },
    pass: {
        type:String
    },
    email: {
        type:String
    },
    phone: {
        type:Number
    },
    avatar: {
        type:String
    }
})

module.exports = mongoose.model('Q1', Q1Schema)