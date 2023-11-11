const axios = require("axios");

exports.landingPage = (req, res) => {
  try {
    res.status(200).render("index.ejs");
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.searchPage = async (req, res) => {
  try {
    const { available, capacity, date, time } = req.query;

    const params = {
      available: available,
      capacity: capacity,
      date: date,
      time: time,
    };

    const response = await axios.get("http://localhost:3000/cars", { params });
    const cars = response.data.data.cars;
    res.status(200).render("car", { cars: cars });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
