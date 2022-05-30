require('dotenv').config();
require('./db/db')
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { Server } = require('socket.io');
const UserRouter = require('./routes/userRoute');
const ShiftRouter = require('./routes/shiftRoute');
const MessageRouter = require('./routes/messageRoute');
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/user', UserRouter);
app.use('/shift', ShiftRouter);
app.use('/message', MessageRouter);
const socketIo = new Server(http,
    {
        cors: {
            origin: "http://localhost:3000",
            methods: ["POST", "GET"]
        }
    });
http.listen(port, () => {
    console.log("SERVER IS UP");
})
