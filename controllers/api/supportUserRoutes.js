const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// TODO: GET request - support_user login
router.get('/login', (req, res) => {
  try {

  } catch(err) {
      res.status(500).json(err);
  }
})

// TODO: POST request - Sign Up = Creates a new support_user
router.post('/signup', async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash

    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: UPDATE request - update support_user profile
router.put('/profile', (req, res) => {
  try {

  } catch(err) {
      res.status(500).json(err);
  }
})

// TODO: DELETE request - delete support_user
router.delete('/profile', (req, res) => {
  try {

  } catch(err) {
      res.status(500).json(err);
  }
})

module.exports = router;