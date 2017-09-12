import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DesignList from "../../components/common/design/DesignList";
import NotificationBar from "../../components/common/NotificationBar";
import {
  showNotificationBar,
  hideNotificationBar,
  showErrorNotificationBar
} from "../../constants/appConstants";
import Filter from "../../components/designmanagement/filter/Filter";
import {
  closeNotification,
  fetchAllCardDesign,
  searchCardDesigns
} from "../../actions/designMgmtActions";
import AddDesignModal from "../../components/designmanagement/modal/AddDesignModal";

class DesignManagementPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddModal: false
    };
  }

  componentDidMount = () => {
    debugger;
    //query filter dropdown values
    this.props.onFetchAllDesigns();
  };

  loadAllDesigns = (cardName, isSuccess) => {
    debugger;
    let notificationData;
    if (isSuccess === undefined || isSuccess) {
      notificationData = showNotificationBar(cardName + ' successfully added.');
    } else {
      notificationData = showErrorNotificationBar(cardName);
    }
    this.props.onCloseNotification(notificationData);
    this.props.onFetchAllDesigns();
  };

  onNotificationClose = () => {
    debugger;
    const notificationData = hideNotificationBar("");
    this.props.onCloseNotification(notificationData);
  };

  onCardDesignSearch = event => {
    debugger;
    this.props.onSearchDesigns(event.target.value, this.props.designs);
  };

  //parent
  onViewVersion = id => {
    console.info("view version on parent");
    this.props.history.push("/home/designmgmt/version/" + id);
  };

  onEditDesign = () => {
    console.info("Edit parent design");
  };

  handleAddOpen = () => {
    let showAddModal = true;
    this.setState({
      showAddModal
    });
  };

  onAddModalClose = () => {
    let showAddModal = false;
    this.setState({
      showAddModal
    });
  };

  render = () => {
    debugger;

    const artInfo = {
      parentDesign: true,
      editIcon: "icon_edit",
      viewVersionIcon: "icon_copy",
      editLabel: "Edit",
      viewVersionLabel: "View Versions"
    };

    return (
      <div style={{ width: "100%" }}>
        <AddDesignModal
          loadAllDesigns={this.loadAllDesigns}
          onModalClose={this.onAddModalClose}
          showModal={this.state.showAddModal}
        />
        <NotificationBar
          enableAutoClose={this.props.notification.enableAutoClose}
          autoCloseMilli={this.props.notification.notificationAutoCloseMilli}
          bgColor={this.props.notification.notificationBgColor}
          icon={this.props.notification.notificationIcon}
          showNotification={this.props.notification.shouldShowNotification}
          msg={this.props.notification.notificationMessage}
          onCloseClicked={this.onNotificationClose}
        />
        <Filter onSearchTermChange={this.onCardDesignSearch} />
        <DesignList
          handleAddModalOpen={this.handleAddOpen}
          artInfo={artInfo}
          loadAllDesigns={this.loadAllDesigns}
          designs={
            this.props.searchedDesigns.length > 0
              ? this.props.searchedDesigns
              : this.props.designs
          }
          editDesignAction={this.onEditDesign}
          viewVersionAction={this.onViewVersion}
          hideAdd={false}
        />
      </div>
    );
  };
}

DesignManagementPage.propTypes = {
  designs: PropTypes.array,
  searchedDesigns: PropTypes.array,
  notification: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  onCloseNotification(notificationData) {
    dispatch(closeNotification(notificationData));
  },
  onFetchAllDesigns() {
    dispatch(fetchAllCardDesign());
  },
  onSearchDesigns(searchValue, currentDesignList) {
    dispatch(searchCardDesigns(searchValue, currentDesignList));
  }
});

function mapStateToProps(state) {
  debugger;
  return {
    notification: state.notificationBarReducer,
    searchedDesigns: state.searchDesignsReducer,
    designs: state.fetchAllDesignsReducer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  DesignManagementPage
);
