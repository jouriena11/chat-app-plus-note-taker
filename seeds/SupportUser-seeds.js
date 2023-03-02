const { SupportUser } = require('../models');

const SupportUserData = [
 
];

const seedSupportUser = () => SupportUser.bulkCreate(SupportUserData);

module.exports = seedSupportUser;