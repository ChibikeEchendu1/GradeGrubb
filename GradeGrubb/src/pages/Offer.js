import React, { Component } from 'react';
import OfferView from '.././components/OfferView';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'

import {
  StyleSheet,View
} from 'react-native';




export default class Offer  extends Component {
  
  render() {
    const {navigation} = this.props; 
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <OfferView navigation={navigation}/>
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
