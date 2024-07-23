import bodyParser from "body-parser";
import express from "express";
import CSTConroller from "../controller/CST.js";
const router = express.Router();
const jsonparser = bodyParser.json();



router.post("/cstdata",jsonparser,CSTConroller);







export default router;