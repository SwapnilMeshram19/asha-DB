const empanelmentRoute = require("express").Router();
const { addEmpanelment, getEmpanelments, getGovernmentEmpanelment, getTpaEmpanelment } = require("../controllers/empanelmentController");
const {empanelmentLogo} = require("../middleware/multer");

empanelmentRoute.post("/addempanelment",empanelmentLogo, addEmpanelment);
empanelmentRoute.get("/getEmpanelment", getEmpanelments);
empanelmentRoute.get("/government", getGovernmentEmpanelment);
empanelmentRoute.get("/private", getTpaEmpanelment);

module.exports = empanelmentRoute;
