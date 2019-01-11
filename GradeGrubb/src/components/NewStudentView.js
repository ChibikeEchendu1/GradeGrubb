/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {Spinner2,HomeHeader} from './index';
import NewStudentListItem from './NewStudentListItem';
import {fetchclass} from '../actions';
import {connect} from 'react-redux';
import {
  StyleSheet,
  
  View,
  ListView,
 
  SafeAreaView,

} from 'react-native';




class NewStudentView extends Component {

  constructor(props){
    super(props);
 
    this.state = {
        elements:[
          {"class":"JSS 1"},
          {"class":"JSS 2"},
          {"class":"JSS 3"},
          {"class":"SSS 1"},
          {"class":"SSS 2"},
          {"class":"SSS 3"},
          
        ],
        nav:this.props.navigation.navigate,
        Tid:this.props.navigation.state.params.Tid,
        nname: this.props.navigation.state.params.School,
        Subname: this.props.navigation.state.params.Subname,
      }
      this.renderRow = this.renderRow.bind(this);
    }
   
    

      
    componentDidMount(){
      const {nname} = this.state;
       //console.log(nname);
       
       this.props.fetchclass({nname});
   }
   
  componentWillMount(){
    const {nname} = this.state;
    //console.log(nname);
    this.props.fetchclass({nname});
  
  }


   

   renderButton(){
    //.log(this.props.loading);
    if(this.props.loading){
      return <Spinner2 size="large"/>;
    }
    else{
      // return <Spinner size="large"/>;
      const ds = new ListView.DataSource({
       rowHasChanged: (r1, r2) => r1 !== r2
   });
   this.dataSource = ds.cloneWithRows(this.getProfiles())
      return <ListView
     // enableEmptySections
     dataSource={this.dataSource}
     enableEmptySections = {true}
     renderRow={this.renderRow}/>;
  
     }
  }

  getProfiles(){
    //console.log(this.props.profiles);
    
    return  this.props.profiles;
  }




  

   renderRow(item){
  
    return <NewStudentListItem nav={this.state.nav} School={this.state.nname} Tid={this.state.Tid} Subname={this.state.Subname}  item={item} />
   }

  render() {
    
    return (
    
    <SafeAreaView style={styles.container}>
        <HomeHeader ti='New Subject' navigate={this.props.navigation.goBack} screen={"NewSubject"} />

       
       
       
        <View style={{justifyContent: 'flex-start', height: '85%',marginTop:'3%', width:'100%'}}>
        {this.renderButton()}
        </View>
        
      </SafeAreaView>
     
       
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1D6E2',
  },

 
  
});

const mapStateToProps = state =>{
  
  
return {loading: state.pro.loading1, profiles:state.pro.class};
};


export default connect(mapStateToProps,{fetchclass}) (NewStudentView);



  