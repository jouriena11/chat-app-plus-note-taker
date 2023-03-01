const { User } = require('../models');

const UserData = [
 
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;