import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';

export default function App(): JSX.Element {
  return (
    <LinearGradient colors={['#72063c', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        resizeMode="cover"
        source={require('./assets/images/background.png')}
        imageStyle={styles.backgroundImage}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
