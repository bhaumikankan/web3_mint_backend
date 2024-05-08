require("dotenv").config();
const dotenv = require("dotenv").config({
  path: `.env.${process.env.SETUP || "dev"}`,
});

console.log(
  `Starting in ${process.env.SETUP} setup & ${process.env.NODE_ENV} environment...`
);

module.exports = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  mongoose: {
    url: process.env.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
