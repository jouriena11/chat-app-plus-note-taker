const { Ticket } = require('../models');

const TicketData = [
 
];

const seedTicket = () => Ticket.bulkCreate(TicketData);

module.exports = seedTicket;