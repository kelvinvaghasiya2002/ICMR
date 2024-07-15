import express from "express";
import bodyParser from "body-parser";
import { AMBULANCEController } from "../controller/Ambulance.js";

const router = express.Router();
const jsonparser = bodyParser.json();
router.post("/AMBULANCE", jsonparser, AMBULANCEController);

export default router;
