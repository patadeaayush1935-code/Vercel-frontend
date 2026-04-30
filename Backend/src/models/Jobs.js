import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  salary: Number,
  location: String
});

export default mongoose.model("Job", jobSchema);