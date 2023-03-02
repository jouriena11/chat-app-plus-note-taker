if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// imports
const express = require("express");
const bcrypt = require("bcrypt"); // for hashing passwords
const app = express();
const passport = require("passport");
const initializePassport = require("./password-config");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

const port = 3001;

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

// Routes
app.get("/", checkNotAuthenticated,(req, res) => {
  res.render("dashboard"); //landing page
});

app.get("/main", checkAuthenticated, (req, res) => {
  res.render("main", {name: req.user.name}); // home page with the dashboard
})  

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login");
});

app.get("/register", checkNotAuthenticated,  (req, res) => {
  res.render("register");
});

app.get("*", checkNotAuthenticated ,(req, res) => {
  res.render("404");
});


app.delete("/logout", (req, res) => {
  req.logout(req.user, err => {
    if (err) return next(err);
    res.redirect("/");
  });
});


// check if user is authenticated
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/main");
}



// check if user is not authenticated
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

// Listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
