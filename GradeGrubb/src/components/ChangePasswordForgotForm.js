/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {FormInput,Card,LogoHouse2,FormButton,Link,Spinner} from './index';
import {connect} from 'react-redux';
import {passwordChanged,passwordChanged2,ChangePassForgot} from '../actions';
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




class ChangePasswordForm extends Component{

  state = {
     Id: this.props.navigation.state.params.Id,
   }


  

onPasswordChanged(text){
    this.props.passwordChanged(text);
 }
 

 onPasswordChanged2(text){
    this.props.passwordChanged2(text);
 }




onButtonPress(){
  const {Id} = this.state;
    const {password,password2} = this.props;
   this.props.ChangePassForgot({Id,password,password2});
 }
 next(){
  if(this.props.forset3){
    this.props.navigation.navigate("Login");
  }
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
  

  render() {
    
    return (
    
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView  behavior = {(Platform.OS === 'ios') ? 'position' : 'height'} style ={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
        <View>
            <LogoHouse2/>
          <View style={{paddingBottom: 40,  alignItems: 'center', width:320}} >   
            <Text style={{fontSize: 40, textAlign: 'center',}} > Change Password </Text>
            </View>

        
       
        <Card>
        <FormInput val={this.props.password} ct={this.onPasswordChanged.bind(this)}  bool = {true} ph = {"New Password"}/>
        </Card>
        <Card>
        <FormInput val={this.props.password2} ct={this.onPasswordChanged2.bind(this)}  bool = {true} ph = {"Confirm New Password"}/>
        </Card>
        <Card>
        {this.renderButton()}
        </Card>

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
    backgroundColor: '#F4F2F3',
  },
 
  
});

const mapStateToProps = state =>{
  return{
     email: state.auth.email,
     password: state.auth.password,
     Name: state.auth.Name,
     //Oldpass: state.auth.ID2,   
     //password3: state.auth.password3,
     password2: state.auth.password2,
     loading: state.auth.loading,
     error:state.auth.error,
     user:state.auth.user,
     forset3:state.auth.forset3,
  }
};

export default connect(mapStateToProps,{passwordChanged,passwordChanged2,ChangePassForgot})(ChangePasswordForm) ;

