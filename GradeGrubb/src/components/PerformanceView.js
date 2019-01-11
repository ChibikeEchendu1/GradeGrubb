import React, { Component } from 'react';
import {Header} from './Header';
import {ImageButton2,Spinner2} from './index';
import {chanegepic,fetchinfo,SaveInfo,SubTinfos} from '../actions';
import { Container, Content, List, ListItem } from 'native-base';
import {connect} from 'react-redux';


import {
 StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  AsyncStorage,TouchableOpacity
} from 'react-native';


class PerformanceView extends Component {

  constructor(props){
    super(props);
  
    this.state = {
      item:''
     
      }
  
    
    } 

    onButtonPress(){
      const Id = this.state.item.id
      this.props.chanegepic({Id});
    }

    renderImage(){
      if(this.props.navigation.state.params.item.Image == '../.././images/p.png'){
         // console.log("heloo");
          
          return(
              <Image
              style={{ marginTop:5, height: 120, width:120}}
              source={require('../.././images/p.png')}
              resizeMode = 'contain'
              />
          );

      }
      else{
          
          return(
              <Image
              style={{ marginTop:5, height: Platform.OS === 'ios' ? 120 : 130, width: Platform.OS === 'ios' ? 120 : 130,borderRadius: Platform.OS === 'ios' ? 60 : 50}}
              source={{uri: "data:image/jpeg;base64,"+this.props.navigation.state.params.item.Image}}
              resizeMode = 'contain'
              />
             );

      }


  } 

  goBack(){
        if (this.props.hope) {
          this.props.navigation.navigate("Profile")
        }
      }


  rendercount(){
            
            if(this.props.loading){
                return <Spinner2 size="small"/>;
              }
              else{
             return <Text style={{fontSize:13, fontWeight:'bold'}}>
             Number of Subjects: {this.props.Vals.Count}
                 </Text>;
            
          }}


    rendertotal(){

            if(this.props.loading){
       return <Spinner2 size="small"/>;
     }
     else{
             return <Text style={{fontSize:13, fontWeight:'bold'}}>
             Worst Class: {this.props.Vals.Worst_Class}
                 </Text>;
            
          }
        }
        renderschool(){

            if(this.props.loading){
       return <Spinner2 size="small"/>;
     }
     else{
             return <Text style={{fontSize:13, fontWeight:'bold'}}>
             Best Class: {this.props.Vals.Best_Class}
                 </Text>;
            
          }
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
          this.props.SubTinfos({valll,nname});
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
    this.props.SubTinfos({valll,nname});
 }).done();
  }

  render() {
    //const {goBack} = this.props.navigation;
    return (
     <SafeAreaView style={styles.container}>
       
       <Header ti='Performance' />
       
      <View style={{width:"87%", flexDirection:'column',height:"87%"}}>
        
        <View style={styles.ImageStyle}>
        <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={{flexDirection:'row', alignItems:'center', marginTop:'10%', justifyContent:'center'}}>
        
        {this.renderImage()}
        
        </TouchableOpacity>
        <ImageButton2 press={this.onButtonPress.bind(this)}/>
        <Text style={{fontSize:25, fontWeight:'bold',textAlign:'center'}}> {this.state.item.name}</Text>
        <Text style={{fontSize:20, marginBottom:20, fontWeight:'bold',textAlign:'center'}}>({this.state.item.school})</Text>
        </View>
        <View style={{ marginTop:'3%' ,height:Platform.OS === 'ios' ? '75%' :'80%',}}>

       {/*  <List >
        <ListItem >
              <Text style={{ fontWeight:'bold'}}> Average: {this.props.Vals.Average}%</Text>
            </ListItem>
            
            <ListItem >
            {this.rendercount()}
            </ListItem>
                
            <ListItem >
            {this.renderschool()}
            </ListItem>

             <ListItem >
             {this.rendertotal()}
            </ListItem>
           

            
         </List>
 */}



         <View style={styles.listStyle}>
            <Text style={{fontSize:13}}>
               Average: {this.props.Vals.Average}
            </Text>
         </View> 
         
        
        <View style={styles.listStyle} >
        {this.rendercount()}
         </View>
        <View style={styles.listStyle} >
        {this.renderschool()}
         </View>  
         <View style={styles.listStyle}>
         {this.rendertotal()}
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
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: '#F4F2F3',
  },
  ImageStyle:{
    height:Platform.OS === 'ios' ? '50%' :'50%',
    //borderWidth:1,
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    alignSelf:'center'
    //marginTop:'16%',
    
},
  student:{
  //borderWidth: 1,
  paddingTop:10,
  alignItems:'center'
  
},
listStyle: {
    padding:20,
    opacity: 0.9,
    justifyContent: 'flex-start',
    width:'100%',
    height:Platform.OS === 'ios' ? '17%' :'15%',
    borderBottomWidth:1,
    borderColor:"#C0C0C0"
},

listStyle2: {
    padding:20,
    opacity: 0.9,
    justifyContent: 'flex-start',
    width:'100%',
    height:'11%',
    borderTopWidth:1,
    borderColor:"#C0C0C0"
}
  
});

const mapStateToProps = state =>{
  console.log(state);
  return{
     loading: state.pro.loading1,
     Vals: state.pro.infols,
     hope:state.pro.hope
   }
};

export default connect(mapStateToProps,{chanegepic,fetchinfo,SaveInfo,SubTinfos})(PerformanceView) ;