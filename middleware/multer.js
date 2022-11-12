const multer=require('multer')

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now());
    }
  });


store=multer({storage:storage}).array('images',5);
module.exports=store;