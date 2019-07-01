import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner2,HomeHeader} from './index';
import {sendmessage,messageChnage} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,SafeAreaView,
  View,
  ListView,
  AsyncStorage,TextInput,
  TouchableOpacity,
  } from 'react-native';

class SendMessageView extends Component {

  state = {
      
    
    sid:   this.props.navigation.state.params.sid,
    Tname: this.props.navigation.state.params.Tname,
    //Average: this.props.navigation.state.params.item.ave,
      
}

  onMessChanged(text){
    this.props.messageChnage(text);
}

goback(){
  if (this.props.sun) {
    this.props.navigation.goBack()
}
}

renderButton(){
  if(this.props.loading){
    return <Spinner2 size="small"/>;
  }
  else{
   
   return <View style={{width:'100%', alignItems: "flex-end"}}>

   <TouchableOpacity onPress={()=>{
      const message = this.props.message
        const Tname = this.state.Tname.name
        const School = this.state.Tname.school
        const sid = this.state.sid
        console.log(message,Tname,sid,School);
      this.props.sendmessage({message,School,Tname,sid})
      
     
   }}>
   
      <Text style={{fontSize:20,marginRight:10,marginTop:20, color:"#1995ad"}}>Send</Text>
      </TouchableOpacity>
      <Text style={{alignSelf:'center', color:'red', marginTop:20}}>{this.props.error}</Text>
      </View>
}
}


  render() {
    return (
      <SafeAreaView style={{flex:1,
        backgroundColor:'white',
      }}
      >
      <HomeHeader navigate={this.props.navigation.goBack} ti='Send Message'/>
      <TextInput
        style={{borderBottomWidth:1,marginTop:'50%',fontSize:20}}
        placeholder="Send Message to Parents"
        multiline = {true}
        value={this.props.message}
        onChangeText={this.onMessChanged.bind(this)}
         numberOfLines = {4}
         maxLength = {140}
      />



   {this.renderButton()}
   {this.goback()}

      </SafeAreaView>
    );
  }
}

const mapStateToProps = state =>{
  return{
    message: state.auth.message,
    loading: state.auth.loading,
    error: state.auth.error,
    sun:state.auth.sun
  }
};


export default connect(mapStateToProps,{sendmessage,messageChnage})(SendMessageView);
