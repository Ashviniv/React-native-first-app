import { combineReducers } from 'redux';
import LoginReducer from './LoginReducers';
import UserReducer from './UserReducers';
const rootReducer = combineReducers({ LoginReducer, UserReducer});

export default rootReducer;
