import {
  FETCH_ALL_DESIGN,
  CLOSE_NOTIFICATION,
  SEARCH_DESIGNS
} from '../actions/actionTypes';
import initialState from './initialState';

export const searchDesignsReducer = (state = initialState, action) =>
  (action.type === SEARCH_DESIGNS) ?
    action.payload :
    state;

export const notificationBarReducer = (state = initialState, action) =>
  (action.type === CLOSE_NOTIFICATION) ?
    action.payload :
    state;

export const fetchAllDesignsReducer = (state = initialState, action) =>
  (action.type === FETCH_ALL_DESIGN) ?
    action.payload:
    state;

