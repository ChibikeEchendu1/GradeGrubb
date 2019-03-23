import React, { Component } from 'react';
import ToolsViewEvent from '.././components/ToolsViewEvent';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'

import {
  StyleSheet,View,BackHandler
} from 'react-native';




export default class ToolsEvent extends Component {

  componentWillMount(){ 
    BackHandler.addEventListener('hardwareBackPress',function(){
      return true;
    });
  }
  
  render() {
    const {navigation} = this.props
    return (

      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <ToolsViewEvent navigation={navigation}/>
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
