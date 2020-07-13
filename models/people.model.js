const mongoose = require("mongoose");
/*
const PeopleSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{ type:String},
    registered:{ type:String},
    role:{ type:String},
    status:{ type:String}
  });
  module.exports = mongoose.model("People", PeopleSchema);
*/
  var userSchema= new mongoose.Schema({
   
    id: Number,
    name:String,
    registered:String,
    role:String,
    status:String
});
/*const People=mongoose.model('People', userSchema,'People');
module.exports=People;*/
module.exports = mongoose.model("People", userSchema);
