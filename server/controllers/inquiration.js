const QuestionModel = require("../models/Question");

const perceiveAllQuestions = async (req, res) => {
  try {
    const allQuestions = await QuestionModel.find({});

    res.status(201).json({
      status: "success",
      message: "Retrieved successfully all questions from the database !",
      data: allQuestions,
    });
  } catch (err) {
    console.log(`Error ---> ${err}`);
    res.status(404).send(err);
  }
};

const createNewQuestion = async (req, res) => {
  try {
    const { title } = req.body;
    const { real_answer } = req.body;

    const newConcern = QuestionModel.create({
      title: title,
      realAnswer: real_answer,
    });

    res.status(201).json({
      status: "success",
      message: "Erected successfully a new interrogate",
      newQuestion: newConcern,
    });
  } catch (err) {
    console.log(`Error ---> ${err}`);
    res.status(404).send(err);
  }
};

const updateQuestion = async (req, res) => {
  try {
    const { quizID } = req.params;
    const { updatedQuestionTitle } = req.body;
    const { updatedQuestionRealAnswer } = req.body;

    console.log(`updatedQuestionTitle : ${updatedQuestionTitle}`);
    console.log(`updatedQuestionRealAnswer : ${updatedQuestionRealAnswer}`);
    // const {updatedQuestionUserAnswer} = req.body;
    if (!quizID) {
      return res.status(400).send("This quiz ain't existed !");
    }

    let foundOne = await QuestionModel.findById(quizID).exec();

    console.log(`foundOne : ${foundOne}`);

    if (foundOne === null) {
      return res.status(201).send("There is no task that matchs your search !");
    }

    const newOne = await QuestionModel.findByIdAndUpdate(quizID, {
      title: updatedQuestionTitle,
      realAnswer: updatedQuestionRealAnswer,
    });

    res.status(201).json({
      status: "success",
      message: "Updated opulencely !",
      newQuest: newOne,
    });
  } catch (err) {
    console.log(`Error ---> ${err}`);
    res.status(404).send(err);
  }
};

const eradicateQuestionByQuestTitle = async (req, res) => {
  try {
    // check whether that provided quest is existed or not
    const { questTitle } = req.body;

    const foundOne = await QuestionModel.find({ title: questTitle });

    if (!foundOne) {
      res.status(400).send("Your provided interrogation can't be found !");
    }

    await QuestionModel.findOneAndDelete({
      title: questTitle,
    });

    res.status(201).json({
      success: true,
      message: `Opulently get rid of the quiz : ${questTitle}`,
      deletedOne: foundOne,
    });

    // if it is, then delete that otherwise informing to the user
  } catch (err) {
    console.log(`Error ---> ${err}`);
    res.status(404).send(err);
  }
};

module.exports = {
  perceiveAllQuestions,
  createNewQuestion,
  updateQuestion,
  eradicateQuestionByQuestTitle,
};
