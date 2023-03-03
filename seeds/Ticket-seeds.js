const { Ticket } = require('../models/Ticket');

const TicketData = [
    {
      title: 'My first ticket',
      status: 'open',
      priority: 'high',
      user_id: 1,
      user_content_id: 1,
      support_user_id: 1,
      support_user_content_id: 1
    },
    {
      title: 'My second ticket',
      status: 'closed',
      priority: 'low',
      user_id: 2,
      user_content_id: 2,
      support_user_id: 1,
      support_user_content_id: 2
    }
  ];
  

const seedTicket = () => Ticket.bulkCreate(TicketData);

module.exports = seedTicket;