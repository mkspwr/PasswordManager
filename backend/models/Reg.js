let mongoose = require('mongoose');


// Register Schema
var RegSchema = new mongoose.Schema({
  username: String,
    email: String,
    password:String,
    phone: String

  });

let Reg= mongoose.model('Reg', RegSchema);
module.exports =Reg;
