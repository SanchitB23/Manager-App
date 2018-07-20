import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  Card,
  CardSection,
  Button
} from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onPress() {
    const { name, phone, shift } = this.props;
    console.log(this.props.name, this.props.phone, this.props.shift);
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeSave, employeeUpdate })(EmployeeEdit);
