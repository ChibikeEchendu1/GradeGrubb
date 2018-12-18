import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';

const ResendFormButton = (props) =>{

    return(
        <TouchableOpacity onPress={props.press} style = {styles.viewStyle}>
        <Text style = {{color: '#ffffff',fontSize: 15}}>{props.val}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.5,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '30%',
        borderRadius: 15,
        marginLeft:5,
        marginTop:8,
        height: '70%',
        backgroundColor: 'gray',
    },

   
});

export {ResendFormButton};