import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colours from '../../constants/colours';

const NumberContainer = ({children}: {children: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colours.secondary500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colours.secondary500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
export default NumberContainer;
