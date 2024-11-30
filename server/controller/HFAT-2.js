import express, { response } from "express";
import mongoose from "mongoose";
import { HFAT2 } from "../Database/HFAT-2.js";
const app = express();

export const HFAT2Controller = async (req, res) => {
  var { completeFormHfat2, table1, table2, table3, table4 } = req.body;
  // completeFormHfat2 = JSON.parse(completeFormHfat2);
  // table1 = JSON.parse(table1);
  // table2 = JSON.parse(table2);
  // table3 = JSON.parse(table3);
  // table4 = JSON.parse(table4);


  completeFormHfat2 = completeFormHfat2 ? JSON.parse(completeFormHfat2) : {};
  table1 = table1 ? JSON.parse(table1) : {};
  table2 = table2 ? JSON.parse(table2) : {};
  table3 = table3 ? JSON.parse(table3) : {};
  table4 = table4 ? JSON.parse(table4) : {};
  HFAT2.countDocuments({ H2A2: completeFormHfat2?.H2A2 }).then((response) => {
    console.log(response);
    const combinedData = {
      ...completeFormHfat2,
      table1,
      table2,
      table3,
      table4,
      uniqueCode: `${completeFormHfat2?.H2A2}_${response + 1}`,
    };
    HFAT2.create(combinedData)
      .then((result) => {
        res.status(200).json({ success: "data saved", result });
      })
      .catch((err) => {
        res.status(400).json({ error: "error for data save" });
      });
  });

  // const hfat2 = req.body;
  // try {
  //   HFAT2.find({ H2A2: hfat2?.H2A2 }).then((response) => {
  //     const newHFAT2 = new HFAT2({
  //       uniqueCode: `${hfat2.H2A2}_${response.length + 1}`,
  //       ...hfat2,
  //     });
  //     // const newHFAT2 = new HFAT2(hfat);
  //     newHFAT2.save();
  //     res.status(201).json(newHFAT2);
  //   });
  // } catch (error) {
  //   res.status(409).json({ message: error.message });
  // }
};
