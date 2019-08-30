import React from 'react';
import {Text, StyleSheet,TouchableOpacity,View,PixelRatio, Platform,Dimensions} from 'react-native'
import { Card, CardItem,  Body } from "native-base";



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
export default class  SubjectListS extends React.Component{
    
         

       
         render(){
        return(
            <TouchableOpacity    onPress={() => this.props.nav.navigate("Element", {item:this.props.item,Image:this.props.Image, School:this.props.School, Tid:this.props.Tid})}>
                  <Card>
            <CardItem header bordered style={{flexDirection:'row', width:'100%',justifyContent:'flex-start'}}>
            <View style={{borderWidth:0.3,borderColor:'#1995ad', borderRadius:50,width:30,height:30,alignItems:'center', justifyContent:'center', backgroundColor:'#1995ad'}}>
            <Text style={{ color:'white',textAlign:'center',alignSelf:'center',fontSize:normalize(18),fontWeight:'bold'}}>{this.props.num}</Text>
            </View>
              <Text style={{ color:'#1995ad',textAlign:'center',alignSelf:'center',fontSize:normalize(18),marginLeft:20,fontWeight:'bold'}}>{this.props.item.Name}</Text>
            </CardItem>
            <CardItem bordered >
              <Body>
             
                <Text numberOfLines={1} style={{fontSize:13,marginBottom:4,textAlign:'center',fontWeight:'bold'}}>
                    My Average: {this.props.item.Average}% 
                </Text>
                <Text numberOfLines={1} style={{fontSize:13,marginBottom:4,textAlign:'center',fontWeight:'bold'}}>
                    Class Average: {this.props.item.CAverage}%
                </Text>
                <Text numberOfLines={1} style={{fontSize:13,marginBottom:4,textAlign:'center',fontWeight:'bold'}}>
                    Highest Class Average: {this.props.item.MAX}%
                </Text>
                <Text numberOfLines={1} style={{fontSize:13,marginBottom:4,textAlign:'center',fontWeight:'bold'}}>
                    Lowest Class Average: {this.props.item.MIN}% 
                </Text>
                <Text numberOfLines={1} style={{fontSize:13,marginBottom:4,textAlign:'center',fontWeight:'bold'}}>
                    Class Size: {this.props.item.Size}
              </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered style={{flexDirection:'column', width:'100%',margin:'auto'}}>
              <Text style={{ color:'#1995ad',textAlign:'center',fontWeight:'bold'}}>{this.props.item.Teacher}</Text>
            </CardItem>
          </Card>
       {/*      
            <Text  numberOfLines={1} style={{fontSize:25, textAlign:"left", fontWeight:'bold', marginBottom:4}}>
                    {this.props.item.Name} 
                </Text>
            <Text  numberOfLines={1}  style={{fontSize:20, textAlign:"left", fontWeight:'bold', marginBottom:15}}>
                    {this.props.item.Teacher} 
                </Text>
              <View style={{flexDirection:'row'}}>
                <View  style={{width:"75%"}}>
                
                <Text numberOfLines={1} style={{fontSize:13,marginBottom:4}}>
                    Class Size: {this.props.item.Size}
                </Text>
                <Text numberOfLines={1} style={{fontSize:13,marginBottom:4}}>
                    My Average: {this.props.item.Average} 
                </Text>
                <Text numberOfLines={1} style={{fontSize:13,marginBottom:4}}>
                    Class Average: {this.props.item.CAverage}
                </Text>
              </View>
             </View> */}
             </TouchableOpacity>   
        );
    };
    }
    const styles = StyleSheet.create({  
        listStyle: {
            padding:20,
            marginBottom:5,
            opacity: 0.9,
            justifyContent:'space-between',
            width:'100%',
            backgroundColor:'#A1D6E2',
            //marginBottom:10,
            borderBottomWidth:4,
            borderColor:"#C0C0C0"

        }
    
    
    });
    
    