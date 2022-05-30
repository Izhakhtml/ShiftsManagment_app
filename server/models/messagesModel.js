const mongoose = require('mongoose');
const Message = mongoose.Schema({
    sendMessage:{type:String,require:true},
    getMessage:{type:String,require:true},
},
{ timestamps: true })
module.exports = mongoose.model('Message',Message);