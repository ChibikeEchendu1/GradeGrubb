/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {HomeHeader,Spinner} from './index';
import ElementView from './ElementView';
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




class ToolsView extends Component {
constructor(props){
  super(props);
  this.state = {
    nav: this.props.navigation,
    Name: this.props.navigation.state.params.Name,
    Tname:this.props.navigation.state.params.Tname,
    name: this.props.navigation.state.params.dbName,
    id: this.props.navigation.state.params.Id,
    Sname: this.props.navigation.state.params.School,
    Tid:this.props.navigation.state.params.Tid,
    room:this.props.navigation.state.params.Room,
    }

  }

  render() {
    item=this.props.navigation.state.params.Name
    return (
   
        <SafeAreaView style ={styles.container}>
        <HomeHeader ti={item} boo={"Tsubject"} navigate={this.props.navigation.navigate}/>
   
          <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor: Platform.OS === 'ios' ? "#F8F8F8" :'#D0F5FE' }}><Text style={{fontSize:20,color: Platform.OS === 'ios' ? "#000000" :'black'}}>Students</Text></TabHeading>}>
          <StudentView Tname={this.state.Tname} navigation={this.props.navigation} Name={this.state.Name} name={this.state.name} id={this.state.id} Sname={this.state.Sname} Tid={this.state.Tid} room={this.state.room} />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: Platform.OS === 'ios' ? "#F8F8F8" :'#D0F5FE' }}><Text style={{fontSize:20,color: Platform.OS === 'ios' ? "#000000" :'black'}}>Assessment</Text></TabHeading>}>
          <ElementView navigation={this.props.navigation} Name={this.state.Name} Subname={this.state.name} Tid={this.state.Tid} Room={this.state.room} id={this.state.id} Sname={this.state.Sname} />
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

  
  export default ToolsView;
   
  
  




  