import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');
    displayMessage = (`You are connected with ${socket.id}`);

socket.on("receive-message", message => { //receive-message event
    displayMessage = (message);
});

const message = messageInput.value;
const chat = chatInput.value;

if(message === "") {
    returndisplayMessage(message);
    socket.emit("send-message", message, chat); //send-message event

    // const saveMessage = {
    //     ticket_id: "", // TODO: to pass ticket_id
    //     message: message,
    //     created_by: "" // TODO: to pass user_id
    // }
    // TODO: axios.post(saveMessage)

    messageInput.value = "";
}

// TODO Depending on the way we create the chat rooms (either modals or another window location),
// a function here to join said chat will need to be done.