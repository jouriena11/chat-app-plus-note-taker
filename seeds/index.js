const sequelize = require('../config/connection');

const seedUser = require('./User-seeds');
const seedTicketTags = require('./TicketTag-seeds');
const seedTicket = require('./Ticket-seeds');
const seedTags = require('./Tag-seeds');
const seedMessages = require('./message-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUser();
    console.log('\n----- USER SEEDED -----\n');
  
    await seedTicket();
    console.log('\n----- TICKET SEEDED -----\n');
    
    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');
  
    await seedTicketTags();
    console.log('\n----- TICKET TAGS SEEDED -----\n');

    await seedMessages();
    console.log('\n----- MESSAGE SEEDED -----\n');

    process.exit(0);
  };
  
  seedAll();
