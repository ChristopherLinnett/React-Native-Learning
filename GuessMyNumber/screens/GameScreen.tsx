import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/title';

const GameScreen = () => {
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
