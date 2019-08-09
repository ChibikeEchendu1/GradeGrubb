/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Header,Spinner} from './index';
import SubjectList from './SubjectList';
import {SubFetch} from '../actions';
import {connect} from 'react-redux';
import { AsyncStorage,Platform } from "react-native"
import {
  StyleSheet,
  SafeAreaView,
  View,
  ListView,
 
} from 'react-native';




class TsubjectView extends Component {
  constructor(props){
 
    super(props);

  this.state = {
    item:'',
    //valll: 78,
    //nname: 'Premiere_League_High',
    nav:this.props.navigation,
    //prevItem:this.props.navigation.state.params.item
    }

    this.renderRow=this.renderRow.bind(this);
  }
  getSubjects(){
    return  this.props.subjects;
  }  

 /*  componentWillMount(){
  AsyncStorage.getItem("pro").then((value) => {
    this.setState({"item":JSON.parse(value)});
}).done();
} */

  componentDidMount(){
    AsyncStorage.getItem("pro").then((value) => {
     // console.log("valll, nname")s
    console.log(value)
     // console.log("valll, nname")
    this.setState({"item":JSON.parse(value)});
    let valll = parseInt(this.state.item.id);
    let nname = this.state.item.school;
   console.log(valll, nname)
  // console.log("valll, nname")
     this.props.SubFetch({valll,nname});
  }).done();
    
    
   // const {valll,nname} = this.state;
  }

  componentWillMount(){
    AsyncStorage.getItem("pro").then((value) => {
     // console.log("valll, nname")s
    console.log(value)
     // console.log("valll, nname")
    this.setState({"item":JSON.parse(value)});
    let valll = parseInt(this.state.item.id);
    let nname = this.state.item.school;
   console.log(valll, nname)
  // console.log("valll, nname")
     this.props.SubFetch({valll,nname});
  }).done();
    
    
   // const {valll,nname} = this.state;
  }

   renderButton(){
    if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{
     const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
  });
  this.dataSource = ds.cloneWithRows(this.getSubjects())
     return <ListView
    dataSource={this.dataSource}
    enableEmptySections={true}
    renderRow={this.renderRow}/>;
  }
  }
  
   

  /*componentWillReceiveProps(){
    console.log(this.props.info);
   //const {valll,nname} = this.state;
   let valll = this.state.item.id;
   let nname = this.state.item.school;
   console.log(valll)
   console.log(nname)
    this.props.SubFetch({valll,nname});

 }*/

   getNavigation(){
     return this.props.navigate;
   }
 
   renderRow(item,sectionID, rowID){
    return <SubjectList num ={parseInt(rowID)+1} School={this.state.item.school} Tname={this.state.item} Tid = {this.state.item.id} item={item} nav={this.state.nav} />
   }

  render() {
   // const{item}=this.props.navigation.state.params
    return (
   
    <SafeAreaView style={styles.container}>
        <Header ti="Subjects" />
        <View style={{justifyContent: 'flex-start',  height:Platform.OS === 'ios' ? '87%' :'87%', width:'100%'}}>
        {
          this.renderButton()
        }
        </View>
      </SafeAreaView>
     
       
      
    );
  }


 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

 
  
});

const mapStateToProps = state =>{
  
  const subjects = _.map(state.pro.Subs,(Val,uid) =>{
    return {...Val};
  });



return {subjects, info:state.pro.info, loading:state.pro.loading1,
        id:state.pro.id };
};

export default connect(mapStateToProps,{SubFetch})(TsubjectView);




  