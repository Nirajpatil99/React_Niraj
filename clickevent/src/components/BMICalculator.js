import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    try {
      const weightValue = parseFloat(weight);
      const heightValue = parseFloat(height);

      if (isNaN(weightValue) || isNaN(heightValue)) {
        throw new Error('Please enter valid numeric values for weight and height.');
      }

      const bmiValue = weightValue / ((heightValue / 100) * (heightValue / 100));
      setBMI(bmiValue.toFixed(2));

      if (bmiValue < 18) {
        setResult('Underweight');
      } else if (bmiValue >= 18 && bmiValue <= 25) {
        setResult('Normal');
      } else if (bmiValue > 25 && bmiValue <= 39) {
        setResult('Overweight');
      } else {
        setResult('Obese');
      }
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>Weight (kg):</label>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Height (cm):</label>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div>
          <p>Your BMI: {bmi}</p>
          <p>Result: {result}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;