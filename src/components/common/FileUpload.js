import React from 'react';

const FileUpload = ({imageUploadLabel, onImageSelect, imageName, id}) => {
  return (
    <div>
      <label>{imageUploadLabel}</label>
      <div>
        <input type="file" accept="image/*" onChange={onImageSelect} id={id}
               name="file" className="inputFile"/>
        <label htmlFor={id}>
          <div style={{float: 'left', width: '70%'}}>
            <span>{imageName}</span>
          </div>
          <div style={{float: 'right', width: '30%'}}>
            <strong>Browse</strong>
          </div>
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
