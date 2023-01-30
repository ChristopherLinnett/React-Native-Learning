import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import NumberContainer from '../components/game/numbercontainer';
import PrimaryButton from '../components/UI/PrimaryButton';
import Title from '../components/UI/title';

const generateRndNum: any = (min: number, max: number, exclude: number) => {
  const num = Math.floor(Math.random() * (max - min)) + min;
  if (exclude === num) {
    return generateRndNum(min, max, exclude);
  }
  return num;
};

let minBound: number = 1;
let maxBound: number = 99;

const GameScreen = ({targetNum}: {targetNum: number}) => {
  const initialGuess: number = generateRndNum(1, 100, targetNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction: string) => {
    if (
      (currentGuess < targetNum && direction === 'lower') ||
      (currentGuess > targetNum && direction === 'higher')
    ) {
      Alert.alert('Really?', "You think a computer can't tell when you lie?", [
        {text: 'ok', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBound = currentGuess;
    } else {
      minBound = currentGuess;
    }
    const newRndNum = generateRndNum(minBound, maxBound, currentGuess);
    console.log(minBound, maxBound);
    setCurrentGuess(newRndNum);
  };
  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      <NumberContainer>{currentGuess.toString()}</NumberContainer>
      <View>
        <View style={styles.buttonRow}>
          <PrimaryButton onPressed={nextGuessHandler.bind(this, 'lower')}>
            Lower -
          </PrimaryButton>
          <PrimaryButton onPressed={nextGuessHandler.bind(this, 'higher')}>
            Higher +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonRow: {
    flexDirection: 'row',
  },
});
