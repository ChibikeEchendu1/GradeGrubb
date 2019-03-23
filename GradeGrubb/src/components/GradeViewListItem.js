import React, {Component} from 'react';

import {Text, TextInput, StyleSheet,View} from 'react-native';
import {markChanged} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
class GradeViewListItem extends Component{
    
    onvalChanged(text,id){
       this.props.scores[text] =parseFloat((id));
       this.props.grades[text]["Grade"] = (id);
       //console.log(this.props.grades[text]["Grade"]);
       this.props.markChanged(this.props.grades,this.props.scores);// id is text and text is id. but we dont care
      }

    render(){
    return(
                <View style={styles.listStyle}>
                <View>
            <Text numberOfLines={1} style={{fontSize:12,fontWeight:'bold', }}>
                {this.props.item.Name}
            </Text>
            </View>
           <View style={{flexDirection:'row',justifyContent: 'center',marginTop:10,alignItems:'center',}} > 
          
         
        
         <View style={{borderWidth:1,fontWeight:'bold', borderColor:"#C0C0C0", padding:5}}>
        
         <TextInput
         value={this.props.item.Grade}
          style={{height: 16, width:50,fontWeight:'bold',  fontSize:15}}
          placeholder=""
          keyboardType= "numeric"
          onChangeText={this.onvalChanged.bind(this,this.props.item.num)}
          />
        
         </View> 
         
        
        
         </View>
         </View>
         
        
    );
};
}
const styles = StyleSheet.create({  
    listStyle: {
        padding:20,
        flexDirection:'row',
        opacity: 0.9,
        justifyContent: 'space-between',
        alignItems:'center',
        width:'100%',
        //height:'10%',
        borderBottomWidth:0.5,
        borderColor:"#1995ad"
    }

   
});

const mapStateToProps = state =>{
    const grades = _.map(state.pro.gra,(Val,uid) =>{
        return {...Val};
      });

return {grades,scores:state.pro.scores};
  };

export default connect(mapStateToProps,{markChanged})(GradeViewListItem) ;