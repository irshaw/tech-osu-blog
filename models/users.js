const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class users extends Model {}


    users.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
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
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'users',
          }
        );

        module.exports = users;