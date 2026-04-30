const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  name: String,
  category: String,
  demandScore: Number
});

module.exports = mongoose.model("Skill", SkillSchema); 