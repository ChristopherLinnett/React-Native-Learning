import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colours from '../../constants/colours';

const PrimaryButton = ({children, onPressed}: PrimaryButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{color: Colours.primary500}}
        onPress={() => {
          onPressed();
        }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: Colours.primary800,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.75,
    shadowRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;

interface PrimaryButtonProps {
  children?: string;
  onPressed: Function;
}
