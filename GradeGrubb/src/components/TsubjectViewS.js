/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Header,Spinner} from './index';
import SubjectListS from './SubjectListS';
import {SubFetchS} from '../actions';
import {connect} from 'react-redux';
import { AsyncStorage ,Platform} from "react-native"
import {
  StyleSheet,
  View,
  ListView,
  
} from 'react-native';




class TsubjectViewS extends Component {
  constructor(props){
 
    super(props);

  this.state = {
    item:'',
    //valll: 18,
    //nname: 'Trinity',
    nav:this.props.navigation,
    }
    this.renderRow=this.renderRow.bind(this);

  }

  getSubjects(){
    return  this.props.subjects;
  }

  componentDidMount(){AsyncStorage.getItem("pro").then((value) => {
    // console.log("valll, nname")s
    // console.log(value)
    // console.log("valll, nname")
   this.setState({"item":JSON.parse(value)});
   let valll = this.state.item.id;
   let nname = this.state.item.school;
  console.log(valll, nname)
 // console.log("valll, nname")
    this.props.SubFetchS({valll,nname});
 }).done();
  }

  componentWillMount(){AsyncStorage.getItem("pro").then((value) => {
    // console.log("valll, nname")s
    // console.log(value)
    // console.log("valll, nname")
   this.setState({"item":JSON.parse(value)});
   let valll = this.state.item.id;
   let nname = this.state.item.school;
  console.log(valll, nname)
 // console.log("valll, nname")
    this.props.SubFetchS({valll,nname});
 }).done();
  }


  /* componentWillMount(){

    const {valll,nname} = this.state;
    this.props.SubFetchS({valll,nname});

    
   } */
  
   

   renderButton(){
    if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{
     const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
  });
  this.dataSource = ds.cloneWithRows(this.getSubjects())
     return <ListView
    dataSource={this.dataSource}
    enableEmptySections={true}
    renderRow={this.renderRow}/>;
  }
  }

   getNavigation(){
     return this.props.navigate;
   }
 
   renderRow(item){
    return <SubjectListS  School={this.state.item.school} Tid = {this.state.item.id} Image = {this.state.item.Image} item={item} nav={this.state.nav}/>
   }

  render() {
  
    return (
   
    <View style={styles.container}>
        <Header ti='Subjects' />
        <View style={{justifyContent: 'flex-start', height:Platform.OS === 'ios' ? '87%' :'87%', width:'100%'}}>
        {this.renderButton()}
        </View>
    
      
      </View>
     
       
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F2F3',
  },

 
  
});

const mapStateToProps = state =>{
  
  const subjects = _.map(state.pro.SubsS,(Val,uid) =>{
    return {...Val};
  });


return {subjects,loading:state.pro.loading1};
};

export default connect(mapStateToProps,{SubFetchS})(TsubjectViewS);




  