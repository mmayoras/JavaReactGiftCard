import React, { Component } from "react";
import VersionDetails from "./VersionDetails";

class VersionItemFooter extends Component {
  constructor(props) {
    super(props);

    this.state = { collapsed: true };
  }

  toggle = () => {
    const collapsed = this.state.collapsed;
    this.setState({
      collapsed: !collapsed
    });
  };

  render = () => {
    const divSt = {
      width: "250px",
      align: "center"
    };
    const caret = {
      fontSize: "20px",
      color: "#f96302",
      marginLeft: "10px"
    };

    return (
      <div style={divSt}>
        <div>
          <div onClick={this.toggle} style={{ textAlign: "center" }}>
            <span style={{ fontSize: "20px" }}>
              <label>Card Details</label>
            </span>
            <i
              className={
                this.state.collapsed ? "icon_caret_down" : "icon_caret_up"
              }
              style={caret}
            />
          </div>
          {this.state.collapsed ? null : (
            <VersionDetails version={this.props.version} />
          )}
        </div>
      </div>
    );
  };
}

export default VersionItemFooter;
