import React, { Component } from "react";
import VersionItemFooter from "./VersionItemFooter";
import VersionItemHeader from "./VersionItemHeader";
import VersionItemBody from "./VersionItemBody";

class VersionItem extends Component {
  onEditModalOpen = () => {
    this.props.onEditModalOpen(this.props.version);
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
        <VersionItemHeader
          listType={this.props.listType}
          version={this.props.version}
          artInfo={this.props.artInfo}
          onEditModalOpen={this.onEditModalOpen}
          onChangeStatus={this.props.onChangeStatus}
          onConfirmDeleteModalOpen={this.props.onConfirmDeleteModalOpen}
          onDelete={this.props.onDelete}
        />
        <VersionItemBody version={this.props.version} />
        <VersionItemFooter
          version={this.props.version}
          artInfo={this.props.artInfo}
        />
      </div>
    );
  };
}

export default VersionItem;
