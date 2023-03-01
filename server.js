const path = require('path'); // working with files and directories
const express = require('express');
const session = require('express-session'); // session management
const exphbs = require( 'express-handlebars'); // views engine
const routes = require('./controllers'); // application routes
// const helpers = require('./utils/helpers'); // TODO: Handlebars helpers -- in W14 #23, the helper is just to render emoji randomly

const sequelize = require('./config/connection');
// creates a session store for express-session middleware using Sequelize
// SequelizeStore class is responsible for creating and managing the session table in the database using Sequelize, and provides methods for adding, retrieving, updating, and deleting session data
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// create a Handlebars instance with our helper functions
// const hbs = exphbs.create({ helpers });

const sess = {
    secret: '+Y=VaQ*F>_kWz68',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});