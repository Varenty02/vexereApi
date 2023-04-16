const express = require("express");
const path=require('path');
const app=express();
const {sequelize}=require('./models');
const { rootRouter } = require("./routers");
const Fingerprint=require("express-fingerprint");
app.use(express.json());
const publicPathDirectory=path.join(__dirname,"./public")
app.use("/public",express.static(publicPathDirectory));
app.use(Fingerprint({

}))
app.use('/api/v1',rootRouter);
app.listen(3000,async ()=>{
    console.log('App listening on https://localhost:3000');
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})