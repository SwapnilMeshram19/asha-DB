const doctorRoute = require("express").Router();
const { addDoctor, getDoctors } = require("../controllers/doctorController");
const store = require("../middleware/multer");

doctorRoute.post("/adddoctor", store, addDoctor);
doctorRoute.get("/getdotors", getDoctors);

module.exports = eventRoute;
