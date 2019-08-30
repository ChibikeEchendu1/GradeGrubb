/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner,HomeHeader} from './index';
import SingleElementListItem2 from './SingleElementListItem2';
import {markFetchNotice} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,SafeAreaView,
  ListView,
  Image,
  
  AsyncStorage,TouchableOpacity,PixelRatio,Dimensions,Platform
} from 'react-native';


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




class SingleElementViewSnotic extends Component {

    
  state = {
      
      Sname: this.props.navigation.state.params.item.SubName,
      name:  this.props.navigation.state.params.item.School,
      Image:'',
      sid:  this.props.navigation.state.params.item.StudentId,
      studentname: this.props.navigation.state.params.item.Name,

      //Average: this.props.navigation.state.params.item.ave,
        
  }


  getElements(){
    return  this.props.elements.reverse();
  }

   componentWillMount(){

    const {name,Sname,sid} = this.state;
    this.props.markFetchNotice({name,Sname,sid});

   

    //data = this.props.navigation.state.params.profile.filter((item) => item.Id == this.props.navigation.state.params.item.StudentId).map(({Image}) => ({Image}));
//console.log(data);
//console.log(data[0]["Image"]);
//this.setState({"Image":data});
    
    
    
     }

     componentDidMount(){

      const {name,Sname,sid} = this.state;
      this.props.markFetchNotice({name,Sname,sid});
       }



   renderButton(){
    if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{
     const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
  });
  this.dataSource = ds.cloneWithRows(this.getElements())
     return <ListView
    dataSource={this.dataSource}
    enableEmptySections={true}
    renderRow={this.renderRow}/>;
  }
  }

   renderRow(item){
    return <SingleElementListItem2 item={item}/>
   }

   renderImage(){
      // console.log(this.state.Image[0]["Image"]);
       
    if(this.props.im == '../.././images/p.png'){
        console.log("heloo");
        
        return(
            <Image
            style={{ marginTop:20, height: '60%', width:'70%'}}
            source={require('../.././images/p.png')}
            resizeMode = 'contain'
            />
        );

    }
    else{
        
        return(
            <Image
            style={{marginTop:20, height: normalize(100), width:normalize(100),borderRadius:60}}
            source={{uri: "data:image/jpeg;base64,"+this.props.im}}
            resizeMode = 'contain'
            />
           );

    }


} 

  render() {
    return (
   
        <SafeAreaView style ={styles.container}>
        <HomeHeader navigate={this.props.navigation.goBack} ti={this.state.studentname} boo=""/>{/* //this.state.studentname}/> */}
        <View style={{marginTop:0, alignItems:'center', justifyContent:'center',  height:'30%', backgroundColor: 'white'}}>
        {this.renderImage()}
        <Text style={{fontSize:normalize(18), fontWeight:'bold',marginTop:5, textAlign:'center'}}>Average</Text>
        <Text style={{fontSize:normalize(16), marginBottom:30, fontWeight:'bold', textAlign:'center'}}>{this.props.Av}</Text>
        </View>
    
        <View style={{justifyContent: 'flex-start', height: '57%', width:'100%'}}>
        {this.renderButton()}
        </View>
     
      </SafeAreaView>
      );
    }
  } 

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
      }
  });

  const mapStateToProps = state =>{
  
    const elements = _.map(state.pro.mark,(Val,uid) =>{
      return {...Val};
    });

   
    
  return {elements, Av: state.pro.av,im: state.pro.im,loading:state.pro.loading1};
  };
  
  export default connect(mapStateToProps,{markFetchNotice})(SingleElementViewSnotic);

