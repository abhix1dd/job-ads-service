import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";

const app = express();

connectDB();

app.use("/api/job-postings", jobRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
