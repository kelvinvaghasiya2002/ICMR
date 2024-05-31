import express from "express"
import { HFAT3 } from "../Database/HFAT-3.js";
const app = express();

export const HFAT3Controller = (req,res)=>{
    
    const { completeform, table1 }= req.body;

        const combinedData = {...completeform, table1};
        HFAT3.create(combinedData)
        .then(result => {res.status(200).json({success:"data saved",result})})
        .catch(err=> {res.status(400).json({error:"error for data save"})})

}
