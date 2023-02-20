import { useState } from "react";

import { quizData } from "./quizData";
import "./App.css";

const App = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuizData = quizData[currentQuiz];

  const handleAnswerSelect = (answer) => setSelectedAnswer(answer);

  const handleQuizSubmit = () => {
    if (selectedAnswer === currentQuizData.correct) setScore(score + 1);
    setSelectedAnswer(null);
    setCurrentQuiz(currentQuiz + 1);
  };

  const renderQuiz = () => {
    return (
      <div className="quiz-container" id="quiz">
        <div className="quiz-header">
          <h2 id="question">{currentQuizData.question}</h2>
          <ul>
            <li>
              <input
                type="radio"
                name="answer"
                id="a"
                className="answer"
                checked={selectedAnswer === "a"}
                onChange={() => handleAnswerSelect("a")}
              />
              <label htmlFor="a" id="a_text">
                {currentQuizData.a}
              </label>
            </li>

            <li>
              <input
                type="radio"
                name="answer"
                id="b"
                className="answer"
                checked={selectedAnswer === "b"}
                onChange={() => handleAnswerSelect("b")}
              />
              <label htmlFor="b" id="b_text">
                {currentQuizData.b}
              </label>
            </li>

            <li>
              <input
                type="radio"
                name="answer"
                id="c"
                className="answer"
                checked={selectedAnswer === "c"}
                onChange={() => handleAnswerSelect("c")}
              />
              <label htmlFor="c" id="c_text">
                {currentQuizData.c}
              </label>
            </li>

            <li>
              <input
                type="radio"
                name="answer"
                id="d"
                className="answer"
                checked={selectedAnswer === "d"}
                onChange={() => handleAnswerSelect("d")}
              />
              <label htmlFor="d" id="d_text">
                {currentQuizData.d}
              </label>
            </li>
          </ul>
        </div>
        <button id="submit" onClick={handleQuizSubmit}>
          Submit
        </button>
      </div>
    );
  };

  const renderResult = () => {
    return (
      <div className="quiz-container" id="quiz">
        <h2>
          You answered {score}/{quizData.length} questions correctly
        </h2>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  };

  return currentQuiz < quizData.length ? renderQuiz() : renderResult();
};

export default App;
