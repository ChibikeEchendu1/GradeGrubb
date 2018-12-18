/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner,HomeHeader} from './index';
import SingleElementListItem from './SingleElementListItem';
import {markFetch2} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  
} from 'react-native';




class SingleElementView extends Component {

    
  state = {
      
      Sname: this.props.navigation.state.params.Subname,
      name:  this.props.navigation.state.params.School,
      sid:   this.props.navigation.state.params.item.Id,
      studentname: this.props.navigation.state.params.item.Name,
      //Average: this.props.navigation.state.params.item.ave,
        
  }


  getElements(){
    return  this.props.elements.reverse();
  }

   componentWillMount(){

    const {name,Sname,sid} = this.state;
    this.props.markFetch2({name,Sname,sid});
     }

     componentDidMount(){

      const {name,Sname,sid} = this.state;
      this.props.markFetch2({name,Sname,sid});
       }

     renderImage(){
      if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{

    if(this.props.img == '../.././images/p.png'){
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
            style={{marginTop:20, height: 120, width:120,borderRadius:60}}
            source={{uri: "data:image/jpeg;base64,"+this.props.img}}
            resizeMode = 'contain'
            />
           );

    }
  }


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
    return <SingleElementListItem item={item}/>
   }

  render() {
    return (
   
        <View style ={styles.container}>
        <HomeHeader navigate={this.props.navigation.goBack} ti={this.state.studentname}/>{/* //this.state.studentname}/> */}
        <View style={{marginTop:0, alignItems:'center',justifyContent:"center",  height:'35%', backgroundColor: '#E8E8E8'}}>
        {this.renderImage()}
        <Text style={{fontSize:22, fontWeight:'bold', textAlign:'center'}}>Average</Text>
        <Text style={{fontSize:20, marginBottom:30, fontWeight:'bold', textAlign:'center'}}>{this.props.Av}</Text>
        </View>
    
        <View style={{justifyContent: 'flex-start', height: '52%', width:'100%'}}>
        {this.renderButton()}
        </View>
     
      </View>
      );
    }
  } 

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F4F2F3',
      }
  });

  const mapStateToProps = state =>{
  
    const elements = _.map(state.pro.mark,(Val,uid) =>{
      return {...Val};
    });

   
    
  return {elements, Av: state.pro.av,img :state.pro.img,loading:state.pro.loading1};
  };
  
  export default connect(mapStateToProps,{markFetch2})(SingleElementView);

