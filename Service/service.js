const CarsModel = require("../Database/models/cars");
const carsModel = require("../Database/models/cars");
const { v2 } = require("../middleware/cloudinary");

exports.getCars = async (req, res) => {
  try {
    let query = carsModel.query();
    const { available, capacity, date, time } = req.query;

    const parseAvailable = available === "true" ? true : false;

    if (available) {
      query = query.where("available", "=", parseAvailable);
    }

    if (capacity) {
      query = query.where("capacity", ">=", capacity);
    }

    if (date) {
      query = query
        .select("*")
        .whereRaw('DATE("cars"."availableAt") = ?', [date])
        .orderBy("cars.availableAt");
    }

    if (time) {
      query = query
        .select("*")
        .whereRaw('TO_CHAR("cars"."availableAt" , ?) <= ? ', ["HH24:MI", time])
        .orderBy("cars.availableAt");
    }

    const cars = await query;

    res.status(200).json({ length: cars.length, data: { cars } });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const carsId = await carsModel.query().findById(id);
    if (!carsId) {
      return res.status(404).json({ message: "car not found" });
    }
    res.status(200).json({ car: carsId });
  } catch (e) {
    res.status(400).json({ err: e });
  }
};

exports.postCar = async (req, res) => {
  try {
    //buffer
    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file?.mimetype};base64,${fileBase64}`;
    // upload image
    const result = await v2.uploader.upload(file, {
      folder: "rent_car",
      use_filename: true,
      unique_filename: false,
    });

    const imageUrl = result.secure_url;

    const body = {
      ...req.body,
      image: imageUrl,
      options: JSON.stringify(req.body.options),
      specs: JSON.stringify(req.body.specs),
    };

    const car = await carsModel.query().insert(body).returning("*");
    res.status(200).json({
      message: "Success add new car",
      data: car,
    });
  } catch (e) {
    res.status(400).json({ err: e });
  }
};

exports.deleteCarById = async (req, res) => {
  const carId = req.params.id;
  try {
    const car = await CarsModel.query().deleteById(carId);
    res.status(200).json({ message: `Success delete ${carId}` });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};

exports.editCarById = async (req, res) => {
  try {
    const carId = req.params.id;

    const body = {
      ...req.body,
      options: JSON.stringify(req.body.options),
      specs: JSON.stringify(req.body.specs),
    };

    if (!carId) return res.status(404).json({ message: "car not found" });
    const car = await carsModel
      .query()
      .findById(carId)
      .patch(body)
      .returning("*");
    res.status(200).json({ message: "Success update data", data: car });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};
