const express = require("express");
const cors = require("cors");
const { errorConverter, errorHandler } = require("./middlewares/error");
const route = require("./routes/v1");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/v1/api", route);

app.use(errorConverter);

app.use(errorHandler);

module.exports = app;
