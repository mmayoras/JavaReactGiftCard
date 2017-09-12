import React, { Component } from "react";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

class DesignItemHeader extends Component {
  render = () => {
    debugger;
    const clickableSpan = {
      fontSize: "15px",
      cursor: "pointer"
    };
    const iconEdit = {
      color: "#f96302",
      cursor: "pointer"
    };

    return (
      <div style={{ marginTop: "10px" }}>
        <div>
          <Row>
            <Col md="6">
              <div className="mui--text-left" />
            </Col>
            <Col md="6">
              <div className="mui--text-right">
                {/*<span
                  style={clickableSpan}
                  onClick={this.props.editDesignAction}
                >
                  <span
                    className={this.props.artInfo.editIcon}
                    style={iconEdit}
                  />
                  <label style={iconEdit}>
                    {this.props.artInfo.editLabel}
                  </label>
                </span>*/}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
}

export default DesignItemHeader;
