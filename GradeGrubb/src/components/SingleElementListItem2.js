import React, {Component} from 'react';
import {FormInput,Card,LogoHouse,FormButton,Link,Spinner} from './index';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';

export default class SingleElementListItem2 extends Component{
     
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
         <View>
        <View style={styles.listStyle}>
            <View style={{flexDirection:'column'}}>
                <View>
            <Text  numberOfLines={1} style={{alignSelf:'center',fontSize:20,fontWeight:'bold'}}>
                {this.props.item.Name} 
            </Text>
            </View>
            <View>
            <Text style={{alignSelf:'center',fontSize:15,fontWeight:'bold'}}>
                {this.props.item.Date}
            </Text>
                </View>
         </View>
         <View style={{borderWidth:1,borderColor:"#C0C0C0",marginRight:10, padding:5, width:"96%", alignItems:'center',  backgroundColor:this.avgCol(this.props.item.Grade/this.props.item.Worth*100)}}>
            <Text style={{fontSize:13,fontWeight:'bold'}}>
              My Score  {this.props.item.Grade}/{this.props.item.Worth} -- ({(this.props.item.Grade/this.props.item.Worth*100).toFixed(2)}%)
            </Text> 
         </View> 
         <View style={{borderWidth:1,borderColor:"#C0C0C0",marginRight:10, padding:5, width:"96%", alignItems:'center',  backgroundColor:this.avgCol(this.props.item.Ave/this.props.item.Worth*100)}}>
            <Text style={{fontSize:13,fontWeight:'bold'}}>
              Avg Score  {this.props.item.Ave}/{this.props.item.Worth} -- ({(this.props.item.Ave/this.props.item.Worth*100).toFixed(2)}%)
            </Text> 
         </View>
         <View style={{borderWidth:1,borderColor:"#C0C0C0",marginRight:10, padding:5, width:"96%", alignItems:'center',  backgroundColor:this.avgCol(this.props.item.Max/this.props.item.Worth*100)}}>
            <Text style={{fontSize:13,fontWeight:'bold'}}>
              Max Score  {this.props.item.Max}/{this.props.item.Worth} -- ({(this.props.item.Max/this.props.item.Worth*100).toFixed(2)}%)
            </Text> 
         </View>
         <View style={{borderWidth:1,borderColor:"#C0C0C0",marginRight:10, padding:5, width:"96%", alignItems:'center',  backgroundColor:this.avgCol(this.props.item.Min/this.props.item.Worth*100)}}>
            <Text style={{fontSize:13,fontWeight:'bold'}}>
              Min Score  {this.props.item.Min}/{this.props.item.Worth} -- ({(this.props.item.Min/this.props.item.Worth*100).toFixed(2)}%)
            </Text> 
         </View>
         
         </View> 
         
         </View>
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

