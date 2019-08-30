import React, {Component} from 'react';
import {FormInput,Card,LogoHouse,FormButton,Link,Spinner} from './index';
import {Text,StyleSheet,View,TouchableOpacity, AsyncStorage,PixelRatio,Dimensions,Platform} from 'react-native';


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


export default class SingleElementListItem extends Component{
     
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
            <View style={{flexDirection:'column',width:'65%'}}>
                <View>
            <Text  numberOfLines={1} style={{fontSize:normalize(16)}}>
                {this.props.item.Name}
            </Text>
            </View>
            <View>
            <Text style={{fontSize:13}}>
                {this.props.item.Date}
            </Text>
                </View>
         </View>
         <View style={{borderWidth:1,borderColor:"#C0C0C0",marginRight:10, padding:5, backgroundColor:'#3B3F40'}}>
            <Text style={{fontWeight :'500', fontSize:13,color:this.avgCol(this.props.item.Grade/this.props.item.Worth*100)}}>
                {this.props.item.Grade}/{this.props.item.Worth}
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
        flexDirection:'row',
        opacity: 0.9,
        justifyContent: 'space-between',
        alignItems:'center',
        width:'100%',
        //height:'10%',
        borderBottomWidth:0.5,
        backgroundColor: "white",
        borderColor:"#1995ad"
    }

   
});

