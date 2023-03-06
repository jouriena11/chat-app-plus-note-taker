const { Message } = require("../models");

const messageData = [
  {
    ticket_id: 1,
    message: "Hi",
    created_by: 1,
  },
  {
    ticket_id: 1,
    message: "I can't log in to my account. Can you please help me on this?",
    created_by: 1,
  },
  {
    ticket_id: 1,
    message:
      "Thank you for contacting us today! Can you please tell me the email address you use for this account?",
    created_by: 2,
  },
  {
    ticket_id: 1,
    message: "sure, it's abc@gmail.com",
    created_by: 1,
  },
  {
    ticket_id: 1,
    message:
      "Thank you for the information. Please hold 5 - 10 minutes while I look into this for you.",
    created_by: 2,
  },
  {
    ticket_id: 2,
    message:
      "Hi. I'm interested in buying a T-shirt you're selling on your website, but I'm not sure about the shirt size. Can you please help me on that?",
    created_by: 3,
  },
  {
    ticket_id: 2,
    message:
      "Thank you for contacting us today! Can you please share a link to the product page to me?",
    created_by: 2,
  },
];

const seedMessages = () => Message.bulkCreate(messageData);

module.exports = seedMessages;
