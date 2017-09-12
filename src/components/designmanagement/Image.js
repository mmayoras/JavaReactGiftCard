import React from 'react';
import FileUpload from '../common/FileUpload';
import DropDownInput from '../common/DropDownInput';

const Image = ({imageUploadLabel, imageName, onImageSelect, id}) => {
  return (
    <div>
      <div className="text-input-container">
        <FileUpload imageUploadLabel={imageUploadLabel} imageName={imageName}
                    onImageSelect={onImageSelect} id={id}/>
      </div>
    </div>
  );
};

export default Image;
