const authorize=(arrType)=>(req,res,next)=>{
    const {user}=req;
    if(arrType.findIndex(ele=>ele===user.type) > -1){
        next()
    }else{
        res.status(403).send("Đăng nhập nhưng không đủ quyền");
    }
}
module.exports={
    authorize
}