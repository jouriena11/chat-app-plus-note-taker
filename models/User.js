const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(loginPw) {
    console.log("loginPw = " + loginPw);
    console.log("this.password = " + this.password);
    return bcrypt.compareSync(loginPw, this.password);
  }

  static async checkUsername(username) {
    // `static` allows calling SupportUser.checkUsername(username) without having to create a new `SupportUser` instance
    const supportUser = await SupportUser.findOne({ where: { username } });

    if (supportUser) {
      throw new Error("Username already exists.");
    }

    return true;
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    userType: {
      type: DataTypes.ENUM(["user", "support"]), // capital letters not an issue; default to lowercase
      allowNull: true,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;