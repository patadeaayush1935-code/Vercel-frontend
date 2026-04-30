const mongoose = require("mongoose");
require("dotenv").config();

const CareerPath = require("../models/CareerPath");
const Skill = require("../models/Skill");

// 👇 PASTE careerPaths HERE
const careerPaths = [ ... ];

// 👇 PASTE skills HERE
const skills = [ ... ];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await CareerPath.deleteMany({});
    await Skill.deleteMany({});

    await CareerPath.insertMany(careerPaths);
    await Skill.insertMany(skills);

    console.log("✅ Data Seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedDB();