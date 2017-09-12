import {FETCH_CHILD_VERSIONS} from '../actions/actionTypes';
import initialState from './initialState';

export const fetchChildVersionsReducer = (state = initialState, action) =>
  (action.type === FETCH_CHILD_VERSIONS) ?
    action.payload :
    state;
