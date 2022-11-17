const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  specialities: {
    type: String,
    required: true,
  },
  
  profile_photo: 
    {
      filename: {
        type: String,
        required: true,
      },
      contentType: {
        type: String,
        required: true,
      },
      imageBase64: {
        type: String,
        require: true,
      },
    },
  
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;