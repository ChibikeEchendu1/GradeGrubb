import React, { Component } from 'react';
import {connect} from 'react-redux';
import { StackNavigator, TabNavigator, addNavigationHelpers, } from 'react-navigation';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import Tools from './src/pages/Tools';
import ToolsEvent from './src/pages/ToolsEvent';
import Splash from './src/pages/Splash';
import Profile from './src/pages/profile';
import SendMessage from './src/pages/SendMessage'
import FooterTab from './src/components/FooterTab';
import FooterTab2 from './src/components/FooterTab2';
import FooterTab3 from './src/components/FooterTab3';
import Performance from './src/pages/Performance';
import Elements from './src/pages/Elements';
import Students from './src/pages/Students';
import Thome from './src/pages/Thome';
import SettingsOption from './src/pages/SettingsOption';
import Notice from './src/pages/Notice';
import Element from './src/pages/Element';
import Grade from './src/pages/Grade';
//import Code3 from './src/pages/Code3';
import EditOptions from './src/pages/EditOptions';
import NewName from './src/pages/NewName';
import AddStudent from './src/pages/AddStudent';
import Addprofile from './src/pages/Addprofile';
import Code2 from './src/pages/Code2';
import Code3 from './src/pages/Code3';
import Tsubject from './src/pages/Tsubject';
import AddStudent2 from './src/pages/AddStudent2';
import NewStudent from './src/pages/NewStudent';
import NewSubject from './src/pages/NewSubject';
import RemoveStudent from './src/pages/RemoveStudent'
import RemoveElement from './src/pages/RemoveElement'
import SElement from './src/pages/SElement'
import Annoucment from './src/pages/Annoucment';
import Annoucmentnotice from './src/pages/Annoucmentnotice'
import TsubjectS from './src/pages/TsubjectS';
import AddNew from './src/pages/AddNew'
import Offer from './src/pages/Offer'
import ToolsEventnot from  './src/pages/ToolsEventnot'
import ChangePassword from './src/pages/ChangePassword';
import ChangePasswordForgot from './src/pages/ChangePasswordForgot'
import ForgotPassword from './src/pages/ForgotPassword'
import Code from './src/pages/Code'
import TeacherList from './src/pages/TeacherList'
import PushNotificationController from './services/PushNotificationController'
import SElementnotice from './src/pages/SElementnotice'
import AttendStudent from './src/pages/AttendStudent'
  export const Router0 = StackNavigator({
  
  Profile: {screen: Profile, navigationOptions: {
    gesturesEnabled: false,
    headerLeft:null
},},
  Code3: { screen: Code3, navigationOptions: {
    gesturesEnabled: false,
    headerLeft:null
}, },
  SettingsOption:{screen: SettingsOption},
  PushNotificationController:{screen:PushNotificationController},
  Notice:{screen: Notice , navigationOptions: {
    gesturesEnabled: false,
    headerLeft:null
},},
  Annoucmentnotice:{ screen: Annoucmentnotice},
  ToolsEventnot:{screen:ToolsEventnot},
  SElementnotice:{screen:SElementnotice},
  ChangePassword:{screen: ChangePassword }, 
  Addprofile:{screen:Addprofile},
  Offer:{screen:Offer},

  Router2: {screen:TabNavigator({
   
    one:{screen: StackNavigator({
      
    Thome:{screen: Thome, navigationOptions: {
      gesturesEnabled: false,
      headerLeft:null
  }, }, AttendStudent:{screen:AttendStudent},},  {headerMode: 'none'})  },

  
  
  





    second:{screen: StackNavigator({
      Tsubject:{ screen: Tsubject, navigationOptions: {
        gesturesEnabled: false,
        headerLeft:null
    },},
      SElement:{screen:SElement},
      SendMessage:{screen:SendMessage},
      Tools:{screen:Tools},
      Students: { screen: Students , navigationOptions: {
        gesturesEnabled: false,
        headerLeft:null
    },},
      Elements: { screen: Elements, navigationOptions: {
        gesturesEnabled: false,
        headerLeft:null
    },},
      AddNew: { screen: AddNew},
      Grade:{screen: Grade},
        EditOptions:{screen:EditOptions},
        NewName:{screen:NewName},
       RemoveElement:{screen:RemoveElement},
        AddStudent2:{screen:AddStudent2},
        RemoveStudent:{screen:RemoveStudent}},
    {headerMode: 'none'}
    )},
 
    third:{screen:  StackNavigator({
      NewSubject:{ screen: NewSubject, navigationOptions: {
        gesturesEnabled: false,
        headerLeft:null
    },},
      NewStudent: { screen: NewStudent },
      AddStudent: { screen: AddStudent },
    
    },
    {headerMode: 'none'})},

   

}

  
  ,{
    tabBarPosition: "bottom",

    tabBarComponent: props => {
      const x = 1;
      //console.log(this.state.item.id);
      
      const backgroundColor = props.position.interpolate({
        inputRange: [0,1,2,3],
        outputRange: ['#e74c3c','#9b59b6','#3498db', '#3498db'],
      })
      if (x== 1) {
        return (
          <FooterTab2 navigator={props}
          {...props}
          style={{backgroundColor}}
          >
            </FooterTab2>
        );
      }
      else{
        return (
          <FooterTab3 navigator={props}
          {...props}
          style={{backgroundColor}}
          >
            </FooterTab3>
        );

      }
      
    }
  })},


  Router3: {screen:TabNavigator({
    Performance:{screen: Performance, navigationOptions: {
      gesturesEnabled: false,
      headerLeft:null
  },},
  
    second2:{screen: StackNavigator({
      TsubjectS:{ screen: TsubjectS, navigationOptions: {
        gesturesEnabled: false,
        headerLeft:null
    },},
      Element:{screen:Element},
        },
    {headerMode: 'none'}
    )},
  
    third2:{screen:  StackNavigator({
      Annoucment:{ screen: Annoucment, navigationOptions: {
        gesturesEnabled: false,
        headerLeft:null
    },},
    ToolsEvent:{ screen: ToolsEvent, navigationOptions: {
      gesturesEnabled: false,
      headerLeft:null
  },}
    },
    {headerMode: 'none'})}
  
  }
  
  
  ,{
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
    tabBarComponent: props => {
      return (
        <FooterTab navigator={props}>
          </FooterTab>
      );
    }
  })
  },
  TeacherList:{screen: TeacherList},
  Splash:{ screen: Splash},
  Login: { screen: Login , navigationOptions: {
    gesturesEnabled: false,
    headerLeft:null
}, },
ForgotPassword: {screen:ForgotPassword},
Code: {screen:Code , navigationOptions: {
  gesturesEnabled: false,
  headerLeft:null
},},
ChangePasswordForgot: {screen:ChangePasswordForgot , navigationOptions: {
  gesturesEnabled: false,
  headerLeft:null
},},
SignUp: { screen: SignUp },
Code2: { screen: Code2 , navigationOptions: {
  gesturesEnabled: false,
  headerLeft:null
}, },
Profile: {screen: Profile, navigationOptions: {
  gesturesEnabled: false,
  headerLeft:null
},},
Code3: { screen: Code3 , navigationOptions: {
  gesturesEnabled: false,
  headerLeft:null
},},







},
{headerMode: 'none'}) 

 //fourth tab
/* export const Router = StackNavigator({
  NewSubject:{ screen: NewSubject},
  NewStudent: { screen: NewStudent },
  AddStudent: { screen: AddStudent },

},
{headerMode: 'none'} */

//third tab
  /* export const Router = StackNavigator({
  Tsubject:{ screen: Tsubject},
  Students: { screen: Students },
  Elements: { screen: Elements},
  Grade:{screen: Grade},
    EditOptions:{screen:EditOptions},
    NewName:{screen:NewName},
    AddElement:{screen:AddElement},
    AddStudent:{screen:AddStudent},
    RemoveStudent:{screen:RemoveStudent}
},
{headerMode: 'none'}
)  */




export default Router0

