const Shift = require('../models/shiftsModel')
//GET
let Get = async (req, res) => {
    await Shift.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => res.status(404).send({ massage: error }));
};

//GET:ID
let GetById = async (req, res) => {
    await Shift.findById({ _id: req.params.id })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => res.status(404).send({ massage: error }));
};
//POST
let Add = async (req, res) => {
    await Shift.create(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => res.status(404).send({ massage: error }));
};

//PUT
let Update = async (req, res) => {
    await Shift.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => res.status(404).send({ massage: error }));
};

//DELETE
let Delete = async (req, res) => {
    await Shift.findByIdAndRemove({ _id: req.params.id }).then((data) => {
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