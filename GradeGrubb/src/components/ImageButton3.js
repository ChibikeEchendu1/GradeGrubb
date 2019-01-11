import React from 'react';
import {Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

const ImageButton3 = (props) =>{

    return(
        <TouchableOpacity onPress={props.press} >
        
        <Text style={{textAlign:'center', fontSize:14,color:"#1995ad"}}>Change Picture</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.8,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        width: 30,
        //borderRadius: 15,
        height: 30,
       
        //ginBottom: '20%'
       
    },

   
});

export {ImageButton3};