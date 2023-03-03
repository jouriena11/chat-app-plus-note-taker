const { SupportContent } = require('../models/SupportContent');

const SupportContentsData = [
    {
      message: 'Lorem ipsum dolor sit amet',
      support_user_id: 1,
      ticket_id: 1,
    },
    {
      message: 'Consectetur adipiscing elit',
      support_user_id: 1,
      ticket_id: 2,
    },
    {
        message: 'Testing',
        support_user_id: 1,
        ticket_id: 3,
      },
    
  ];

  module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('support_user_content', SupportContentsData);
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('support_user_content', null, {});
    },
  };