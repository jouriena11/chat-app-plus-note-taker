const router = require('express').Router();
// const { User } = require('../models');

// Routes
router.get("/",(req, res) => {
  console.log("\n\nRendering dashboard\n\n");
  res.render("dashboard"); //landing page
});

router.get("/main", (req, res) => 
{
  console.log("\n\nRendering main\n\n");
  res.render("main"); // home page with the dashboard
})  

router.get("/login", (req, res) => {
  console.log("\n\nRendering Login\n\n");
  res.render("login");
});

router.get("/register",  (req, res) => {
  console.log("\n\nRendering register\n\n");
  res.render("register");
});

router.get("*" , (req, res) => {
  res.render("404");
});

// configure login post routes //also redirect me to the home page called dashboard.ejs
// if a user is not logged in, redirect to the login page
router.post( "/login", (req, res) => {
    console.log("\n\nLogging in\n\n")
    res.status(200).redirect("/main");
});
  
//configure register post routes
router.post("/register", async (req, res) => {
  
    res.status(200).redirect("/login");

});

router.post("/logout", (req, res) => {
  console.log("\n\nLogging out\n\n");
  
  res.status(200).redirect("/");
});

module.exports = router;
