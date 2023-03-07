import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

const messageInput = document.getElementById('message-input');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const messageDisplay = document.getElementById('message-display');

let displayMessage = '';

socket.on("connect", () => {
  displayMessage = `You are connected with ${socket.id}`;
});

socket.on("receive-message", message => { //receive-message event
  displayMessage = message;
});

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  const chat = chatInput.value;

  if (message === "") {
    return displayMessage(message);
  }

  socket.emit("send-message", { username: 'user1', text: message }, chat); //send-message event

  messageInput.value = "";
});