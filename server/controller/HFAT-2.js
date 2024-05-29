import express, { response } from "express";
import mongoose from "mongoose";
import { HFAT2 } from "../Database/HFAT-2.js";
const app = express();

export const HFAT2Controller = async (req,res)=>{
      
      const { completeform, table1 }= req.body;
        // const x = {...adddata2[0] , ...adddata2[2]}

        const combinedData = {...completeform, table1};
        HFAT2.create(combinedData)
        .then(result => {res.status(200).json({success:"data saved",result})})
        .catch(err=> {res.status(400).json({error:"error for data save"})})

}