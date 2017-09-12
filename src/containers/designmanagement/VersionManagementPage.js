import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchChildVersions,
  moveInProgressToCurrent,
  onMoveCurrentToArchived,
  onMoveArchivedToCurrent,
  addNewVersionToInProgress,
  deleteNewInProgressVersion
} from "../../actions/versionMgmtActions";
import { closeNotification } from "../../actions/designMgmtActions";
import VersionArchived from "../../components/common/version/VersionArchived";
import VersionCurrent from "../../components/common/version/VersionCurrent";
import VersionInProgress from "../../components/common/version/VersionInProgress";
import VersionMgmtHeader from "../../components/common/version/VersionMgmtHeader";
import EditVersionModal from "../../components/designmanagement/modal/EditVersionModal";
import AddVersionModal from "../../components/designmanagement/modal/AddVersionModal";
import ConfirmationModal from "../../components/common/ConfirmationModal";
import NotificationBar from "../../components/common/NotificationBar";
import {
  showNotificationBar,
  showVersionNotificationBar,
  showVersionDeletedNotificationBar,
  hideVersionNotificationBar
} from "../../constants/appConstants";
import _ from "lodash";

class VersionManagementPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditModal: false,      
      showAddModal: false,
      currentCardDesign: {},
      nextNewVersionId: 100,
      deleteModalInfo: {
        showConfirmDeleteModal: false,
        versionToBeDeleted: {}
      }
    };
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.fetchVersions(id);
  };

  componentWillReceiveProps = nextProps => {
    const id = nextProps.match.params.id;
    if (this.props.match.params.id !== id) {
      this.fetchVersions(id);
    }
  };

  fetchVersions = id => {
    this.props.onFetchChildVersions(id);
  };

  onClickBack = () => {
    this.onNotificationClose();
    this.props.history.push("/home/designmgmt");
  };

  onMoveInProgressToCurrent = id => {
    this.props.onMoveInProgressToCurrent(
      id,
      this.props.versionDesigns.versionList
    );
    let notificationData = showNotificationBar(
      "Version successfully moved to Current."
    );
    this.props.onCloseNotification(notificationData);
  };

  onMoveCurrentToArchived = id => {
    this.props.onMoveCurrentToArchived(
      id,
      this.props.versionDesigns.versionList
    );
    let notificationData = showNotificationBar(
      "Version successfully moved to Archived."
    );
    this.props.onCloseNotification(notificationData);
  };

  onMoveArchivedToCurrent = id => {
    this.props.onMoveArchivedToCurrent(
      id,
      this.props.versionDesigns.versionList
    );
    let notificationData = showNotificationBar(
      "Version successfully moved to Current."
    );
    this.props.onCloseNotification(notificationData);
  };

  onDelete = () => {
    this.props.onDeleteInProgressVersion(
      this.state.deleteModalInfo.versionToBeDeleted.id,
      this.props.versionDesigns.versionList
    );
    let notificationData = showVersionDeletedNotificationBar(
      "Version successfully deleted"
    );
    this.onConfirmDeleteModalClose();
    this.props.onCloseNotification(notificationData);
  };

  addNewVersion = versionData => {
    this.props.onAddNewVersion(
      this.state.nextNewVersionId,
      this.props.versionDesigns.versionList,
      versionData
    );
    let notificationData = showVersionNotificationBar(
      versionData.versionName + " successfully added."
    );
    this.props.onCloseNotification(notificationData);
    this.onAddModalClose();
    this.setState({
      nextNewVersionId: this.state.nextNewVersionId + 1
    });
  };

  onUpdateVersion = () => {
    let notificationData = showNotificationBar("Changes successfully saved.");
    this.props.onCloseNotification(notificationData);
    this.onAddModalClose();
  };

  onEditModalOpen = currentCardDesign => {
    let showEditModal = true;
    this.setState({
      showEditModal,
      currentCardDesign
    });
  };

  onAddModalOpen = () => {
    let showAddModal = true;
    this.setState({
      showAddModal
    });
  };

  onEditModalClose = () => {
    let showEditModal = false;
    this.setState({
      showEditModal
    });
  };

  onAddModalClose = () => {
    let showAddModal = false;
    this.setState({
      showAddModal
    });
  };

  onConfirmDeleteModalClose = () => {
    let deleteModalInfo = {
      showConfirmDeleteModal: false,
      versionToBeDeleted: {}
    }
    this.setState({
      deleteModalInfo
    });
  };

  onConfirmDeleteModalOpen = (selectedItem) => {
    debugger;
    let deleteModalInfo = {
      showConfirmDeleteModal: true,
      versionToBeDeleted: selectedItem
    }
    this.setState({
      deleteModalInfo
    });
  };

  onNotificationClose = () => {
    const notificationData = hideVersionNotificationBar("");
    this.props.onCloseNotification(notificationData);
  };

  render = () => {
    const artInfoInProgressList = {
      parentDesign: false,
      inProgress: true,
      changeStatusIcon: "icon_assignment-returned",
      editDuplicateIcon: "icon_edit",
      deleteIcon: "icon_trash",
      editLabel: "Edit",
      deleteLabel: "Delete"
    };

    const artInfoCurrentList = {
      parentDesign: false,
      inProgress: false,
      changeStatusIcon: "icon_assignment-returned",
      editDuplicateIcon: "icon_copy",
      changeStatusLabel: "Move To Archived"
    };

    const artInfoArchivedList = {
      parentDesign: false,
      inProgress: false,
      changeStatusIcon: "icon_assignment-returned",
      editDuplicateIcon: "icon_copy",
      changeStatusLabel: "Move To Current"
    };

    return (
      <div>
        <NotificationBar
          enableAutoClose={this.props.notification.enableAutoClose}
          autoCloseMilli={this.props.notification.notificationAutoCloseMilli}
          bgColor={this.props.notification.notificationBgColor}
          icon={this.props.notification.notificationIcon}
          showNotification={this.props.notification.shouldShowNotification}
          msg={this.props.notification.notificationMessage}
          onCloseClicked={this.onNotificationClose}
        />
        <ConfirmationModal
          onConfirmDeleteModalClose={this.onConfirmDeleteModalClose}
          showModal={this.state.deleteModalInfo.showConfirmDeleteModal}
          msg={`Are you sure you want to delete ${this.state.deleteModalInfo.versionToBeDeleted.versionName}?`}
          onConfirmDeleteModalSubmit={this.onDelete}
        />
        <EditVersionModal
          onModalClose={this.onEditModalClose}
          showModal={this.state.showEditModal}
          currentDesign={this.state.currentCardDesign}
          onUpdateVersion={this.onUpdateVersion}
        />
        {_.isEmpty(this.props.versionDesigns.versionList) ? (
          <h1>No version available!</h1>
        ) : (
          <div style={{ padding: "10px" }}>
            <AddVersionModal
              closeAddModal={this.onAddModalClose}
              showModal={this.state.showAddModal}
              versionListData={this.props.versionDesigns.versionList}
              addNewVersion={this.addNewVersion}
            />
            <VersionMgmtHeader
              onClickBack={this.onClickBack}
              designName={
                this.props.versionDesigns.versionList.parentDesignName
              }
              designImageUrl={
                this.props.versionDesigns.versionList.parentDesignImageURL
              }
            />
            <VersionInProgress
              listTitleLarge={"In Progress "}
              listTitleSmall={"of being created"}
              artInfo={artInfoInProgressList}
              designs={this.props.versionDesigns.versionList.inProgressVersions}
              listType={"inProgressType"}
              onEditModalOpen={this.onEditModalOpen}
              onConfirmDeleteModalOpen={this.onConfirmDeleteModalOpen}
              onAddModalOpen={this.onAddModalOpen}
              onDelete={this.onDelete}
              hideAdd={false}
            />
            <VersionCurrent
              listTitleLarge={"Current "}
              listTitleSmall={"versions in production"}
              artInfo={artInfoCurrentList}
              designs={this.props.versionDesigns.versionList.currentVersions}
              listType={"currentTypes"}
              onChangeStatus={this.onMoveCurrentToArchived}
              hideAdd={true}
            />
            <VersionArchived
              listTitleLarge={"Archived "}
              listTitleSmall={"versions no longer printed"}
              artInfo={artInfoArchivedList}
              designs={this.props.versionDesigns.versionList.archivedVersions}
              listType={"archivedTypes"}
              onChangeStatus={this.onMoveArchivedToCurrent}
              hideAdd={true}
            />
          </div>
        )}
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  onCloseNotification(notificationData) {
    dispatch(closeNotification(notificationData));
  },
  onFetchChildVersions(id) {
    dispatch(fetchChildVersions(id));
  },
  onAddNewVersion(id, versionList, newVersion) {
    dispatch(addNewVersionToInProgress(id, versionList, newVersion));
  },
  onDeleteInProgressVersion(id, versionList) {
    dispatch(deleteNewInProgressVersion(id, versionList));
  },
  onMoveInProgressToCurrent(id, versionList) {
    dispatch(moveInProgressToCurrent(id, versionList));
  },
  onMoveCurrentToArchived(id, versionList) {
    dispatch(onMoveCurrentToArchived(id, versionList));
  },
  onMoveArchivedToCurrent(id, versionList) {
    dispatch(onMoveArchivedToCurrent(id, versionList));
  }
});

function mapStateToProps(state) {
  return {
    versionDesigns: state.fetchChildVersionsReducer,
    notification: state.notificationBarReducer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  VersionManagementPage
);
