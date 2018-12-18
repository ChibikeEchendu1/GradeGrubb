import React, { Component } from 'react';
import NewSubjectView from '.././components/NewSubjectView';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'

import {
  StyleSheet,View,BackHandler
} from 'react-native';




export default class NewName extends Component {
  componentWillMount(){ 
    BackHandler.addEventListener('hardwareBackPress',function(){
      return true;
    });
  }
  
  render() {
    const{navigation} = this.props;
    return (
      
      
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        < NewSubjectView navigation={navigation}/>
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
