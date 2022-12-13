const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "-" + Date.now());
  },
});

multipleImage = multer({ storage: storage }).array("images", 10);
singleImage=multer({storage:storage}).single('profile_photo');
empanelmentLogo=multer({storage:storage}).single('empanelmentLogo');

module.exports = {multipleImage,singleImage,empanelmentLogo};
