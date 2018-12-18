import React, { Component } from 'react';
import NewNameView from '.././components/NewNameView';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'

import {
  StyleSheet,View
} from 'react-native';




export default class NewName extends Component {
  
  render() {
    const {navigation} = this.props
    return (
      <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>
        <NewNameView  navigation={navigation}/>
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
