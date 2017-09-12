import React from 'react';

const Input = ({inputLabel, placeholder, onChange, value, errorTxt}) => {
  return (
      <div>
      <div className="text-input-container">
        <input type="text" id="techniques" name="techniques" title="techniques" placeholder={placeholder} onChange={onChange} value={value} />
        <label for="card-name">{inputLabel}</label>
      </div>
      {(errorTxt !== undefined && errorTxt !='')?<div style={{'margin-top': '-15px'}}><label style={{'color':'red'}}>{errorTxt}</label></div>:''}
      </div>
  );
};

export default Input;
