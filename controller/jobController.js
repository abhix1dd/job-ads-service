import { getJobPostings } from "../services/jobService.js";
import { toXML } from "../utils/xml.js";

export const fetchJobPostings = async (req, res) => {
  try {
    const format = req.query.format || "xml";
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 20;

    const jobs = await getJobPostings(page, pageSize);

    if (format === "json") {
      return res.json(jobs);
    }

    const xml = toXML(jobs);
    res.set("Content-Type", "application/xml");
    res.send(xml);

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
