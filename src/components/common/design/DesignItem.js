import React, { Component } from "react";
import DesignItemFooter from "./DesignItemFooter";
import DesignItemHeader from "./DesignItemHeader";
import DesignItemBody from "./DesignItemBody";

class DesignItem extends Component {
  passDataToViewVersions = () => {
    this.props.viewVersionAction(this.props.cardDesign.id);
  };

  render = () => {
    const card = {
      boxSizing: "border-box",
      borderRadius: "1px",
      backgroundColor: "#fff",
      boxShadow: "0 0 2px 0 rgba(0,0,0,.12),0 2px 2px 0 rgba(0,0,0,.24)",
      display: "inline-block",
      width: "280px",
      padding: "0px 10px 5px",
      margin: "10px"
    };

    return (
      <div style={card}>
        <DesignItemHeader
          artInfo={this.props.artInfo}
          editDesignAction={this.props.editDesignAction}
        />
        <DesignItemBody viewVersionAction={this.passDataToViewVersions} cardDesign={this.props.cardDesign} />
        <DesignItemFooter
          cardDesign={this.props.cardDesign}
          artInfo={this.props.artInfo}
          viewVersionAction={this.passDataToViewVersions}
        />
      </div>
    );
  };
}

export default DesignItem;
