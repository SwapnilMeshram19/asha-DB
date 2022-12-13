const mongoose = require("mongoose");

const empanelmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  
  empanelmentLogo: 
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

const Empanelment = mongoose.model("Empanelment", empanelmentSchema);
module.exports = Empanelment;
