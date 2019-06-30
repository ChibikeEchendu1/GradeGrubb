import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner,HomeHeader} from './index';
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

renderButton(){
  if(this.props.loading){
    return <Spinner size="large"/>;
  }
  else{
   
   return <View style={{width:'100%', alignItems: "flex-end"}}>

   <TouchableOpacity onPress={()=>{
      const message = this.props.message
        const Tname = this.state.Tname.name
        const sid = this.state.sid
        console.log(message,Tname,sid);
    //  this.props.sendmessage({Students,School,Tid,room})
      
     
   }}>
   
      <Text style={{fontSize:20,marginRight:10,marginTop:20, color:"#1995ad"}}>Send</Text>
      </TouchableOpacity>
      </View>
}
}


  render() {
    return (
      <SafeAreaView style={{flex:1,
        borderBottomColor: '#000000',backgroundColor:'white',
        borderBottomWidth: 1 }}
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

      </SafeAreaView>
    );
  }
}

const mapStateToProps = state =>{
  return{
    message: state.auth.message,
    loading: state.auth.loading,
  }
};


export default connect(mapStateToProps,{sendmessage,messageChnage})(SendMessageView);
