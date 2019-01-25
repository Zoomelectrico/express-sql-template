const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(parseInt(process.env.ROUNDS));
    const hash = await bcrypt.hash(password, salt);
    await User.create({ name, email, password: hash });
    next();
  } catch (err) {
    throw err;
  }
};
