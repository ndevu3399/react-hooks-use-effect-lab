import React, { useState, useEffect } from 'react';

function Question({ onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    // Function to update time every second
    const updateTime = () => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 1) {
          // When timeRemaining is 0, call onAnswered and reset the timer
          onAnswered(false);
          setTimeRemaining(10); // Reset the timer to 10 seconds
        } else {
          return prevTime - 1;
        }
      });
    };

    // Setting timeout to decrement every second
    const timer = setTimeout(function tick() {
      updateTime();
      if (timeRemaining > 0) {
        setTimeout(tick, 1000);
      }
    }, 1000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, [onAnswered, timeRemaining]); // Dependency on onAnswered and timeRemaining

  return (
    <div>
      <h2>{timeRemaining} seconds remaining</h2>
      {/* Render your question and options here */}
    </div>
  );
}

export default Question;
