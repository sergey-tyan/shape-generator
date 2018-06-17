import { combineReducers } from 'redux';
import { shapeReducer } from './shape';
import { authReducer } from './auth';

const rootReducer = combineReducers({
  shape: shapeReducer,
  auth: authReducer
});

export default rootReducer;
