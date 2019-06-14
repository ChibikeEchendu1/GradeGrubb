import React, {Component} from 'react';
import {FormInput,Card,LogoHouse,FormButton,Link,Spinner} from './index';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';

export default class ElementListItem extends Component{
    avgCol = (average)=>{
        let col = "";
    
        if (average <= 100 && average >= 90){
            col = "#009E9E";
        }
        else if (average > 100){
            col = "#009E9E";
        }
    
        else if (average < 90 && average >= 85){
            col = "#00CC33";
        }
    
        else if (average < 85 && average >= 80){
            col = "#00FF66";
        }
    
        else if (average < 80 && average >= 75){
            col = "#ccffcc";
        }
    
        else if (average < 75 && average >= 70){
            col = "#ccff00";
        }
    
        else if (average < 70 && average >= 65){
            col = "#ffff99";
        }
    
        else if (average <65 && average >=60){
            col = "#ffcc33";
        }
    
        else if (average < 60 && average >= 55){
            col = "#ff9933";
        }
    
        else if (average < 55 && average >= 50){
            col = "#ff6600";
        }
        else if (average < 50 && average >= 0){
            col = "#ff0000";
        }
        else{
            col = "#eeeeee"
        }
        return col;
    }
    
    render(){
    return(
         <TouchableOpacity onPress={()=>this.props.nav("Grade", {item: this.props.item, School:this.props.School,Tid:this.props.Tid,RealSubNAme:this.props.RealSubNAme, Room:this.props.Room, Subname:this.props.Subname})}>
        <View style={styles.listStyle}>
            <View style={{alignItems:'center'}}>
            <Text numberOfLines={1} style={{fontSize:20,alignSelf:'center',fontWeight:'bold'}}>
              {this.props.item.Name}   {/* this.props.item.Name */}
            </Text>
         </View>
         <View style={{alignSelf:'center', flexDirection:'row'}}>
         <View style={{padding:5}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>
            Out of:  {this.props.item.worth} |
            </Text> 
         </View> 
         <View style={{flexDirection:'row', padding:5}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>
            Avg:   <Text style={{fontSize:20,borderWidth:1,width:'50%',fontWeight:'bold', backgroundColor:this.avgCol(this.props.item.Ave)}}>
               {this.props.item.Ave}% 
            </Text>
            </Text> 
            
         </View>
         </View>   
         </View>
         </TouchableOpacity>
    );
};
}
const styles = StyleSheet.create({  
    listStyle: {
        padding:20,
        flexDirection:'column',
        opacity: 0.9,
       // justifyContent: 'flex-start',
       // alignItems:'flex-start',
        width:'100%',
        //height:'10%',
        borderBottomWidth:0.5,
        borderColor:"#DDDDDD"
    }

   
});

