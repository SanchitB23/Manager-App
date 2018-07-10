import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import firebase from 'firebase';

import {
  Container
} from 'native-base';

import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    // const config = {
    //   apiKey: 'AIzaSyD-_h6CybTyGEx47VN2g9OrhMFR-ZdDKEo',
    //   authDomain: 'managerreactnativeapp.firebaseapp.com',
    //   databaseURL: 'https://managerreactnativeapp.firebaseio.com',
    //   projectId: 'managerreactnativeapp',
    //   storageBucket: 'managerreactnativeapp.appspot.com',
    //   messagingSenderId: '643912206745'
    // };
    this.initializeFirebase();
  }
  initializeFirebase() {
    const firebase = require('firebase');

    const config = {
      apiKey: 'AIzaSyD-_h6CybTyGEx47VN2g9OrhMFR-ZdDKEo',
      authDomain: 'managerreactnativeapp.firebaseapp.com',
      databaseURL: 'https://managerreactnativeapp.firebaseio.com',
      projectId: 'managerreactnativeapp',
      storageBucket: 'managerreactnativeapp.appspot.com',
      messagingSenderId: '643912206745'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Container>
          <Header headerText='Login Page' />
          <LoginForm />
        </Container>
      </Provider>
    );
  }
}

export default App;
