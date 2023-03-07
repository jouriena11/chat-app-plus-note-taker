// imports
const express = require("express");
const flash = require("express-flash");
const session = require("express-session");
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: "secret",
    cookie: {},
    resave: false, // don't save session if unmodified
    saveUninitialized: true, // don't create session until something stored
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);

// Static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// Set views
app.set("views", "./views");
app.set("view engine", "ejs");

// Set routes
app.use(routes);

// Start database and server
sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});