const router = require('express').Router();
const { User } = require('../models');

// Routes
router.get("/",(req, res) => {
  res.render("dashboard", {
    user_id_session: req.session.user_id,
  }); //landing page
});

router.get("/main", async (req, res) => {
  console.log("\n\nTrying to render");
  console.log(req.session.user_id);
  console.log("\n\n");

  const user = await User.findOne({ where: { id: req.session.user_id } });

  console.log(user);

  res.render("main", {username: user.dataValues.username,
                      id: user.dataValues.id,
                      email: user.dataValues.email,
                      role: user.dataValues.userType
  }
  ); // home page with the dashboard
})  

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register",  (req, res) => {
  res.render("register");
});

router.get("*" ,(req, res) => {
  res.render("404");
});


module.exports = router;
