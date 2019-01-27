require("dotenv").config({ path: "./variables.env" });
const sequelize = require("./config/database");
sequelize
  .authenticate()
  .then(value => sequelize.sync())
  .then(value => value)
  .catch(err => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
  });
const app = require("./app");
app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
