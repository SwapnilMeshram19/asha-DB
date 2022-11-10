const mongoose =require('mongoose');
const config=require('../config');
async function connectDb(){
    return new Promise((resolve,reject)=>{
        mongoose.connect(config.MONGO_URI,(err)=>{
            if(err){
                return reject(err)
            }

            console.log("Database successfully connected");
            return resolve();
        })
    })
}

module.exports=connectDb;