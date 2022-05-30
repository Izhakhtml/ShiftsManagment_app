const mongoose = require('mongoose');
const Shift = mongoose.Schema({
    selectedDay:{type:Date,require:true},
    WhatTimeOfDay:{type:Date,require:true},
},
{ timestamps: true })
module.exports = mongoose.model('Shift',Shift);