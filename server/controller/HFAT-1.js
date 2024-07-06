import express, { response } from "express";
import mongoose from "mongoose";
import { HFAT1 } from "../Database/HFAT-1.js";
const app = express();

export const HFAT1Controller = async (req, res) => {

  var { completeform, table1, table2, table3, table4 } = req.body;
  // console.log(completeform, table1, table2, table3, table4);
  completeform = JSON.parse(completeform)
  table1 = JSON.parse(table1)
  table2 = JSON.parse(table2)
  table3 = JSON.parse(table3)
  table4 = JSON.parse(table4)

  HFAT1.find({ A3: completeform?.A3 }).then((response) => {
    console.log(response);
    const combinedData = { ...completeform, table1, table2, table3, table4 , uniqueCode : `${completeform.A3}_${response.length+1}` };
    HFAT1.create(combinedData)
      .then(result => { res.status(200).json({ success: "data saved", result }) })
      .catch(err => { res.status(400).json({ error: "error for data save" }) })
  })
}