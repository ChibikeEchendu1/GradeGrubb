import React from 'react';
import {View, Text, Platform,Image,StyleSheet,SafeAreaView, TouchableOpacity} from 'react-native'
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
          color:"#0099cc",
          
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
          color:"#0099cc",
         
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
        <SafeAreaView style = {styles.viewStyle}>

        <TouchableOpacity style = {styles.tab}
        onPress={()=>this.navigate("Tsubject")}> 
        <Icon name="leanpub" size={27} color={this.isActive(1)} style={{marginTop:'12%'}}/>
            <View>
            <Text style={this.textStyle2(1)}>Subjects</Text>
          </View>
        </TouchableOpacity>

         

        <TouchableOpacity style = {styles.tab} 
         
        onPress={()=>this.navigate("Profile")}>
         <Icon name="home" size={30} color="#B0B0B0"  style={{marginTop:'10%', marginLeft:'25%'}}/>
          <Text style={{fontSize:15,marginLeft:'25%',color:"#B0B0B0" }} >Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.tab}  onPress={()=>this.navigate("Thome")}>
         <Icon name="user" color={this.isActive(0)} size={30} style={{marginTop:'10%', marginLeft:'25%'}}/>
          <Text style={this.textStyle(0)}>Profile</Text>
        </TouchableOpacity> 

        <TouchableOpacity style = {styles.tab} 
        
        onPress={()=>this.navigate("NewSubject")}>
       <Icon name="plus-circle" size={30} color={this.isActive(2)}style={{marginTop:'10%'}}/>
          <Text style={this.textStyle2(2)}>Create</Text>
        </TouchableOpacity>

        </SafeAreaView>
    );

}
}

const styles = StyleSheet.create({  
    viewStyle: {
        backgroundColor:'white',
        //position:Platform.OS === 'ios' ? '' :'absolute',
       // position:'absolute',
        //marginTop:'30%',
        //position: 'absolute', left: 0, right: 0, bottom: 0,
        //top:0,
        justifyContent: 'space-between',
        alignItems:'flex-end',
        //borderWidth:1,
        flexDirection: 'row',
        width: '100%',
        height:Platform.OS === 'ios' ? '10%' :'10%',
        borderWidth: 0.8, borderColor: '#d6d7da',
       // paddingLeft:15,
      
    },
    tab:{
        height:'100%',
        width:'25%',
        flexDirection:'column',
        alignItems:'center',
        //justifyContent:'flex-end'
        
        justifyContent:Platform.OS === 'ios'?"flex-start":'flex-end'
    }

   
});

