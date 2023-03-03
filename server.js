if (process.env.NODE_ENV !== "production") {
//<<<<<<< login/logout
    require("dotenv").config();
  }
  
  // imports
  const express = require("express");
  const bcrypt = require("bcrypt"); // for hashing passwords
  const passport = require("passport");
  const initializePassport = require("./config/password-config");
  const flash = require("express-flash");
  const session = require("express-session");
  const methodOverride = require("method-override");
  const routes = require('./controllers');
  
  const port = process.env.PORT || 3001;
  
  const app = express();
  
  // initialize passport
  initializePassport(
    passport,
    (email) => users.find((user) => user.email === email),
    (id) => users.find((user) => user.id === id)
  );
  
  // store information in an array
  const users = [];
  
  app.use(express.urlencoded({ extended: false }));
  app.use(flash());
  app.use(
    session({
      secret: "secret",
      resave: false, // don't save session if unmodified
      saveUninitialized: false, // don't create session until something stored
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(methodOverride("_method"));
  
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
  
  // Listen on port 3000
  app.listen(port, () => console.log(`Listening on port ${port}`));

  require("dotenv").config();
}

// imports
const express = require("express");
const bcrypt = require("bcrypt"); // for hashing passwords
const passport = require("passport");
const initializePassport = require("./config/password-config");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const routes = require('./controllers');

const port = process.env.PORT || 3001;

const app = express();

// initialize passport
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

// store information in an array
const users = [];

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: "secret",
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

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

// Listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));

//>>>>>>> main
