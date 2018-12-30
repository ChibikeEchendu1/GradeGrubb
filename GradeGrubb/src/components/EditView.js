import React, {Component} from 'react';
import {FormInput,Card,LogoHouse,FormButton,Link,Spinner} from './index';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import {HomeHeader} from './index';

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
        <View style ={styles.container}>
        <HomeHeader ti="Edit Options" navigate={this.props.navigation.goBack}/>
        <View style={{marginTop:28}}>
        <View style={{marginTop:10,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
          <TouchableOpacity  onPress={() =>
            this.props.navigation.navigate("NewName", {ClassRoom:this.state.classRoom, School:this.state.School, Tid:this.state.id, Subname:this.state.Subname} )}>
            <Text style={{fontSize:20}}>Edit Name </Text>
            </TouchableOpacity>
            </View>
             
            <View style={{marginTop:10,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
          <TouchableOpacity onPress={() =>
            this.props.navigation.navigate("AddStudent2", {ClassRoom:this.state.classRoom,Name: this.state.Name, School:this.state.School, Tid:this.state.Tid,id:this.state.id, Subname:this.state.Subname })}>
            <Text style={{fontSize:20}}>Add Student </Text>
            </TouchableOpacity>
            </View>
            
            <View style={{marginTop:10,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
          <TouchableOpacity onPress={() =>
            this.props.navigation.navigate("RemoveStudent", {ClassRoom:this.state.classRoom,Name: this.state.Name, School:this.state.School, Tid:this.state.Tid, id:this.state.id, Subname:this.state.Subname })}>
            <Text style={{fontSize:20}}>Remove Student</Text>
            </TouchableOpacity>
            </View>

            <View style={{marginTop:10,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
          <TouchableOpacity  onPress={() =>
            this.props.navigation.navigate("RemoveElement", {ClassRoom:this.state.classRoom,Name: this.state.Name, School:this.state.School, Tid:this.state.Tid, id:this.state.id, Subname:this.state.Subname })}>
            <Text style={{fontSize:20}}>Remove Element</Text>
            </TouchableOpacity>
            </View>
        </View>
         </View>
    );
};
}
const styles = StyleSheet.create({  
    container: {
        flex: 1,
        backgroundColor: '#F4F2F3',
      }
   
});

