import React, { useState } from 'react';

const DisableArrayComponents = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeDisable = () => {
    setIsDisabled(!isDisabled);
  };

  const inputArray = [
    { id: 1, label: 'Input 1' },
    { id: 2, label: 'Input 2' },
    { id: 3, label: 'Input 3' },
  ];

  return (
    <div>
      <h2>Disabled Array Component</h2>
      <button onClick={handleChangeDisable}>
        {isDisabled ? 'Enable' : 'Disable'} Inputs
      </button>
      <form>
        {inputArray.map((input) => (
          <div key={input.id}>
            <label>{input.label}</label>
            <input
              type="text"
              placeholder={`Enter ${input.label}`}
              disabled={isDisabled}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default DisableArrayComponents;
