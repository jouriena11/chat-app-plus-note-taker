const { Tag } = require('../models');
const sequelize = require('../config/connection');

const tagData = [
  { name: 'Urgent' }, // TODO: to treat this as an option for a support_user to choose with a dropdown menu?
  { name: 'High Priority' }, // TODO: to treat this as an option for a support_user to choose with a dropdown menu?
  { name: 'Low Priority' }, // TODO: to treat this as an option for a support_user to choose with a dropdown menu?
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

