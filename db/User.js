// models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name: String,
rollno:Number,
password:String
})

module.exports = mongoose.model('User', userSchema);
