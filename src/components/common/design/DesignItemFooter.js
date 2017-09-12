import React, { Component } from "react";

class DesignItemFooter extends Component {
  render = () => {
    const divSt = {
      align: "center"
    };

    return (
      <div style={divSt}>
        <div
          onClick={this.props.viewVersionAction}
          style={{ textAlign: "center", fontSize: "20px", color: "#f96302" }}
        >
          <span
            className={this.props.artInfo.viewVersionIcon}
            style={{ cursor: "pointer" }}
          >
            <label style={{ cursor: "pointer" }}>{this.props.artInfo.viewVersionLabel}</label>
          </span>
        </div>
      </div>
    );
  };
}

export default DesignItemFooter;
