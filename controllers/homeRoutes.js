const router = require('express').Router();
const { User } = require('../models');

const {checkAuthenticated, checkNotAuthenticated} =  require ('../utils/auth');

// Routes
router.get("/", checkNotAuthenticated,(req, res) => {
  res.render("dashboard", {
    user_id_session: req.session.user_id,
  }); //landing page
});

router.get("/main", checkAuthenticated, async (req, res) => {
  console.log("\n\nLOGGED IN USER");
  console.log(req.user);
  console.log("\n\n");

  const user = await User.findOne({ where: { email: req.user.email } });

  console.log(user.dataValues);

  res.render("main", {name: req.user.name,
                      id: user.dataValues.id,
                      email: user.dataValues.email,
                      role: user.dataValues.userType
  }); // home page with the dashboard
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
