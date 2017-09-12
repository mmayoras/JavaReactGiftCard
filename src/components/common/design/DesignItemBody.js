import React from 'react';

const DesignItemBody = ({cardDesign, viewVersionAction}) => {
  return (
    <div onClick={viewVersionAction} style={{verticalAlign: 'center', textAlign: 'center', cursor: "pointer"}}>
      <label style={{fontSize: '20px'}}>{cardDesign.designName}</label>
      <div style={{height: '190px'}}><img src={`${cardDesign.selectedCardImage}`} style={{width: '90%', height: '100%'}}/></div>
    </div>
  );
};

export default DesignItemBody;
