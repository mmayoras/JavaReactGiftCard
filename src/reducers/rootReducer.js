import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {searchDesignsReducer, fetchAllDesignsReducer, notificationBarReducer} from './designMgmtReducer';
import {fetchChildVersionsReducer} from './versionMgmtReducer';

const rootReducer = combineReducers({
  searchDesignsReducer,
  fetchAllDesignsReducer,
  notificationBarReducer,
  fetchChildVersionsReducer,
  routing: routerReducer
});

export default rootReducer;
