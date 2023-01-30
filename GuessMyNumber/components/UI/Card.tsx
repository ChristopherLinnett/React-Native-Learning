import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colours from '../../constants/colours';

const Card = ({children}: {children: JSX.Element[]}) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    marginTop: 36,
    borderRadius: 8,
    backgroundColor: Colours.primary500,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowRadius: 6,
    shadowOpacity: 0.75,
  },
});
