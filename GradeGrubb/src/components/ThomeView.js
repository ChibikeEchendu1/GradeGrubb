import React, { Component } from 'react';
import {Header} from './Header';
import {ImageButton3,Spinner2} from './index';
import {connect} from 'react-redux';
import {chanegepic,SubTinfo,SaveInfo} from '../actions';
import { AsyncStorage } from "react-native"
import Myimage from '../.././images/p.png';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform
 
} from 'react-native';


class ThomeView extends Component {
    state ={
        teacher:{
           students: '20 need change',
           subjects:'13 need change',
           school:'Gold Springs High School',
           
        },
        Id: 18,
      
        }

        componentWillMount(){AsyncStorage.getItem("pro").then((value) => {
          // console.log("valll, nname")s
           console.log(value)
          // console.log("valll, nname")
         this.setState({"item":JSON.parse(value)});
         let valll = this.state.item.id;
         let nname = this.state.item.school;
        console.log(valll, nname)
       // console.log("valll, nname")
          this.props.SubTinfo({valll,nname});
       }).done();
        }


        componentDidMount(){AsyncStorage.getItem("pro").then((value) => {
            // console.log("valll, nname")s
             console.log(value)
            // console.log("valll, nname")
           this.setState({"item":JSON.parse(value)});
           let valll = this.state.item.id;
           let nname = this.state.item.school;
          console.log(valll, nname)
         // console.log("valll, nname")
            this.props.SubTinfo({valll,nname});
         }).done();
          }

          


          goBack(){
        if (this.props.hope) {
          this.props.navigation.navigate("Profile")
        }
      }


         onButtonPress(){
            const Id = this.state.item.id
            this.props.chanegepic({Id});
         }

         rendertotal(){

            if(this.props.loading){
       return <Spinner2 size="small"/>;
     }
     else{
             return <Text style={{fontSize:13}}>
            Best Class: {this.props.Vals.Best_Class}
                 </Text>;
            
          }
        }

        renderImage(){
          if(typeof this.props.navigation.state.params.item.Image  == 'undefined'){
            //console.log(this.props.navigation.state.params.item.Image);
            console.log(this.props.Vals.Image);
            if(this.props.Vals.Image == '../.././images/p.png'){
              return(
                    <Image
                    style={{ height: '90%', width:'70%'}}
                    source={Myimage}
                    resizeMode = 'contain'
                    />
                );
      
            }
            else{
              return(
                    <Image
                    style={{height: Platform.OS === 'ios' ? 120 : 100,  width: Platform.OS === 'ios' ? 120 : 100,borderRadius: Platform.OS === 'ios' ? 60 : 50}}
                    source={{uri: "data:image/jpeg;base64,"+this.props.Vals.Image}}
                    resizeMode = 'contain'
                    />
                   );
                  }

          
            
          }
          else{
            

            if(this.props.navigation.state.params.item.Image == '../.././images/p.png'){
              return(
                    <Image
                    style={{ height: '90%', width:'70%'}}
                    source={Myimage}
                    resizeMode = 'contain'
                    />
                );
      
            }
            else{
              return(
                    <Image
                    style={{height: Platform.OS === 'ios' ? 120 : 100,  width: Platform.OS === 'ios' ? 120 : 100,borderRadius: Platform.OS === 'ios' ? 60 : 50}}
                    source={{uri: "data:image/jpeg;base64,"+this.props.navigation.state.params.item.Image}}
                    resizeMode = 'contain'
                    />
                   );
                  }


           

          }
        }

          rendercount(){
            
            if(this.props.loading){
                return <Spinner2 size="small"/>;
              }
              else{
             return <Text style={{fontSize:13}}>
             Number of Subjects: {this.props.Vals.Count}
                 </Text>;
            
          }}

          

         
  render() {
    
    const{item}=this.props.navigation.state.params
    
    this.props.SaveInfo(item)
    return (
     <SafeAreaView style={styles.container}>
    
    <Header  ti='Profile'/>
      
        <View style={{width:"85%", flexDirection:'column', height:"87%"}}>
        <View style={styles.ImageStyle}>
        <TouchableOpacity  onPress={this.onButtonPress.bind(this)} style={{flexDirection:'row',  alignItems:'center', justifyContent:'center',alignItems:'center', justifyContent:'center', height: '60%', width:'70%'}}>
        {this.renderImage()}
       
        </TouchableOpacity>
        <ImageButton3 press={this.onButtonPress.bind(this)}/>
       
        <Text style={{fontSize:25, fontWeight:'bold', marginTop:10}}> {item.Name}</Text>
        <Text style={{fontSize:20,alignSelf:"center", fontWeight:'bold'}}>({this.props.navigation.state.params.school})</Text>
        </View>
    
        <View style={{ height: '50%',justifyContent:'flex-end', width:'95%'}}>
        <View style={styles.listStyle} >
        {this.rendercount()}
        </View>  
        <View style={styles.listStyle}>
        {this.rendertotal()}
        </View>  
        <View style={styles.listStyle}>
            <Text style={{fontSize:13}}>
            Worst Class: {this.props.Vals.Worst_Class}
            </Text>
        </View> 
        {this.goBack()}
        </View>
        </View>
     </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    justifyContent:'space-between',
    flexDirection:'column',
  },
  ImageStyle:{
    //borderWidth: 1,
    flexDirection:'column',
    height: '50%',
    width: '100%',
    justifyContent:'flex-end',
    alignItems: 'center',  
    
},
listStyle: {
    padding:27,
    opacity: 0.9,
    justifyContent: 'flex-start',
    width:'100%',
    //height:'10%',
    borderBottomWidth:1,
    borderColor:"#1995ad"
}

  
});

const mapStateToProps = state =>{
    return{
       
       loading: state.pro.loading1,
       Vals: state.pro.infol,
       hope:state.pro.hope
     }
  };
  
  export default connect(mapStateToProps,{chanegepic,SubTinfo,SaveInfo})(ThomeView);