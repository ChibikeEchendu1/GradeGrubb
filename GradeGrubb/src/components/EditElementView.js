/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner,HomeHeader} from './index';
import EditElementListItem from './EditElementListItem';
import {remstuclassedit,removELEE} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,SafeAreaView,
  ListView,
  TouchableOpacity,
 } from 'react-native';




class EditElementView extends Component {
  
 
    
   
  constructor(props){
 
    super(props);
   this.state = {
   
    check:true,
   /*  elements:[
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
    ], */

    classRoom: this.props.navigation.state.params.ClassRoom,
    School:this.props.navigation.state.params.School,
    Tid:this.props.navigation.state.params.Tid,
    id:this.props.navigation.state.params.id,
    Name:this.props.navigation.state.params.Name,
    Subname: this.props.navigation.state.params.Subname,
    
}
this.renderRow=this.renderRow.bind(this);
  }
    
  
    getElements(){
      return  this.props.Students;
    }
    
  
    componentDidMount(){
      const {School,Subname} = this.state;
     // console.log(School,Subname);
      this.props.remstuclassedit({School,Subname});
     }

   

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

    goback(){
      if (this.props.Adstu) {
        //elijah code here navigate to elemet view
        //this.props.navigation.navigate("Elements")
        //console.log("tid",this.state.Tid,"dbname",this.state.School,"School",this.state.Subname,"room",this.props.navigation.state.params.Room,"id",this.props.navigation.state.params.id,"name",this.props.navigation.state.params.Name);
        
        this.props.navigation.navigate("Tools",{Tid: this.state.Tid,dbName:this.state.Subname,School: this.state.School  ,Room:this.state.classRoom ,Id:this.props.navigation.state.params.id,Name:this.props.navigation.state.params.Name})
      //this.props.navigation.navigate("Thome",{School: this.state.School,Tid:this.state.Tid})
    }
    }
  
   
   
   
     renderRow(item){
      return <EditElementListItem item={item} total={this.props.navigation.state.params.total} navigation={this.props.navigation} Subname = {this.state.Subname} Tid = {this.state.Tid} id = {this.state.id} school={this.state.School} classRoom = {this.state.classRoom}/>
     }
  
    render() {
      return (
     
          <SafeAreaView style ={styles.container}>
          <HomeHeader ti="Edit Topic" navigate={this.props.navigation.goBack}/>
          

        <View style={{justifyContent: 'flex-start', height: '71%', width:'100%'}}>
         {this.renderButton()}
            </View>
         
          {this.goback()} 
      </SafeAreaView>
        );
      }
    } 
  
  const styles = StyleSheet.create({
  
      container: {
          flex: 1,
          backgroundColor: 'white',
        }
    });

    const mapStateToProps = state =>{
   
      return {Students:state.pro.Students3,loading: state.pro.loading1, Ids:state.pro.Id2,Adstu:state.pro.Adstu};
    };
    
    export default connect(mapStateToProps,{remstuclassedit,removELEE})(EditElementView);


  



   
  





  