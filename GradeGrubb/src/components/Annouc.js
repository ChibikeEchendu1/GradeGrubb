import React from 'react';
import {View, StyleSheet, Alert, Image,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

export default class  Annouc extends React.Component{
    
         

       
         render(){
        return(
            <View>
                   <Card>
            <CardItem header bordered>
              <Text style={{ color:'#1995ad'}}>{this.props.item.Tname}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                {this.props.item.Comment} 
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{ color:'#1995ad'}}>{this.props.item.Date}</Text>
            </CardItem>
          </Card>
            </View>

      /*       <View style={styles.listStyle} >
            
              <View style={{flexDirection:'row'}}>

              <View style={{alignItems:'flex-start',width:"30%"}}>
                    <Text style={{fontSize:12,marginRight:10,color: 'white'}}>{this.props.item.Date}</Text>
             </View>
                <View  style={{width:"65%"}}>
                
                <Text style={{fontSize:20,color: 'white'}}>
                   {this.props.item.Tname}
                </Text>
                <Text style={{fontSize:15,marginTop:15,marginRight:10,color: 'white'}}>
                    {this.props.item.Comment} 
                </Text>
              </View>
              
              
            
            </View>
             </View>  */  
        );
    };
    }
    const styles = StyleSheet.create({  
        listStyle: {
            //padding:20,
            //marginBottom:5,
            //opacity: 0.9,
            //justifyContent:'space-between',
            //width:'95%',
           // backgroundColor:'#343434',//'#E8E8E8',
            //marginBottom:10,
            //borderBottomWidth:4,
            //borderColor:"#C0C0C0"

        }
    
    
    });
    
    