const express=require("express");
const { CarModel, OEMModel } = require("../model/cars.Model");
const cloudinary=require("cloudinary").v2;
require("dotenv").config();

          
cloudinary.config({ 
    cloud_name: 'dbzk1bbdo', 
    api_key: '215927675825772', 
    api_secret: process.env.cloudKey
  });

const carRouter=express.Router();

carRouter.get("/",async(req,res)=>{
    try {
        const car=await CarModel.find();
        res.status(200).send(car)
    } catch (error) {
        res.status(400).send({"err":error.message})
    }
})


carRouter.get("/oem",async(req,res)=>{
    try {
        const car=await OEMModel.find();
        res.status(200).send(car)
    } catch (error) {
        res.status(400).send({"err":error.message})
    }
})


carRouter.post("/add",async(req,res)=>{
    try {
        const car = new CarModel(req.body)
       await car.save();
        res.status(200).send({"msg":"New Car has been added"})
    } catch (error) {
        res.status(400).send({"err":error.message});
    }
})

carRouter.patch("/edit/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await CarModel.findByIdAndUpdate({_id:id},req.body);
        res.status(200).send({"msg":`The Car with id ${id} has been updated`});
    } catch (error) {
        res.status(400).send({"err":error.message});
    }
})

carRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await CarModel.findByIdAndDelete({_id:id});
        res.status(200).send({"msg":`The Car with id ${id} has been Deleted`});
    } catch (error) {
        res.status(400).send({"err":error.message});
    }
})

module.exports={carRouter}