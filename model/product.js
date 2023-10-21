const mongoose = require('mongoose')

const ProSchema = new mongoose.Schema({

    pname:{
        type:String
    },
    cname:{
        type:String
    },
    price:{
        type:String
    },
    image:{
        type:String
    }
});

module.exports = mongoose.model('Product',ProSchema);