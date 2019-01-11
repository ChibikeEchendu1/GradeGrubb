/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner,HomeHeader} from './index';
import AddStudentListItem2 from './AddStudentListItem2';
import {fechstuclass2,adstu} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  
  TouchableOpacity,
  
} from 'react-native';




class AddStudentView2 extends Component {

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
        School:this.props.navigation.state.params.School,
        Tid:this.props.navigation.state.params.Tid,
        Subname: this.props.navigation.state.params.Subname,


     
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
    this.props.fechstuclass2({School,classRoom,Subname});
   }

   goback(){
    if (this.props.Adstu) {

      //console.log("tid",this.state.Tid,"dbname",this.state.School,"School",this.state.Subname,"room",this.props.navigation.state.params.Room,"id",this.props.navigation.state.params.id,"name",this.props.navigation.state.params.Name);
        
      this.props.navigation.navigate("Tools",{Tid: this.state.Tid,dbName:this.state.Subname,School: this.state.School  ,Room:this.state.classRoom ,Id:this.props.navigation.state.params.id,Name:this.props.navigation.state.params.Name})
     
      
    //this.props.navigation.navigate("Thome",{School: this.state.School,Tid:this.state.Tid})
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
   /* console.log(newMarkers);
    console.log(lol);
    this.forceUpdate()
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(newMarkers)
    this.renderRow=this.renderRow.bind(this);*/
    this.forceUpdate()

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
  
   renderRow(item){
    return <AddStudentListItem2 item={item} checked={this.state.check} />
   }

  render() {
    return (
   
        <View style ={styles.container}>
        <HomeHeader ti="Add Students" navigate={this.props.navigation.goBack}/>
        <View style={{flexDirection:'column', height:'15%', backgroundColor: '#E8E8E8'}}>
        <View>
            <TouchableOpacity  onPress= {this.checkAll.bind(this)} >
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
           //console.log(Subname,Students,classRoom,Tid);
           this.props.adstu({Students,Subname,School,Tid})
         
         
       }}>
          <Text style={{fontSize:20,marginRight:10, color:"#63B8FF"}}>Finish</Text>
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
        backgroundColor: '#F4F2F3',
      }
  });


  const mapStateToProps = state =>{
   
    return {Students:state.pro.Students2,loading: state.pro.loading1, Ids:state.pro.Id2,Adstu:state.pro.Adstu};
  };
  
  export default connect(mapStateToProps,{fechstuclass2,adstu})(AddStudentView2);



   
  





  