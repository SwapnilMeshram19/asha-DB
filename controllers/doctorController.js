const Doctor = require("../models/doctorSchema");
const fs = require("fs");

exports.addDoctor = async (req, res, next) => {
  try {
    const { title, designation, specialities } = req.body;
    let file = req.files;
    if (!file) {
      const error = new Error("Please choose files");
      error.httpStatusCode = 400;
      return next(error);
    }

    // convert images into base 64 encoding

    let img = fs.readFileSync(file.path).toString("base64");

    let result = {
      filename: img.originalname,
      contentType: img.mimetype,
      imageBase64: img.src,
    };

    fs.unlink(file.path, (error) => {
      if (error) {
        console.log(error);
      }
    });

    let data = { title, designation, specialities, profile_photo: result };
    const doctorUpload = await Doctor.create(data);
    return res.send("created");
  } catch (error) {
    console.log(error);
    res.send("something wrong happens");
  }
};

exports.getDoctors = async (req, res) => {
  try {
  } catch (error) {}
};