const express=require("express");
const { createStation,getAllStation ,getDetailStation, updateStation, deleteStation} = require("../controller/station.controller");
const { checkExist } = require("../middleware/validation/checkExist");
const {Station} = require("../models");
const { authenticate } = require("../middleware/auth/autheticate");
const { authorize } = require("../middleware/auth/authorize");
const stationRouter =express.Router();
stationRouter.post("/",authenticate,authorize(['admin','superadmin']),createStation);
stationRouter.get("/",getAllStation);
stationRouter.get('/:id',checkExist(Station),getDetailStation);
stationRouter.put('/:id',checkExist(Station),updateStation);
stationRouter.delete('/:id',authenticate,checkExist(Station),deleteStation);

module.exports={
    stationRouter,
}