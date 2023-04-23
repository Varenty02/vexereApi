const { mkdirp } = require("mkdirp");
//multer hỗ trợ upload file
const multer=require("multer");
const uploadImage=(type)=>{
    const made=mkdirp.sync(`./public/images/${type}`);
    const storage=multer.diskStorage({
        //setup chỗ lưu
        destination:function (req,file,cb){
            cb(null,`./public/images/${type}`);
        },
        //đặt lại tên cho file
        filename:function (req,file,cb){
            cb(null,Date.now()+"_"+file.originalname);
        }
    
    })
    const upload=multer({
        storage:storage,
        fileFilter:function (req,file,cb){
            const extensionImageList=[".png",".jpg"];
            const extension=file.originalname.slice(-4);
            const check=extensionImageList.includes(extension);
            if(check){
                cb(null,true);
            }else{
                cb(new Error("extension không hợp lệ"));
            }
        }
    });
    return upload.single(type);
}
module.exports={
    uploadImage,
}