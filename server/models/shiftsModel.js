const mongoose = require('mongoose');
const Shift = mongoose.Schema({
    fullName: { type: String, require: true },
    userId: { type: String, require: true },
    selectedDay: { type: String, require: true },
    startHour: { type: String, require: true },
    endHour: { type: String, require: true },
    dataObject: { type: Object, require: true },
    image: { type: String },
    userObject: { type: Object, require: true }
},
    { timestamps: true })
module.exports = mongoose.model('Shift', Shift);