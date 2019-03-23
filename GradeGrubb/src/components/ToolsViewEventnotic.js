/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {HomeHeader,Spinner} from './index';
import AnnouceViewEvent from './AnnouceViewEvent';
import AnnouceViewEvent2 from './AnnouceViewEvent2'
import {eleFetch} from '../actions';
import StudentView from './StudentView';
import StudentListItem from './StudentListItem';
import { Container, Header, Tab, Tabs, TabHeading, Icon} from 'native-base';
import {stuFetch} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
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
        <HomeHeader ti={"Announcement/Event"} boo="" navigate={this.props.navigation.goBack}/>
   
          <Tabs>
          <Tab heading={ <TabHeading><Text style={{fontSize:20}}>Announcements</Text></TabHeading>}>
          <AnnouceViewEvent/>
          </Tab>
          <Tab heading={ <TabHeading><Text style={{fontSize:20}}>Event</Text></TabHeading>}>
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
   
  
  




  