import React, {Component} from 'react';
import {HomeHeader,Spinner2} from './index';
import {Text, TextInput, StyleSheet,View,SafeAreaView,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class OfferView extends Component{

    state = {
        school:this.props.navigation.state.params.school 
        }
    

     


      
      
      
    
    
    render(){
    return(
     
      <SafeAreaView style ={styles.container}>
         <HomeHeader navigate={this.props.navigation.goBack} ti="Expired Subscription!!"/>
         
         <View>
             <Text style={{width:'96%',alignSelf:"center", padding:12, marginTop:'10%',fontSize:25}}>
             {this.state.school}'s  subscription with Grade Grubb has Expired. For enquiries contact the school</Text>
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


  
  export default OfferView ;

