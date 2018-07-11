import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  Form,
  Item,
  Input,
  Label,
  Button
} from 'native-base';

import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  render() {
    return (
        <Form >
          <Item floatingLabel >
            <Label >Email</Label>
            <Input
              onChangeText={this.onEmailChange.bind(this)}
              textContentType='emailAddress'
              keyboardType='email-address'
              value={this.props.email}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              textContentType='password'
              secureTextEntry
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </Item>
          <Button block style={{ margin: 30 }} onPress={this.onButtonPress.bind(this)}>
            <Text>Login</Text>
          </Button>
        </Form>
    );
  }
}

const mapToStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapToStateToProps, { loginUser, emailChanged, passwordChanged })(LoginForm);
