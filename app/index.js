/*
 * @file: index.js
 * @description: loading file for the application.
 * @date: 16.12.2016
 * @author: Lancy Goyal
 * */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Navigator,
  StatusBar,
  Platform
} from 'react-native';
import PushNotification from 'react-native-push-notification';

let stringEn = require("./utility/stringEn"),
    UserStorage = require("./utility/UserStorage"),
    Welcome = require("./components/Welcome"),
    ComingSoon = require("./components/ComingSoon"),
    Loader = require("./components/Loader");

let deviceToken = 'test', deviceType = Platform.OS;

class EleventhHour extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isLogin: false
    };
  }

  checkLoggedIn() {
    let context = this;

    UserStorage.isLoggedIn().then((UserData)=>{

      context.setState({
        isLoading: false,
        isLogin: UserData ? false : false
      });

    });

  }

  configurePushNotifications() {

    PushNotification.configure({

        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function(device) {
            console.log( 'device:', device );
            deviceToken = device.token;
            // context._sendLocalNotification();
        },

        // (required) Called when a remote or local notification is opened or received
        onNotification: function(notification) {
            console.log( 'NOTIFICATION:', notification );
            PushNotification.localNotification(notification);
        },

        // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications) 
        senderID: "YOUR GCM SENDER ID",

        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
            alert: true,
            badge: true,
            sound: true
        },

        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        /**
          * (optional) default: true
          * - Specified if permissions (ios) and token (android and ios) will requested or not,
          * - if not, you must call PushNotificationsHandler.requestPermissions() later
          */
        requestPermissions: true,
      });

  }

  componentWillMount() {
      this.configurePushNotifications();
      this.checkLoggedIn();
  }

  render() {
    let context = this;

    if(context.state.isLoading)
      return <Loader/>

    return (
       <Navigator
          style={styles.container}
          initialRoute={{
            component: context.renderComponent()
          }}
          renderScene={(route, navigator) => {
              let Component = route.component;
              return (
              <View style={{ flex: 1 }}>
                <StatusBar hidden={false}/>
                <Component navigator={navigator} route={route} value={route.passProps}/>
              </View>
              )
          }}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid} />
    );
  }
  
  renderComponent(){
    if(this.state.isLogin){
        return ComingSoon;
    }else{
      return Welcome;
    }
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = EleventhHour;
