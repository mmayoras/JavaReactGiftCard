import React from 'react';

const DropDownInput = ({dataList, selectedItem, onChange, inputLabel, id, placeholder}) => {
  return(
    <div className="text-input-container">
      <input type="text" name="example" value={selectedItem} list={id} onChange={onChange} placeholder={placeholder}/>
      <label for="card-name">{inputLabel}</label>
      <datalist id={id}>
        {dataList}
      </datalist>
    </div>
  )
};

export default DropDownInput;
