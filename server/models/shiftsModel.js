const mongoose = require('mongoose');
const Shift = mongoose.Schema({
    fullName: { type: String, require: true },
    selectedDay: { type: String, require: true },
    startHour: { type: String, require: true },
    endHour: { type: String, require: true },
    image: { type: String }
},
    { timestamps: true })
module.exports = mongoose.model('Shift', Shift);