import express from "express"
import { HFAT3 } from "../Database/HFAT-3.js";
const app = express();

export const HFAT3Controller = (req,res)=>{
    const comform = {
        h1:"hfat-3",
        h2:["12","243"]
    }
    const data = new HFAT3(confirm);
    data.save().then(() => {
        res.status(200).json({
            success: "form submit",
            data:data
        })
    }).catch((err) => {
        res.status(401).json({
            error: "Error occured in sign up. try again!"
        })
    })

}