import React, {Component} from 'react';
import { Header} from './index';
import {Text, TextInput, StyleSheet,View,TouchableOpacity, TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Keyboard} from 'react-native';
import {NameChangedSub2,cn2} from '../actions';
import {connect} from 'react-redux';
import { AsyncStorage } from "react-native"

class NewSubjectView extends Component{

    state = {
      error:"",
        item:'',
        Id: 18,
        nname: 'Trinity'
        }
     
    onNameChanged(text){
        this.props.NameChangedSub2(text);
      }
      

      componentDidMount(){
        AsyncStorage.getItem("pro").then((value) => {
          this.setState({"item":JSON.parse(value)});
      }).done();
      }

      componentWillMount(){
        AsyncStorage.getItem("pro").then((value) => {
          this.setState({"item":JSON.parse(value)});
      }).done();
      }

      onFinButtonPress(){
        //const {nname,Id} = this.state;
        const {Name} = this.props;
       // console.log("gvhgvhg");

    this.props.cn2({Name});
     }

      renderError(){
        if(this.state.error){
          return(
            <View>
              <Text style={{alignSelf: 'center', color: 'red'}}> {this.state.error}</Text>
            </View>
          );
        }
      }

      goforword(){
        const {Name} = this.props; 
        if (Name == '' || (typeof Name == 'undefined')) {
          this.setState({error: "Empty Field"})
        }
        else{
          this.props.navigation.navigate('NewStudent',{Tid: this.state.item.id, School:this.state.item.school, Subname:Name})
        }
        }
        
      

      
    
    
    render(){
    return(
     
      <SafeAreaView style={styles.container}>
      <Header ti="New Subject"/>
      <KeyboardAvoidingView  behavior = {!!(Platform.OS === 'ios') ? 'padding' : 'position'} style ={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
         
         <View>
             
              <Text  style={{ width:'96%',alignSelf:"center", padding:12, marginTop:'15%',fontSize:20}}>Start by giving the subject a name</Text>
             </View>
         <View>
         <TextInput
          style={{borderBottomWidth:1, width:'90%',alignSelf:"center", height: 40,borderColor:"#C0C0C0", padding:5, marginTop:'30%'}}
          placeholder="Subject Name"
          onChangeText={this.onNameChanged.bind(this)}
          value={this.props.Name}
        /></View>
        <View style={{flexDirection:'row',justifyContent:"space-between", marginTop:10}}>
        </View>
        <View>
       <TouchableOpacity  onPress={this.goforword.bind(this)}>
          <Text style={{fontSize:20, alignSelf:'flex-end', marginRight:20, color:"#63B8FF"}}>Next</Text>
          </TouchableOpacity>
          </View>
          </View>
          </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          
    
          <View style={{marginTop:30}}>
              <Text style={{alignSelf: 'center', color: 'red'}}> {this.state.error}</Text>
            </View>
   
         </SafeAreaView>  
       
    );
};
}
const styles = StyleSheet.create({  
 
    container: {
        flex: 1,
        backgroundColor: 'white',
      }
   
});

const mapStateToProps = state =>{
    return{
       error:state.auth.error,
       Name: state.pro.Namesub2,
       loading: state.auth.loading,
       Sun: state.auth.sun
       
    }
  };
  
  export default connect(mapStateToProps,{NameChangedSub2,cn2})(NewSubjectView) ;

