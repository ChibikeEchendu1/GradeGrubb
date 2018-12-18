import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
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