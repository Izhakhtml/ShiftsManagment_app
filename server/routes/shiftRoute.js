const express = require('express').Router()
const { Get, GetById, Update, Add, Delete } = require('../controllers/shiftController')
express.get("/", Get)
express.get("/:id", GetById)
express.post("", Add)
express.put("/:id", Update)
express.delete("/:id", Delete)
module.exports = express;