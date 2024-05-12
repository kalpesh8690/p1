// src/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './user';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers here if needed
});

export default rootReducer;
