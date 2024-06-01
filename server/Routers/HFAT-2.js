import express from "express";
import bodyParser from "body-parser"
import { HFAT2Controller } from "../controller/HFAT-2.js";

const router = express.Router();
const jsonparser = bodyParser.json()
router.post("/HFAT-2",jsonparser,HFAT2Controller)

export default router;