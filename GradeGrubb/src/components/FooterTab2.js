import React from 'react';
import {View, Text, Platform,Image,StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FooterTab2 extends React.Component{
    navigate(screen){
        this.getNavigationProps().navigation.navigate(screen);
      }
      
      getNavigationProps(){
        return this.props.navigator;
      }

      isActive(buttonIndex){
        if (this.getNavigationProps().navigationState.index === buttonIndex){
          return "#0099cc"; 
        }
        return "#B0B0B0"
       }
 
      textStyle = function(buttonIndex) {
        if (this.getNavigationProps().navigationState.index === buttonIndex){
        return {
          fontSize: 15,
          marginLeft: "25%",
          color:"#0099cc"
        }
      }

      else{
        return {
          fontSize: 15,
          marginLeft: "25%",
          color:"#B0B0B0"
        }
      }
      }

      textStyle2 = function(buttonIndex) {
        if (this.getNavigationProps().navigationState.index === buttonIndex){
        return {
          fontSize: 15,
          color:"#0099cc"
        }
      }

      else{
        return {
          fontSize: 15,
          color:"#B0B0B0"
        }
      }
      }
    render(){
    return(
        <View style = {styles.viewStyle}>

        <TouchableOpacity style = {styles.tab}
        onPress={()=>this.navigate("Tsubject")}> 
        <Icon name="leanpub" size={27} color={this.isActive(1)} style={{marginTop:'12%'}}/>
            <View>
            <Text style={this.textStyle2(1)}>Subjects</Text>
          </View>
        </TouchableOpacity>

         <TouchableOpacity style = {styles.tab} onPress={()=>this.navigate("Thome")}>
         <Icon name="user" size={30} color="#B0B0B0" style={{marginTop:'10%', marginLeft:'25%'}}/>
          <Text style={{fontSize:15,marginLeft:'25%',color:"#B0B0B0" }}>Profile</Text>
        </TouchableOpacity> 

        <TouchableOpacity style = {styles.tab} 
         
        onPress={()=>this.navigate("Profile")}>
         <Icon name="home" size={30} color={this.isActive(0)} style={{marginTop:'10%', marginLeft:'25%'}}/>
          <Text style={this.textStyle(0)}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.tab} 
        
        onPress={()=>this.navigate("NewSubject")}>
       <Icon name="plus-circle" size={30} color={this.isActive(2)}style={{marginTop:'10%'}}/>
          <Text style={this.textStyle2(2)}>Create</Text>
        </TouchableOpacity>

        </View>
    );

}
}

const styles = StyleSheet.create({  
    viewStyle: {
        backgroundColor:'white',
        //position:'absolute',
        //marginTop:'30%',
        bottom:0,
        //top:0,
        justifyContent: 'space-between',
        alignItems:'flex-end',
        //borderWidth:1,
        flexDirection: 'row',
        width: '100%',
        height:Platform.OS === 'ios' ? '10%' :'12%',
        borderWidth: 0.8, borderColor: '#d6d7da',
       // paddingLeft:15,
      
    },
    tab:{
        height:'100%',
        width:'25%',
        flexDirection:'column',
        alignItems:'center'
    }

   
});

