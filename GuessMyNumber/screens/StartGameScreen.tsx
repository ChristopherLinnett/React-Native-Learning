import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
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
    <View style={style.textInputContainer}>
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
          <PrimaryButton onPressed={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

interface StartScreenProps {
  onPickNumber: Function;
}

const style = StyleSheet.create({
  textInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    borderRadius: 8,
    backgroundColor: Colours.primary500,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowRadius: 6,
    shadowOpacity: 0.75,
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
