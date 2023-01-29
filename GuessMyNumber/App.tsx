import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar barStyle={'default'}></StatusBar>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});