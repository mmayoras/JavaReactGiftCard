import * as types from "./actionTypes";
import {CONFIG} from "../envconfig/globals";
import _ from "lodash";

export const fetchChildVersions = id => dispatch => {
  debugger;
  const fetchCardDesignURL = CONFIG.baseURL;

  fetch(fetchCardDesignURL + "/api/fetchChildVersions/" + id, {
    method: "GET"
  })
  .then(response => response.json())
  .then(res => {
    debugger;
    if (res.serviceResponseStatus.success) {
      dispatch({
        type: types.FETCH_CHILD_VERSIONS,
        payload: {versionList: res}
      });
    } else {
      // Error redirect later
    }
  })
  .catch(error => {
    debugger;
    console.error("error: " + error);
  });
};

export const addNewVersionToInProgress = (id, versionList, newVersion) =>
  dispatch => {
    debugger;

    newVersion.id = id;

    console.info("New Version about to be added: " + newVersion);
    if (newVersion) {
      versionList.inProgressVersions.push(newVersion);

      dispatch({
        type: types.FETCH_CHILD_VERSIONS,
        payload: {versionList: versionList}
      });
    }
  };

export const deleteNewInProgressVersion = (id, versionList) => dispatch => {
  debugger;
  const selectedInProgressItem = _.find(versionList.inProgressVersions, [
    'id',
    id,
  ]);
  console.info('selectedInProgressItem', selectedInProgressItem);
  if (selectedInProgressItem) {
    _.remove(versionList.inProgressVersions, ['id', id]);
    dispatch({
      type: types.FETCH_CHILD_VERSIONS,
      payload: { versionList: versionList },
    });
  }
};

export const moveInProgressToCurrent = (id, versionList) => dispatch => {
  debugger;
  const selectedInProgressItem = _.find(versionList.inProgressVersions, [
    "id",
    id
  ]);
  console.info("selectedInProgressItem", selectedInProgressItem);
  if (selectedInProgressItem) {
    let currentListWithItemInProgress = versionList.currentVersions.push(
      selectedInProgressItem
    );
    _.remove(versionList.inProgressVersions, ["id", id]);
    dispatch({
      type: types.FETCH_CHILD_VERSIONS,
      payload: {versionList: versionList}
    });
  }
};

export const onMoveCurrentToArchived = (id, versionList) => dispatch => {
  if (versionList.archivedVersions === null) {
    console.info('archivedVersion is null or empty');
    versionList.archivedVersions = [];
  }
  const selectedCurrentItem = _.find(versionList.currentVersions, [
    "id",
    id
  ]);
  if (selectedCurrentItem) {
    let newItemId;
    if (versionList.archivedVersions) {
      newItemId = versionList.archivedVersions.length++;
      selectedCurrentItem.id = newItemId;
      let itemsInCurrentList = versionList.archivedVersions.push(
        selectedCurrentItem
      );
    } else {
      let archivedVersions = [];
      let itemsInCurrentList = versionList.archivedVersions.push(
        selectedCurrentItem
      );
    }

    _.remove(versionList.currentVersions, ["id", newItemId]);
    dispatch({
      type: types.FETCH_CHILD_VERSIONS,
      payload: {versionList: versionList}
    });
  }
};

export const onMoveArchivedToCurrent = (id, versionList) => dispatch => {
  const selectedArchivedItem = _.find(versionList.archivedVersions, [
    "id",
    id
  ]);
  if (versionList.currentVersions === null) {
    console.info('archivedVersion is null or empty');
    versionList.currentVersions = [];
  }
  if (selectedArchivedItem) {
    let newItemId = versionList.currentVersions.length + 1;
    selectedArchivedItem.id = newItemId;

    let itemsInCurrentList = versionList.currentVersions.push(
      selectedArchivedItem);
    _.remove(versionList.archivedVersions, ['id', newItemId]);

    dispatch({
      type: types.FETCH_CHILD_VERSIONS,
      payload: {versionList: versionList}
    });
  }
};
