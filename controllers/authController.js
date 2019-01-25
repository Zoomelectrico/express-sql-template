const passport = require("passport");

exports.signin = passport.authenticate(
  "local",
  { failureRedirect: "/signin", session: true },
  (req, res) => {
    const user = req.user;
    res.render("user/profile", { user });
  }
);
