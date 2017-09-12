import React, { Component } from "react";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

import InProgressHeader from "./InProgressHeader";
import CurrentHeader from "./CurrentHeader";
import ArchiveHeader from "./ArchiveHeader";

import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";

class VersionItemHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleChangeStatus = () => {
    const id = this.props.version.id;
    this.props.onChangeStatus(id);
  };

  render = () => {
    return (
      <div>
        {this.props.listType === "inProgressType" ? (
          <InProgressHeader
            artInfo={this.props.artInfo}
            version={this.props.version}
            onEditModalOpen={this.props.onEditModalOpen}
            onConfirmDeleteModalOpen={this.props.onConfirmDeleteModalOpen}
            onDelete={this.props.onDelete}
          />
        ) : (
          ""
        )}
        {this.props.listType === "currentTypes" ? (
          <CurrentHeader
            artInfo={this.props.artInfo}
            handleChangeStatus={this.handleChangeStatus}
          />
        ) : (
          ""
        )}
        {this.props.listType === "archivedTypes" ? (
          <ArchiveHeader
            artInfo={this.props.artInfo}
            handleChangeStatus={this.handleChangeStatus}
          />
        ) : (
          ""
        )}
      </div>
    );
  };
}

export default VersionItemHeader;
