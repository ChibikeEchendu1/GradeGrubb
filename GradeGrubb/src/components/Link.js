import React from 'react';
import {Text,StyleSheet,TouchableOpacity,Dimensions, Platform, PixelRatio} from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 360;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}


const Link = (props) =>{
    return(
        <TouchableOpacity style = {styles.viewStyle} onPress={() =>
            props.navigate(props.screen)}>
        <Text style = {{color: '#00000f', alignSelf:'center', fontSize: normalize(19)}}>{props.val}</Text>
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
        width: '100%',
        borderRadius: 15,
        height: '100%',
    },

   
});

export {Link};