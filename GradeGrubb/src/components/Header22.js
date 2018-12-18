import React from 'react';
import {View,Text,Platform, StyleSheet} from 'react-native'
import PushNotificationController from "../../services/PushNotificationController";
const Header22 = (props) =>{
    return(
    <View style={styles.viewStyle}>
        {/* <TouchableOpacity style = {styles.tab} onPress={()=>this.props.back}> 
         <Image style={{height: '50%', width:'50%',marginTop:12, marginLeft:15}}
            source={require('../.././images/leftarrow.png')}
            resizeMode = 'contain'/>
            <View>
          <Text style={{fontSize:15, marginLeft:15}}>back</Text>
          </View>
        </TouchableOpacity> */}
    
   
        <Text style={{fontSize: 25}}>{props.ti}</Text>
    </View>
    );
}


const styles = StyleSheet.create({
    
    viewStyle: {
        backgroundColor:'white',
        //position:'absolute',
        top: Platform.OS === 'ios' ? 0 :0, 
        //paddingTop: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        height: '100%',
        
    },
    tab:{
        height:'100%',
        flexDirection:'column',
        alignItems:'center'
    }


   
});

export {Header22};