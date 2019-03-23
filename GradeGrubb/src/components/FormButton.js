import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';

const FormButton = (props) =>{

    return(
        <TouchableOpacity onPress={props.press} style = {styles.viewStyle}>
        <Text style = {{color: '#ffffff',fontSize: 25}}>{props.val}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.9,
        alignSelf: 'center',
        alignItems:'center',
        
        justifyContent: 'center',
        flexDirection: 'row',
        width: '50%',
        borderRadius: 15,
        height: '100%',
        backgroundColor: '#1995AD',
    },

   
});

export {FormButton};