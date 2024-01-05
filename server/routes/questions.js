const express = require("express");
const router = express.Router();

const {
  perceiveAllQuestions,
  createNewQuestion,
  updateQuestion,
  eradicateQuestionByQuestTitle,
} = require("../controllers/inquiration");

// CRUD

// GET : route for retrieving all questions from the database
router.get("/", express.json(), perceiveAllQuestions);

// PUT : route for admin user overwriting their quest
router.put("/:quizID", express.json(), updateQuestion);

// POST : route for erecting a new question to the database
router.post("/", express.json(), createNewQuestion);

// DELETE : route for getting rid of a specific question by providing it's name
router.delete(
  "/delete_quest_by_name",
  express.json(),
  eradicateQuestionByQuestTitle
);

module.exports = router;
