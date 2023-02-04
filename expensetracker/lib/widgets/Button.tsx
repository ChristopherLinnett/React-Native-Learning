import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {GlobalTheme} from '../constants/theme';

type ButtonProps = {
  children?: string | undefined;
  onPress?: Function | undefined;
  mode?: 'flat' | 'filled' | undefined;
  style?: ViewStyle | undefined;
};
const Button = ({children, onPress, mode, style}: ButtonProps) => {
  return (
    <View style={[style ? style : null]}>
      <Pressable
        style={({pressed}) => pressed && styles.pressed}
        onPress={() => {
          if (onPress === undefined) {
            return;
          }
          onPress();
        }}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalTheme.colors.primary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalTheme.colors.primary200,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: GlobalTheme.colors.primary400,
    borderRadius: 4,
  },
});

export default Button;
