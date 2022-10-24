const mongoose =require('mongoose');
async function connectDb(){
    return new Promise((resolve,reject)=>{
        const url="mongodb+srv://sam:Sam%401908@cluster0.1chu4rs.mongodb.net/?retryWrites=true&w=majority";
        mongoose.connect(url,(err)=>{
            if(err){
                return reject(err)
            }

            console.log("Database successfully connected");
            return resolve();
        })
    })
}

module.exports=connectDb;