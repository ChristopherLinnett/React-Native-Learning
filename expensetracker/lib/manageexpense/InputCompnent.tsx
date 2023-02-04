import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {GlobalTheme} from '../constants/theme';

type InputProps = {
  label?: string;
  textInputConfig?: TextInputProps;
  style?: ViewStyle;
};
const Input = ({label, textInputConfig, style}: InputProps) => {
  const inputStyle: ViewStyle[] = [styles.input];
  if (!!textInputConfig && !!textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }
  return (
    <View style={[styles.inputContainer, style ?? null]}>
      <Text style={styles.label}>{label ?? ''}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {marginHorizontal: 4, marginVertical: 8},
  label: {
    fontSize: 12,
    color: GlobalTheme.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalTheme.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalTheme.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
export default Input;
