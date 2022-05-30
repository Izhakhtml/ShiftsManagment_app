const Message = require('../models/messagesModel');
//GET
let Get = async (req, res) => {
    await Message.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => res.status(404).send({ massage: error }));
};

//GET:ID
let GetById = async (req, res) => {
    await Message.findById({ _id: req.params.id })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => res.status(404).send({ massage: error }));
};
//POST
let Add = async (req, res) => {
    await Message.create(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => res.status(404).send({ massage: error }));
};

//PUT
let Update = async (req, res) => {
    await Message.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => res.status(404).send({ massage: error }));
};

//DELETE
let Delete = async (req, res) => {
    await Message.findByIdAndRemove({ _id: req.params.id }).then((data) => {
        res.send(data);
    })
        .catch((err) => res.status(404).send({ massage: error }));
};
module.exports = {
    Get,
    GetById,
    Add,
    Update,
    Delete,
};