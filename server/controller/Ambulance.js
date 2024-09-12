import express, { response } from "express";
import mongoose from "mongoose";
import { AMBULANCE } from "../Database/Ambulance.js";
const app = express();

export const AMBULANCEController = async (req, res) => {
  var { completeform, table1, table2, uniqueCode } = req.body;
  completeform = JSON.parse(completeform);
  table1 = JSON.parse(table1);
  table2 = JSON.parse(table2);

  AMBULANCE.countDocuments({ AMB1: completeform?.AMB1 }).then((response) => {
    const combinedData = {
      ...completeform,
      table1,
      table2,
      formUniqueCode: uniqueCode,
      uniqueCode: `${completeform.AMB1}_${response + 1}`,
    };
    AMBULANCE.create(combinedData)
      .then((result) => {
        res.status(200).json({ success: "data saved", result });
      })
      .catch((err) => {
        res.status(400).json({ error: "error for data save" });
      });
  });
  // const hfat1 = req.body;
  // try {
  //   HFAT1.find({ A3: hfat1?.A3 }).then((response) => {
  //     const newHFAT1 = new HFAT1({
  //       uniqueCode: `${hfat1.A3}_${response.length + 1}`,
  //       ...hfat1,
  //     });
  //     // const newHFAT1 = new HFAT1(hfat);
  //     newHFAT1.save();
  //     res.status(201).json(newHFAT1);
  //   });
  // } catch (error) {
  //   res.status(409).json({ message: error.message });
  // }
};
