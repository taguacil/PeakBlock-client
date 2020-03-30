import { combineReducers } from 'redux';
import {authentication} from './auth.reducer';
import {alert} from './alert.reducer'
import {validation} from './validator.reducer'
import { selfForm} from './selfForm.reducer'
import { users } from './users.reducer'
import { registration } from './registration.reducer'
const rootReducer = combineReducers({
  authentication,
  alert,
  validation,
  selfForm,
  users,registration
});

export default rootReducer;
