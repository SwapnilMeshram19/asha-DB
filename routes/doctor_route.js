const doctorRoute = require("express").Router();
const { addDoctor, getDoctors } = require("../controllers/doctorController");
const {singleImage} = require("../middleware/multer");

doctorRoute.post("/adddoctor", singleImage, addDoctor);
doctorRoute.get("/getdotors", getDoctors);

module.exports = doctorRoute;
