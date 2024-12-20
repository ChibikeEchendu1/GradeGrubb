import React, {Component} from 'react';
import RNRestart from 'react-native-restart';
import {Text,StyleSheet,View,SafeAreaView,TouchableOpacity,Alert,AsyncStorage} from 'react-native';
import {HomeHeader,Spinner2} from './index';
import {connect} from 'react-redux';
import {delacoun,delacoun2} from '../actions';

class SettingsView extends Component{

  
  goback(){
    if (this.props.cow) {
      AsyncStorage.removeItem('logged');
                                      this.props.navigation.navigate('Login');
  }
  }

  renderButton(){
    if(this.props.loading){
      return <TouchableOpacity> <Spinner2 size="large"/> </TouchableOpacity>;
    }
    else{
     return <TouchableOpacity  onPress={()=>{
                        Alert.alert(
                  'Alert',
                  'Are you sure you want to delete ?',
                  [
                    {text: 'No', onPress:() => console.log('Cancel Pressed'), style:'cancel'},
                    {text: 'Yes', onPress:() => {
                        const Id = this.props.navigation.state.params.per
                        AsyncStorage.removeItem('logged');
                                      
                        this.props.delacoun({Id});
                        RNRestart.Restart();
                        //this.props.navigation.navigate('Login');
                      }},
                  ],
                  {cancelable:true}
                  );}} > 
                  <Text style={{fontSize:20}}>Delete Account</Text>
                  </TouchableOpacity>;
    }
  }
    render(){
    return(
        <SafeAreaView style ={styles.container}>
        <HomeHeader ti="Settings" navigate={this.props.navigation.goBack}/>
        <View style={{marginTop:100}}>
       
         <View style={{marginTop:10,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
          <TouchableOpacity onPress={() =>
            this.props.navigation.navigate("ChangePassword",{per: this.props.navigation.state.params.per})}>
            <Text style={{fontSize:20}}>Change Password </Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:10,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
          <TouchableOpacity onPress={()=>{
                            Alert.alert(
                                'Alert',
                                'Are you sure you want to log out ?',
                                [
                                    {text: 'No', onPress:() => console.log('Cancel Pressed'), style:'cancel'},
                                    {text: 'Yes', onPress:() => {
                                      const Id = this.props.navigation.state.params.per
                                      //this.props.delacoun2({Id});
                                      AsyncStorage.removeItem('logged');
                                      RNRestart.Restart();
                                      //this.props.navigation.navigate('Login');
                                     }},
                                ],
                                {cancelable:true}
                            );
                          }} >
            <Text style={{fontSize:20}}>Log Out</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:50,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
            {this.renderButton()}
            </View>
        </View>
      
         </SafeAreaView>
    );
};
}
const styles = StyleSheet.create({  
    container: {
        flex: 1,
        backgroundColor: 'white',
      }
   
});

const mapStateToProps = state =>{
  return{
     cow: state.auth.cow,
     loading: state.auth.loading,
    }
};

export default connect(mapStateToProps,{delacoun,delacoun2})(SettingsView) ;

