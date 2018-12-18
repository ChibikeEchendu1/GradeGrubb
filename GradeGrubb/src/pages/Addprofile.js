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
  StyleSheet,
} from 'react-native';
import AddprofileForm from '../components/AddprofileForm';




export default class Addprofile extends Component {
  static navigationOptions = { header: null };
  render() {
    const {goBack,navigate} = this.props.navigation; 
    return (
    <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>
        <AddprofileForm navigate={goBack} nav={navigate}  />
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