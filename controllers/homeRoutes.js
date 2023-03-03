const router = require('express').Router();
// const { User } = require('../models');
const passport = require("passport");

//const { User } = require('../models');
const {checkAuthenticated, checkNotAuthenticated} =  require ('../utils/auth');

// configure login post routes //also redirect me to the home page called dashboard.ejs
// if a user is not logged in, redirect to the login page
router.post( "/login", checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/main", //redirect to the home page
    failureRedirect: "/login",
    failureFlash: true,
  })
);

//configure register post routes
router.post("/register", checkNotAuthenticated, async (req, res) => {
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
router.get("/", checkNotAuthenticated,(req, res) => {
  res.render("dashboard"); //landing page
});

router.get("/main", checkAuthenticated, (req, res) => {
  res.render("main", {name: req.user.name}); // home page with the dashboard
})  

router.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login");
});

router.get("/register", checkNotAuthenticated,  (req, res) => {
  res.render("register");
});

router.get("*", checkNotAuthenticated ,(req, res) => {
  res.render("404");
});


router.delete("/logout", (req, res) => {
  req.logout(req.user, err => {
    if (err) return next(err);
    res.redirect("/");
  });
});

module.exports = router;
