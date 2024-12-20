/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner} from './index';
import StudentListItem from './StudentListItem';
import {  Button } from 'native-base';
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




class StudentView extends Component {
constructor(props){
  super(props);
  this.state = {
   

    nav: this.props.navigation,
    Name: this.props.Name,
    Tname:this.props.Tname,
    name: this.props.name,
    id: this.props.id,
    Sname: this.props.Sname,
    Tid:this.props.Tid,
    room:this.props.room,
    }
    this.renderRow = this.renderRow.bind(this);
  }
  
  getStudents(){
    return  this.props.students;
  }

  componentWillMount(){

    const {name,Sname,room} = this.state;
    this.props.stuFetch({name,Sname,room});

    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.getStudents())


   }

   componentDidMount(){

    const {name,Sname,room} = this.state;
    this.props.stuFetch({name,Sname,room});

    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.getStudents())

    console.log(this.state.Name)
    console.log(this.state.id)
    console.log(this.state.name)
    console.log(this.state.room)
    console.log(this.state.Sname)
    console.log(this.state.Tid)

   }


   /* componentWillReceiveProps(){
    
    const {name,Sname,room} = this.state;
   
    this.props.stuFetch({name,Sname,room});

    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.getStudents())
   }
 */

   renderRow(item){
     
    return <StudentListItem Tname={this.state.Tname} navigate={this.state.nav} School={this.state.Sname} Subname= {this.state.name} item={item}/>
   }

   renderButton(){
    if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{
     const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
  });
  this.dataSource = ds.cloneWithRows(this.getStudents())
     return <ListView
    dataSource={this.dataSource}
    enableEmptySections={true}
    renderRow={this.renderRow}/>;
  }
  }

  render() {
    item=this.props.navigation.state.params.Name
    return (
   
        <SafeAreaView style ={styles.container}>
   
                
                  <Button style={{ height:'10%', width:'100%', justifyContent:'center', borderBottomWidth:0.5, borderColor:'#DDDDDD',backgroundColor:'white'}} transparent onPress={()=>{this.props.navigation.navigate('EditOptions',{Tid: this.state.Tid,id:this.state.id,Name: this.state.Name, Subname: this.state.name,Room:this.state.room, Sname:this.state.Sname})}}>
                
                  <Text style={{fontSize:25, color:'#1995ad'}}>Edit</Text>
               
                  </Button>
             
        <View style={{height:"89%"}}> 
        {this.renderButton()}
          </View>
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

  const mapStateToProps = state =>{
  
    const students = _.map(state.pro.stu,(Val,uid) =>{
      return {...Val,uid};
    });
  
    console.log(state);
    
  
  return {students,loading:state.pro.loading1};
  };
  
  export default connect(mapStateToProps,{stuFetch})(StudentView);
   
  
  




  