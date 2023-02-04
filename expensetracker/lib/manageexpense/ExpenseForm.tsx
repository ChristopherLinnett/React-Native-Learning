import React from 'react';
import {View} from 'react-native';
import Input from './InputCompnent';
const ExpenseForm = () => {
  const amountChangedHandler = (newAmount: string) => {};
  return (
    <View>
      <Input
        label="amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="date"
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
          autoCorrect: false,
        }}
      />
      <Input label="description" textInputConfig={{multiline: true}} />
    </View>
  );
};

export default ExpenseForm;
