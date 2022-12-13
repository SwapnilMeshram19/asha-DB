const empanelmentRoute = require("express").Router();
const { addEmpanelment, getEmpanelments } = require("../controllers/empanelmentController");
const {empanelmentLogo} = require("../middleware/multer");

empanelmentRoute.post("/addempanelment",empanelmentLogo, addEmpanelment);
empanelmentRoute.get("/getEmpanelment", getEmpanelments);

module.exports = empanelmentRoute;
