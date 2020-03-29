import { combineReducers } from 'redux';
import {authentication} from './auth.reducer';
import {alert} from './alert.reducer'
import {validation} from './validator.reducer'
const rootReducer = combineReducers({
  authentication,
  alert,
  validation
});

export default rootReducer;
