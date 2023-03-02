// check if user is authenticated
const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/main");
}



// check if user is not authenticated
const checkNotAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  } else {
    next();
  }
}

module.exports = {checkAuthenticated, checkNotAuthenticated};