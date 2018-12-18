import React from 'react';
import {Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

const ImageButton2 = (props) =>{

    return(
        <TouchableOpacity style={{ marginTop:'5%'}}  onPress={props.press} >
        
         <Text style={{textAlign:'center',fontSize:14,color:"#1995ad"}}>Change Picture</Text>
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
        marginTop:'10%',
        marginBottom: '20%'
       
    },

   
});

export {ImageButton2};