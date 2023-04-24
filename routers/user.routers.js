const express=require("express");
const { register, login, uploadAvatar, getAllTrip } = require("../controller/user.controller");
const { uploadImage } = require("../middleware/upload/upload-image");
const { authenticate } = require("../middleware/auth/autheticate");
const userRouter=express.Router();
userRouter.post("/register",register);
userRouter.post("/login",login);
userRouter.get("/getAllTrip",getAllTrip)

userRouter.post("/upload-avatar",authenticate,uploadImage("avatar"),uploadAvatar)
module.exports={
    userRouter,
}