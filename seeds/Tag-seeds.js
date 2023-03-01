const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'tech',
  },
  {
    tag_name: 'general',
  },
  {
    tag_name: 'games',
  },
  {
    tag_name: 'music',
  },
  {
    tag_name: 'sport',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;