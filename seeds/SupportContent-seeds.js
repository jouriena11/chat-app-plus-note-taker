const { SupportUserContent } = require('../models');

const SupportUserContentData = [
 
];

const seedSupportUserContent = () => SupportUserContent.bulkCreate(SupportUserContentData);

module.exports = seedSupportUserContent;