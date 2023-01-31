import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colours from '../../constants/colours';

const GuessLogItem = ({
  roundNumber,
  guess,
}: {
  roundNumber: number;
  guess: number;
}) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber.toString()}</Text>
      <Text>Opponent's Guess: {guess.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colours.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 4,
    backgroundColor: Colours.secondary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});

export default GuessLogItem;
