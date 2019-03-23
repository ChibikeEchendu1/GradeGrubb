import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import CheckBox from 'react-native-check-box'
import {} from '../actions';
import {connect} from 'react-redux';
class RemoveStudentListItem extends Component{
    constructor(props){
 
        super(props);
       this.state = {check:this.props.Students[this.props.item.num]["check"]}
    }

    onvalChanged(text,data,id){
        console.log(text);
        this.props.Students[text]["check"]= !this.props.Students[text]["check"]
     // data.check = !data.check;
        console.log(this.props.Students);
        
        //this.props.grades[text]["Grade"] = (id);
        //console.log(this.props.grades[text]["Grade"]);
       // this.props.markChanged(this.props.grades,this.props.scores);// id is text and text is id. but we dont care
       }
     
  onSelect = (element) => {
    this.setState({selected: element});
  }

  
componentWillReceiveProps(){
    
    this.props.Students[this.props.item.num]["check"] = this.props.checked

    this.setState({check:this.props.checked})
}



  renderCheckBox(data, checked) {
    var leftText = data.Name;
    return (
        
        <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={this.onvalChanged.bind(this,data.num,data)}
            isChecked={this.state.check}//this.props.Students[data.num]["check"]}
            leftText={leftText}
            checkBoxColor={"#1995ad"}
        />);
}
    
    render(){
       const {checked, item } = this.props;
    return(
         
        <View style={styles.listStyle}>
            {this.renderCheckBox(item,checked)}
        
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

return {Students:state.pro.Students4};
  };

export default connect(mapStateToProps,{})(RemoveStudentListItem) ;

