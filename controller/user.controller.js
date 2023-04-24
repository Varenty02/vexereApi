const {User, sequelize} = require("../models");
const bcrypt =require("bcryptjs");
const jwt=require("jsonwebtoken");
const gravatarUrl=require("gravatar-url");
const register=async (req,res)=>{
    const {name,email,password,numberPhone}=req.body;
    try {
        const avatarUrl=`https://i.pravatar.cc/150?u=${email}`
        ///tạo xong mới chạy tiếp tạo đồng bộ
        const salt=bcrypt.genSaltSync(10)
        const hashPassword=bcrypt.hashSync(password,salt);
        const newUser= await User.create({name,email,password:hashPassword,numberPhone,avatar:avatarUrl});
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error)
    }
}
const login=async (req,res)=>{
    const {email,password}=req.body;
    try {
        const userLogin= await User.findOne({
            where:{
                email
            }
        })
        const isAuthen=bcrypt.compareSync(password,userLogin.password);
        if(isAuthen){
            const token=jwt.sign({email:userLogin.email,type:userLogin.type},"hieudeptrai",{expiresIn:60*60})
            res.status(200).send({message:"true",token});
        }else{
            res.status(500).send("false");
        }
    } catch (error) {
        res.status(404).send(error);//không tìm thấy not found
    }

}
const uploadAvatar=async (req,res)=>{
    const {user}=req;
    const {file}=req;
    const urlImage=`http://localhost:3000/${file.path}`
    const userFound=await User.findOne({
        email:user.email,
    });
    userFound.avatar=urlImage;
    await userFound.save();
    res.status(200).send(userFound);
}
const getAllTrip=async (req,res)=>{
    try {
        const result=await sequelize.query(`
        select * from users
        inner join tickets on tickets.user_id=users.id
        inner join trips on trips.id=tickets.trip_id
        inner join stations as fromSta on fromSta.id=trips.fromStation
        inner join stations as toSta on toSta.id=trips.toStation
        `)
        res.status(200).send(result);

        
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports={
    register,
    login,
    uploadAvatar,
    getAllTrip
}
