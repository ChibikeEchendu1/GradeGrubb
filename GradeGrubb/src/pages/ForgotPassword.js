/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
import {
  StyleSheet
} from 'react-native';
import ForgotPasswordForm from '../components/ForgotPasswordForm';




export default class ForgotPassword extends Component {

  
  
  render() {
  const {navigation} = this.props; 
    return (
    <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>
        <ForgotPasswordForm  navigation={navigation}/>  
     </Provider>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F2F3',
  },
 
  
});