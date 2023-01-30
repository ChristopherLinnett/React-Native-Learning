import React, {SetStateAction, useState} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colours from './constants/colours';

export default function App(): JSX.Element {
  const [userNumber, setuserNumber] = useState(null);

  const userNumberIsSet = (pickedNumber: SetStateAction<null>) => {
    setuserNumber(pickedNumber);
  };
  let screen = <StartGameScreen onPickNumber={userNumberIsSet} />;

  if (userNumber) {
    screen = <GameScreen targetNum={userNumber} />;
  }
  return (
    <LinearGradient
      colors={[Colours.primary500, Colours.secondary500]}
      style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        resizeMode="cover"
        source={require('./assets/images/background.png')}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
