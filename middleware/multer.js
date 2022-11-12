const multer=require('multer')

let storage=multer.diskStorage({
    destination:({req, file ,cb})=>{
        cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        let ext=file.originalname.substr(file.originalname.lastIndexOf('.'));
        cb(null,file.filename +'_'+Date.now()+ext);
    }
})


store=multer({storage:storage});
module.exports=store;