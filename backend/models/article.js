let mongoose = require('mongoose');


// Article Schema
let articleSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
    unique:true
  }})

let Article= mongoose.model('Article', articleSchema);
module.exports =Article;
