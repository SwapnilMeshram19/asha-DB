const eventRoute=require('express').Router();
const eventController=require('../controllers/eventController')

eventRoute.post('/event/add',eventController.event);

module.exports=eventRoute;