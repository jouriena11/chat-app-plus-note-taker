const { UserContent } = require('../models/UserContent');
const sequelize = require('../config/connection');

const UserContentData = [
    {
      message: 'Lorem ipsum dolor sit amet.',
      user_id: 1,
      ticket_id: 1
    },
    {
      message: 'Nullam at sem non leo commodo fermentum.',
      user_id: 2,
      ticket_id: 1
    },
];
  

const seedUserContent = () => UserContent.bulkCreate(UserContentData);

module.exports = {
  up: seedUserContent,
  down: (queryInterface) => queryInterface.bulkDelete('user_content', null, {}),
};