const mongoose = require("mongoose");

const User = mongoose.model(
    'User',
    new mongoose.Schema({
        name:String,
        city:String,
        age:Number,
        phone:Number,
        createdOn:{
            type:Date,
            default:Date.now
        }
    })
)

module.exports = User;