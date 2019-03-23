/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {HomeHeader,Spinner} from './index';
import GradeViewListItem from './GradeViewListItem';
import {greFetch,grademarks,markChanged2} from '../actions';
import {connect} from 'react-redux';



import {
  StyleSheet,
  Text,
  View,
  ListView,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';




class GradeView extends Component {


  constructor(props){
 
    super(props);
  this.state = {
    RealSubNAme:this.props.navigation.state.params.RealSubNAme,
    name:   this.props.navigation.state.params.School,
    Sname: this.props.navigation.state.params.Subname,
    worth: this.props.navigation.state.params.item.worth,
    ele:this.props.navigation.state.params.item.EleName,
    usename:this.props.navigation.state.params.item.Name,
    room:this.props.navigation.state.params.Room,
    Tid: this.props.navigation.state.params.Tid
}
    
    this.renderRow=this.renderRow.bind(this);
  }
    
 


  getElements(){
    return  this.props.grades;
  }
  

  componentWillMount(){
    const {name,Sname,worth,ele} = this.state;
    this.props.greFetch({name,Sname,worth,ele});
   }

   componentDidMount(){
    const {name,Sname,worth,ele} = this.state;
    this.props.greFetch({name,Sname,worth,ele});
   }
 /*componentWillUpdate(){
     //const {name,Sname,worth,ele} = this.state;
    // this.props.greFetch({name,Sname,worth,ele});
    //this.props.markChanged2(this.props.grades);
    if (this.state.tee < 6 ) {
      console.log("hgv");
      
    this.setState({tee: this.state.tee+1})
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    console.log(this.getElements());
    
    this.dataSource = ds.cloneWithRows(this.getElements())
 }

}*/

   onButtonPress(){
    const {name,Sname,ele,room,worth,RealSubNAme} = this.state; 
    const {scores,Ids} = this.props;
    console.log(worth);
    
    
    this.props.grademarks({name,Sname,ele,Ids,scores,room,worth,RealSubNAme});
 }

   renderRow(item){
     
    return <GradeViewListItem worth2={this.state.worth} item={item}/>
   }

   goBack(){
    if (this.props.set2) {
      this.props.navigation.navigate("Tsubject",{Tid: this.state.Tid, Sname:this.state.name})
    }
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
     return  <ListView
     style={{height:'70%'}}
    dataSource={this.dataSource}
    enableEmptySections={true}
    renderRow={this.renderRow}/> ;
  }
  }


  render() {
    
    return (
    
      <SafeAreaView  behavior = {(Platform.OS === 'ios') ? 'height' : 'height'} style ={styles.container}>
        <HomeHeader ti="Grade Students"  navigate={this.props.navigation.goBack}/>
        <KeyboardAvoidingView  behavior = {(Platform.OS === 'ios') ? 'height' : 'height'}  style={{height:'15%'}} >
        <View  style={{flexDirection:"column", justifyContent:"space-between",marginTop:0, alignItems:'center',  backgroundColor: 'white'}}>
        <View style={{}}>
        <Text numberOfLines={1} style={{fontSize:20, fontWeight:'bold',marginTop:5, textAlign:'center'}}>{this.state.usename}/{this.state.worth} </Text>
        </View>
        
        <TouchableOpacity style={{alignItems:"flex-end",alignSelf:'flex-end'}} onPress={this.onButtonPress.bind(this)}>
        <View style={{alignItems:"flex-end", padding:5, marginRight:25}}>
        <Text style={{fontSize:18, fontWeight:'bold',marginTop:10, color:"#1995ad"}}>Grade</Text>
        </View>
        </TouchableOpacity>
       </View>
        
        </KeyboardAvoidingView>
        
        
       
        
        <View style={{height:'70%'}}>
        {this.renderButton()}
        </View> 
            
            {this.goBack()}
            
            </SafeAreaView>
      );
    }
  } 

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        height:'100%'
      }
  });


  const mapStateToProps = state =>{
   

    const grades = _.map(state.pro.gra,(Val,uid) =>{
      return {...Val};
    });

    
  
  
  return {grades,scores:state.pro.scores,loading: state.pro.loading1, Ids:state.pro.Id, set2:state.pro.set2};
  };
  
  export default connect(mapStateToProps,{greFetch,grademarks,markChanged2})(GradeView);


  



   
  





  