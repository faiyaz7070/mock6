const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    answerOptions: {
        type: [String],
        required: true,
    },
    correctOptions: {
        type: [Number],
        required: true,
    },
});

const quizSchema =  mongoose.Schema({
    creator: {type: mongoose.Schema.Types.ObjectId,
            ref: 'User' },
    
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    questions: {
        type: [questionSchema],
        required: true,
       
    },
});


const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
