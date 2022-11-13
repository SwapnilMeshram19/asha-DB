const Event = require("../models/eventSchema");
const fs = require("fs");

exports.event = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    let files = req.files;
    if (!files) {
      const error = new Error("Please choose files");
      error.httpStatusCode = 400;
      return next(error);
    }

    // convert images into base 64 encoding
    let imgArray = files.map((file) => {
      let img = fs.readFileSync(file.path);
      return (encode_image = img.toString("base64"));
    });

    let result = Array.from(imgArray).map((src, index) => ({
      filename: files[index].originalname,
      contentType: files[index].mimetype,
      imageBase64: src,

      // let newUpload=new eventSchema(finalImg);
      // return newUpload
      // .save()
      // .then(()=>{
      //     return {msg:`upload successful`}
      // })
      // .catch(error=>{
      //     if(error){
      //         if(error.name==='MongoError' && error.code ===11000){
      //             return Promise.reject({error:`Duplicate`})
      //         }
      //         return Promise.reject({error:error.message||`cannot upload`})
      //     }
      // })
    }));
    files.map((file) => {
      fs.unlink(file.path, (error) => {
        if (error) {
          console.log(error);
        }
      });
    });
    let data = { title, description, images: result };
    const eventUpload = await Event.create(data);
    return res.send("created");
  } catch (error) {
    console.log(error);
    res.send("something wrong happens");
  }
};
