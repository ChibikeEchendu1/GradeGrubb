import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card2stan = (props) =>{

    return(
        <View style = {styles.viewStyle}>
            {props.children}
        </View>
    );
};


const styles = StyleSheet.create({
    
    viewStyle: {
        
        marginBottom: 20,
        width: window.width,
        height: 45,
    },

   
});

export {Card2stan};