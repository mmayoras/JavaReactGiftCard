import React, { Component } from "react";
import PropTypes from "prop-types";
import VersionItem from "./VersionItem";
import AddPlusSign from "../design/AddPlusSign";

class VersionCurrentList extends Component {
  render = () => {
    debugger;
    const container = {
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap"
    };
    let currentItems = <span style={{paddingLeft:'15px'}}>No current version available!</span>;
    if (this.props.designs && this.props.designs.length > 0) {
      currentItems = this.props.designs.map(currentVersion => {
        return (
          <VersionItem
            key={currentVersion.id}
            artInfo={this.props.artInfo}
            listType={this.props.listType}
            version={currentVersion}
            onEditDuplicateAction={this.props.onEditDuplicateAction}
            onChangeStatus={this.props.onChangeStatus}
            onDelete={this.props.onDelete}
          />
        );
      });
    }
    return <div style={container}>{currentItems}</div>;
  };
}

VersionCurrentList.propTypes = {
  designs: PropTypes.array,
  loadAllDesigns: PropTypes.func,
  headerArtInfo: PropTypes.object,
  handleAddModalOpen: PropTypes.func
};

export default VersionCurrentList;
