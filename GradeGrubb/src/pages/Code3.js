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
  StyleSheet,BackHandler
} from 'react-native';
import CodeFormSignup2 from '../components/CodeFormSignup2';




export default class Code3 extends Component {
  componentWillMount(){ 
    BackHandler.addEventListener('hardwareBackPress',function(){
      return true;
    });
  }
  render() {
    const {navigation} = this.props;
    return (
    <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>
        <CodeFormSignup2  navigation={navigation}/> 
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