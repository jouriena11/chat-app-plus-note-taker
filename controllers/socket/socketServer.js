const io = require('socket.io')(3001, { //socket.io
    cors: {
        origin: ["http://localhost:3001"],
    },
});

io.on('connection', (socket) => { //connection to socket
    console.log(socket.id);
    socket.on("send-message", (message, chat) => { //send-message event
        if (chat === '') {
            socket.broadcast.emit("receive-message", message) //receive-message event"
        } else {
            socket.to(chat).emit("receive-message", message) //receive-message to a specfic chat room"
        }
    })
    socket.on("join-chat", (chat) => { //join-chat event
        socket.join(chat)
    })
});