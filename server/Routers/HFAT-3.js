import express from "express";
import bodyParser from "body-parser"
import { HFAT3Controller } from "../controller/HFAT-3.jS";

const router = express.Router();
const jsonparser = bodyParser.json()
router.post("/HFAT-3",jsonparser,HFAT3Controller)

export default router;