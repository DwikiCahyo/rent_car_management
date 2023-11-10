const { v2 } = require("cloudinary");
const path = require("path");
require("dotenv").config(path.join(__dirname, "..", ".env"));

v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

module.exports = { v2 };
