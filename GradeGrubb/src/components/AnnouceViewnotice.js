/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {HomeHeader,Spinner} from './index';
import Annouc from './Annouc';
import {AnnoucFetch} from '../actions';
import {connect} from 'react-redux';
import { AsyncStorage } from "react-native"
import {
  StyleSheet,
 
  View,
  ListView,
  
} from 'react-native';




class AnnouceViewnotice extends Component {
  constructor(props){
 
    super(props);

  this.state = {
    item:'',
    //valll: 18,
    //nname: 'Trinity'
    }
  }
  getSubjects(){
    return  this.props.subjects.reverse();
  }

  /* ComponentWillMount(){

    const {valll,nname} = this.state;
    

    
   } */
   componentDidMount(){
    AsyncStorage.getItem("pro").then((value) => {
      this.setState({"item":JSON.parse(value)});
      let valll = this.state.item.id;
      let nname = this.state.item.school;
      //console.log(valll,nname);
      
      this.props.AnnoucFetch({valll,nname});
     
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
  this.dataSource = ds.cloneWithRows(this.getSubjects())
     return <ListView
    dataSource={this.dataSource}
    enableEmptySections={true}
    renderRow={this.renderRow}/>;
  }
  }

   getNavigation(){
     return this.props.navigate;
   }
 
   renderRow(item){
    return <Annouc item={item}/>
   }

  render() {
  
    return (
   
    <View style={styles.container}>
        <HomeHeader ti='Announcements' navigate={this.props.navigation.goBack} boo=""/>
        <View style={{justifyContent: 'flex-start', height: '86%', width:'100%'}}>
        {this.renderButton()}
        </View>
    
      
      </View>
     
       
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F2F3',
  },

 
  
});

const mapStateToProps = state =>{
 
  const subjects = _.map(state.pro.Anno,(Val,uid) =>{
    return {...Val};
  });


return {subjects,loading:state.pro.loading1};
};

export default connect(mapStateToProps,{AnnoucFetch})(AnnouceViewnotice);




  