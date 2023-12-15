const express = require("express");
const router = express.Router();
const service = require("../Service/service");
const controller = require("../controller/controller");
const upload = require("../middleware/multer");

// router.get("/", controller.landingPage);
// router.get("/search", controller.searchPage);
router.get("/cars", service.getCars);
router.post("/cars", upload.single("image"), service.postCar);
router.get("/cars/:id", service.getById);
router.delete("/cars/:id", service.deleteCarById);
router.patch("/cars/:id", upload.none(), service.editCarById);

module.exports = router;
