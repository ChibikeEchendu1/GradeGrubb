/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {FormInput,FormButton,Link,Spinner} from './index';
import {connect} from 'react-redux';
import {codeChanged,Addprofilecode} from '../actions';
import { AsyncStorage } from "react-native"
import {
  
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  Keyboard
} from 'react-native';




class AddProfileForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      


    //  Id: this.props.navigation.state.params.Id,

      
      }
    
    }

    componentDidMount(){
      AsyncStorage.getItem("logged").then((value) => {
        
        this.setState({"Id":JSON.parse(value)});
        //console.log(value);
       
    }).done();

  }


onPasswordChanged(text){
    this.props.codeChanged(text);
 }
 
 
 




onButtonPress(){
  const {Id} = this.state;
    const {password} = this.props;
    //console.log(Id);
    
   this.props.Addprofilecode({Id,password});
 }
 

 //goToHome=(nav = this.props.nav)=>{nav("Profile")}

 renderError(){
    if(this.props.error){
      return(
        <View>
          <Text style={{alignSelf: 'center', color: 'red'}}> {this.props.error}</Text>
        </View>
      );
    }
  }


renderButton(){
    if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{
     return <FormButton press={this.onButtonPress.bind(this)} val = {"Confirm"}/>;
    }
  }

  goToProfile(){
    if(this.props.done == 'true'){
    this.props.nav('Profile');
    }
  }

  render() {
    
    return (
    
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView  behavior = {(Platform.OS === 'ios') ? 'position' : 'padding'} style ={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
        <View>
          <View style={{paddingBottom: 40,  alignItems: 'center', width:330}} >   
            <Text style={{fontSize: 40, textAlign: 'center',}} > Add Profile  </Text>
            </View>

        
       
        <View style={{height:'20%', marginBottom:30}}>
        <FormInput val={this.props.password} ct={this.onPasswordChanged.bind(this)}  bool = {true} ph = {"Enter code from school"}/>
        </View>
        
        <View style={{height:'20%'}}>
        {this.renderButton()}
        </View>

        {this.renderError()}
        {this.goToProfile()}
       </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={{position: 'absolute', bottom: 20, alignSelf: 'center', height: 60, width: "100%"}}>
      <Link val = {"Cancel"} screen = {"Profile"} navigate={this.props.nav}/>
       </View>
     
      </SafeAreaView>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F2F3',
  },
 
  
});

const mapStateToProps = state =>{
  return{
     password: state.auth.codeone,
  
     loading: state.auth.loading,
     done: state.auth.done,
     error:state.auth.error,
  }
};

export default connect(mapStateToProps,{codeChanged,Addprofilecode})(AddProfileForm) ;

