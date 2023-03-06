const express = require('express');
const socketio = require('socket.io');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const session = require('express-session');

const app = express();
// const server = http.createServer(app);

//
const io = require('socket.io')(3001, { 
    cors: {
        origin: ["http://localhost:3001"],
    },
});

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

  // Connection to socket.io
  io.on('connection', (socket) => {
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