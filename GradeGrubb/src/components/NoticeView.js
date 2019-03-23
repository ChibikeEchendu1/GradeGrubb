/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Header,Spinner,HomeHeader5} from './index';
import NoticeListItem from './NoticeListItem';
import {fetchNotice,RemoveNotif} from '../actions';//notifFetch
import {connect} from 'react-redux';
import { AsyncStorage,SafeAreaView,Text } from "react-native"
import {
  StyleSheet,
 
  View,
  ListView,
  
} from 'react-native';




class NoticeView extends Component {
  constructor(props){
 
    super(props);

  this.state = {
    
    elements:[
        {"ntf":"This is notification 1"},
        {"ntf":"This is notification 2"},
        {"ntf":"This is notification 3"},
        {"ntf":"This is notification 4"},
        {"ntf":"This is notification 5"},
        {"ntf":"This is notification 6"},
        
      ],
    valll:this.props.navigation.state.params.per,
    nav: this.props.navigation,
    ntf: true// state var should be set to true if there is at least one notificaiton
    //nname: 'Trinity'
    }
    this.renderRow = this.renderRow.bind(this);
  }
  getSubjects(){
    
    return  this.props.elements.reverse();
  }


  

  /* ComponentWillMount(){

    const {valll,nname} = this.state;
    

    
   } */
   componentDidMount(){ //componentDidMount
    const {valll} = this.state
    //console.log(valll);
    
      this.props.fetchNotice({valll});
    
     /*  if (this.props.elements == 0 || this.props.elements === undefined ){
      this.setState({
        ntf: false
      });
    }
    else{
      this.setState({
        ntf: true
      });
    } */
      //console.log("hjbhj");
   // console.log(this.props.navigation.state.params.pro);
  }

 
  componentWillMount(){ //componentDidMount
    const {valll} = this.state
    //console.log(valll);
      this.props.fetchNotice({valll});
  }

  onPasswordChanged(){
    const {valll} = this.state
    console.log(valll);
    
    this.props.RemoveNotif({valll});
   /*  this.setState({
      ntf: false
    }); */
 }

 goback(){
  if (this.props.gotp) {
    const {valll} = this.state
    this.props.navigation.navigate('Profile', {valll})
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
  this.dataSource = ds.cloneWithRows(this.getSubjects())
     return <ListView
    dataSource={this.dataSource}
    enableEmptySections={true}
    renderRow={this.renderRow}/> 
     ;
  } 
  }

   /* getNavigation(){
     return this.props.navigate;
   }
      */
   renderRow(item){
   
   
    return <NoticeListItem profiles={this.props.navigation.state.params.pro}  item={item} nav={this.state.nav}/>
   } 

  render() {
  
    return (
   
    <SafeAreaView style={styles.container}>
    
        <HomeHeader5 press={this.onPasswordChanged.bind(this)}  ti='Notifications' navigate={this.props.navigation.navigate}  screen={"Profile"} ntf={this.state.ntf}/>
        {this.renderButton()}
        
        {this.goback()}
        </SafeAreaView>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width:'100%'
  },

 
  
});

const mapStateToProps = state =>{
  
  const elements = _.map(state.pro.pros,(Val,uid) =>{
    return {...Val};
  });


return {elements,
  loading: state.pro.loading1,
  gotp:state.pro.gotp
  };
};


export default connect(mapStateToProps,{fetchNotice,RemoveNotif}) (NoticeView);







  