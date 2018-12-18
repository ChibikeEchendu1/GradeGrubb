import React from 'react';
import {View,Text, StyleSheet,Platform, Alert, TouchableOpacity,Image} from 'react-native'
import PushNotificationController from "../../services/PushNotificationController";
import {RemoveNotif} from '../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeHeader5 = (props) =>{

   return(
    <View style={styles.viewStyle}>

         <TouchableOpacity style={{ alignSelf:'center',alignItems:'center',margin:'auto',marginLeft:20}} onPress={() =>
            props.navigate(props.screen)}> 
          <Icon name="angle-left" size={40}   color={'#1995ad'} />
            <View>
          <Text style={{fontSize:15, color:"#1995ad"}}>back</Text>
          </View>
        </TouchableOpacity> 

    <View numberOfLines={1} style={{alignSelf:'center',alignItems:'center',margin:'auto'}}>
        <Text style={{fontSize:20,fontWeight:'bold', color:'#282828'}}>{props.ti}</Text>
        </View>
        <TouchableOpacity style={{ alignSelf:'center',alignItems:'center',margin:'auto', marginRight:20}} onPress={()=>{

                            if (props.ntf == false){
                                Alert.alert(
                                    'Alert',
                                    'You have no notifications to be cleared at this time',
                                   
                                );
                            }
                            if (props.ntf == true){
                            Alert.alert(
                                'Alert',
                                'Are you sure you want to clear all Notifications ?',
                                [
                                    {text: 'No', onPress:() => console.log('Cancel Pressed'), style:'cancel'},
                                    {text: 'Yes', onPress:() => {props.press()}
                                     },
                                ],
                                {cancelable:true}
                            );
                            }
                          }} > 
         <Text style={{color:'red', fontSize:20}}>Clear</Text>
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
        height: '13%',
        backgroundColor: 'white',
    
    
    },

   
});


  
  export {HomeHeader5};

