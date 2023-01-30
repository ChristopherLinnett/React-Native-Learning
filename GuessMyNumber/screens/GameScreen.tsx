import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import NumberContainer from '../components/game/numbercontainer';
import DescriptionText from '../components/UI/DescriptionText';
import PrimaryButton from '../components/UI/PrimaryButton';
import Title from '../components/UI/title';
import Icon from 'react-native-vector-icons/Ionicons';

const generateRndNum: any = (min: number, max: number, exclude: number) => {
  const num = Math.floor(Math.random() * (max - min)) + min;
  if (exclude === num) {
    return generateRndNum(min, max, exclude);
  }
  return num;
};

let minBound: number = 1;
let maxBound: number = 99;

const GameScreen = ({
  targetNum,
  gameOverHandler,
}: {
  targetNum: number;
  gameOverHandler: Function;
}) => {
  const initialGuess: number = generateRndNum(1, 100, targetNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === targetNum) {
      Alert.alert('They Match', `The computer found the number ${targetNum}`, [
        {text: 'ok', style: 'destructive', onPress: _ => gameOverHandler()},
      ]);
      return;
    }
  }, [currentGuess, targetNum, gameOverHandler]);

  useEffect(() => {
    [minBound, maxBound] = [1, 99];
  }, []);

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
      <View style={styles.topMargin}>
        <Title>Opponents Guess</Title>
      </View>
      <NumberContainer>{currentGuess.toString()}</NumberContainer>
      <View style={styles.centeredContent}>
        <DescriptionText>Higher Or Lower</DescriptionText>
        <View style={styles.buttonRow}>
          <View style={styles.growButton}>
            <PrimaryButton onPressed={nextGuessHandler.bind(this, 'lower')}>
              <Icon name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.growButton}>
            <PrimaryButton onPressed={nextGuessHandler.bind(this, 'higher')}>
              <Icon name="add" size={24} />
            </PrimaryButton>
          </View>
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
  topMargin: {marginTop: 80},
  buttonRow: {
    paddingTop: 24,
    flexDirection: 'row',
  },
  centeredContent: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'stretch',
  },
  growButton: {
    flex: 1,
  },
});
