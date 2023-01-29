import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const PrimaryButton = (props: {children?: String}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{color: '#640233'}}
        onPress={() => {
          console.log('pressed');
        }}>
        <Text style={styles.buttonText}>{props.children}</Text>
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
    backgroundColor: '#4e0329',
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
