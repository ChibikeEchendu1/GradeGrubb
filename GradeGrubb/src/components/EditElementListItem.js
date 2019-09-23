import React, {Component} from 'react';
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native';
import {} from '../actions';
import {connect} from 'react-redux';
class EditElementListItem extends Component{

    constructor(props){
        super(props);
        this.state = {
        check:this.props.Students[this.props.item.num]["check"]
    }   
}

    onvalChanged(text,data,id){
        console.log(text);
        this.props.Students[text]["check"]= !this.props.Students[text]["check"]
        console.log(this.props.Students);
        this.setState({check:this.props.Students[text]["check"]})
        }
     
  onSelect = (element) => {
    this.setState({selected: element});
  }

  
componentWillReceiveProps(){
    
    this.props.Students[this.props.item.num]["check"] = this.props.checked

    this.setState({check:this.props.checked})
}




    
    render(){
       const {id, item,school,Tid,Subname,classRoom,total } = this.props;
    return(
         
        <View style={{marginTop:10,padding:15, borderBottomWidth:1, borderBottomColor:"#D3D3D3"}}>
        <TouchableOpacity onPress={() => {
         this.props.navigation.navigate("Editform", {ClassRoom:classRoom,Name: item.Name,total:total, School:school, Tid:Tid, id:id, Subname:Subname })}}>
          <Text style={{fontSize:20}}>{item.Name}</Text>
          </TouchableOpacity>
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

return {Students:state.pro.Students3};
  };

export default connect(mapStateToProps,{})(EditElementListItem) ;

