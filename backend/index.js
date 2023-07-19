const express=require("express");
const { connection } = require("./db");
require("dotenv").config();
const {userRouter} =require("./routes/user.routes");
const cors=require("cors");
const { carRouter } = require("./routes/cars.routes");
const fileUpload=require("express-fileupload")
const app=express();
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles:true
}))
app.use("/users",userRouter);

app.use("/cars",carRouter);

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to DB");
        console.log(`Server is running at port 8080`);
    } catch (error) {
        console.log(error);
    }
})