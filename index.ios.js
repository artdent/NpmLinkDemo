/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class NpmLinkDemo extends Component {

  render() {
    return (
      <Carousel />
    );
  }
}

AppRegistry.registerComponent('NpmLinkDemo', () => NpmLinkDemo);
