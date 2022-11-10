const mongoose =require("mongoose");

const adminSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
},{
    timestamps:true
})

const AdminUser=mongoose.model("AdminUser",adminSchema);
module.exports=AdminUser;