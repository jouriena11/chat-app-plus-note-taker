import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');
    displayMessage = (`You are connected with ${socket.id}`);

socket.on("receive-message", message => { //receive-message event
    displayMessage = (message);
});

const message = messageInput.value;
const chat = chatInput.value;

if (message === "") return
displayMessage(message);
socket.emit("send-message", message, chat); //send-message event

messageInput.value = "";

// TODO Depending on the way we create the chat rooms (either modals or another window location),
// a function here to join said chat will need to be done.

