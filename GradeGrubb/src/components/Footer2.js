import React from 'react';
import {View, Text, Image,StyleSheet, TouchableOpacity} from 'react-native'

const Footer2 = () =>{

    return(
    <View style={styles.viewStyle}>
       <TouchableOpacity style = {styles.tab} onPress={()=>this.navigate("Performance")}> 
         <Image style={{height: '50%',marginTop:7}}
            source={require('../.././images/plus.png')}
            resizeMode = 'contain'/>
            <View>
          <Text style={{fontSize:20}}>Add Profile</Text>
          </View>
        </TouchableOpacity>

    </View>
    );

}


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.7,
        position:'absolute',
        bottom:0,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        backgroundColor: 'white',
    },

   
});

export {Footer2};