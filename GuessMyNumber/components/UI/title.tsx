import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({children}: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderColor: 'white',
    borderWidth: 2,
    padding: 12,
  },
});
interface TitleProps {
  children?: string;
}

export default Title;
