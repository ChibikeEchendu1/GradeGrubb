import React, { Component } from 'react';
import EditView from '.././components/EditView';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'

import {
  StyleSheet,View
} from 'react-native';




export default class EditOptions extends Component {
  
  render() {
    const {navigation} = this.props;
    return (
      
        <EditView navigation={navigation}/>
      
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

