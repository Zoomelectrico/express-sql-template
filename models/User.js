const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const md5 = require("md5");
const bcrypt = require("bcryptjs");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

/*
User.encrypt = function ({ password }) {
  const salt = bcrypt.genSaltSync(process.env.SALT);
  return bcrypt.hashSync(password, salt);
};
*/
User.prototype.compare = function(password) {
  const hash = this.password;
  return bcrypt.compareSync(password, hash);
};

module.exports = User;
