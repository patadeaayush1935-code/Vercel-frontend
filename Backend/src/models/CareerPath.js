const mongoose = require("mongoose");

const CareerPathSchema = new mongoose.Schema({
  role: String,
  nextRoles: [
    {
      role: String,
      requiredSkills: [String],
      avgSalary: Number
    }
  ]
});

module.exports = mongoose.model("CareerPath", CareerPathSchema);