/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {FormInput,LogoHouse2,FormButton,Link,Spinner} from './index';
import {connect} from 'react-redux';
import {NameChanged2,codePass} from '../actions';
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




class CodeForm extends Component{

onNameChanged(text){
        this.props.NameChanged2(text);
      } 


      


onButtonPress(){
  
    const {Name} = this.props;
   this.props.codePass({Name});
 }
 

 //goToHome=(nav = this.props.nav)=>{nav("Profile")}

 renderError(){
    if(this.props.error){
      return(
        <View>
          <Text style={{alignSelf: 'center',fontSize: 10, color: 'red'}}> {this.props.error}</Text>
        </View>
      );
    }
  }

  next(){
    if(this.props.forset2){
      this.props.navigation.navigate("ChangePasswordForgot",{Id: this.props.user});
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
    <KeyboardAvoidingView  behavior = {(Platform.OS === 'ios') ? 'position' : 'padding'} style ={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
        <View>
            <LogoHouse2/>
          <View style={{paddingBottom: 25,  alignItems: 'center', width:320}} >   
           
            <Text style={{fontSize: 35,marginTop:20,alignSelf:'center', textAlign: 'center'}}> We sent you a code.</Text>
            </View>

        <View style ={{height: 50,marginBottom: 20,}} >
        <FormInput val={this.props.Name} ct={this.onNameChanged.bind(this)}  bool = {false} ph = {"Code"}/>
        </View>
        
        
       
        <View style ={{height: '13%',marginBottom: 20,}} >
        {this.renderButton()}
        </View>

        {this.renderError()}
        {this.next()}
       </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={{position: 'absolute', bottom: 0, alignSelf: 'center', height: 60, width: "100%"}}>
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
    Name: state.auth.Name2,
     Oldpass: state.auth.ID2,   
     //password3: state.auth.password3,
     password2: state.auth.password2,
     loading: state.auth.loading,
     error:state.auth.error,
     user:state.auth.user,
     forset2:state.auth.forset2,
  }
};

export default connect(mapStateToProps,{NameChanged2,codePass})(CodeForm) ;

