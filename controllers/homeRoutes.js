const router = require('express').Router();
const { User, Ticket } = require('../models');
const withAuth = require('../utils/auth');

// Routes
router.get("/",(req, res) => {
  res.render("dashboard"); //landing page
});

router.get("/main", withAuth, async (req, res) => {
  console.log("\n\nTrying to render");
  console.log(req.session.user_id);
  console.log("\n\n");

  const user = await User.findOne({ where: { id: req.session.user_id } });
  const tickets = await Ticket.findAll({ where: { user_id: req.session.user_id } });

  res.render("main", {
    id: user.dataValues.id,
    username: user.dataValues.username,
    first_name: user.dataValues.first_name,
    last_name: user.dataValues.last_name,
    email: user.dataValues.email,
    role: user.dataValues.userType,
    tickets: tickets
  }
  ); // home page with the dashboard
})  

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup",  (req, res) => {
  res.render("signup");
});

router.get("/userQues", (req, res) => {
  res.render("userQues");
})

router.get("/adminRes", (req, res) => {
  res.render("adminRes");
})

router.get("*" ,(req, res) => {
  res.render("404");
});

module.exports = router;
