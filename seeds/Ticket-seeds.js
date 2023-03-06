const { Ticket } = require("../models");

const TicketData = [
  {
    title: "Login issue",
    status: "open",
    priority: "high",
    user_id: 1,
    support_user_id: 3,
  },
  {
    title: "T-Shirt Size Enquiry",
    status: "closed",
    priority: "low",
    user_id: 2,
    support_user_id: 3,
  },
];

const seedTicket = () => Ticket.bulkCreate(TicketData);

module.exports = seedTicket;
