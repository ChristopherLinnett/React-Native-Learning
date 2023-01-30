import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colours from '../../constants/colours';

const DescriptionText = ({children}: {children: string}) => {
  return <Text style={styles.descriptionText}>{children}</Text>;
};

const styles = StyleSheet.create({
  descriptionText: {
    color: Colours.secondary500,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default DescriptionText;
