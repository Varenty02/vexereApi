const {Station} = require("../../models");

const checkExist=(Model)=>{
    return async (req,res,next)=>{
        const {id}=req.params;
        const station=await Model.findOne({
            where:{
                id,
            }
        })
        if(station){
            next();
        }else{
            res.status(404).send(`Không tìm thấy station có id là ${id}`);
        }
    }
}

module.exports={
    checkExist,
}