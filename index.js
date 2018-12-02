// Impor a libary to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Header } from './src/components/common';
import FirstScreen from './src/components/FirstScreen';

// Create a Component
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Hello world'} />
      <FirstScreen />
    </View>
);

// Render it to the device
AppRegistry.registerComponent('HelloJenkinsFromReactNative', () => App);