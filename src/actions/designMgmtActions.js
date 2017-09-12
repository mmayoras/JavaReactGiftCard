import * as types from "./actionTypes";
import { CONFIG } from "../envconfig/globals";
import _ from "lodash";

export const fetchAllCardDesign = () => dispatch => {
  debugger;
  const fetchCardDesignURL = CONFIG.baseURL;

  fetch(fetchCardDesignURL + "/api/fetchAllDesigns", {
    method: "GET"
  })
    .then(response => response.json())
    .then(res => {
      //TODO: only for mocking since Tandem fetch all designs is not ready
      debugger;
      let newData = {};
      let currentData = sessionStorage.getItem("newDesign");
      console.info("designDate before: ", currentData);
      let newObj = {};
      if (currentData) {
        newObj = Object.assign(currentData, newData);
        newObj.id = 20;
        newObj.designName = 'Box Truck'
        newObj.selectedCardImage ="https://i.imgur.com/oql2OLJ.png";
        
        let newList = res.designList;
        newList.push(newObj);;
        dispatch({
          type: types.FETCH_ALL_DESIGN,
          payload: _.reverse(newList)
        });
      } else {
        dispatch({
          type: types.FETCH_ALL_DESIGN,
          payload: res.designList
        });
      }
    })
    .catch(error => {
      debugger;
      console.error("error: " + error);
    });
};

export const closeNotification = notificationData => dispatch => {
  debugger;
  dispatch({
    type: types.CLOSE_NOTIFICATION,
    payload: notificationData
  });
};

export const searchCardDesigns = (searchString, currentDesigns) => dispatch => {
  debugger;
  let searchedDesignList = [];

  if (searchString !== "") {
    searchedDesignList = _.filter(currentDesigns, function(design) {
      if (
        design.designName.toUpperCase().includes(searchString.toUpperCase())
      ) {
        return design;
      }
    });
  }

  dispatch({
    type: types.SEARCH_DESIGNS,
    payload: searchedDesignList
  });
};
