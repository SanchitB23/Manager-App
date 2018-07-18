// IDEA: Make new Component for SignUp

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
// import {
//   Container
// } from 'native-base';

import Router from './Router';
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
// import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        {/* <Container> */}
        {/* <Header headerText='Login Page' /> */}
        {/* <LoginForm /> */}
        <Router />
        {/* </Container> */}
      </Provider>
    );
  }
}

export default App;
