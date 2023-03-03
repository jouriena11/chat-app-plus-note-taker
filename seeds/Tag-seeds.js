const { Tag } = require('../models/Tag');
const sequelize = require('../config/connection');

const tagData = [
  { name: 'Urgent' },
  { name: 'High Priority' },
  { name: 'Low Priority' },
  { name: 'Bug' },
  { name: 'Feature Request' },
];

const seedTags = async () => {
  try {
    await sequelize.sync({ force: true });

    await Tag.bulkCreate(tagData);

    console.log('\n----- TAGS SEEDED -----\n');
  } catch (err) {
    console.log(err);
  }

  process.exit(0);
};

seedTags();

