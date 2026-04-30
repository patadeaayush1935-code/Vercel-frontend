import Application from "../models/Application.js";

// Apply to job
export const applyToJob = async (req, res) => {
  const { userId, jobId } = req.body;

  const application = await Application.create({
    userId,
    jobId
  });

  res.json(application);
};

// Get applications (basic)
export const getApplications = async (req, res) => {
  const apps = await Application.find();
  res.json(apps);
};