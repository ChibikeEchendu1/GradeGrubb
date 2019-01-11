/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner} from './index';
import ElementListItem from './ElementListItem';
import { Button } from 'native-base';
import {eleFetch} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
 } from 'react-native';




class ElementView extends Component {

  constructor(props){
    super(props);
  this.state = {
    "elements":[
      {"name":"classwork1"},
      {"name":"classwork1"},
      {"name":"classwork1"},
      {"name":"classwork1"},
      {"name":"classwork1"},
      {"name":"classwork1"},
      {"name":"classwork1"},
      {"name":"classwork1"},
    ]
  ,
    nav: this.props.navigation.navigate,
    Name:  this.props.Name,
    name:  this.props.Subname,
    Sname: this.props.Sname,
    Tid: this.props.Tid,
    id: this.props.id,
    Room:this.props.Room,
}
    
    this.renderRow=this.renderRow.bind(this);
  }

 
  getElements(){
    return  this.props.elements;
  }

  componentWillMount(){

    const {name,Sname} = this.state;
    this.props.eleFetch({name,Sname});

    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.getElements())
   }
  componentDidMount(){
    const {name,Sname} = this.state;
    this.props.eleFetch({name,Sname});
    console.log(name,Sname);

    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.getElements())
   }

   /* componentWillReceiveProps(){
    const {name,Sname} = this.state;
    this.props.eleFetch({name,Sname});

    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.getElements())
   } */

   
   renderButton(){
    if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{
     const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
  });
  this.dataSource = ds.cloneWithRows(this.getElements())
     return <ListView
    dataSource={this.dataSource}
    enableEmptySections={true}
    renderRow={this.renderRow}/>;
  }
  }
  


   renderRow(item){
     
    return <ElementListItem item={item} School={this.state.Sname} Room={this.state.Room} RealSubNAme = {this.state.Name} Subname={this.state.name} Tid={this.state.Tid} nav={this.state.nav}/>
   }

  render() {
    return (
   
        <View style ={styles.container}>
          
                
                  <Button style={{ height:'10%', width:'100%', justifyContent:'center', backgroundColor:'#a1d6e2'}} onPress={()=>{this.props.navigation.navigate("AddNew",{Tid: this.state.Tid,id: this.state.id,Subname: this.state.name, Sname:this.state.Sname,Name:this.state.Name ,Room:this.state.Room})}}>
                 
                  <Text style={{fontSize:25, color:'white'}}>Add New</Text>
                
                  </Button>
              
                <View style={{height:"89%"}}> 
           
                {this.renderButton()}
          </View>
            
      </View>
      );
    }
  } 

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fbfaf0',
      }
  });

  const mapStateToProps = state =>{
  
    const elements = _.map(state.pro.Eles,(Val,uid) =>{
      return {...Val};
    });
  
  
  return {elements,loading:state.pro.loading1};
  };
  
  export default connect(mapStateToProps,{eleFetch})(ElementView);


   
  





  