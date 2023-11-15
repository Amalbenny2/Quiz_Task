import React, { useState } from 'react';

const TestPage = ({ questions, onSubmitAnswers }) => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (answer) => {
    // Update answers state
    setAnswers([...answers, { questionId: questions[currentQuestion].id, answer }]);
    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = () => {
    // Submit answers to the backend
    onSubmitAnswers(answers);
  };

  return (
    <div>
      <h2>Test Page</h2>
      {currentQuestion < questions.length ? (
        <div>
          <p>{questions[currentQuestion].text}</p>
          {/* Render answer options here */}
          <button onClick={() => handleAnswer('Option A')}>Option A</button>
          <button onClick={() => handleAnswer('Option B')}>Option B</button>
          {/* Add more options as needed */}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Test completed!</p>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default TestPage;