/*
 * @file: Welcome.js
 * @description: Welcome Screen for the application
 * @date: 15.12.2016
 * @author: Lancy Goyal
 * */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

let Constants = require('../constants');

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Welcome to Eleventh Hour
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Constants.Colors.background
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: Constants.Colors.titleText
  }
  
});

module.exports = Welcome;
