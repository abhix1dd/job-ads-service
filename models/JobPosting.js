import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    url: { type: String, require: true },
},{timestamps:true}
);

export default mongoose.model("JobPosting",JobSchema);
