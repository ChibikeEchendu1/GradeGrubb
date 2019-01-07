import React from 'react';
import {View, StyleSheet, TouchableOpacity,Platform,Image} from 'react-native'
import PushNotificationController from "../../services/PushNotificationController";
import { Container, Header, Content, Footer, FooterTab, Button, Text, Badge } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

showNotification = (props) =>{
    if(props == 'true'){
        return <Icon name="circle" color='red' size={20} style={{marginTop:-36}}/>
    }
    }

const HeaderSet = (props) =>{
    return(
    <View style={styles.viewStyle}>

         <TouchableOpacity style={{ alignSelf:'center',alignItems:'center',margin:'auto'}}  onPress={() =>
            props.nav("SettingsOption", {per:props.per})}> 
         <Icon name="cogs" size={25}  style={{ marginLeft:20}}
            color={'#1995ad'}
        />
          
        </TouchableOpacity> 

    <View style={{alignSelf:'center',alignItems:'center',margin:'auto'}}>
        <Text numberOfLines={1} style={{fontSize:20,fontWeight:'bold', color:'#282828'}}>{props.ti}</Text>
        </View>
        <TouchableOpacity style={{ alignSelf:'center',alignItems:'center',margin:'auto'}}  onPress={() =>
            props.nav("Notice", {per:props.per,pro:props.pro})}> 
          <Icon name="bell" size={25} color={props.active} style={{ marginRight:20}}/>
           
        </TouchableOpacity>  
        {/*  <Button style={{ alignSelf:'center',alignItems:'center',margin:'auto'}} onPress={() =>
            props.nav("Notice", {per:props.per,pro:props.pro})}>
             
              <Icon name="bell"  color={'#787878'} size={28} style={{ marginRight:20}} />
         
              
            </Button> */}
    </View>
    );
}



const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.7,
        top:0,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        width: '100%',
        height: '13%',
        backgroundColor: 'white',
    
    
    },

   
});

export {HeaderSet};