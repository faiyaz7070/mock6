const express = require('express');
const quizRouter = express.Router();
const Quiz = require('../models/quiz.model');


quizRouter.post('/register', async (req, res) => {
  try {
    const { creator, title, description, questions } = req.body;
    const quiz = new Quiz({ creator, title, description, questions });
    await quiz.save()
res.send(quiz)
  } catch (error) {
    res.status(500).json({ message: error.message });
  
  }
});
quizRouter.get("/all",async(req,res)=>{
  try {
    const quizzes = await Quiz.find()
      .populate('creator', 'username-_id') 
      .exec();

    res.send(quizzes);
  } catch (error) {
    res.send(error)
  }
})



quizRouter.delete('/:Id', async (req, res) => {
  try {
    const { Id } = req.params;
    await Quiz.findByIdAndDelete(Id);
    res.status(200).send("data deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});


quizRouter.put('/:Id', async (req, res) => {
  try {
    const { Id } = req.params;
    const { title, description } = req.body;
    const quiz = await Quiz.findByIdAndUpdate(
      Id,
      { title, description },
      { new: true }
    );
    res.json(quiz);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = quizRouter
