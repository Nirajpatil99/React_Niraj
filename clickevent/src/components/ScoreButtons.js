import React from 'react';

const ScoreButtons = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default ScoreButtons;