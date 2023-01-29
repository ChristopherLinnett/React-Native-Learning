import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App(): JSX.Element {
  return (
    <View style={styles.background}>
    <StartGameScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1
  }
  });