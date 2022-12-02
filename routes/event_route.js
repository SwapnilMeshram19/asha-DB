const eventRoute = require("express").Router();
const { addEvent, getEvents, getEvent } = require("../controllers/eventController");
const {multipleImage} = require("../middleware/multer");

eventRoute.post("/addevent", multipleImage, addEvent);
eventRoute.get("/getevents", getEvents);
eventRoute.get("/getevent",getEvent);

module.exports = eventRoute;
