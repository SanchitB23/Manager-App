import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
// import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      {/* // FIXME: Remove initial, was put just to avoid login on every test */}
      <Scene key="main" >
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          initial
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
