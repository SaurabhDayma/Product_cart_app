const mongoose =  require('mongoose');

const userschema  =  new mongoose.Schema({
      name : String,
      email : String,
      password : String,
})

const Usermodel =  mongoose.model('usersignupinfo', userschema);
module.exports = Usermodel;