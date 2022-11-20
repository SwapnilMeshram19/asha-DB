const Doctor = require("../models/doctorSchema");
const fs = require("fs");

exports.addDoctor = async (req, res, next) => {
  try {
    const { name, designation, specialities } = req.body;
    // console.log(req.file)
    let file = req.file;
    // console.log(file)
    if (!file) {
      const error = new Error("Please choose files");
      error.httpStatusCode = 400;
      return next(error);
    }

    // convert images into base 64 encoding

    let img = fs.readFileSync(file.path).toString("base64");

    let result = {
      filename: file.filename,
      contentType: file.mimetype,
      imageBase64: file.src,
    };

    fs.unlink(file.path, (error) => {
      if (error) {
        console.log(error);
      }
    });

    let data = { name, designation, specialities, profile_photo: result };
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
