import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "../config/db.js";
import JobPosting from "../models/JobPosting.js";

const seed = async () => {
  await connectDB();

  await JobPosting.deleteMany();

  await JobPosting.insertMany([
    {
      title: "Senior Fullstack Developer",
      description: "Work with Next.js, Node.js, AWS...",
      url: "https://example.com/jobs/1",
    },
    {
      title: "Backend Engineer",
      description: "Work with microservices & MongoDB",
      url: "https://example.com/jobs/2",
    }
  ]);

  console.log("Seed data inserted");
  process.exit();
};

seed();
