import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Image, View} from 'react-native';
import PrimaryButton from '../components/UI/PrimaryButton';
import Title from '../components/UI/title';
import Colours from '../constants/colours';

const GameOverScreen = ({
  rounds,
  userNumber,
  onStartNewGame,
}: {
  rounds: number;
  userNumber: number;
  onStartNewGame: Function;
}) => {
  return (
    <View style={styles.root}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.centerText}>
        Your Phone Needed <Text style={styles.highlightText}>{rounds}</Text>{' '}
        Attempts to Guess Your Number{' '}
        <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <View style={styles.buttonTopContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPressed={onStartNewGame}>New Game</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colours.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  centerText: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 24,
  },
  buttonTopContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 24,
  },
  highlightText: {
    color: Colours.primary500,
    fontWeight: 'bold',
  },
});

export default GameOverScreen;
