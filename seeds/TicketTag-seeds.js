const { TicketTag } = require('../models');

const TicketTagData = [
  {
    ticket_id: 1,
    tag_id: 2,
  },
  {
    ticket_id: 2,
    tag_id: 3,
  },
  {
    ticket_id: 3,
    tag_id: 1,
  },
  {
    ticket_id: 4,
    tag_id: 5,
  },
  {
    ticket_id: 5,
    tag_id: 4,
  },
];

const seedTicketTags = () => TicketTag.bulkCreate(TicketTagData);

module.exports = seedTicketTags;