import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../components/UI/PrimaryButton';
import Title from '../components/UI/title';

const GameScreen = ({targetNum}: {targetNum: number}) => {
  const generateRndNum: any = (
    min: number,
    max: number,
    exclude: number[] = [],
  ) => {
    const num = Math.floor(Math.random() * (max - min)) + min;
    if (exclude.includes(num)) {
      return generateRndNum(min, max, [...exclude]);
    }
    return num;
  };
  const initialGuess: number = generateRndNum(1, 100, [targetNum]);
  const [currentGuess, setCurrentGuess] = useState();

  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      <Text>Guess</Text>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPressed={() => {}} />
          <PrimaryButton onPressed={() => {}} />
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
});
