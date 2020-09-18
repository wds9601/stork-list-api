'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Please enter valid email format."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          msg: "Your password must be between 6 and 25 characters!",
          args: [6, 25]
        }
      }
  }}, {
    sequelize,
    modelName: 'User',
  });
  return User;
};