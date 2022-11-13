const eventRoute = require("express").Router();
const eventController = require("../controllers/eventController");
const store = require("../middleware/multer");

eventRoute.post("/addevent", store, eventController.event);

module.exports = eventRoute;
