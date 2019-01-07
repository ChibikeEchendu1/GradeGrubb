import React from 'react';
import {Text,View, StyleSheet,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Card, CardItem,  Body } from "native-base";

export default class  SubjectList extends React.Component{
    
         

       
         render(){
             const {item} =this.props;
        return(
     
            <TouchableOpacity  onPress={() =>
           this.props.nav.navigate("Tools", {item:this.props.item, Name:this.props.item.Name, Id:this.props.item.Id, Room:this.props.item.Room, dbName:this.props.item.dbName, School:this.props.School, Tid:this.props.Tid})} >
            



                   <Card transparent style={{backgroundColor:'#bcbabe'}}>
            <CardItem header bordered style={{flexDirection:'column', width:'100%',justifyContent:'center'}}>
              <Text style={{ color:'#1995ad',textAlign:'center',alignSelf:'center',fontSize:18,fontWeight:'bold'}}>{this.props.item.Name}</Text>
            </CardItem>
            <CardItem bordered >
              <Body>
              <Text numberOfLines={1} style={{fontSize:13,marginBottom:4,textAlign:'center',fontWeight:'bold'}}>
                    Class Size: {this.props.item.Size}
                </Text>
                <Text numberOfLines={1} style={{fontSize:13,marginBottom:4,textAlign:'center',fontWeight:'bold'}}>
                    Class Average: {this.props.item.Average}% 
                </Text>
                <Text numberOfLines={1} style={{fontSize:13,marginBottom:4,textAlign:'center',fontWeight:'bold'}}>
                    Class: {this.props.item.Room2}
                </Text>
              </Body>
            </CardItem>
          </Card>
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
            backgroundColor:'#E8E8E8',
            //marginBottom:10,
            borderBottomWidth:4,
            borderColor:"#C0C0C0"

        }
    
    
    });
    
    