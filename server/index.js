require('dotenv').config();
require('./db/db')
const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const UserRouter = require('./routes/userRoute');
const ShiftRouter = require('./routes/shiftRoute');
const MessageRouter = require('./routes/messageRoute');
const cors = require('cors');
const port = process.env.PORT || 5000;
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use('/user', UserRouter);
app.use('/shift', ShiftRouter);
app.use('/message', MessageRouter);
app.use('/uploads',express.static("uploads"))
const socketIo = new Server(server,
    {
        cors: {
            origin: "http://localhost:3000",
            methods: ["POST", "GET"]
        }
    });
    
    
    socketIo.of('/socketIo').on('connection', (socket) => {
        socket.on("date", (item) => console.log(item))
    })
    require('./db/db').on('open', () => {
        const collectionShifts = require("./DB/db").collection("shifts").watch()
        collectionShifts.on('change', (change) => {
        if (change.operationType == "insert") {
            console.log(change.fullDocument);
            socketIo.emit("insert", change.fullDocument)
        }
    })
})
server.listen(port, () => {
    console.log("SERVER IS UP");
})

