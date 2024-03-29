const express = require('express').Router();
const { Register, Login, Get, GetById, Update, Delete } = require('../controllers/userController');
const upload = require('../middlewares/upload');
express.post('/register', upload.single('image'), Register);
express.post('/login', Login);
express.get('/', Get);
express.get('/:id', GetById);
express.put('/:id', upload.single('image'), Update);
express.delete('/:id', Delete);
module.exports = express;
