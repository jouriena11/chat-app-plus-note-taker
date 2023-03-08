const { User } = require("../models");

let UserData = [
  {
    id: 1,
    username: "john_doe",
    password: "password123",
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    userType: "user",
  },
  {
    id: 2,
    username: "jane_doe",
    password: "password456",
    first_name: "Jane",
    last_name: "Doe",
    email: "jane@example.com",
    userType: "support",
  },
  {
    id: 3,
    username: "jim_jeffries",
    password: "password789",
    first_name: "Jim",
    last_name: "Jeffries",
    email: "jimJeffries@example.com",
    userType: "user",
  },
];

const seedUser = () => User.bulkCreate(UserData, { individualHooks: true });

module.exports = seedUser;
