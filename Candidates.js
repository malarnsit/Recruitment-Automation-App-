const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');  // Assuming you have a Candidate model

// Get all candidates and sort by name
router.get('/', async (req, res) => {
  try {
    const candidates = await Candidate.find().sort({ name: 1 }); // 1 for ascending order
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching candidates", error: error });
  }
});

// Add a new candidate (optional, if needed)
router.post('/', async (req, res) => {
  const { name, applicationStatus } = req.body;
  try {
    const newCandidate = new Candidate({ name, applicationStatus });
    await newCandidate.save();
    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(500).json({ message: "Error saving candidate", error: error });
  }
});

module.exports = router;
