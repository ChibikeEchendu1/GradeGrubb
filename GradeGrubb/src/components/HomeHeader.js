import React from 'react';
import {View,Text, StyleSheet,Platform, TouchableOpacity,Image} from 'react-native'
import PushNotificationController from "../../services/PushNotificationController";
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeHeader = (props) =>{
    return(
    <View style={styles.viewStyle}>
    
  <TouchableOpacity style={{ alignSelf:'center',alignItems:'center',margin:'auto',marginLeft:10}} onPress={() =>
            props.navigate(props.boo)}> 
          <Icon name="angle-left" size={40}   color={"white"} />
            
        </TouchableOpacity> 

    <View numberOfLines={1} style={{alignSelf:'center',alignItems:'center', marginLeft:'10%' , marginRight:'10%',top: 0,}}>
        <Text style={{fontSize:25,fontWeight:'bold', color:"white", alignSelf:'center'}}>{props.ti}</Text>
        </View>
       
        <TouchableOpacity style={{ alignSelf:'center',alignItems:'center',opacity: 0.7,margin:'auto',marginLeft:10}}> 
        <Text style={{fontSize:25,fontWeight:'bold',opacity: 0.7, color:"#1995ad", alignSelf:'center'}}></Text>
            
        </TouchableOpacity> 
        
    </View>
    );
}


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.7,
        top: Platform.OS === 'ios' ? 0 :0, 
        alignSelf: 'center',
        alignItems:'center',
       justifyContent:'space-between',
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        backgroundColor: '#1995ad',
    
    
    },

   
});

export {HomeHeader};