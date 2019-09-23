import React, {Component} from 'react';
import {HomeHeader,Spinner2} from './index';
import {Text, TextInput, StyleSheet,View,SafeAreaView,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import findname from '../utils/findname'
import findText from '../utils/findText'
class OfferView extends Component{

    state = {
        school:this.props.navigation.state.params.school,
        num:this.props.navigation.state.params.num
        }
        
        render(){
            return(
     
      <SafeAreaView style ={styles.container}>
         <HomeHeader navigate={this.props.navigation.goBack} ti={findname(this.state.num)}/>
         
         <View>
             <Text style={{width:'96%',alignSelf:"center", padding:12, marginTop:'10%',fontSize:25}}>
             {findText(this.state.num,this.state.school)}</Text>
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

