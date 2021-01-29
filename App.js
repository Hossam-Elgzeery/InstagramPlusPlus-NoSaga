

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

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SignInScreen />
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
