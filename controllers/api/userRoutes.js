const router = require("express").Router();
const { User } = require("../../models");
// const withAuth = require("../../utils/auth");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/login", async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// POST request - sign up = creates a new user // TODO: what if it's support user?
// api/user/signup
router.post("/signup", async (req, res) => {
  
  // console.log('req.body => ', req.body)

  try {
    console.log("signup route fired");
    const hashedPassword = await bcrypt.hashSync(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    const userData = {
      username: req.body.username,
      password: req.body.password,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      userType: "user"
    }

    // console.log("userData =>", userData)
    
    const newUser = await User.create(userData);
    // res.status(200).json(newUser);
    res.redirect('/login');

  } catch (err) {
    res.status(500).json({
      message: "Error creating user."
    });
  }
});

module.exports = router;
