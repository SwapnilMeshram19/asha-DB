const mongoose =require("mongoose");

const eventSchema =new mongoose.Schema({
    filename:{
        type:String,
        unique:true,
        required:true
    },
    contentType:{
        type:String,
        required:true
    },
    imageBase64:{
        type:String,
        require:true
    }
})

const Event=mongoose.model("Event",eventSchema);
module.exports=Event;