/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner,HomeHeader} from './index';
import RemoveStudentListItem from './RemoveStudentListItem';
import {remstuclass2,removstud} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  
  TouchableOpacity,
  
} from 'react-native';




class RemoveStudentView extends Component {

  constructor(props){
 
    super(props);
   this.state = {
   
    check:true,
    elements:[
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
      {"name":"Chibike Echendu"},
    ],

    classRoom: this.props.navigation.state.params.ClassRoom,
        School: this.props.navigation.state.params.School,
        Tid:this.props.navigation.state.params.Tid,
        Subname: this.props.navigation.state.params.Subname 
 
}
this.renderRow=this.renderRow.bind(this);
this.checkAll = this.checkAll.bind(this);
  }
  getElements(){
    return  this.props.Students;
  }
  

  componentDidMount(){

    const {School,classRoom,Subname} = this.state;
    console.log(School,classRoom,Subname);
      this.props.remstuclass2({School,classRoom,Subname});
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

   checkAll(){
    if (this.state.check === true) {
      lol = false
    }
    else{
      lol = true
    }

    for (let index = 0; index < this.props.Students.length; index++) {
      this.props.Students[index]["check"] = !this.props.Students[index]["check"]
    }

    /*
    let newMarkers = this.props.Students.map(el => (
      lol===true? {...el, check: false}: {...el, check: true}
    ))
    */
    

    
    this.setState({check: lol})
    console.log(this.props.Students);
 
    this.forceUpdate()

  }

  goback(){
    if (this.props.Adstu) {
      //elijah code here navigate to student view
       //console.log("tid",this.state.Tid,"dbname",this.state.School,"School",this.state.Subname,"room",this.props.navigation.state.params.Room,"id",this.props.navigation.state.params.id,"name",this.props.navigation.state.params.Name);
        
       this.props.navigation.navigate("Tools",{Tid: this.state.Tid,dbName:this.state.Subname,School: this.state.School  ,Room:this.state.classRoom ,Id:this.props.navigation.state.params.id,Name:this.props.navigation.state.params.Name})
      
    //this.props.navigation.navigate("Thome",{School: this.state.School,Tid:this.state.Tid})
  }
  }


   renderRow(item){
    return <RemoveStudentListItem item={item} checked={this.state.check} />
   }

  render() {
    return (
   
        <View style ={styles.container}>
        <HomeHeader ti="Remove Students" navigate={this.props.navigation.goBack}/>
        <View style={{flexDirection:'column', marginTop:0, height:'15%', backgroundColor: '#fbfaf0'}}>
        <View>
            <TouchableOpacity onPress= {this.checkAll.bind(this)}  >
        <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', marginTop:7, marginBottom:2}}>Select All/Select None</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
       
      
        <View style={{width:'100%', alignItems: "flex-end"}}>

       <TouchableOpacity onPress={()=>{
          const Students = this.props.Students
          const Subname = this.state.Subname
            const School = this.state.School
            const Tid = this.state.Tid
           // console.log(Subname,Students,classRoom,Tid);
          this.props.removstud({Students,Subname,School,Tid})
          
         
       }}>

          <Text style={{fontSize:20,marginRight:10, color:"#1995ad"}}>Finish</Text>
          </TouchableOpacity>
          </View>
    

    </View>
        </View>

        <View style={{justifyContent: 'flex-start', height: '71%', width:'100%'}}>
         {this.renderButton()}
            </View>
         
          {this.goback()} 
      </View>
      );
    }
  } 

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#A1D6E2',
      }
  });


  const mapStateToProps = state =>{
   
    return {Students:state.pro.Students4,loading: state.pro.loading1,Adstu:state.pro.Adstu, Ids:state.pro.Id2};
  };
  
  export default connect(mapStateToProps,{remstuclass2,removstud})(RemoveStudentView);





   
  





  