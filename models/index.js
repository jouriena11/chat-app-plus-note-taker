const User = require("./User");
const Ticket = require("./Ticket");
const Tag = require("./Tag");
const TicketTag = require("./TicketTag");

User.hasMany(Ticket, {
    foreignKey: "ticket_id",
});

Ticket.belongsTo(User, {
    foreignKey: "ticket_id",
    onDelete: "set null"
});

Tag.belongsToMany(Ticket, {
    through: {
        model: TicketTag,
        unique: false
    }
});

Ticket.belongsToMany(Tag, {
    through: {
        model: TicketTag,
        unique: false
    }
});

module.exports = {
    User,
    Ticket,
    Tag,
    TicketTag
}