import React, {Component} from 'react';
import {FormInput,Card,LogoHouse,FormButton,Link,Spinner} from './index';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import { AsyncStorage } from "react-native"


export default class ListItem extends Component{
    render(){
    return(
        <TouchableOpacity style={styles.listStyle} onPress={() =>{
            AsyncStorage.removeItem('pro')
            let pro = {type:this.props.type, school:this.props.school, name:this.props.item.Name, id:parseInt(this.props.item.Id)}
                //console.log(pro)

                AsyncStorage.setItem('pro', JSON.stringify(pro));
            this.props.nav.navigate('Router2',{item:this.props.item, school:this.props.school})}} >
            <Text style={{fontSize:15}}>
                {this.props.item.Name}
            </Text>
         </TouchableOpacity>   
    );
};
}
const styles = StyleSheet.create({  
    listStyle: {
        padding:20,
        opacity: 0.9,
        justifyContent: 'flex-start',
        width:'100%',
        //height:'10%',
        borderBottomWidth:1,
        //backgroundColor:'#fbfaf0',
        borderColor:"#1995ad"
    }

   
});

