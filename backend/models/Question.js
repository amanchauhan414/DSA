// models/Question.js

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionDetail: { type: String, required: true },
  attemptedDate: { type: Date, required: true },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
