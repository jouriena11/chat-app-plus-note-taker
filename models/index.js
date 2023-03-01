const User = require('./User');
const Ticket = require('./Ticket');
const Tag = require('./Tag');
const TicketTag = require('./TicketTag');
const UserContent = require('./UserContent');
const SupportUser = require('./SupportUser');
const SupportUserContent = require('./SupportContent');

// A user can have many tickets and user-generated ticket contents, whereas each ticket and contents belong to only 1 user.
User.hasMany([
    { model: Ticket, foreignKey: 'user_id' },
    { model: UserContent, foreignKey: 'user_id' }
]);

Ticket.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'set null'
});

UserContent.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'set null'
});

// TODO: to review - support user is not the one who creates a ticket
// A support_user can have many tickets and support-user-contents, whereas each ticket and contents belong to only 1 support_user.
SupportUser.hasMany([
    { model: Ticket, foreignKey: 'support_user_id' },
    { model: SupportUserContent, foreignKey: 'support_user_id' }
]);

Ticket.belongsTo(SupportUser, {
    foreignKey: 'support_user_id',
    onDelete: 'set null'
});

SupportUserContent.belongsTo(SupportUser, {
    foreignKey: 'support_user_id',
    onDelete: 'set null'
});

// A ticket can have many user-generated and support-user-generated contents, whereas each content belongs to only 1 ticket.
Ticket.hasMany([
    { model: UserContent, foreignKey: 'ticket_id' },
    { model: SupportUserContent, foreignKey: 'ticket_id'}
]);

UserContent.belongsTo(Ticket, {
    foreignKey: 'ticket_id',
    onDelete: 'set null'
});

SupportUserContent.belongsTo(Ticket, {
    foreignKey: 'ticket_id',
    onDelete: 'set null'
});


// A tag can belong to many tickets (i.e. used by many tickets), and each ticket can belong to many tags (i.e. use many tags)
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
    TicketTag,
    UserContent,
    SupportUser,
    SupportUserContent
}