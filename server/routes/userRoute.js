const express = require('express').Router();
const { Register, Login, Get, Update, Delete } = require('../controllers/userController');
const upload = require('../middlewares/upload');
express.post('/register', upload.single('image'), Register);
express.post('/login', Login);
express.get('/', Get);
express.put('/:id', Update);
express.delete('/:id', Delete);
module.exports = express;
