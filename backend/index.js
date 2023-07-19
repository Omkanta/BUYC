const express=require("express");
const { connection } = require("./db");
require("dotenv").config();

const app=express();
app.use(express.json());




app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to DB");
        console.log(`Server is running at port 8080`);
    } catch (error) {
        console.log(error);
    }
})