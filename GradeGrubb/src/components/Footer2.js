import React from 'react';
import {View, Text, Image,StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const Footer2 = () =>{

    return(
    <View style={styles.viewStyle}>
       <TouchableOpacity style = {styles.tab} onPress={()=>this.navigate("Performance")}> 
       <Icon name="plus-circle" size={30} style={{alignSelf: 'center'}}/>
            <View>
          <Text style={{fontSize:15,color:'#282828'}}>Add Profile</Text>
          </View>
        </TouchableOpacity>

    </View>
    );

}


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.4,
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