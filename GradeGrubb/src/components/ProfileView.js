/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component} from 'react';
import {Spinner,Footer1,HeaderSet} from './index';
import ProfileHome from './ProfileHome';
import {fetchPro} from '../actions';
import PushNotificationController from "../../services/PushNotificationController";
import {connect} from 'react-redux';
import { AsyncStorage } from "react-native"
import {
  StyleSheet,
  View,
  ListView,
  SafeAreaView,
} from 'react-native';




class ProfileView extends Component {
constructor(props){
  super(props)

  
  this.state ={
    vall: 0,//this.props.navigation.state.params.vall,
    blocked:"",
   
      nav: this.props.navigation.navigate
  }
  this.renderRow=this.renderRow.bind(this);
    
}
 

  
  getProfiles(){
    return  this.props.profiles;
  }
  
  
  componentDidMount(){ //componentDidMount
      AsyncStorage.getItem("logged").then((value) => {
       
        this.setState({"vall":JSON.parse(value)});
      

       let vall =  parseInt(value);
        this.props.fetchPro({vall});
       }).done();

       AsyncStorage.getItem("blocked").then((value2) => {
       ;
        this.setState({"blocked":JSON.parse(value2)});
      
       }).done();

       
       const {navigate} = this.props
  }

  
   
  /* componentWillMount(){ //componentDidMount
    AsyncStorage.getItem("logged").then((value) => {
      
      this.setState({"vall":JSON.parse(value)});
    

     let vall =  parseInt(value);
      this.props.fetchPro({vall});
     }).done();

     AsyncStorage.getItem("blocked").then((value2) => {
      
      this.setState({"blocked":JSON.parse(value2)});
    
     }).done();

     
     const {navigate} = this.props

    
} */

  /*  componentWillReceiveProps(){

      
      const {vall} = this.state;
      this.props.fetchPro({vall});
  
      
  
      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(this.getProfiles())

   } */

   renderButton(){
    if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.getProfiles())
     return <ListView
     dataSource={this.dataSource}
     enableEmptySections = {true}
     renderRow={this.renderRow}
     />
      ;
    }
  }

   renderRow(item){  
    
    return <ProfileHome navigate={this.state.nav} item={item} id={this.state.vall} save={this.props.savePro}/>
   }

  render() {
    //const{vall}= 1//this.props.navigation.state.params
    return (
    
    <SafeAreaView style={styles.container}>
        <HeaderSet ti='Profiles' per = {this.state.vall} active ={(this.props.redup == 1) ? 'true' : 'false'} pro={this.props.profiles}   nav={this.props.navigation.navigate}/>
        <View style={{justifyContent: 'flex-start', height: '74%', width:'100%'}}>
        {this.renderButton()}
        </View>
          
       <Footer1 navigation={this.props.navigation} Id = {this.state.vall} Active = {this.state.blocked}/>
       <PushNotificationController navigate={this.state.nav} per = {this.state.vall}/> 
      </SafeAreaView>
     
       
      
    );
  }
                                    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#F4F2F3',
  },

 
  
});

const mapStateToProps = state =>{
  
    const profiles = _.map(state.pro.pros,(Val,uid) =>{
      return {...Val};
    });
  

  return {profiles,
    loading: state.pro.loading1,
    redup:state.pro.redup
    };
};


export default connect(mapStateToProps,{fetchPro}) (ProfileView);
  