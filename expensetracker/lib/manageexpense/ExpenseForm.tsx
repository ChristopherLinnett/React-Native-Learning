import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalTheme} from '../constants/theme';
import Input from './InputCompnent';
const ExpenseForm = () => {
  const amountChangedHandler = (newAmount: string) => {};
  return (
    <View style={styles.formStyle}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangedHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          label="date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {},
            autoCorrect: false,
          }}
        />
      </View>
      <Input label="description" textInputConfig={{multiline: true}} />
    </View>
  );
};
const styles = StyleSheet.create({
  formStyle: {
    marginTop: 40,
  },
  title: {
    marginVertical: 24,
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalTheme.colors.primary100,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
});

export default ExpenseForm;
