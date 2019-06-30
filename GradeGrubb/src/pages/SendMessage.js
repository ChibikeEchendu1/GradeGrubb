import React, { Component } from 'react';
import SendMessageView from '../components/SendMessageView';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'

import {
  StyleSheet,View
} from 'react-native';




export default class SendMessage extends Component {
  
  render() {

    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <SendMessageView navigation={navigation}/>
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
