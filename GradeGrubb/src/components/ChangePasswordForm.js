   /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {FormInput,Cardstan,LogoHouse2,FormButton,Link,Spinner} from './index';
import {connect} from 'react-redux';
import {passwordChanged,passwordChanged2,passwordChanged3,ChangePass} from '../actions';
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
    
      
        Id:    this.props.navigation.state.params.per,
       

  }



onPasswordChanged(text){
    this.props.passwordChanged(text);
 }
 

 onPasswordChanged2(text){
    this.props.passwordChanged2(text);
 }

 onPasswordChanged3(text){
  this.props.passwordChanged3(text);
}


onButtonPress(){
  const {Id} = this.state;
    const {Oldpass,password,password2} = this.props;
    
   this.props.ChangePass({Id,Oldpass,password,password2});
 }

 goback(){
  if (this.props.hen) {
    //elijah code here navigate to thome
   // alert("lol");
  this.props.navigation.navigate("Profile")
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
    <KeyboardAvoidingView  behavior = {(Platform.OS === 'ios') ? 'position' : 'position'} style ={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
        <View>
            <LogoHouse2/>
          <View style={{paddingBottom: 20,alignSelf:'center',  alignItems: 'center', width:320}} >   
            <Text style={{fontSize: 25, alignSelf:'center', textAlign: 'center',}} > Change Password </Text>
            </View>

        <Cardstan>
        <FormInput val={this.props.Oldpass} ct={this.onPasswordChanged3.bind(this)}  bool = {true} ph = {"Old Password"}/>
        </Cardstan>
       
        <Cardstan>
        <FormInput val={this.props.password} ct={this.onPasswordChanged.bind(this)}  bool = {true} ph = {"New Password"}/>
        </Cardstan>
        <Cardstan>
        <FormInput val={this.props.password2} ct={this.onPasswordChanged2.bind(this)}  bool = {true} ph = {"Confirm New Password"}/>
        </Cardstan>
        <Cardstan>
        {this.renderButton()}
        </Cardstan>

        {this.renderError()}
       </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
      <View style={{position: 'absolute', bottom: 20, alignSelf: 'center', height: 60, width: "100%"}}>
      <Link val = {"Cancel"} screen = {"Profile"} navigate={this.props.navigation.navigate}/>
       </View>
       {this.goback()} 
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
     Oldpass: state.auth.ID2,   
     //password3: state.auth.password3,
     password2: state.auth.password2,
     loading: state.auth.loading,
     error:state.auth.error,
     user:state.auth.user,
     hen:state.auth.hen,
  }
};

export default connect(mapStateToProps,{passwordChanged,passwordChanged2,passwordChanged3,ChangePass})(ChangePasswordForm) ;

