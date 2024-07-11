import express from "express";
import { HFAT3 } from "../Database/HFAT-3.js";
const app = express();

export const HFAT3Controller = async (req, res) => {
  // const { completeform, table1 }= req.body;

  //     const combinedData = {...completeform, table1};
  //     HFAT3.create(combinedData)
  //     .then(result => {res.status(200).json({success:"data saved",result})})
  //     .catch(err=> {res.status(400).json({error:"error for data save"})})

  const hfat3 = req.body;
  try {
    HFAT3.find({ H3A2: hfat3?.H3A2 }).then((response) => {
      const newHFAT3 = new HFAT3({
        uniqueCode: `${hfat3.H3A2}_${response.length + 1}`,
        ...hfat3,
      });
      // const newHFAT3 = new HFAT3(hfat);
      newHFAT3.save();
      res.status(201).json(newHFAT3);
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
