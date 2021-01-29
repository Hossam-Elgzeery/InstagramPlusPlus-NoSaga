

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SignInScreen from './src/screens/SignInScreen'
import MainStore from './src/stores/MainStore'


import Provider from 'react-redux'
import AuthenticationStack from './src/navigators/AuthenticationStack';

const App = () => {
  return (
   <AuthenticationStack />
  );
};

const styles = StyleSheet.create({
 
});

export default App;
