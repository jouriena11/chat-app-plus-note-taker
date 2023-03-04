const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserContent extends Model {}

UserContent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
         message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ticket',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_content',
    }
)

module.exports = UserContent;