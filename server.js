if (process.env.NODE_ENV !== "production") {
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
const {checkAuthenticated, checkNotAuthenticated} =  require ('./utils/auth');

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

// configure login post routes //also redirect me to the home page called dashboard.ejs
// if a user is not logged in, redirect to the login page
app.post( "/login", checkNotAuthenticated, passport.authenticate("local", {
  successRedirect: "/main", //redirect to the home page
  failureRedirect: "/login",
  failureFlash: true,
})
);

//configure register post routes
app.post("/register", checkNotAuthenticated, async (req, res) => {
try {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  users.push({
    id: Date.now().toString(),
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  console.log(users);
  res.redirect("/login");
} catch {
  res.redirect("/register");
}
});

// Listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));