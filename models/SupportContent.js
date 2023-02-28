const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SupportContent extends Model {}

SupportContent.init(
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
        support_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'support_user',
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
        modelName: 'support_user_content',
    }
)

module.exports = SupportContent;