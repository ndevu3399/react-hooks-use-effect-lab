import React, { useState } from 'react';
import Question from './Question'; // Adjust import path if necessary

function App() {
  const [answered, setAnswered] = useState(null); // Tracks whether the question was answered correctly

  const handleAnswered = (isAnswered) => {
    setAnswered(isAnswered);
    // Optionally, you can handle more logic here when a question is answered
    console.log(isAnswered ? 'Correct!' : 'Time is up!');
  };

  return (
    <div>
      <h1>Trivia Game</h1>
      {answered === null ? (
        <Question onAnswered={handleAnswered} />
      ) : (
        <p>{answered ? 'You answered correctly!' : 'You ran out of time!'}</p>
      )}
    </div>
  );
}

export default App;
