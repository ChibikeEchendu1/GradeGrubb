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
            <Text numberOfLines={1} style={{fontSize:20}}>
                {this.props.item.Name}
            </Text>
            </View>
           <View style={{flexDirection:'row',justifyContent: 'center',marginTop:10,alignItems:'center',}} > 
          
         <Text style={{height: 20, alignSelf:'center', fontSize:15}}>
                Mark:
        </Text> 
        
         <View style={{borderWidth:1,borderColor:"#C0C0C0", padding:5}}>
        
         <TextInput
         value={this.props.item.Grade}
          style={{height: 50, width:50, fontSize:15}}
          placeholder=""
          keyboardType= "numeric"
          onChangeText={this.onvalChanged.bind(this,this.props.item.num)}
          />
        
         </View> 
         
         <Text style={{height: 20, alignSelf:'center', width:50,fontSize:15}}>
                /{this.props.worth2}
            </Text> 
        
         </View>
         </View>
         
        
    );
};
}
const styles = StyleSheet.create({  
    listStyle: {
        padding:20,
        flexDirection:'column',
        opacity: 0.9,
        justifyContent: 'space-between',
        alignItems:'center',
        width:'100%',
        //height:'10%',
        borderBottomWidth:1,
        borderColor:"#C0C0C0"
    }

   
});

const mapStateToProps = state =>{
    const grades = _.map(state.pro.gra,(Val,uid) =>{
        return {...Val};
      });

return {grades,scores:state.pro.scores};
  };

export default connect(mapStateToProps,{markChanged})(GradeViewListItem) ;