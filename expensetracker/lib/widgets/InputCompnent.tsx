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
  invalid: boolean | undefined;
};
const Input = ({label, textInputConfig, style, invalid}: InputProps) => {
  const inputStyle: ViewStyle[] = [styles.input];
  if (!!textInputConfig && !!textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }
  if (invalid) {
    inputStyle.push(styles.invalid);
  }
  return (
    <View style={[styles.inputContainer, style ?? null]}>
      <Text style={[styles.label, invalid ? styles.invalidText : null]}>
        {label ?? ''}
      </Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  invalidText: {
    fontWeight: 'bold',
  },
  invalid: {
    backgroundColor: GlobalTheme.colors.primary200,
    opacity: 0.5,
    color: 'white',
    fontWeight: 'bold',
  },
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
    color: GlobalTheme.colors.primary800,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
export default Input;
