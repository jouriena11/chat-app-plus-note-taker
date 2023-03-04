const { Ticket } = require('../models/Ticket');

const TicketData = [
    {
      title: 'Login issue',
      status: 'open',
      priority: 'high',
      user_id: 1,
      support_user_id: 2,
      message_id: [1,2,3,4,5] // TODO: not sure if the key value can be in array format
    },
    {
      title: 'T-Shirt Size Enquiry',
      status: 'closed',
      priority: 'low',
      user_id: 3,
      support_user_id: 4,
      message_id: [6,7] // TODO: not sure if the key value can be in array format
    }
  ];
  

const seedTicket = () => Ticket.bulkCreate(TicketData);

module.exports = seedTicket;