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
      item:this.props.navigation.state.params.item,
      Name:this.props.navigation.state.params.Name,
      School:this.props.navigation.state.params.School,
      id:this.props.navigation.state.params.id
      
    }


  }

  render() {
    
    return (
   
        <SafeAreaView style ={styles.container}>
        <HomeHeader ti={"Notice"} boo="" navigate={this.props.navigation.goBack}/>
   
          <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor: Platform.OS === 'ios' ? "#F8F8F8" :'#D0F5FE' }}><Text style={{fontSize:20,color: Platform.OS === 'ios' ? "#000000" :'black'}}>Announcements</Text></TabHeading>}>
          <AnnouceViewEvent item={this.state.item} Name={this.state.Name} School={this.state.School} id={this.state.id}/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: Platform.OS === 'ios' ? "#F8F8F8" :'#D0F5FE' }}><Text style={{fontSize:20,color: Platform.OS === 'ios' ? "#000000" :'black'}}>Event</Text></TabHeading>}>
          <AnnouceViewEvent2 item={this.state.item} Name={this.state.Name} School={this.state.School} id={this.state.id}/>
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
   
  
  




  