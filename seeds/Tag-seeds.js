const { Tag } = require("../models");

const tagData = [
  { name: "Urgent" }, // TODO: to treat this as an option for a support_user to choose with a dropdown menu?
  { name: "High Priority" }, // TODO: to treat this as an option for a support_user to choose with a dropdown menu?
  { name: "Low Priority" }, // TODO: to treat this as an option for a support_user to choose with a dropdown menu?
  { name: "Bug" },
  { name: "Feature Request" },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
