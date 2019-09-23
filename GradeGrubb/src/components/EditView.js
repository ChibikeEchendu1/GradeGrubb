import React, {Component} from 'react';
import {FormInput,Card,LogoHouse,FormButton,Link,Spinner} from './index';
import {Text,StyleSheet,View,TouchableOpacity,SafeAreaView,Dimensions,PixelRatio,KeyboardAvoidingView,Platform, Keyboard} from 'react-native';
import {HomeHeader} from './index';


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

export default class EditView extends Component{
  constructor(props){
 
    super(props);
   this.state = {
    classRoom: this.props.navigation.state.params.Room,
    School:this.props.navigation.state.params.Sname,
    Tid:this.props.navigation.state.params.Tid,
    Name:this.props.navigation.state.params.Name,
    id:this.props.navigation.state.params.id,
    Subname: this.props.navigation.state.params.Subname,
 
}

  }
    render(){
    return(
        <SafeAreaView style ={styles.container}>
        <HomeHeader ti="Edit Options" navigate={this.props.navigation.goBack}/>
        <View style={{marginTop:28}}>
        <View style={{marginTop:10,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
          <TouchableOpacity  onPress={() =>
            this.props.navigation.navigate("NewName", {ClassRoom:this.state.classRoom, School:this.state.School, Tid:this.state.id, Subname:this.state.Subname} )}>
            <Text style={{fontSize:normalize(20)}}>Edit Subject </Text>
            </TouchableOpacity>
            </View>
             
            <View style={{marginTop:10,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
          <TouchableOpacity onPress={() =>
            this.props.navigation.navigate("AddStudent2", {ClassRoom:this.state.classRoom,Name: this.state.Name, School:this.state.School, Tid:this.state.Tid,id:this.state.id, Subname:this.state.Subname })}>
            <Text style={{fontSize:normalize(20)}}>Add Student </Text>
            </TouchableOpacity>
            </View>
            
            <View style={{marginTop:10,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
          <TouchableOpacity onPress={() =>
            this.props.navigation.navigate("RemoveStudent", {ClassRoom:this.state.classRoom,Name: this.state.Name, School:this.state.School, Tid:this.state.Tid, id:this.state.id, Subname:this.state.Subname })}>
            <Text style={{fontSize:normalize(20)}}>Remove Student</Text>
            </TouchableOpacity>
            </View>

            <View style={{marginTop:10,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
          <TouchableOpacity  onPress={() =>
            this.props.navigation.navigate("RemoveElement", {ClassRoom:this.state.classRoom,Name: this.state.Name, School:this.state.School, Tid:this.state.Tid, id:this.state.id, Subname:this.state.Subname })}>
            <Text style={{fontSize:normalize(20)}}>Remove Topic</Text>
            </TouchableOpacity>
            </View>

            <View style={{marginTop:10,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
          <TouchableOpacity  onPress={() =>
            this.props.navigation.navigate("EditElement", {ClassRoom:this.state.classRoom,Name: this.state.Name, School:this.state.School, Tid:this.state.Tid, id:this.state.id, Subname:this.state.Subname,total: this.props.navigation.state.params.total})}>
            <Text style={{fontSize:normalize(20)}}>Edit An Topic</Text>
            </TouchableOpacity>
            </View>
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

