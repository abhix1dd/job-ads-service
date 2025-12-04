import { create } from "xmlbuilder2";

export const toXML = (jobs) => {
  return create({ version: "1.0" })
    .ele("jobPostings")
    .ele(
      jobs.map((job) => ({
        jobPosting: {
          title: job.title,
          description: job.description,
          url: job.url
        }
      }))
    )
    .end({ prettyPrint: true });
};
