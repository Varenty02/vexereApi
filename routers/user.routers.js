const express=require("express");
const { register, login, uploadAvatar } = require("../controller/user.controller");
const { uploadImage } = require("../middleware/upload/upload-image");
const { authenticate } = require("../middleware/auth/autheticate");
const userRouter=express.Router();
userRouter.post("/register",register);
userRouter.post("/login",login);


userRouter.post("/upload-avatar",authenticate,uploadImage("avatar"),uploadAvatar)
module.exports={
    userRouter,
}