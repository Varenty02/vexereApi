const jwt=require("jsonwebtoken")
const authenticate=(req,res,next)=>{
    const token=req.header("token");
    try {
        
        const decode=jwt.verify(token,"hieudeptrai");
        console.log(decode);
        if(decode){
            req.user=decode;
            next();
        }else{
            res.status(401).send("bạn chưa đăng nhập")
        }
    } catch (error) {
        res.status(401).send("bạn chưa đăng nhập");;
    }
};
module.exports={
    authenticate,

};