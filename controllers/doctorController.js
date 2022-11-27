const Doctor = require("../models/doctorSchema");
const fs = require("fs");

exports.addDoctor = async (req, res, next) => {
  try {
    const { name, qualification, speciality } = req.body;
    let file = req.file;
    if (!file) {
      const error = new Error("Please choose files");
      error.httpStatusCode = 400;
      return next(error);
    }

    // convert images into base 64 encoding

    // let img = fs.readFileSync(file.path).toString("base64");

    let result = {
      filename: file.filename,
      contentType: file.mimetype,
      imageBase64: fs.readFileSync(file.path).toString('base64'),
    };

    fs.unlink(file.path, (error) => {
      if (error) {
        console.log(error);
      }
    });

    let data = { name, qualification,speciality, profile_photo: result };
    console.log(data)
    const doctorUpload = await Doctor.create(data);
    return res.send("success");
  } catch (error) {
    console.log(error);
    res.send("something wrong happens");
  }
};

exports.getDoctors = async (req, res) => {
  try {
    const data = await Doctor.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
