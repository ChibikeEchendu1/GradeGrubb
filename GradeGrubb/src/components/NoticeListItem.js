import React, {Component} from 'react';
import {FormInput,Card,LogoHouse,FormButton,Link,Spinner} from './index';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NoticeListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
           // item:this.props.navigation.state.params.item
            
          }
      
      console.log(this.props.item.StudentId,"wjat yo paddfd");
      
        }
 
    
    render(){
    return(
        
        <TouchableOpacity onPress={()=> this.props.item.SubName == "Announcement" ? this.props.nav.navigate("ToolsEventnot",{item:this.props.item,Name:this.props.item.Name,School:this.props.item.School,id:this.props.item.StudentId}) : this.props.nav.navigate("SElementnotice",{item:this.props.item, profile:this.props.profiles})} style={styles.listStyle}>
 
            <View >
            <Text  numberOfLines={1} style={{fontSize:21, fontWeight:'bold', color:'#282828', alignSelf:'center',}}>
               {this.props.item.Name}
            </Text>
            <Text  numberOfLines={1} style={{fontSize:15,alignSelf:'center',}}>
               {this.props.item.RealSubName}
            </Text>
            <Text  numberOfLines={1} style={{fontSize:15,alignSelf:'center',}}>
               {this.props.item.Element}
            </Text>
         </View>
        
         </TouchableOpacity>
 
    );
};
}
const styles = StyleSheet.create({  
    listStyle: {
        padding:20,
        flexDirection:'row',
        opacity: 0.9,
        justifyContent: 'center',
        alignItems:'center',
        
        width:'100%',
        //height:'10%',
        borderBottomWidth:1,
        borderColor:"#1995ad"
    }

   
});

