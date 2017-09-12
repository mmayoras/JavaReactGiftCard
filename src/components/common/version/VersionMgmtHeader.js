import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const VersionMgmtHeader = ({designName, designImageUrl, onClickBack}) => {
  return (
    <div>
      <Row>
        <div className="mui--text-left">
          <Col md="2">
            <button className="button md" onClick={onClickBack}>Back</button>
          </Col>
        </div>

        <div className="mui--text-center">
          <Col md="8">
            <h1>{designName}</h1>
            <img style={{ width: "250px", height: "155px" }} src={designImageUrl}/>
          </Col>
        </div>

        <div className="mui--text-right">
          <Col md="2"></Col>
        </div>

      </Row>
      <hr/>
    </div>
  );
};

export default VersionMgmtHeader;
