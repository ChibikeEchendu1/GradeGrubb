import React from 'react';
import {View,StyleSheet} from 'react-native';

const Cardstan = (props) =>{

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
        height: 50,
    },

   
});

export {Cardstan};