import React, {PropTypes} from 'react';

const CardManagementInfo = ({msg}) => {
  return (
    <div>
      <br/>
      <label>{msg}</label>
    </div>
  );
};

CardManagementInfo.propTypes = {
  msg: PropTypes.string.isRequired
};

export default CardManagementInfo;
