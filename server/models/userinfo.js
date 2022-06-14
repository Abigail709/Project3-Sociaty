const mongoose = require("mongoose");
// const {isEmail} = require('validator');
const bcrypt =require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
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
    max: 20,
    
  },
  password: {
    type: String,
    required: true,
    min: 8,
   
  },
  

});





  module.exports = mongoose.model("User", userSchema);
