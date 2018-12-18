import React from 'react';
import {Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ImageButton = (props) =>{

    return(
        <TouchableOpacity  onPress={props.press} >
        
        <Text style={{textAlign:'center', fontSize:14,color:"#1995ad",marginTop:20}}>Change Picture</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.8,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent:'flex-end',
        width: 100,
        //borderRadius: 15,
        height: 70,
        marginLeft: 10
       
    },

   
});

export {ImageButton};