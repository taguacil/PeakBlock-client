import { combineReducers } from 'redux';
import {authentication} from './auth.reducer';
import {alert} from './alert.reducer'
import {validation} from './validator.reducer'
import { selfForm} from './selfForm.reducer'
const rootReducer = combineReducers({
  authentication,
  alert,
  validation,
  selfForm
});

export default rootReducer;
