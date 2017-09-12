import React from "react";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

const iconArt = {
  color: "#f96302",
  cursor: "pointer"
};
const pointer = {
  cursor: "pointer"
};

const ArchiveHeader = ({ handleChangeStatus, artInfo }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <Row>
        <Col md="4">
          <div className="mui--text-left" />
        </Col>
        <Col md="8">
          <div style={pointer} className="mui--text-right">
            <span style={iconArt} onClick={handleChangeStatus}>
              <span className={artInfo.changeStatusIcon} />
              <label style={pointer}>{artInfo.changeStatusLabel}</label>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ArchiveHeader;
