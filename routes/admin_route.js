const adminRoute=require('express').Router();
const adminController=require('../controllers/adminController')

adminRoute.post('/Register',adminController.register);
adminRoute.post('/Login',adminController.login);
adminRoute.get('/LoggedInUser',adminController.getLoggedInUser);

module.exports=adminRoute;
