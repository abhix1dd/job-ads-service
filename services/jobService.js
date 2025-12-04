import JobPosting from "../models/JobPosting.js";

export const getJobPostings = async (page, pageSize) => {
  const skip = (page - 1) * pageSize;

  const jobs = await JobPosting.find()
    .skip(skip)
    .limit(pageSize);

  return jobs;
};
