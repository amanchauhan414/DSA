// routes/questions.js

const express = require('express');
const router = express.Router();
const Question = require('../models/Question.js');

// Get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new question
router.post('/', async (req, res) => {
  const question = new Question({
    questionDetail: req.body.questionDetail,
    attemptedDate: req.body.attemptedDate,
  });

  try {
    const newQuestion = await question.save();
    res.status(201).json({ success: true, question: newQuestion });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
