import React from 'react';
import {Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

const ImageButton3 = (props) =>{

    return(
        <TouchableOpacity onPress={props.press} style={{marginTop:'5%',}} >
        
        <Text style={{textAlign:'center', fontSize:14,color:"#1995ad",marginTop:23}}>Change Picture</Text>
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
       
        marginBottom: '20%'
       
    },

   
});

export {ImageButton3};