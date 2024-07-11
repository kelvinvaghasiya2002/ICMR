import express, { response } from "express";
import mongoose from "mongoose";
import { HFAT2 } from "../Database/HFAT-2.js";
const app = express();

export const HFAT2Controller = async (req, res) => {
  // const { completeform, table1 } = req.body;
  // // const x = {...adddata2[0] , ...adddata2[2]}

  // const combinedData = { ...completeform, table1 };
  // HFAT2.create(combinedData)
  //   .then((result) => {
  //     res.status(200).json({ success: "data saved", result });
  //   })
  //   .catch((err) => {
  //     res.status(400).json({ error: "error for data save" });
  //   });

  const hfat2 = req.body;
  try {
    HFAT2.find({ H2A2: hfat2?.H2A2 }).then((response) => {
      const newHFAT2 = new HFAT2({
        uniqueCode: `${hfat2.H2A2}_${response.length + 1}`,
        ...hfat2,
      });
      // const newHFAT2 = new HFAT2(hfat);
      newHFAT2.save();
      res.status(201).json(newHFAT2);
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
