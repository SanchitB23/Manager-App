import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  Spinner
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
  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text
            style={{
              alignSelf: 'center',
              color: 'red'
            }}
          >
            {this.props.error}
          </Text>
        </View>
      );
    }
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button block style={{ margin: 30 }} onPress={this.onButtonPress.bind(this)}>
        <Text>Login</Text>
      </Button>
    );
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
          {this.renderError()}
          <View>
            {this.renderButton()}
          </View>
        </Form>
    );
  }
}

const mapToStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapToStateToProps, { loginUser, emailChanged, passwordChanged })(LoginForm);
