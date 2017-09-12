import React, { Component } from "react";
import PropTypes from "prop-types";
import VersionItem from "./VersionItem";
import AddPlusSign from "../design/AddPlusSign";

class VersionInProgressList extends Component {
  render = () => {
    debugger;
    const container = {
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap"
    };
    let inProgressItems = <span style={{paddingLeft:'15px'}}>No in progress version available!</span>;
    if (this.props.designs && this.props.designs.length > 0) {
      inProgressItems = this.props.designs.map(inProgressVersion => {
        return (
          <VersionItem
            key={inProgressVersion.id}
            artInfo={this.props.artInfo}
            listType={this.props.listType}
            version={inProgressVersion}
            onEditModalOpen={this.props.onEditModalOpen}
            onChangeStatus={this.props.onChangeStatus}
            onConfirmDeleteModalOpen={this.props.onConfirmDeleteModalOpen}
            onDelete={this.props.onDelete}
          />
        );
      });
    }

    return (
      <div style={container}>
        <AddPlusSign
          hidden={false}
          onAddClick={this.props.onAddModalOpen}
          parentDesign={this.props.artInfo.parentDesign}
        />
        {inProgressItems}
      </div>
    );
  };
}

VersionInProgressList.propTypes = {
  designs: PropTypes.array,
  loadAllDesigns: PropTypes.func,
  headerArtInfo: PropTypes.object,
  onAddModalOpen: PropTypes.func
};

export default VersionInProgressList;
