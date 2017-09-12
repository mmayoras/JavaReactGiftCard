import React from 'react';

const InputDisabled = ({inputLabel, placeholder, onChange, value}) => {
  return (
      <div className="text-input-container">
        <input type="text" id="techniques" name="techniques" title="techniques" placeholder={placeholder} onChange={onChange} value={value} disabled/>
        <label for="card-name">{inputLabel}</label>
      </div>
  );
};

export default InputDisabled;
