import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { text } from 'react-native-communications';
import {
  Card,
  CardSection,
  Button,
  Confirm
} from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
  state = { showModal: false }
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
  onTextPress() {
    const { phone, shift } = this.props;
    text(phone, `Your Shift is ${shift}`); //communications.text
  }
  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }
  onDecline() {
    this.setState({ showModal: false });
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
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => { this.setState({ showModal: !this.state.showModal }); }}>
            Fire Employee
          </Button>
        </CardSection>
        <CardSection>
          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to delete this?
          </Confirm>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeSave, employeeUpdate, employeeDelete })(EmployeeEdit);
