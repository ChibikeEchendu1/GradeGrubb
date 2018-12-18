/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from 'lodash';
import React, { Component } from 'react'; 
import {HomeHeader,ImageButton,Spinner2} from './index';
import ListItem from './ListItem'
import {fetchTeach,chanegepic} from '../actions';
import {connect} from 'react-redux';
import { AsyncStorage } from "react-native"
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,TouchableOpacity
  
} from 'react-native';
 


class TeacherListView extends Component {
    constructor(props){
        super(props);
        this.state = {
          items:'',
          nav: this.props.navigation,
          valll: this.props.navigation.state.params.item.Id,
          Id:this.props.navigation.state.params.item.Id,
          nname: this.props.navigation.state.params.item.School
          }
        this.renderRow = this.renderRow.bind(this);
        }


  
        componentDidMount(){
          AsyncStorage.getItem("pro").then((value) => {
            this.setState({"items":JSON.parse(value)});
        }).done();
        }

        componentWillMount(){
          AsyncStorage.getItem("pro").then((value) => {
            this.setState({"items":JSON.parse(value)});
        }).done();
        }


    onButtonPress(){
      const {Id} = this.state
      this.props.chanegepic({Id});
    }

    goBackk(){
        if (this.props.hope) {
          this.props.navigation.navigate("Profile")
        }
      }


      getTeachers(){
         return this.props.Teachers;
        }

      componentWillMount(){

        const {valll,nname} = this.state;
        console.log(valll,nname);
        
        this.props.fetchTeach({valll,nname});

       const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
       });
       this.dataSource = ds.cloneWithRows(this.getTeachers())
      }

     /*  componentWillReceiveProps(){
  
        const {valll,nname} = this.state;
        this.props.fetchTeach({valll,nname});
        
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.getTeachers())
  
     } */

     renderButton(){
        if(this.props.loading){
          return <Spinner2 size="large"/>;
        }
        else{
         const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(this.getTeachers())
         return <ListView
        dataSource={this.dataSource}
        enableEmptySections={true}
        renderRow={this.renderRow}/>;
      }
      }

     renderImage(){
      if(this.props.navigation.state.params.item.Image == '../.././images/p.png'){
          console.log("heloo");
          
          return(
              <Image
              style={{marginLeft:40, marginTop:20, height: '100%', width:'70%'}}
              source={require('../.././images/p.png')}
              resizeMode = 'contain'
              />
          );

      }
      else{
          
          return(
              <Image
              style={{marginLeft:100, marginTop:20, height: 120, width:120,borderRadius:60}}
              source={{uri: "data:image/jpeg;base64,"+this.props.navigation.state.params.item.Image}}
              resizeMode = 'contain'
              />
             );

      }


  } 

     
      

      renderRow(item){
        //console.log("dfgtdfg"+item);
       return <ListItem item={item} nav={this.state.nav} type={'Teacher'} school={this.state.nname}/>
      }


  render() {
      //const {goBack} = this.props.navigation;
    return (
    <View style ={styles.container}>
   
      <HomeHeader ti="Teacher List" navigate={this.props.navigation.goBack}/>
     <View style={{borderBottomWidth:1, height:'35%', backgroundColor: '#E8E8E8'}}>
            
            <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={{flexDirection:'row', marginTop:'5%',alignItems:'center',margin:'auto', justifyContent:'center',  height: '50%', width:'70%'}}>
        
        {/* <Image
          style={{marginLeft:40, height: '100%', width:'70%'}}
          source={require('../.././images/p.png')}
          resizeMode = 'contain'
        /> */}
        {this.renderImage()}
        
        {/* <ImageButton press={this.onButtonPress.bind(this)}/> */}

        </TouchableOpacity>
        <ImageButton press={this.onButtonPress.bind(this)}/>
        <Text style={{fontSize:25,marginTop:8, fontWeight:'bold', textAlign:'center'}}>{this.props.navigation.state.params.item.Name}</Text>
        </View>
        
        <View style={{alignItems:'center', marginTop:10}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>
                Teachers
            </Text>
        </View>

       {this.renderButton()}
       {this.goBackk()}
       
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
  
    const Teachers = _.map(state.pro.teach,(Val,uid) =>{
      return {...Val};
    });
  

  return {Teachers,hope:state.pro.hope,loading:state.pro.loading1};
};

export default connect(mapStateToProps,{fetchTeach,chanegepic})(TeacherListView);