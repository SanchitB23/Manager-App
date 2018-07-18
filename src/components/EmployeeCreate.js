import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardSection,
  Input,
  Button
} from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='John Doe'
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}

          />
        </CardSection>
        <CardSection>
          <Input
            label='Phone'
            placeholder="897213490128"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection>
          <Button>
            Create User
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
export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
