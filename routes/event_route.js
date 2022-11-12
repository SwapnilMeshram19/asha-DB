const eventRoute=require('express').Router();
const eventController=require('../controllers/eventController');
const store=require('../middleware/multer');

eventRoute.post('/add',store.array('images',10),eventController.event);

module.exports=eventRoute;