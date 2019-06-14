import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';
import {setdevice} from '../src/actions';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class PushNotificationController2 extends Component {

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
   // this.checkPermission();
    this.createNotificationListeners(); //add this line
  }

  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
  }
  
  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification;
      console.log('onNotification:');
      // this.showAlert(title, body);
      // alert('message');

      const localNotification = new firebase.notifications.Notification({
        sound: 'sampleaudio',
        show_in_foreground: true,
      })
        .setNotificationId(notification.notificationId)
        .setTitle(notification.title)
        // .setSubtitle(notification.subtitle)
        .setBody(notification.body)
        // .setData(notification.data)
        .android.setChannelId('fcm_default_channel') // e.g. the id you chose above
        .android.setSmallIcon('@drawable/ic_launcher') // create this icon in Android Studio
        .android.setColor('#000000') // you can set a color here
        .android.setPriority(firebase.notifications.Android.Priority.High);
        

      firebase.notifications()
        .displayNotification(localNotification)
        .catch(err => console.error(err));
    });


    const channel = new firebase.notifications.Android.Channel('fcm_default_channel', 'Demo app name', firebase.notifications.Android.Importance.High)
      .setDescription('Demo app description')
      .setSound('sampleaudio.mp3');
    firebase.notifications().android.createChannel(channel);

    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
      console.log('onNotificationOpened:');
      this.showAlert(title, body);
    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      console.log('getInitialNotification:');
      this.showAlert(title, body);
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }

  //3
  async getToken() {
    console.log('getetet');
    
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        console.log('fdgbkjdfgfcmToken:', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);

        AsyncStorage.getItem("logged").then((value) => {
            console.log("Dfgdfg");
            
            this.setState({"Id":JSON.parse(value)});
          
            let Id =  parseInt(value);
            const {fcmtoken,apnstoken} = this.state;
            console.log(value,fcmtoken,apnstoken,"hereerererer");
        
            
            this.props.setdevice({fcmToken,apnstoken,Id});
           }).done();
      }
    }
    console.log('fdgbkjdfgfcmToken:', fcmToken);
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  render() {
    return null;
 
  }
}

export default connect(null,{setdevice})(PushNotificationController2);


///etJy2V3TPK4:APA91bEvWVGOWd5Wn8GjDgUWW-EsZoHqaMLER_0KPDiJACjH4F59ZM3puStf94uoX0sSpxvblrWzjZ7ElQVAr9qty7qVMC1wHhq_pSbQuBdbevdZWW2-ZYIFO5ViXmHm7-PzbWCICJRY