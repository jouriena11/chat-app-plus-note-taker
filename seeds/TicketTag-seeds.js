const { TicketTag } = require("../models");

const TicketTagData = [
  {
    ticket_id: 1,
    tag_id: 1,
  },
  {
    ticket_id: 1,
    tag_id: 2,
  },
];

const seedTicketTags = () => TicketTag.bulkCreate(TicketTagData);

module.exports = seedTicketTags;
