import React from 'react';
import {View,StyleSheet,ActivityIndicator} from 'react-native';

const Spinner2 = (props) =>{

    return(
        <View style = {styles.viewStyle}>
            <ActivityIndicator size={props.size || 'large'}/>
        </View>
    );
};


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.9,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        width: '100%',
        //height: '100%',
    },

   
});

export {Spinner2};