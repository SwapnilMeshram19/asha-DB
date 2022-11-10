const eventSchema=require('../models/eventSchema');
const fs=require('fs');
 

exports.event=(req,res,next)=>{
    const files=req.files;
    if(!files){
        return res.status(400).send({
            response:'error',
            message:'Please chooose files'
        })
    } 

    //convert images into base 64 encoding
    let imgArray=files.map((file)=>{
        let img=fs.readFileSync(file.path);
        return encode_image= img.toString('base64');
    })
    
    res.json(imgArray)
}

