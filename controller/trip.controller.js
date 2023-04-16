const {Trip,Station}=require("../models");
const createTrip=async (req,res)=>{
    const {fromStation,toStation,startTime,price}=req.body;
    const newTrip=await Trip.create({fromStation,toStation,startTime,price});
    res.status(201).send(newTrip);
}
const getAllTrip=async (req,res)=>{
    const tripList=await Trip.findAll({
        include:[{
            model:Station,
            as:"from"
        },{
            model:Station,
            as:"to"
        }]
    })
    res.status(200).send(tripList);
}
const deleteTrip=async (req,res)=>{
    const {id}=req.params;
    await Trip.destroy({
        where:{
            id,
        },
    });
    res.status(200).send(`đã xóa trip có id là ${id}`)
}
const updateTrip=async (req,res)=>{
    const {id}=req.params;
    const {fromStation,toStation,price,startTime}=req.body;
    const updateTrip=await Trip.update({fromStation,toStation,price,startTime},{
        where:{
            id
        }
    })
    res.status(200).send(`đã update trip có id là ${id}`)
}
module.exports={
    createTrip,
    getAllTrip,
    deleteTrip,
    updateTrip
}