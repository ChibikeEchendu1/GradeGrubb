/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {HomeHeader,Spinner,Header} from './index';
import AnnouceViewEvent from './AnnouceViewEvent';
import AnnouceViewEvent2 from './AnnouceViewEvent2'
import {eleFetch} from '../actions';
import StudentView from './StudentView';
import StudentListItem from './StudentListItem';
import { Container,  Tab, Tabs, TabHeading, Icon} from 'native-base';
import {stuFetch} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,Platform,
  ListView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  Keyboard
} from 'react-native';




class ToolsViewEvent extends Component {
constructor(props){
  super(props);
  this.state = {
    
    }

  }

  render() {
    
    return (
   
        <SafeAreaView style ={styles.container}>
        <Header ti={"Announcement/Event"}/>
   
          <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor: Platform.OS === 'ios' ? "" :'#D0F5FE' }}><Text style={{fontSize:20,color: Platform.OS === 'ios' ? "" :'black'}}>Announcements</Text></TabHeading>}>
          <AnnouceViewEvent/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: Platform.OS === 'ios' ? "" :'#D0F5FE' }}><Text style={{fontSize:20,color: Platform.OS === 'ios' ? "" :'black'}}>Event</Text></TabHeading>}>
          <AnnouceViewEvent2/>
          </Tab>
          </Tabs>
        
      </SafeAreaView>
      );
    }
  } 

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
      }
  })

  
  export default ToolsViewEvent;
   
  
  




  