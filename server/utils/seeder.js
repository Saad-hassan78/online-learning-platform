const mongoose = require('mongoose');
const Course = require('../models/Course');
require('dotenv').config();

const courses = [
  {
    title: "Full-Stack Web Development",
    description: "Master HTML, CSS, JavaScript, React, and Node.js from scratch.",
    instructor: "Dr. Sarah Jenkins",
    duration: "12 Weeks"
  },
  {
    title: "Artificial Intelligence & ML",
    description: "Deep dive into Neural Networks, Python, and Predictive Modeling.",
    instructor: "Prof. Alan Turing",
    duration: "16 Weeks"
  },
  {
    title: "Cloud Computing with AWS",
    description: "Learn to deploy and scale applications on the world's leading cloud platform.",
    instructor: "James Gosling",
    duration: "8 Weeks"
  },
  {
    title: "Cyber Security Essentials",
    description: "Protect systems from attacks and learn ethical hacking techniques.",
    instructor: "Kevin Mitnick",
    duration: "10 Weeks"
  },
  {
    title: "Data Science with Python",
    description: "Clean, analyze, and visualize complex data sets like a professional.",
    instructor: "Guido van Rossum",
    duration: "14 Weeks"
  },
  {
    title: "UI/UX Design Masterclass",
    description: "Learn the principles of user-centric design and create stunning interfaces using Figma.",
    instructor: "Gary Simon",
    duration: "6 Weeks"
  },
  {
    title: "Mobile App Development with Flutter",
    description: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    instructor: "Angela Yu",
    duration: "12 Weeks"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/proj2web');
    await Course.deleteMany({}); // Clear existing
    await Course.insertMany(courses);
    console.log("Database Seeded Successfully! 🚀");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
