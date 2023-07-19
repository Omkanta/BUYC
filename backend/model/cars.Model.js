const mongoose=require("mongoose");

const carSchema=mongoose.Schema({
    model_name:{type:String,required:true},
    model_year:{type:Number,required:true},
    odometer:{type:Number,required:true},
    no_scratches:{type:Number,required:true},
    no_accidents:{type:Number,required:true},
    orig_paint:{type:String,required:true},
    prev_buyers:{type:Number,required:true},
    reg_place:{type:String,required:true},
    userID:{type:String,required:true},
    img:{type:String,required:true}
},{
    versionKey:false
})

const OEMSchema=mongoose.Schema({
    model_name:{type:String,required:true},
    model_year:{type:Number,required:true},
    mileage:{type:Number,required:true},
    Price:{type:Number,required:true},
    power:{type:String,required:true},
    max_speed:{type:Number,required:true},
})

const OEMModel=mongoose.model("OEM_specs",OEMSchema)


const CarModel=mongoose.model("Marketplace_Inventory",carSchema)

module.exports={CarModel,OEMModel}