import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card = (props) =>{

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
        height: '9%',
    },

   
});

export {Card};