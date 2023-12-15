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
app.use("/v1/", router);

if (process.env.NODE_ENV === "development") {
  Model.knex(knex(config.development));
} else if (process.env.NODE_ENV === "production") {
  Model.knex(knex(config.production));
}

app.listen(port, "0.0.0.0", () => {
  console.log("Server is runnin on http://localhost:3000");
});
