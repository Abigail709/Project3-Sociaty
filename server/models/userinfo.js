const mongoose = require("mongoose");
const {isEmail} = require('validator');
const bcrypt =require('bcrypt');
const { default: isEmail } = require("validator/lib/isEmail");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
    validate: [isEmail, "Enter new email"]
  },
  password: {
    type: String,
    required: true,
    min: 9,
  },
  status: {
    type: String,
    default: 'online'
  },
  newMessage: {
    type: Object,
    default: {}
  },
  minimize: false}




);


const User = mongoose.model("user", userSchema);
module.exports = user