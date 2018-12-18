import React from 'react';
import {Image,StyleSheet,View} from 'react-native';

export default class Splash extends React.Component{
    static navigationOptions = { header: null };
    componentDidMount () {  
        setTimeout (() => {
           this.props.navigation.navigate('Login');
        }, 2000); 
    }

    render(){
        return(
            <View style={styles.container}>
            <Image style={{height: '50%', width:'50%'}}
            source={require('../.././images/pp2.png')}
            resizeMode = 'contain'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F4F2F3',
    },
  });