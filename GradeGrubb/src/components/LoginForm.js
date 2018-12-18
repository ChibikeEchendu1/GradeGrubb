/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {FormInput,Card,LogoHouse,FormButton,Link,Spinner} from './index';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginUser} from '../actions';
import { AsyncStorage } from "react-native"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  Keyboard
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class LoginForm extends Component {

      

    onEmailChanged(text){
        this.props.emailChanged(text);
    }
    
    onPasswordChanged(text){
        this.props.passwordChanged(text);
     }

     onButtonPress(){
       const {email,password} = this.props;
      this.props.loginUser({email,password});
      
   }

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
      return <FormButton press={this.onButtonPress.bind(this)} val = {"Login"}/>;
     }
   }

  

    goToProfile(){
      if(this.props.done == 'true'){
        const {vall,Active} = this.props;
        AsyncStorage.setItem('logged',JSON.stringify(vall));
      AsyncStorage.setItem('blocked', JSON.stringify(Active));
      this.props.navigation.navigate('Profile', {vall});
      
      
      }
    }

  render() {
    const {vall} = this.props;
    return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView  behavior = {(Platform.OS === 'ios') ? 'position' : 'height'} style ={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
        <View>
        <LogoHouse/>
        <Card>
        <FormInput val={this.props.email} ct={this.onEmailChanged.bind(this)}  bool = {false} ph = {"Email"}/>
        </Card>
        <Card>
        <FormInput val={this.props.password} ct={this.onPasswordChanged.bind(this)}  bool = {true} ph = {"Password"}/>
        </Card>
        <Card>
        {this.renderButton()}
        </Card>
         <Card>
       <Link val = {"Forgot Password?"} screen = {"ForgotPassword"} navigate={this.props.navigation.navigate}/>
       </Card>
       {this.renderError()}
       {this.goToProfile()}
        </View>
       </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style ={{flex: 1}}>
      <View style={{position: 'absolute', bottom: 20, alignSelf: 'center', height: 60, width: "100%"}}>
       <Link val = {"Create Account"} screen = {"SignUp"} navigate={this.props.navigation.navigate}/>
       </View>
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
       email: state.auth.email,
       password: state.auth.password,
       error: state.auth.error,
       done: state.auth.done,
       loading: state.auth.loading,
       vall: state.auth.user,
       Active:state.auth.Active
       
    }
};

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm) ;