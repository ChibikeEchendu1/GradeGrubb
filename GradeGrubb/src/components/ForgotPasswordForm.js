/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {FormInput,Card,LogoHouse2,FormButton,Link,Spinner} from './index';
import {connect} from 'react-redux';
import {emailChanged,ForgotPass} from '../actions';
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




class ForgotPasswordForm extends Component{

  

onEmailChanged(text){
    this.props.emailChanged(text);
}



onButtonPress(){
  
    const {email} = this.props;
   this.props.ForgotPass({email});
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
next(){
  if(this.props.forset){
    this.props.navigation.navigate("Code");
  }
}

renderButton(){
    if(this.props.loading){
      return <Spinner  style ={styles.container} size="large"/>;
    }
    else{
     return <FormButton  style ={styles.container} press={this.onButtonPress.bind(this)} val = {"Confirm"}/>;
    }
  }


  render() {
    
    return (
    
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView  behavior = {(Platform.OS === 'ios') ? 'padding' : 'padding'} style ={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
        <View>
            <LogoHouse2/>
          <View style={{paddingBottom: 20,  alignItems: 'center'}} >   
            <Text style={{fontSize: 27,marginTop: 20, textAlign: 'center',}} > Forgot Password? </Text>
            </View>

        <View style ={{height: 50,marginBottom: 20,alignItems:'center' }} >
        <FormInput val={this.props.email} ct={this.onEmailChanged.bind(this)}  bool = {false} ph = {"Email"}/>
        </View>
        
        
       
        <View style ={{height: '12%',marginBottom: 20}} >
        {this.renderButton()}
        </View>

        {this.renderError()}
        {this.next()}
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
      <View style={{position: 'absolute', bottom: 20, alignSelf: 'center', height: 60, width: "100%"}}>
      <Link val = {"Cancel"} screen = {"Login"} navigate={this.props.navigation.navigate}/>
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
    backgroundColor: 'white',
  },
 
  
});

const mapStateToProps = state =>{
  return{
     email: state.auth.email,
     password: state.auth.password,
    // Name: state.auth.Name,
     Oldpass: state.auth.ID2,   
     //password3: state.auth.password3,
     password2: state.auth.password2,
     loading: state.auth.loading,
     error:state.auth.error,
     user:state.auth.user,
     forset:state.auth.forset,
  }
};

export default connect(mapStateToProps,{emailChanged,ForgotPass})(ForgotPasswordForm) ;

