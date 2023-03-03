const router = require('express').Router();
// const { User } = require('../models');

const {checkAuthenticated, checkNotAuthenticated} =  require ('../utils/auth');

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
