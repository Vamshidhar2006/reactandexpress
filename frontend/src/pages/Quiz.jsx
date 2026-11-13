
import { useState } from 'react';

function Quiz() {
    const [course, setCourse] = useState('');
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(null);

    const loadQuiz = async () => {
        if (!course) {
            alert('Please select a course');
            return;
        }

        const res = await fetch(
            `http://localhost:5000/api/quiz/${encodeURIComponent(course)}`
        );

        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }

        setQuestions(data);
        setAnswers([]);
        setScore(null);
    };

    const handleAnswer = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (answers.length !== questions.length || answers.some(a => !a)) {
            alert('Please answer all questions');
            return;
        }

        const res = await fetch(
            `http://localhost:5000/api/quiz/${encodeURIComponent(course)}/submit`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ answers })
            }
        );

        const data = await res.json();
        setScore(data.score);
    };

    return (
        <div className="quiz">
            <h1>Course Quiz</h1>

            <select value={course} onChange={(e) => setCourse(e.target.value)}>
                <option value="">Select Course</option>
                <option value="Bharatanatyam">Bharatanatyam</option>
                <option value="Kathak">Kathak</option>
                <option value="Carnatic Music">Carnatic Music</option>
                <option value="Philosophy">Philosophy</option>
                <option value="Sustainable Development">Sustainable Development</option>
                <option value="React JS">React JS</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
            </select>

            <button type="button" onClick={loadQuiz}>
                Start Quiz
            </button>

            {questions.length > 0 && (
                <form onSubmit={handleSubmit}>
                    {questions.map((q, index) => (
                        <div key={index}>
                            <h3>{index + 1}. {q.question}</h3>

                            {q.options.map((option, i) => (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={option}
                                        checked={answers[index] === option}
                                        onChange={() => handleAnswer(index, option)}
                                    />
                                    {option}
                                    <br />
                                </label>
                            ))}
                        </div>
                    ))}

                    <button type="submit">Submit Quiz</button>
                </form>
            )}

            {score !== null && (
                <h2>Your Score: {score}/4</h2>
            )}
        </div>
    );
}

export default Quiz;
