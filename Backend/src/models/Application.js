import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  userId: String,
  jobId: String,
  status: {
    type: String,
    default: "applied"
  }
}, { timestamps: true });

export default mongoose.model("Application", applicationSchema);