import React, { Component } from "react";
import PropTypes from "prop-types";
import VersionItem from "./VersionItem";
import AddPlusSign from "../design/AddPlusSign";

class VersionArchivedList extends Component {
  render = () => {
    debugger;
    const container = {
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap"
    };
    let archivedItems = <span style={{paddingLeft:'15px'}}>No archived version available!</span>;
    if (this.props.designs && this.props.designs.length > 0) {
        archivedItems = this.props.designs.map(archivedVersion => {
        return (
          <VersionItem
            key={archivedVersion.id}
            artInfo={this.props.artInfo}
            listType={this.props.listType}
            version={archivedVersion}
            onEditDuplicateAction={this.props.onEditDuplicateAction}
            onChangeStatus={this.props.onChangeStatus}
            onDelete={this.props.onDelete}
          />
        );
      });
    }
    return <div style={container}>{archivedItems}</div>;
  };
}

VersionArchivedList.propTypes = {
  designs: PropTypes.array,
  loadAllDesigns: PropTypes.func,
  headerArtInfo: PropTypes.object,
  handleAddModalOpen: PropTypes.func
};

export default VersionArchivedList;
