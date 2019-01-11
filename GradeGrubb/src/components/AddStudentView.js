/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner,HomeHeader} from './index';
import AddStudentListItem from './AddStudentListItem';
import {fechstuclass,Creareclass} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  AsyncStorage,
 
} from 'react-native';


/*$htht = $_SESSION["sschool"];
  $hgvh = $_SESSION["claname"];
  $llojh = $_SESSION["createdclass"];
  $tid = $_SESSION["subteac"];*/

class AddStudentView extends Component {

    constructor(props){
 
        super(props);
       this.state = {
       
        check:true,
        /* elements:[
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
          {"name":"Chibike Echendu"},
        ], */
        item:'',
        classRoom: this.props.navigation.state.params.ClassRoom,
        School: this.props.navigation.state.params.School,
        Tid:this.props.navigation.state.params.Tid,
        Subname: this.props.navigation.state.params.Subname,
        classRoom2: this.props.navigation.state.params.ClassRoomname,

     
    }
    this.renderRow=this.renderRow.bind(this);
    this.checkAll = this.checkAll.bind(this);
      }
  getElements(){
    return  this.props.Students;
  }
  
goback(){
  if (this.props.Adstu) {
    //elijah code here navigate to thome
    this.props.navigation.navigate("Thome")
    
  //this.props.navigation.navigate("Thome",{School: this.state.School,Tid:this.state.Tid})
}
}
componentDidMount(){
    AsyncStorage.getItem("pro").then((value) => {
      this.setState({"item":JSON.parse(value)});
  }).done();

    const {School,classRoom} = this.state;
    this.props.fechstuclass({School,classRoom});


   }

   /*renderError(){
    if(this.props.error){
      return(
        <View>
          <Text style={{alignSelf: 'center', color: 'red'}}> {this.props.error}</Text>
        </View>
      );
    }
   }*/

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

 



 
   renderRow(item){
    return <AddStudentListItem item={item} checked={this.state.check}/>//item.check} />
   }

  render() {
    return (
   
        <View style ={styles.container}>
        <HomeHeader ti="Add Students" navigate={this.props.navigation.goBack}/>
        <View style={{flexDirection:'column', marginTop:0, height:'15%', backgroundColor: '#fbfaf0'}}>
        <View>
            <TouchableOpacity  onPress= {this.checkAll.bind(this)} >
        <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', marginTop:7, marginBottom:2}}>Select All/Select None</Text>
        </TouchableOpacity>
        
        </View>
        
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
       
       
       <View style={{width:'100%', alignItems: "flex-end"}}>
       <TouchableOpacity onPress={()=>{

        const Students = this.props.Students
        const {Subname,School,Tid,classRoom,classRoom2} = this.state
          const name = this.state.item.name
          console.log(Students,Subname,School,Tid,name,classRoom,classRoom2);
          console.log("dfnkdjngjkdfg");
          
          
          this.props.Creareclass({Students,Subname,School,Tid,name,classRoom,classRoom2})
         
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
   
    return {Students:state.pro.Students,loading: state.pro.loading1, Ids:state.pro.Id2,Adstu:state.pro.Adstu };// error: state.auth.error};
  };
  
  export default connect(mapStateToProps,{fechstuclass,Creareclass})(AddStudentView);


  



   
  





  