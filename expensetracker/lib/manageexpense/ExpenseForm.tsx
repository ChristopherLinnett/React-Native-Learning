import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalTheme} from '../constants/theme';
import Expense from '../models/expense';
import Input from './InputCompnent';
type ExpenseFormProps = {defaultData: Expense | null | undefined};
const ExpenseForm = ({defaultData}: ExpenseFormProps) => {
  const [inputValues, setInputValues] = useState(
    defaultData === null || defaultData === undefined
      ? {
          amount: '',
          date: '',
          description: '',
        }
      : {
          amount: defaultData.amount.toFixed(2),
          date: defaultData.date.toDateString(),
          description: defaultData.description,
        },
  );

  const inputChangedHandler = (inputIdentifier: string, newAmount: string) => {
    setInputValues(previousValue => {
      return {...previousValue, [inputIdentifier]: newAmount};
    });
  };
  return (
    <View style={styles.formStyle}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="amount"
          textInputConfig={{
            value: inputValues.amount,
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
          }}
        />
        <Input
          style={styles.rowInput}
          label="date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            autoCorrect: false,
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
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
