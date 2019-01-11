/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {FormInput,LogoHouse2,FormButton,Link,Spinnercode,ResendFormButton} from './index';
import {connect} from 'react-redux';
import {NameChanged2,resendcodePass2,codePass2} from '../actions';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  AsyncStorage,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  Keyboard,
  
} from 'react-native';




class CodeFormSignup2 extends Component{
  constructor(props){
    super(props)
  
    
    this.state ={
      vall: this.props.navigation.state.params.Id,
      
     
        nav: this.props.navigation.navigate
    }
    //this.renderRow=this.renderRow.bind(this);
      
  }

onNameChanged(text){
        this.props.NameChanged2(text);
      } 


      


onButtonPress(){
  const {Name} = this.props;
  this.props.codePass2({Name});
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
    if(this.props.forset2){
      const {user} = this.props;
        AsyncStorage.setItem('logged',JSON.stringify(user));
      AsyncStorage.setItem('blocked', JSON.stringify("Done"));
      this.props.navigation.navigate("Profile",{Id: this.props.user});
    }
  }


renderButton(){
    if(this.props.loading){
      return <Spinnercode size="large"/>;
    }
    else{
     return <FormButton press={this.onButtonPress.bind(this)} val = {"Confirm"}/>;
    }
  }

  renderresendButton(){
    if(this.props.loading){
      return <Spinnercode size="large"/>;
    }
    else{
     return <ResendFormButton press={this.onButtonPressresend.bind(this)} val = {"Re-send"}/>;
    }
  }

  onButtonPressresend(){
    const {vall} = this.state;
   this.props.resendcodePass2({vall});
  }
  

  render() {
    
    return (
        
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView  behavior = {(Platform.OS === 'ios') ? 'position' : 'padding'} style ={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
        <View>
            <LogoHouse2/>
          <View style={{paddingBottom: 40,  alignItems: 'center', width:320}} >   
            <Text style={{fontSize: 20, alignSelf:'center', textAlign: 'center',}} > Confirm Email </Text>
            <Text style={{fontSize: 35,marginTop:20, alignSelf:'center', textAlign: 'center'}}> A confirmation code has been sent to your email.</Text>
            </View>

        <View style ={{height: '15%',marginBottom: 20,}} >
        <FormInput val={this.props.Name} ct={this.onNameChanged.bind(this)}  bool = {false} ph = {"Code"}/>
        </View>
        
        
       
        <View style ={{height: '13%',flexDirection:"row",alignSelf:"center", marginBottom: 20}} >
        {this.renderButton()}
        {this.renderresendButton()}
        </View>
        
        {this.renderError()}
        {this.next()}
       </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={{position: 'absolute', bottom: 20, alignSelf: 'center', height: 60, width: "100%"}}>
      <Link val = {"Cancel"} screen = {"Profile"} navigate={this.props.navigation.navigate}/>
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

export default connect(mapStateToProps,{NameChanged2,resendcodePass2,codePass2})(CodeFormSignup2) ;

