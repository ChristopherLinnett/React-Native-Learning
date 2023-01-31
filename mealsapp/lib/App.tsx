/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.root}>
        <CategoriesScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
