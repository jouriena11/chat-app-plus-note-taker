const bcrypt = require('bcrypt');
const { SupportUser } = require('../models/SupportUser');

const SupportUserData = [
  {
    username: 'johndoe',
    password: bcrypt.hashSync('password123', 10),
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com'
  },
  {
    username: 'janedoe',
    password: bcrypt.hashSync('password123', 10),
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'janedoe@example.com'
  }
];

const seedSupportUser = () => SupportUser.bulkCreate(SupportUserData);

module.exports = seedSupportUser;