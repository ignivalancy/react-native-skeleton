/*
 * @file: ComingSoon.js
 * @description: Default Under Construction page for the application.
 * @date: 15.12.2016
 * @author: Lancy Goyal
 * */

'use strict';

import React, { Component, PropTypes } from 'react';
import {
  Text,
  Image,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

let Constants = require('../constants');

let ComingSoon = React.createClass({
  render(){
    return (
      <View style={{flex: 1, backgroundColor: this.props.backgroundColor}}>

        <View style = {styles.container}>

          <Text style={styles.message} numberOfLines={2}>{this.props.info}</Text>
          
        </View>

      </View>
    )
  },

});

ComingSoon.propTypes = {
  showNav: PropTypes.bool,
  navTitle: PropTypes.string,
  navIcon: PropTypes.string,
  onNavBtnPress: PropTypes.func,
  info: PropTypes.string,
  backgroundColor: PropTypes.string,
};

ComingSoon.defaultProps = {
  showNav: false,
  navTitle: 'Eleventh Hour',
  info: 'Coming Soon',
  backgroundColor: '#fff'
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Constants.BaseStyle.MARGIN,
    backgroundColor:'transparent'
  },

  message: {
    fontSize: 20,
    color: Constants.Colors.RED,
    textAlign: 'center'
  }
  
});

module.exports = ComingSoon;
