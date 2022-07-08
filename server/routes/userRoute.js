const express = require('express').Router();
const { Register, Login, Get, Update, Delete } = require('../controllers/userController');
express.post('/register',Register);
express.post('/login',Login);
express.get('/',Get);
express.put('/:id',Update);
express.delete('/:id',Delete);
module.exports = express;


