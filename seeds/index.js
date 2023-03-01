const seedUserContent = require('./UserContent-seeds');
const seedUser = require('./User-seeds');
const seedTicketTags = require('./TicketTag-seeds');
const seedTicket = require('./Ticket-seeds');
const seedTags = require('./Tag-seeds');
const seedSupportUser = require('./SupportUser-seeds');
const seedSupportUserContent = require('./SupportContent-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUser();
    console.log('\n----- USER SEEDED -----\n');

    await seedUserContent();
    console.log('\n----- USER CONTENT SEEDED -----\n');
  
    await seedTicket();
    console.log('\n----- TICKET SEEDED -----\n');
    
    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');
  
    await seedTicketTags();
    console.log('\n----- TICKET TAGS SEEDED -----\n');
  
    await seedSupportUser();
    console.log('\n----- SUPPORT USER SEEDED -----\n');

    await seedSupportUserContent();
    console.log('\n----- SUPPORT USER CONTENT SEEDED -----\n');

    process.exit(0);
  };
  
  seedAll();