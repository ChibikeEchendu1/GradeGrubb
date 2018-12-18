import React, { Component } from 'react';
import TeacherListView from '.././components/TeacherListView';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'

import {
  StyleSheet,
} from 'react-native';


export default class TeacherList extends Component {
    
      


    render() {
      const{navigation} = this.props;
        return (
          <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>
            <TeacherListView navigation={navigation}/>
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

