import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './PageFormReducer';
import EmployeeReducer from './PageReducer';

export default combineReducers({
   auth: AuthReducer,
   employeeForm: EmployeeFormReducer,
   employees: EmployeeReducer
});