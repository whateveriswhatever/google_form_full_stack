const mongoose = require("mongoose");

const inquirationSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  realAnswer: {
    type: String,
  },
  userAnswer: {
    type: String,
    default: "",
    maxLength: [
      200,
      "The answers are only allowed to be maximum with 200 characters",
    ],
  },
  isTrue: {
    type: Boolean,
    default: false,
  },
  isCompleted: {
    type: Boolean,
    require: [true, "You must fill out the answer for this question !"],
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const QuestionModel = mongoose.model("Questions", inquirationSchema);

module.exports = QuestionModel;
