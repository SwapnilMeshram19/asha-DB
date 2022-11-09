const mongoose =require("mongoose");

const schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
},{
    timestamps:true
})

const AdminUser=mongoose.model("AdminUser",schema);
module.exports=AdminUser;