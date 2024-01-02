import React, { useState } from 'react';

const TimeCalculator = () => {
  const [punchInTime, setPunchInTime] = useState('');
  const [punchOutTime, setPunchOutTime] = useState('');
  const [savedTime, setSavedTime] = useState(null);
  const [error, setError] = useState('');

  const calculateSavedTime = () => {
    try {
      const punchIn = new Date(`2023-01-01T${punchInTime}`);
      const punchOut = new Date(`2023-01-01T${punchOutTime}`);

      if (isNaN(punchIn) || isNaN(punchOut)) {
        throw new Error('Invalid time format. Please use HH:mm.');
      }

      const timeDifference = punchOut - punchIn - 8 * 60 * 60 * 1000; // Subtract 8 hours in milliseconds
      const savedMinutes = Math.floor(timeDifference / (60 * 1000));

      setSavedTime(savedMinutes);
      setError('');
    } catch (err) {
      setError(err.message);
      setSavedTime(null);
    }
  };

  return (
    <div>
      <h2>Time Saver Calculator Form</h2>
      <div>
        <label>Punch In Time:</label>
        <input
          type="time"
          value={punchInTime}
          onChange={(e) => setPunchInTime(e.target.value)}
        />
      </div><br></br>
      <div>
        <label>Punch Out Time:</label>
        <input
          type="time"
          value={punchOutTime}
          onChange={(e) => setPunchOutTime(e.target.value)}
        />
      </div> <br></br>
      <button onClick={calculateSavedTime}>Calculate Saved Time</button>
      {savedTime !== null && <p>Saved Time: {savedTime} minutes</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TimeCalculator;