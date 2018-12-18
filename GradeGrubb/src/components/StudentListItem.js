import React, {Component} from 'react';
import {FormInput,Card,LogoHouse,FormButton,Link,Spinner} from './index';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';

export default class StudentListItem extends Component{
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
         <TouchableOpacity onPress={()=> this.props.navigate.navigate("SElement",{item:this.props.item, School:this.props.School, Subname: this.props.Subname})}>
        <View style={styles.listStyle}>
 
            <View>
            <Text  numberOfLines={1} style={{fontSize:20}}>
               {this.props.item.Name}  {/* this.props.item.Name */}
            </Text>
         </View>
         <View style={{padding:5}}>
            <Text style={{fontSize:20}}>
              Average:   <Text style={{fontSize:20,borderWidth:1,borderColor:"#C0C0C0", backgroundColor:this.avgCol(this.props.item.ave)}}>
              {}  {this.props.item.ave}%  {}
            </Text> 
            </Text> 
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
        justifyContent: 'space-between',
        alignItems:'center',
        width:'100%',
        //height:'10%',
        borderBottomWidth:1,
        borderColor:"#C0C0C0"
    }

   
});

