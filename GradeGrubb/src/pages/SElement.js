import React, { Component } from 'react';
import SingleElementView from '.././components/SingleElementView';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'

import {
  StyleSheet
} from 'react-native';




export default class SElement extends Component {
  
  render() {
    const {navigation} = this.props; 
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <SingleElementView navigation={navigation}/>
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

