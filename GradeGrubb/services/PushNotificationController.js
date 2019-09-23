import React, { Component } from "react";
import { Platform,AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from "react-native-fcm";

import {setdevice} from '../src/actions';
class PushNotificationController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      fcmtoken:null,
      apnstoken: null,
      Id:'',
      //nav:this.props.navigation.navigate
    
  }
  }

  async componentDidMount() {

   
    FCM.requestPermissions().then(()=>{
      
 
    
   AsyncStorage.getItem('tocken').then((token)=>{
        if (!token) {   

    FCM.getFCMToken().then(token => {
      
      console.log("TOKEN (getFCMToken)", token);
      
      this.setState({"fcmtoken":token});

      FCM.getInitialNotification().then(notif => {
        console.log("INITIAL NOTIFICATION", notif)
      });
  
      if (Platform.OS === "ios"){
        FCM.getAPNSToken().then(token2 => {
          console.log("APNS TOKEN (getFCMToken)", token2);
          this.setState({"apnstoken":token2});
        });
      }
  
        
    
          console.log('tockendfnkjgvjkfdngkjfng',token);
          
        AsyncStorage.getItem("logged").then((value) => {
          //console.log("Dfgdfg");
          
          this.setState({"Id":JSON.parse(value)});
        
          let Id =  parseInt(value);
          const {fcmtoken,apnstoken} = this.state;
         // console.log(value,fcmtoken,apnstoken);
          
          this.props.setdevice({token,apnstoken,Id});
         }).done();
      
    });

    

   
      }
    }).done();
    
   


    
    this.notificationListner = FCM.on(FCMEvent.Notification, notif => {
      console.log("Notificationtt", notif);

      

      if (Platform.OS != "ios") {
      this.showLocalNotification(notif);
      }


      if(notif.local_notification){
        console.log("local rapper");
        this.props.navigate("Notice", {per:this.props.per})
     // return;
      }
      else if(notif.opened_from_tray){
        
          setTimeout(()=>{
            this.props.navigate("Notice", {per:this.props.per})
           // return;
          }, 500)
        
       
        /*  setTimeout(()=>{
          this.props.navigate("Notice", {per:this.props.per})
        // return;
        },500)  */
      }


      
      

      if(Platform.OS ==='ios'){
              //optional
              //iOS requires developers to call completionHandler to end notification process. If you do not call it your background remote notifications could be throttled, to read more about it see the above documentation link.
              //This library handles it for you automatically with default behavior (for remote notification, finish with NoData; for WillPresent, finish depend on "show_in_foreground"). However if you want to return different result, follow the following code to override
              //notif._notificationType is available for iOS platfrom
              switch(notif._notificationType){
                case NotificationType.Remote:
                  notif.finish(RemoteNotificationResult.NewData) //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
                  break;
                case NotificationType.NotificationResponse:
                  notif.finish();
                  break;
                case NotificationType.WillPresent:
                  notif.finish(WillPresentNotificationResult.All) //other types available: WillPresentNotificationResult.None
                  break;
              }
            }

          
     
    });

   

    this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, token => {
      console.log("TOKEN (refreshUnsubscribe)", token);
    });
    
  }).catch(()=>console.log('denied'));
  }

  

  showLocalNotification(notif) {
    FCM.presentLocalNotification({
      title: notif.title,
      body: notif.fcm.body,
      sound: "default",
      priority: "high",
      click_action: notif.click_action,
      show_in_foreground: true,
      icon: "ic_launcher",
      local: true
    });
  }

    
  
 

  componentWillUnmount() {
    this.notificationListner.remove();
    this.refreshTokenListener.remove();
  }


  render(){
    return null;
  }

}

export default connect(null,{setdevice})(PushNotificationController);
