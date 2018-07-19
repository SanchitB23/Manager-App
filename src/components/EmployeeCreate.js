import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import {
  Card,
  CardSection,
  Input,
  Button
} from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {

  onCreateUserButton() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

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
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabel}>Select Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onCreateUserButton.bind(this)}>
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
export default connect(mapStateToProps, {
   employeeUpdate, employeeCreate
})(EmployeeCreate);

const styles = {
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20,
    alignSelf: 'center'
  }
};
