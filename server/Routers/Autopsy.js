import bodyParser from "body-parser";
import express from "express";
import AutopsyController from "../controller/Autopsy.js";
const router = express.Router();
const jsonparser = bodyParser.json();

router.post("/Autopsy", jsonparser, AutopsyController);

export default router;
