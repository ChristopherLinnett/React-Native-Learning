import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View, FlatList} from 'react-native';
import NumberContainer from '../components/game/numbercontainer';
import DescriptionText from '../components/UI/DescriptionText';
import PrimaryButton from '../components/UI/PrimaryButton';
import Title from '../components/UI/title';
import Icon from 'react-native-vector-icons/Ionicons';
import GuessLogItem from '../components/game/GuessLogItem';

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
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === targetNum) {
      Alert.alert('They Match', `The computer found the number ${targetNum}`, [
        {
          text: 'ok',
          style: 'destructive',
          onPress: _ => gameOverHandler(guessRounds.length),
        },
      ]);
      return;
    }
  }, [currentGuess, targetNum, gameOverHandler, guessRounds]);

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
      maxBound = currentGuess - 1;
    } else {
      minBound = currentGuess + 1;
    }
    const newRndNum = generateRndNum(minBound, maxBound, currentGuess);
    setGuessRounds(currentGuessRounds => [...currentGuessRounds, newRndNum]);
    setCurrentGuess(newRndNum);
  };
  const guessRoundsListLength = guessRounds.length;
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
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds.reverse()}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item, _) => item.toString()}
        />
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
    flex: 1,
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
  listContainer: {
    flex: 3,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});
