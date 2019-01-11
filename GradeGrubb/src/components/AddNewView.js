import React, {Component} from 'react';
import {HomeHeader,Spinner2} from './index';
import {Text, TextInput, StyleSheet,View,TouchableOpacity,TouchableWithoutFeedback,KeyboardAvoidingView,Platform, Keyboard} from 'react-native';
import {NameChangedSub22,numchanged,cn22} from '../actions';
import {connect} from 'react-redux';

class AddNewView extends Component{

    state = {
        Id:this.props.navigation.state.params.Tid,
        nname: this.props.navigation.state.params.Sname,
        sub: this.props.navigation.state.params.Subname,
        }
     
    onNameChanged(text){
        this.props.NameChangedSub22(text);
      }

      onnumchanged(text){
        this.props.numchanged(text);
      }

      onFinButtonPress(){
        const {nname,sub} = this.state;
        const {Name,num} = this.props;
       // console.log("gvhgvhg");

    this.props.cn22({nname,sub,Name,num});
     }

      renderError(){
        if(this.props.error){
          return(
            <View>
              <Text style={{alignSelf: 'center', color: 'red'}}>{this.props.error}</Text>
            </View>
          );
        }
      }

      goBack(){
        if (this.props.set) {
         // it should not be go back. it needs to reload the page
         //elijah code here navigate to elemet view.

         this.props.navigation.navigate("Tools",{Tid: this.props.navigation.state.params.Tid,dbName: this.state.sub, School:this.state.nname,Room:this.props.navigation.state.params.Room,Id:this.props.navigation.state.params.id,Name:this.props.navigation.state.params.Name})
        }
      }

      
      
      renderButton(){
        if(this.props.loading){
          return  <Spinner2 size="small"/> 
        }
        else{
         return <TouchableOpacity onPress = {this.onFinButtonPress.bind(this)}>
         <Text style={{fontSize:20, color:"#63B8FF"}}>Add</Text>
         </TouchableOpacity>
        }
      }
    
    
    render(){
    return(
     
      <KeyboardAvoidingView  behavior = {!!(Platform.OS === 'ios') ? 'padding' : 'padding'} style ={styles.container}>
         <HomeHeader navigate={this.props.navigation.goBack} ti="New Element"/>
         <TouchableWithoutFeedback style={{height:'10%'}} onPress={Keyboard.dismiss}><View>
             <Text style={{width:'96%',alignSelf:"center", padding:12, marginTop:2,fontSize:15}}>
             This is where you add content to your subject First, name the subject element eg Classwork1 , Homework1</Text>
              
              <Text style={{width:'96%',alignSelf:"center", padding:12, paddingTop:2, fontSize:15}}>then enter how much out of the total grade the element is worth. Total mark does not have to be out of 100
           DO NOT GIVE ELEMENTS THE SAME NAME</Text>
             
              
              <Text  style={{ width:'96%',alignSelf:"center", padding:12, marginTop:2,fontSize:20}}>Give the element a name</Text>
              </View>
             </TouchableWithoutFeedback>
         <View>
         <TextInput
          style={{borderWidth:1, width:'96%',alignSelf:"center", height: 40,borderColor:"#C0C0C0", padding:5, marginTop:2}}
          placeholder="Subject Name"
          autoFocus={true}
          onChangeText={this.onNameChanged.bind(this)}
          value={this.props.Name}
        /></View>

        <Text  style={{ width:'96%',alignSelf:"center", padding:12, marginTop:2,fontSize:20}}>Give the element a "Worth"</Text>
             
         <View style={{flexDirection: 'row', alignItems:'center'}}>
         <TextInput
          style={{borderWidth:1, width:'20%', height: 40,borderColor:"#C0C0C0", padding:5,marginLeft:10 , marginTop:2}}
          placeholder="Worth"
          keyboardType='numeric'
          onChangeText={this.onnumchanged.bind(this)}
          value={this.props.num}
        />
         </View>
        <View style={{marginRight:20,marginBottom:5,alignItems:"flex-end", marginLeft:20, alignSelf:'flex-end'}}>
       {this.renderButton()}
          </View>
        
    {this.renderError()}
    {this.goBack()}
         </KeyboardAvoidingView>  
       
    );
};
}
const styles = StyleSheet.create({  
 
    container: {
        flex: 1,
        backgroundColor: '#F4F2F3',
      }
   
});

const mapStateToProps = state =>{
    return{
       error:state.auth.error,
       Name: state.pro.elesub2,
       num: state.pro.num,
       loading: state.auth.loading,
       set: state.auth.set,
      
       
    }
  };
  
  export default connect(mapStateToProps,{NameChangedSub22,numchanged,cn22})(AddNewView) ;

