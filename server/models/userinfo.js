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


// userSchema.pre('save', function(next){
//     const user = this;
//     if(!user.isModified('password')) return next();
  
//     bcrypt.genSalt(10, function(err, salt){
//       if(err) return next(err);
  
//       bcrypt.hash(user.password, salt, function(err, hash){
//         if(err) return next(err);
  
//         user.password = hash
//         next();
//       })
  
//     })
  
//   })



  module.exports = mongoose.model("User", userSchema);
