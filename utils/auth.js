const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route

  if (!req.session.logged_in) {
    console.log("\n--- Not logged in ---\n");
    console.log(req.session.logged_in + "\n");
    res.redirect("/");
  } else {
    console.log("\n--- Logged in ---\n");
    console.log(req.session.logged_in + "\n");
    next();
  }
};

module.exports = withAuth;
