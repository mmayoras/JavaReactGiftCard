import React, { Component } from "react";
import PropTypes from "prop-types";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import VersionArchivedList from "./VersionArchivedList";

class VersionArchived extends Component {
  render = () => {
    debugger;
    return (
      <div>
        <Row>
          <Col md="12">
            <div className="mui--text-left">
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                {this.props.listTitleLarge}
                <span style={{ fontSize: "18px", fontWeight: "normal" }}>
                  {this.props.listTitleSmall}
                </span>
              </span>
            </div>
          </Col>
          <Row>
            <Col md="12">
              <div>
                <VersionArchivedList
                  artInfo={this.props.artInfo}
                  designs={this.props.designs}
                  listType={this.props.listType}
                  onChangeStatus={this.props.onChangeStatus}
                  hideAdd={this.props.hideAdd}
                />
              </div>
            </Col>
          </Row>
        </Row>
        <hr />
      </div>
    );
  };
}

VersionArchived.propTypes = {
  designs: PropTypes.array,
  loadAllDesigns: PropTypes.func,
  artInfo: PropTypes.object,
  btnRightAction: PropTypes.func,
  btnLeftAction: PropTypes.func,
  hideAdd: PropTypes.boolean
};

export default VersionArchived;
