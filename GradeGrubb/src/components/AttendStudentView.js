/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner,HomeHeader} from './index';
import AttendStudentListItem from './AttendStudentListItem';
import {fetchlass,subattend} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,SafeAreaView,
  View,
  ListView,
  AsyncStorage,
  TouchableOpacity,
  
} from 'react-native';




class AttendStudentView extends Component {

  constructor(props){
 
    super(props);
   this.state = {
   
    check:false,
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

  
       
 
}
this.renderRow=this.renderRow.bind(this);
this.checkAll = this.checkAll.bind(this);
  }
  getElements(){
    return  this.props.Students;
  }
  

  componentDidMount(){

   
       
    AsyncStorage.getItem("pro").then((value) => {
   
     console.log(value)
   
   this.setState({"item":JSON.parse(value)});
   let Tid = this.state.item.id;
   let school = this.state.item.school;
  
    console.log(school,Tid,"vhjgjgjhuh");
      this.props.fetchlass({Tid,school});
 }).done();
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
        
       this.props.navigation.navigate("Thome")
      
    //this.props.navigation.navigate("Thome",{School: this.state.School,Tid:this.state.Tid})
  }
  }


   renderRow(item){
    return <AttendStudentListItem item={item} checked={this.state.check} />
   }

  render() {
    return (
   
        <SafeAreaView style ={styles.container}>
        <HomeHeader ti="Take Attendace" navigate={this.props.navigation.goBack}/>
        <View style={{flexDirection:'column', marginTop:0, height:'15%', backgroundColor: 'white'}}>
        <View>
            <TouchableOpacity onPress= {this.checkAll.bind(this)}  >
        <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', marginTop:7, marginBottom:2}}>Select All/Select None</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
       
      
        <View style={{width:'100%', alignItems: "flex-end"}}>

       <TouchableOpacity onPress={()=>{
          const Students = this.props.Students
       const room = this.props.room
            const School = this.state.item.school
            const Tid = this.state.item.id
            console.log(Students,School,Tid,room);
          this.props.subattend({Students,School,Tid,room})
          
         
       }}>

          <Text style={{fontSize:20,marginRight:10, color:"#1995ad"}}>Submit</Text>
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
   
    return {Students:state.pro.Students4,room:state.pro.room,loading: state.pro.loading1,Adstu:state.pro.Adstu, Ids:state.pro.Id2};
  };
  
  export default connect(mapStateToProps,{fetchlass,subattend})(AttendStudentView);





   
  





  