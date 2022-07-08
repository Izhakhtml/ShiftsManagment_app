const mongoose = require('mongoose');
const User = mongoose.Schema({
    userName: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    image: { type: String },
    phoneNumber: { type: String, require: true },
    isAdmin: { type: String, default: false },

},
    { timestamps: true })
module.exports = mongoose.model('User', User);