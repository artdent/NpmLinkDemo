/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import Toast from 'react-native-easy-toast';

export default class NpmLinkDemo extends Component {

  render() {
    return (
      <View>
        <TouchableOpacity
           style={{padding: 40}}
           onPress={() => this.refs.toast.show('Hello, world!')}>
          <Text>Tap me</Text>
        </TouchableOpacity>
        <Toast ref="toast"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('NpmLinkDemo', () => NpmLinkDemo);
