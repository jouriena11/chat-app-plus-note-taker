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









// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
//   }

//   // imports
//   const express = require("express");
//   const bcrypt = require("bcrypt"); // for hashing passwords
//   const app = express();
//   const passport = require("passport");
//   const initializePassport = require("./password-config");
//   const flash = require("express-flash");
//   const session = require("express-session");

//   const port = 3001;

//   // initialize passport
//   initializePassport(
//     passport,
//     (email) => users.find((user) => user.email === email),
//     (id) => users.find((user) => user.id === id)
//   );

//   // store information in an array
//   const users = [];

//   app.use(express.urlencoded({ extended: false }));
//   app.use(flash());
//   app.use(
//     session({
//       secret: "secret",
//       resave: false, // don't save session if unmodified
//       saveUninitialized: false, // don't create session until something stored
//     })
//   );
//   app.use(passport.initialize());
//   app.use(passport.session());

//   // Static files
//   app.use(express.static("public"));
//   app.use("/css", express.static(__dirname + "public/css"));
//   app.use("/js", express.static(__dirname + "public/js"));
//   app.use("/img", express.static(__dirname + "public/img"));

//   // Set views
//   app.set("views", "./views");
//   app.set("view engine", "ejs");

//   // configure login post routes //also redirect me to the home page called dashboard.ejs
//   app.post(
//     "/login",
//     passport.authenticate("local", {
//       successRedirect: "/index", //redirect to the home page
//       failureRedirect: "/login",
//       failureFlash: true,
//     })
//   );

//   //configure register post routes
//   app.post("/register", async (req, res) => {
//     try {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);
//       users.push({
//         id: Date.now().toString(),
//         name: req.body.name,
//         email: req.body.email,
//         password: hashedPassword,
//       });
//       console.log(users);
//       res.redirect("/login");
//     } catch {
//       res.redirect("/register");
//     }
//   });

//   // Routes
//   app.get("/", (req, res) => {
//     res.render("index");
//   });

//   app.get("/login", (req, res) => {
//     res.render("login");
//   });

//   app.get("/register", (req, res) => {
//     res.render("register");
//   });

//   app.get("*", (req, res) => {
//     res.render("404");
//   });

//   // Listen on port 3000
//   app.listen(port, () => console.log(`Listening on port ${port}`));
