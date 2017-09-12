import React from 'react';

const DropDown = ({label, options, onChange, selectedValue, id}) => {
  return(
    <div className="select-container">
      <select id={id} value={selectedValue} name={id} title="" onChange={onChange}>
        {options}
      </select>
      <label htmlFor={id}>{label}</label>
    </div>
  )
};

export default DropDown;
