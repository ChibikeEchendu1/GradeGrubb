import React, {Component} from 'react';
import { HomeHeader, Spinner2} from './index';
import {Text, TextInput,SafeAreaView, StyleSheet,View,TouchableOpacity,TouchableWithoutFeedback,KeyboardAvoidingView, Keyboard, Platform,Alert} from 'react-native';
import {NameChangedSub,cn,DeleteSub} from '../actions';
import {connect} from 'react-redux';
class NewNameView extends Component{

    state = {
        Id: this.props.navigation.state.params.Tid,
        nname:  this.props.navigation.state.params.School,
        }

    onNameChanged(text){
        this.props.NameChangedSub(text);
      }

      onFinButtonPress(){
        const {nname,Id} = this.state;
        const {Name} = this.props;
        //console.log(nname,Id);
       this.props.cn({Name,nname,Id});
     }

     goBackk(){
      if (this.props.haha) {
        this.props.navigation.navigate("Tsubject")
      }
    }

     renderButton(){
        if(this.props.loading){
          return <Spinner2 size="small"/>;
        }
        else{
         return <TouchableOpacity onPress = {this.onFinButtonPress.bind(this)}>
         <View>
         <Text style={{fontSize:20, marginRight:10, color:"#1995ad"}}> Finish </Text>
         </View>
         </TouchableOpacity>;
        }
      }

      renderButton2(){
        if(this.props.loading){
          return <Spinner2 size="small"/>;
        }
        else{
         return  <TouchableOpacity style={{alignItems:'center',marginTop:15}} onPress={()=>{
          Alert.alert(
            'Delete Subject',
            'Are you sure you wish to delete this subject',
            [
              
              {text: 'No', onPress: () => console.log('OK Pressed')},
              {text: 'Yes', onPress: () =>{const {nname,Id} = this.state; console.log({nname,Id});
               this.props.DeleteSub({nname,Id})}},
              
            ],
            {cancelable: false},
          );
      }
      }>
      <Text style={{fontSize:20,color:'red'}}>Delete Subject </Text>
      </TouchableOpacity>
        }
      }

     renderError(){
        if(this.props.error){
          return(
            <View>
              <Text style={{alignSelf: 'center', color: 'red'}}> {this.props.error} </Text>
            </View>
          );
        }
      }
    
    render(){
    return(
     
      <SafeAreaView style ={styles.container}>
         <HomeHeader ti="New Name" navigate={this.props.navigation.goBack}/>
         <KeyboardAvoidingView  behavior = {(Platform.OS === 'ios') ? 'padding' : 'height'}>
         <TextInput
          style={{borderBottomWidth:1, marginTop:90, width:'96%',alignSelf:"center", height: 60,borderColor:"#C0C0C0", padding:5, marginTop:100}}
          placeholder="New Name"
          onChangeText={this.onNameChanged.bind(this)}
          value={this.props.Name}
        />
        </KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flexDirection:'row',justifyContent:"space-between", marginTop:10}}>
       
     <View>
       <View style={{width:'100%', alignItems: "flex-end"}}>
       {this.renderButton()}
       </View> 
       
    

        <View>
        {this.renderError()}
        </View>
        <View>
        {this.renderButton2()}
         
        {this.goBackk()}
        </View>
        </View>
        </TouchableWithoutFeedback>

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
       Name: state.pro.Namesub,
       loading: state.auth.loading,
       haha:state.auth.haha,
       
    }
  };
  
  export default connect(mapStateToProps,{NameChangedSub,cn,DeleteSub})(NewNameView);