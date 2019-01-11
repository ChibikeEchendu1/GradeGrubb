import React from 'react';
import {View,Text,Platform, StyleSheet} from 'react-native'
import PushNotificationController from "../../services/PushNotificationController";
const Header = (props) =>{
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
    
    
        <Text style={{fontSize: 22,fontWeight:'bold',}}>{props.ti}</Text>
    </View>
    );
}


const styles = StyleSheet.create({
    
    viewStyle: {
        backgroundColor:'white',
      position:Platform.OS === 'ios' ? 'relative' :'relative',
       top: Platform.OS === 'ios' ? 0 :0, 
      
       // marginBottom:10,
        //paddingTop: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        height: '13%',
        
        
    },
    tab:{
        height:'100%',
        flexDirection:'column',
        alignItems:'center'
    }


   
});

export {Header};