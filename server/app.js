import express from "express"; 
import mongoose from "mongoose";
import 'dotenv/config'

const mongoURL = process.env.MONGO_URL;

mongoose.connect("mongodb+srv://kelvin123:Kelvin123@cluster0.yntrczs.mongodb.net/icmrDB?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database connected...");
}).catch((err)=>{
    console.log(err);
})


const app = express();

app.get("/",(req,res)=>{
    res.json({
        mongoURL
    })
})





app.listen(3000,()=>{
    console.log("server is running on port 3000");
})