import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});






import Router from './router';
import Router0 from './router2';
import { AsyncStorage } from "react-native"


 class App extends Component{
   

  constructor(props){
 
    super(props);

  this.state = {
    log:'',
    }
  }

  componentWillMount(){
    AsyncStorage.getItem("logged").then((value) => {
      this.setState({"log":JSON.parse(value)});
  }).done();
  }

  isLogged(){
    if(this.state.log){
      return <Router0/>
    }

    else{
      return <Router/>
    }
  }
    render(){
  return(
    

       this.isLogged()
      
  );
};
 }


  export default App;