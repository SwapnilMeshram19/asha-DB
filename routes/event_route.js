const eventRoute = require("express").Router();
const { addEvent, getEvents } = require("../controllers/eventController");
const {multipleImage} = require("../middleware/multer");

eventRoute.post("/addevent", multipleImage, addEvent);
eventRoute.get("/getevents", getEvents);

module.exports = eventRoute;
