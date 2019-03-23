import React from 'react';
import {View,Image,StyleSheet} from 'react-native';

const LogoHouse = (props) =>{

    return(
        <View style = {styles.viewStyle}>
       
        <Image
          style={{height: '100%', width:'100%'}}
          source={require('../.././images/pp2.png')}
          resizeMode = 'contain'
        />
       
        </View>
    );
};


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.9,
        marginBottom: '5%',
        flexDirection: 'row',
        width: '80%',
        height: '30%',
        alignSelf: 'center',
    },

   
});

export {LogoHouse};