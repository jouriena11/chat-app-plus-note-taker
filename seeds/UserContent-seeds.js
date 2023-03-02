const { UserContent } = require('../models');

const UserContentData = [
 
];

const seedUserContent = () => UserContent.bulkCreate(UserContentData);

module.exports = seedUserContent;