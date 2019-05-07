import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import ReactCalculator from './src/ReactCalculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ReactCalculator />
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => ReactNativeCalculator);