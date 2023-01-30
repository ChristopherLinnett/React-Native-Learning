import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colours from '../../constants/colours';

const Title = ({children}: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colours.secondary500,
    textAlign: 'center',
    borderColor: Colours.secondary500,
    borderWidth: 2,
    padding: 12,
  },
});
interface TitleProps {
  children?: string;
}

export default Title;
