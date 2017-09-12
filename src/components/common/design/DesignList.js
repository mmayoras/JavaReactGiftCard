import React, { Component } from "react";
import PropTypes from "prop-types";
import DesignItem from "./DesignItem";
import AddPlusSign from "./AddPlusSign";

class DesignList extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    debugger;
    const container = {
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap"
    };
    let designItems = this.props.designs;
    let showDesigns = designItems && designItems.length > 0;
    let cardDesignItems;
    if (showDesigns) {
      cardDesignItems = designItems.map(cardDesign => {
        return (
          <DesignItem
            key={cardDesign.id}
            artInfo={this.props.artInfo}
            cardDesign={cardDesign}
            editDesignAction={this.props.editDesignAction}
            viewVersionAction={this.props.viewVersionAction}
          />
        );
      });
    }
    let plusSign = (
      <AddPlusSign
        hidden={this.props.hideAdd}
        onAddClick={this.props.handleAddModalOpen}
        parentDesign={this.props.artInfo.parentDesign}
      />
    );
    return (
      <div>
        {showDesigns
          ? <div style={container}>
              {plusSign} {cardDesignItems}
            </div>
          : <div style={{ padding: "10px" }}>
              {plusSign}
              No design available!
            </div>}
      </div>
    );
  };
}

DesignList.propTypes = {
  designs: PropTypes.array,
  loadAllDesigns: PropTypes.func,
  artInfo: PropTypes.object,
  handleAddModalOpen: PropTypes.func
};

export default DesignList;
