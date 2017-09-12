import React from 'react';
import FileUpload from '../common/FileUpload';

const Carrier = ({imageUploadLabel, imageName, onImageSelect, id}) => {
  let hideCarrierStyle = {
    marginTop: '30px',
  };

  return (
    <div style={hideCarrierStyle}>
      <div className="text-input-container">
        <FileUpload imageUploadLabel={imageUploadLabel} imageName={imageName}
                    onImageSelect={onImageSelect} id={id}/>
      </div>
    </div>
  );
};

export default Carrier;
