const Empanelment = require("../models/empanelmentSchema");
const fs = require("fs");

exports.addEmpanelment = async (req, res, next) => {
  try {
    const { name, empanelmentType} = req.body;
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

    let data = { name, empanelmentType, empanelmentLogo: result };
    const empanelmentUpload = await Empanelment.create(data);
    return res.send("success");
  } catch (error) {
    console.log(error);
    res.send("something wrong happens");
  }
};

exports.getEmpanelments = async (req, res) => {
  try {
    const data = await Empanelment.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};


exports.getGovernmentEmpanelment = async (req,res)=>{
  try{
    const data=await Empanelment.find({ empanelmentType: { $eq: "Government" } })
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

exports.getTpaEmpanelment = async (req,res)=>{
  try{
    const data=await Empanelment.find({ empanelmentType: { $eq: "Private TPA" } })
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
