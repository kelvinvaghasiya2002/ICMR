import express from "express";
import bodyParser from "body-parser"
import { HFAT1Controller } from "../controller/HFAT-1.js";

const router = express.Router();
const jsonparser = bodyParser.json()
router.post("/HFAT-1",jsonparser,HFAT1Controller)

export default router;