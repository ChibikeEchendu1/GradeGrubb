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


<View style={{alignSelf:'center',alignItems:'center',marginLeft:20}}>
        <Text numberOfLines={1} style={{fontSize:26,color:'white', fontWeight:'bold'}}>{props.ti}</Text>
        </View>

        <View style={{flexDirection:'row'}}>
         <TouchableOpacity style={{ alignSelf:'center',alignItems:'center',marginRight:20}}  onPress={() =>
            props.nav.navigate("SettingsOption", {per:props.per})}> 
         <Icon name="cogs" size={25} color={'white'} style={{ marginLeft:20}}
            
        />
          
        </TouchableOpacity> 

    
        <TouchableOpacity style={{ alignSelf:'center',alignItems:'center',marginLeft:'auto'}}  onPress={() =>
            props.nav.navigate("Notice", {per:props.per,pro:props.pro})}> 
          <Icon name="bell" size={25} color={props.active} style={{ marginRight:30}}/>
           
        </TouchableOpacity>  
        </View>
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
        height: '7%',
        backgroundColor:'#1995ad',
    
    
    },

   
});

export {HeaderSet};