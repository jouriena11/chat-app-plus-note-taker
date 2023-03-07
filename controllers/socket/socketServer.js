const express = require('express');
const socketio = require('socket.io');
const { Sequelize, DataTypes } = require('sequelize');
const session = require('express-session');
const path = require('path');

const app = express();

// Set up session middleware
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

//Creating a database connection
const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define a model for chat messages
const ChatMessage = sequelize.define('ChatMessage', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  },
  read: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

// Set up HTTP server
const server = app.listen(3001, () => {
  console.log('Server running on port 3001');
});

// Connection to socket.io
const io = socketio(server, { 
  cors: {
      origin: ["http://localhost:3001"],
  },
});

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on("send-message", (message, chat) => { //send-message event
      if (chat === '') {
          socket.broadcast.emit("receive-message", message) //receive-message event"
      } else {
          socket.to(chat).emit("receive-message", message) //receive-message to a specfic chat room"
      }
  })
  socket.on("join-chat", async (chat) => { //join-chat event
    socket.join(chat);

    // retrieve messages from the database
    const chatMessages = await ChatMessage.findAll({
        where: {
            [Sequelize.Op.or]: [
                {username: 'user1', message: {[Sequelize.Op.like]: `%${chat}%`}},
                {username: 'user2', message: {[Sequelize.Op.like]: `%${chat}%`}}
            ]
        },
        order: [['createdAt', 'ASC']]
    });

    // emit messages to the user who just connected to the chat room
    socket.emit("load-messages", chatMessages);
});

socket.on("send-message", (message, chat) => { //send-message event
    if (chat === '') {
        socket.broadcast.emit("receive-message", message) //receive-message event"
    } else {
        socket.to(chat).emit("receive-message", message) //receive-message to a specfic chat room"
    }

    // save message to the database
    ChatMessage.create({
        username: message.username,
        message: message.text
    });
});
});


