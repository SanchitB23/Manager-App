import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import employeeForm from './EmployeeFormReducer';
import employee from './EmployeeReducer';

export default combineReducers({
  auth: authReducer,
  employeeForm,
  employee
});
