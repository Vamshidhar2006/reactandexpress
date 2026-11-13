const express = require('express');
const router = express.Router();

const { quizQuestions, courses } = require('../data/data');

router.get('/:name', (req, res) => {
    const courseName = req.params.name.toLowerCase();

    const quiz = quizQuestions.find(q => {
        const course = courses.find(c => c.courseid === q.courseid);
        return course && course.coursename.toLowerCase() === courseName;
    });

    if (!quiz) {
        return res.status(404).json({
            message: 'Quiz not found'
        });
    }

    const questions = quiz.questions.map(q => ({
        question: q.question,
        options: q.options
    }));

    res.json(questions);
});

router.post('/:name/submit', (req, res) => {
    const courseName = req.params.name.toLowerCase();

    const quiz = quizQuestions.find(q => {
        const course = courses.find(c => c.courseid === q.courseid);
        return course && course.coursename.toLowerCase() === courseName;
    });

    if (!quiz) {
        return res.status(404).json({
            message: 'Quiz not found'
        });
    }

    const answers = req.body.answers;
    let score = 0;

    quiz.questions.forEach((q, index) => {
        if (answers[index] === q.answer) {
            score++;
        }
    });

    res.json({
        message: 'Quiz submitted successfully',
        score: score,
        totalMarks: quiz.questions.length
    });
});

module.exports = router;