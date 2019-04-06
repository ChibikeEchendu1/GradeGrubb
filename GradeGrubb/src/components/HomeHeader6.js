import React from 'react';
import {View,Text, StyleSheet,Platform, Alert, TouchableOpacity,Image} from 'react-native'
import PushNotificationController from "../../services/PushNotificationController";
import {RemoveNotif} from '../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeHeader6 = (props) =>{

   return(
    <View style={styles.viewStyle}>

         <TouchableOpacity style={{ alignSelf:'center',alignItems:'center',margin:'auto',marginLeft:20}} onPress={() =>
            props.navigate(props.screen)}> 
          <Icon name="angle-left" size={40}   color={'white'} />
            <View>
          <Text style={{fontSize:15, color:"white"}}>back</Text>
          </View>
        </TouchableOpacity> 

    <View numberOfLines={1} style={{alignSelf:'center',alignItems:'center',margin:'auto'}}>
        <Text style={{fontSize:20,fontWeight:'bold', color:'white'}}>{props.ti}</Text>
        </View>
        <TouchableOpacity style={{ alignSelf:'center',alignItems:'center',margin:'auto', marginRight:20}} onPress={()=>{

                    
                          }} > 
         <Text style={{color:'red', fontSize:20}}>Edit</Text>
            <View>
         
          </View>
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        backgroundColor: '#1995ad',
    
    
    },

   
});


  
  export {HomeHeader6};

