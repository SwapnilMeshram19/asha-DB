const eventSchema=require('../models/eventSchema');
const fs=require('fs');
 

exports.event=(req,res,next)=>{
    const files=req.files;
    if(!files){
        const error =new Error("Please choose files");
        error.httpStatusCode=400;
        return next(error);
     
    } 

    //convert images into base 64 encoding
    // let imgArray=files.map((file)=>{
    //     let img=fs.readFileSync(file.path);
    //     return encode_image= img.toString('base64');
    // })

// let result=imgArray.map((src,index)=>{
//         let finalImg={
//             filename:files[index],
//             contentType:files[index].imgType,
//             imageBase64:src
//         }
//         let newUpload=new UploadModel(finalImg);
//         return newUpload
//         .save()
//         .then(()=>{
//             return {msg:`upload successful`}
//         })
//         .catch(error=>{
//             if(error){
//                 if(error.name==='MongoError' && error.code ===1000){
//                     return Promise.reject({error:`Duplicate`})
//                 }
//                 return Promise.reject({error:error.message||`cannot upload`})
//             }
//         })
//     })

    // Promise.all(result)
    // .then(msg=>{
    //     res.json(msg)
    // }).catch(error=>{
    //     res.json(error)
    // })

    res.json(files)

}

