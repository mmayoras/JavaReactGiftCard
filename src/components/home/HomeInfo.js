import React, {PropTypes} from 'react';

const HomeInfo = ({msg}) => {
  return (
    <div>
      <label>{msg}</label>
    </div>
  );
};

HomeInfo.propTypes = {
  msg: PropTypes.string.isRequired
};

export default HomeInfo;
