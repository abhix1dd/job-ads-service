// mongodb+srv://assignment:admin123@cluster0.2bxcxna.mongodb.net/
import express from "express";
import { fetchJobPostings } from "../controller/jobController.js";

const router = express.Router();

router.get("/", fetchJobPostings);

export default router;
