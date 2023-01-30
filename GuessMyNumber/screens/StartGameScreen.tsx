import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert, Text} from 'react-native';
import Card from '../components/UI/Card';
import PrimaryButton from '../components/UI/PrimaryButton';
import Title from '../components/UI/title';
import Colours from '../constants/colours';

const StartGameScreen = ({onPickNumber}: StartScreenProps) => {
  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };
  const confirmInputHandler = () => {
    try {
      const chosenNumber: number | null = parseInt(enteredNumber, 10);
      if (Number.isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
        throw Error('Input must only be a number and must be between 0 and 99');
      } else {
        onPickNumber(chosenNumber);
      }
    } catch (err: any) {
      Alert.alert('Invalid Input', err.message, [
        {
          text: 'Ok',
          isPreferred: true,
          style: 'destructive',
          onPress: resetInputHandler,
        },
      ]);
    }
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const [enteredNumber, setEnteredNumber]: [string, Function] = useState('');

  return (
    <View style={style.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={style.descriptionText}>Enter A Number</Text>
        <TextInput
          style={style.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={style.buttonsContainer}>
          <View style={style.buttonContainer}>
            <PrimaryButton onPressed={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={style.buttonContainer}>
            <PrimaryButton onPressed={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

interface StartScreenProps {
  onPickNumber: Function;
}

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  descriptionText: {
    color: Colours.secondary500,
    fontSize: 24,
    fontWeight: 'bold',
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colours.secondary500,
    borderBottomWidth: 2,
    color: Colours.secondary500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {flex: 1},
});

export default StartGameScreen;
