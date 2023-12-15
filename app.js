const express = require("express");
const { knex } = require("knex");
const { Model } = require("objection");
const config = require("./knexfile");
const router = require("./Routes/route");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

app.use(express.static("views"));
app.set("view engine", "ejs");
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

Model.knex(knex(config.development));

app.use("/", router);

app.listen(port, "0.0.0.0", () => {
  console.log("Server is running on http://localhost:3000");
});
