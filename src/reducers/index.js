import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import employeeForm from './EmployeeFormReducer';

export default combineReducers({
  auth: authReducer,
  employeeForm
});
