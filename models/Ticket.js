const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ticket extends Model {}

Ticket.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        priority: {
            type: DataTypes.STRING(20),
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
        user_content_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user_content',
                key: 'id'
            }
        },
        support_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'support_user',
                key: 'id'
            }
        },
        support_user_content_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'support_user_content',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'ticket',
    }
)

module.exports = Ticket;