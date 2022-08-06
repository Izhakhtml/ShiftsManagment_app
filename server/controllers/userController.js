const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
//! Register
const Register = async (req, res) => {
    const { path } = req.file;
    console.log(req.body, req.file);
    if (await User.exists({ userName: req.body.userName })) return res.status(400).send({ message: "userName already exists" })
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) return res.status(500).send({ message: "hash error" });
        req.body.password = hash;
        req.body.image = path.replace('\\','/');
        await User.create(req.body)
            .then(result => res.status(200).send({ message: 'success', data: result }))
            .catch(err => res.status(500).send({ message: err.message }))
    })
}
//! Login
const Login = async (req, res) => {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName: userName });
    if (user != null) {
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: "error" });
            if (!isMatch) return res.status(403).json({ message: "one of the details is incorrect" });
            res.status(200).json({ message: "login successful", data: user })
        })
    } else {
        res.json({ message: "one of the details is incorrect" })
    }
}
//! Get
const Get = async (req, res) => {
    return await User.find({})
        .then((data) => res.send(data))
        .catch((err) => res.status(404).send({ message: err.message }))
}
//! Update
const Update = async (req, res) => {
    return await User.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(data => res.send(data))
        .catch((err) => res.status(404).send({ message: err.message }))
}
//! Delete
const Delete = async (req, res) => {
    return await User.findByIdAndRemove({ _id: req.params.id })
        .then((data) => { res.send("object is delete") })
        .catch((err) => res.status(404).send({ message: err.message }))
}
module.exports = { Register, Login, Get, Update, Delete }