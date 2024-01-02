import React, { useState } from 'react';
import ScoreDisplay from './ScoreDisplay';
import ScoreButtons from './ScoreButtons';

const ScoreCalculator = () => {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const decrementScore = () => {
    setScore(score - 1);
  };

  return (
    <div>
      <h2>Score Calculator App</h2>
      <ScoreDisplay score={score} />
      <ScoreButtons onIncrement={incrementScore} onDecrement={decrementScore} />
    </div>
  );
};

export default ScoreCalculator;