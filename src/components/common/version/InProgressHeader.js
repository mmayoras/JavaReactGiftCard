import React, { Component } from "react";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";

class InProgressHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpenPopover = event => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleClosePopover = () => {
    this.setState({
      open: false
    });
  };

  onEditModalOpen = () => {
    this.handleClosePopover();
    this.props.onEditModalOpen();
  };

  onDelete = () => {
    this.handleClosePopover();
    this.props.onConfirmDeleteModalOpen(this.props.version);
  };

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
        <Row>
          <Col md="6">
            <div className="mui--text-left" />
          </Col>
          <Col md="6">
            <div className="mui--text-right">
              <span
                className="icon_cog"
                style={iconEdit}
                onClick={this.handleOpenPopover}
              />
              <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                targetOrigin={{ horizontal: "left", vertical: "top" }}
                onRequestClose={this.handleClosePopover}
                style={{ height: "auto", overflowY: "auto" }}
              >
                <Menu>
                  <MenuItem onClick={this.onEditModalOpen}>
                    <span style={clickableSpan}>
                      <span
                        className={this.props.artInfo.editDuplicateIcon}
                        style={iconEdit}
                      />
                      <label style={iconEdit}>
                        {this.props.artInfo.editLabel}
                      </label>
                    </span>
                  </MenuItem>

                  <MenuItem onClick={this.onDelete}>
                    <span style={clickableSpan}>
                      <span
                        className={this.props.artInfo.deleteIcon}
                        style={iconEdit}
                      />
                      <label style={iconEdit}>
                        {this.props.artInfo.deleteLabel}
                      </label>
                    </span>
                  </MenuItem>
                </Menu>
              </Popover>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
}

export default InProgressHeader;
