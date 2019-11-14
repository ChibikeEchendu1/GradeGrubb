import React, {Component} from 'react';
import {HomeHeader,Spinner2} from './index';
import {Text,Picker, TextInput, StyleSheet,View,SafeAreaView,Dimensions,TouchableOpacity,TouchableWithoutFeedback,PixelRatio,KeyboardAvoidingView,Platform, Keyboard,Alert} from 'react-native';
import {NameChangedSub22,numchanged,submitForedit,numchanged2,eleFetchForedit} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 360;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
class EditViewForm extends Component{

    state = {
        Id:this.props.navigation.state.params.Tid,
        nname: this.props.navigation.state.params.School,
        TopicNAme: this.props.navigation.state.params.Name,
        sub: this.props.navigation.state.params.Subname,
        type:0
        }
     
    onNameChanged(text){
        this.props.NameChangedSub22(text);
      }

      onTypeChanged(text){
        this.props.TypeChanged(text);
      }

      onnumchanged(text){
        console.log(text,'text');
       
        this.props.numchanged(text);
      }

      onnumchanged2(text){
         
        if (text == 0 && text !='') {
          Alert.alert(
            'Invalid Value',
            '0 is not a vaild value',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
            }
        this.props.numchanged2(text);
      }

      onFinButtonPress(){
        const {nname,sub,TopicNAme,type} = this.state;
        const {num,num2,Name} = this.props;
       // console.log("gvhgvhg");

    this.props.submitForedit({nname,sub,num,num2,TopicNAme,Name,type});
     }

     componentDidMount(){

        const {nname,sub,TopicNAme} = this.state;
        const update = 1;
       this.props.eleFetchForedit({nname,sub,TopicNAme,update});
        
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

         this.props.navigation.navigate("Tools",{Tid: this.props.navigation.state.params.Tid,dbName: this.state.sub, School:this.state.nname,Room:this.props.navigation.state.params.ClassRoom,Id:this.props.navigation.state.params.id,Name:this.props.navigation.state.params.Name})
        }
      }


      renderTypesView(){
        if(this.props.loading){
          return  <Spinner2 size="small"/> 
        }
        else{

          if (this.props.types.length == 0) {
            console.log('hgjf');
            return null
          }
          
          return<View>
      <Text style={{width:'96%',alignSelf:"center", padding:5, marginTop:15,fontSize:normalize(12)}}>Type</Text>

      <Picker
      style={{width:'100%',height: Platform.OS === 'ios' ? null : 50,borderWidth: Platform.OS === 'ios' ? null : 1}}
      selectedValue={this.state.type}
      onValueChange={(text) =>{
       console.log(text);
       
          this.setState({type:text})
        
      }}>
      {this.renderTypes()}
      </Picker>
      </View>
        }
      }

      
      
      renderButton(){
        if(this.props.loading){
          return  <Spinner2 size="small"/> 
        }
        else{
         return <TouchableOpacity onPress = {this.onFinButtonPress.bind(this)}>
         <Text style={{fontSize:20, color:"#1995ad"}}>Edit</Text>
         </TouchableOpacity>
        }
      }

      renderInput1(){
        if(this.props.loading1){
          return  <Spinner2 size="small"/> 
        }
        else{
         return <TextInput
         style={{borderBottomWidth:1, width:'60%', height: normalize(40),borderColor:"#C0C0C0", padding:5,marginLeft:10 , marginTop:2}}
         placeholder="Marking Out Of"
         keyboardType='numeric'
         onChangeText={this.onnumchanged2.bind(this)}
         value={this.props.num2}
       />
        }
      }

      renderInput2(){
        if(this.props.loading1){
          return  <Spinner2 size="small"/> 
        }
        else{
         return <TextInput
         style={{borderBottomWidth:1, width:'20%', height: normalize(40),borderColor:"#C0C0C0", padding:5,marginLeft:10 , marginTop:2}}
         placeholder="Weight"
         keyboardType='numeric'
         onChangeText={this.onnumchanged.bind(this)}
         value={this.props.num}
       />
        }
      }

      renderTypes(){
                return(
          _.map(this.props.types, ({Name,Id},index) => {
                                  return  <Picker.Item label={Name} value={Id} />
                                })
                );
          }

      renderInput3(){
        if(this.props.loading1){
          return  <Spinner2 size="small"/> 
        }
        else{
         return <TextInput
         style={{borderBottomWidth:1,  width:'96%',alignSelf:"center", height: normalize(40),borderColor:"#C0C0C0", padding:5, marginTop:2}}
         placeholder="Topic Name"
         autoFocus={true}
         onChangeText={this.onNameChanged.bind(this)}
         value={this.props.Name}
       />
        }
      }
    
    
    render(){
    return(
     
      <SafeAreaView style ={styles.container}>
         <HomeHeader navigate={this.props.navigation.goBack} ti={this.state.TopicNAme}/>
         <TouchableWithoutFeedback style={{height:'10%'}} onPress={Keyboard.dismiss}><View>
         <Text style={{width:'96%',alignSelf:"center", padding:5, marginTop:2,fontSize:normalize(10)}}>
             Total Weight Thus Far: {this.props.navigation.state.params.total}</Text>


           
             
              
              
              </View>

             </TouchableWithoutFeedback>
             <KeyboardAvoidingView  behavior = {!!(Platform.OS === 'ios') ? 'padding' : 'padding'}>


             <Text  style={{ width:'96%',alignSelf:"center", padding:5, marginTop:2,fontSize:normalize(12)}}>Give the Assessment a name</Text>
             <View>
            {this.renderInput3()}
         </View>

<Text  style={{ width:'96%',alignSelf:"center", padding:12, marginTop:2,fontSize:normalize(12)}}>What is the Assessment Marked Out of</Text>
             
             <View style={{flexDirection: 'row', alignItems:'center'}}>
             {this.renderInput1()}
             </View>

        <Text  style={{ width:'96%',alignSelf:"center", padding:12, marginTop:2,fontSize:normalize(12)}}>What is the Assessment Weight</Text>
             
         <View style={{flexDirection: 'row', alignItems:'center'}}>
         {this.renderInput2()}
         </View>

{this.renderTypesView()}
        <View style={{marginRight:20,marginBottom:5,alignItems:"flex-end", marginLeft:20, alignSelf:'flex-end'}}>
       {this.renderButton()}
          </View>
          </KeyboardAvoidingView>
    {this.renderError()}
    {this.goBack()}
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

  const types = _.map(state.pro.types,(Val,uid) =>{
    return {...Val};
  });

    return{
      types,
       error:state.auth.error,
       Name: state.pro.elesub2,
       num: state.pro.num,
       num2: state.pro.num2,
       loading: state.auth.loading,
       set: state.auth.set,
       loading1:state.pro.loading1
     }
  };
  
  export default connect(mapStateToProps,{NameChangedSub22,numchanged,submitForedit,numchanged2,eleFetchForedit})(EditViewForm) ;

