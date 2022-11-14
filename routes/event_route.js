const eventRoute = require("express").Router();
const { addEvent, getEvents } = require("../controllers/eventController");
const store = require("../middleware/multer");

eventRoute.post("/addevent", store, addEvent);
eventRoute.get("/getevents", getEvents);

module.exports = eventRoute;
