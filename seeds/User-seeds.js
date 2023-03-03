const bcrypt = require("bcrypt");
const { User } = require("../models/User");

const UserData = [
    {
      username: "john_doe",
      password: "password123",
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
    },
    {
      username: "jane_doe",
      password: "password456",
      first_name: "Jane",
      last_name: "Doe",
      email: "jane@example.com",
    },
];

const saltRounds = 10;

const hashedUserData = await Promise.all(
  UserData.map(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);

    return {
      ...user,
      password: hashedPassword,
    };
  })
);

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert("users", hashedUserData);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete("users", null, {});
    },
  };