// IDEA: Make new Component for SignUp
// TODO: INstall todo earch package
// TODO: Test Listitem :8
// IDEA: https://www.npmjs.com/package/react-native-communications
// XXX: 158.1:50
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {FirebaseApiKey,FirebaseSenderId} from './constants/key';

import Router from './Router';
import reducers from './reducers';


class App extends Component {
  componentWillMount() {
    this.initializeFirebase();
  }
  initializeFirebase() {
    const firebase = require('firebase');

    const config = {
      apiKey: FirebaseApiKey,
      authDomain: 'managerreactnativeapp.firebaseapp.com',
      databaseURL: 'https://managerreactnativeapp.firebaseio.com',
      projectId: 'managerreactnativeapp',
      storageBucket: 'managerreactnativeapp.appspot.com',
      messagingSenderId: FirebaseSenderId
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>

        <Router />
      </Provider>
    );
  }
}

export default App;
