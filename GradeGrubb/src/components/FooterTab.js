import React from 'react';
import {View, Text, Image,Platform,StyleSheet,SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FooterTab extends React.Component{
    navigate(screen){
        this.getNavigationProps().navigation.navigate(screen);
      }
      
      getNavigationProps(){
        return this.props.navigator;
      }
      
      isActive(buttonIndex){
       if (this.getNavigationProps().navigationState.index === buttonIndex){
         return "#0099cc"; 
       }
       return "#B0B0B0"
      }

      textStyle = function(buttonIndex) {
        if (this.getNavigationProps().navigationState.index === buttonIndex){
        return {
          fontSize: 12,
          marginLeft: "25%",
          color:"#0099cc",
          
        }
      }

      else{
        return {
          fontSize: 12,
          marginLeft: "25%",
          color:"#B0B0B0"
        }
      }
      }

      textStyle2 = function(buttonIndex) {
        if (this.getNavigationProps().navigationState.index === buttonIndex){
        return {
          fontSize: 12,
          color:"#0099cc",
          
        }
      }

      else{
        return {
          fontSize: 12,
          color:"#B0B0B0"
        }
      }
      }
    render(){
    return(
    //   <Container>
    //   <Footer>
    //   <FooterTab>
    //     <Button vertical onPress={() => this.navigate("TsubjectS")}>
    //       <Icon name="apps" />
    //       <Text>Subjects</Text>
    //     </Button>
    //     <Button vertical onPress={()=>this.navigate("Profile")}>
    //       <Icon name="camera" />
    //       <Text>Profiles</Text>
    //     </Button>
    //     <Button vertical active onPress={()=>this.navigate("Performance")}>
    //       <Icon active name="navigate" />
    //       <Text>Home</Text>
    //     </Button>
    //     <Button vertical onPress={()=>this.navigate("Annoucment")}>
    //       <Icon name="person" />
    //       <Text>Notice</Text>
    //     </Button>
    //   </FooterTab>
    // </Footer>
    // </Container>
  <SafeAreaView style = {styles.viewStyle}>
       


            {/*  <Button vertical
         
            onPress={() => this.navigate("TsubjectS")}>
              <Icon 
          
              name="home" />
              <Text>Subjects</Text>
            </Button> */}

             <TouchableOpacity style = {styles.tab} 
     active={this.isActive(1)}
        onPress={()=>this.navigate("second2")}> 
         <Icon name="leanpub" size={23} color={this.isActive(1)} style={{marginTop:'12%'}}/>
            <View>
          <Text style={this.textStyle2(1)}>Subjects</Text>
          </View>
        </TouchableOpacity>

        

        <TouchableOpacity style = {styles.tab} onPress={()=>this.navigate("Profile")}>
        <Icon name="home" size={30} color="#B0B0B0"   style={{marginTop:'10%', marginLeft:'25%'}}/>
          <Text style={{fontSize:12,marginLeft:'25%',color:"#B0B0B0" }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.tab} onPress={()=>this.navigate("Performance")}>
        <Icon name="user" size={26} color={this.isActive(0)} style={{marginTop:'10%', marginLeft:'25%'}}/>
          <Text style={this.textStyle(0)} >Profile</Text>
        </TouchableOpacity> 

        <TouchableOpacity style = {styles.tab} onPress={()=>this.navigate("third2")}>
        <Icon name="comments" size={26} color={this.isActive(2)}style={{marginTop:'10%'}}/>
          <Text style={this.textStyle2(2)}>Notice</Text>
        </TouchableOpacity>

        </SafeAreaView> 
    ); 

}
}

const styles = StyleSheet.create({  
    viewStyle: {
      backgroundColor:'white',
      //position:'absolute',
      //marginTop:'30%',
      bottom:0,
      //top:0,
      justifyContent: 'space-between',
      alignItems:'flex-end',
      //borderWidth:1,
      flexDirection: 'row',
      width: '100%',
      height:Platform.OS === 'ios' ? '10%' :'10%',
     borderWidth: 0.8, borderColor: '#d6d7da',
     // paddingLeft:15,
      
    },
    tab:{
        height:'100%',
        width:'25%',
        flexDirection:'column',
        alignItems:'center',
        //justifyContent:'flex-end'
      // marginBottom:'4%',
        justifyContent:Platform.OS === 'ios'?"flex-start":'flex-end'
    }
  

   
});

