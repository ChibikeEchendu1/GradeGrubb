/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner,HomeHeader} from './index';
import SingleElementListItem2 from './SingleElementListItem2';
import {markFetch} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,SafeAreaView,
  ListView,
  Image,
  
} from 'react-native';




class SingleElementViewS extends Component {

    
  state = {
      
      Sname: this.props.navigation.state.params.item.dbName,
      name:  this.props.navigation.state.params.School,
      Image:this.props.navigation.state.params.Image,
      sid:  this.props.navigation.state.params.Tid,
      studentname: this.props.navigation.state.params.item.Name,

      //Average: this.props.navigation.state.params.item.ave,
        
  }


  getElements(){
    return  this.props.elements.reverse();
  }

   componentWillMount(){

    const {name,Sname,sid} = this.state;
    this.props.markFetch({name,Sname,sid});
     }

     componentDidMount(){

      const {name,Sname,sid} = this.state;
      this.props.markFetch({name,Sname,sid});
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
    if(this.props.navigation.state.params.Image == '../.././images/p.png'){
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
            style={{marginTop:20, height: 100, width:100,borderRadius:50}}
            source={{uri: "data:image/jpeg;base64,"+this.props.navigation.state.params.Image}}
            resizeMode = 'contain'
            />
           );

    }


} 

  render() {
    return (
   
        <SafeAreaView style ={styles.container}>
        <HomeHeader navigate={this.props.navigation.goBack} ti={this.state.studentname}/>{/* //this.state.studentname}/> */}
        <View style={{marginTop:0, alignItems:'center', justifyContent:'center',  height:'35%', backgroundColor: 'white'}}>
        {this.renderImage()}
        <Text style={{fontSize:18, fontWeight:'bold',marginTop:5, textAlign:'center',fontWeight:'bold'}}>Average</Text>
        <Text style={{fontSize:16, marginBottom:30, fontWeight:'bold', textAlign:'center',fontWeight:'bold'}}>{this.props.Av}%</Text>
        </View>
    
        <View style={{justifyContent: 'flex-start', height: '52%', width:'100%'}}>
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

   
    
  return {elements, Av: state.pro.av,loading:state.pro.loading1};
  };
  
  export default connect(mapStateToProps,{markFetch})(SingleElementViewS);

