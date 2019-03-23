/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner,HomeHeader} from './index';
import RemoveStudentListItem2 from './RemoveStudentListItem2';
import {remstuclass,removELEE} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,SafeAreaView,
  ListView,
 
  TouchableOpacity,
 
} from 'react-native';




class RemoveElementView extends Component {
  
 
    
   
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
this.checkAll = this.checkAll.bind(this);
  }
    
  
    getElements(){
      return  this.props.Students;
    }
    
  
    componentDidMount(){
      const {School,Subname} = this.state;
     // console.log(School,Subname);
      this.props.remstuclass({School,Subname});
     }

    /*  componentWillMount(){
      const {School,Subname} = this.state;
     // console.log(School,Subname);
      this.props.remstuclass({School,Subname});
     } */
     
     
  
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
      return <RemoveStudentListItem2 item={item} checked={this.state.check} />
     }
  
    render() {
      return (
     
          <SafeAreaView style ={styles.container}>
          <HomeHeader ti="Remove Element" navigate={this.props.navigation.goBack}/>
          <View style={{flexDirection:'column', marginTop:0, height:'15%', backgroundColor: 'white'}}>
          <View>
              <TouchableOpacity  onPress= {this.checkAll.bind(this)}>
          <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', marginTop:7, marginBottom:2}}>Select All/Select None</Text>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:"space-between"}}>

          <View style={{width:'100%', alignItems: "flex-end"}}>
       <TouchableOpacity onPress={()=>{
         const Students = this.props.Students
         const Subname = this.state.Subname
           const School = this.state.School
           
           const classRoom = this.state.classRoom
           console.log(Subname,Students,classRoom);
 
           this.props.removELEE({Students,Subname,School,classRoom})
         
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
    
    export default connect(mapStateToProps,{remstuclass,removELEE})(RemoveElementView);


  



   
  





  