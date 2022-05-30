const mongoose = require('mongoose');
const User = mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true, unique: true},
    password:{ type: String, require: true },
    image:{type:String},
    phoneNumber:{type:String,require},
    isAdmin:{type:String,default:false},

},
{ timestamps: true })
module.exports = mongoose.model('User',User);