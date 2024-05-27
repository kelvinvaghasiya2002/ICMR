import express, { response } from "express";
import mongoose from "mongoose";
import { HFAT1 } from "../Database/HFAT-1.js";
const app = express();

export const HFAT1Controller = async (req,res)=>{
    const newData = new HFAT1({
        h1: "hello",
        h2: ["12", "243"]
    });

    try {
        const response = await newData.save();
        res.status(201).json({ message: 'Data saved successfully', response: response });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Failed to save data' });
    }

}