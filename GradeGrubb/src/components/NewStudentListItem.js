import React from 'react';
import {Text,View, StyleSheet,Image,TouchableOpacity} from 'react-native'


export default class  NewStudentListItem extends React.Component{
       
         render(){
        return(
            <TouchableOpacity onPress={() =>
                this.props.nav('AddStudent',{ClassRoom: this.props.item.dbname, ClassRoomname: this.props.item.Name, Subname:this.props.Subname, School:this.props.School,Tid:this.props.Tid})}  style={styles.listStyle} >
            
                <View  style={{width:"100%"}}>
                <Text style={{fontSize:20,alignSelf:"center"}}>
                    {this.props.item.Name}
                </Text>
              
            </View>
             </TouchableOpacity>   
        );
    };
    }

    const styles = StyleSheet.create({  
        listStyle: {
            padding:10,
            opacity: 0.9,
            flexDirection:'row',
            alignSelf:"center",
            alignItems:"center",
            marginBottom:8,
            borderWidth:1,
            height:55,
            borderRadius:50,
            backgroundColor:"#E8E8E8",
            justifyContent:'space-between',
            width:'80%',
            //marginBottom:10,
            //borderBottomWidth:1,
            borderColor:"#D3D3D3",
            

        }
    
    
    });
    
    